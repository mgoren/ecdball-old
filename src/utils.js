import DOMPurify from 'dompurify';
import preval from 'preval.macro'

export const clamp = (value, range) => Math.min(Math.max(value, range[0]), range[1]);

export const logBuildDate = () => console.log('last build', new Date(preval`module.exports = new Date();`).toLocaleString());
export const scrollToTop = () => window.scrollTo(0,0);
export const wait = (msec) => new Promise((resolve, _) => setTimeout(resolve, msec));

export const websiteLink = (link) => `https://${link}`;
export const mailtoLink = (email) => `mailto:${email}`;

export const cache = (name, obj) => sessionStorage.setItem(name, JSON.stringify(obj));
export const cached = (name) => JSON.parse(sessionStorage.getItem(name));
export const clearCache = (name) => name ? sessionStorage.removeItem(name) : sessionStorage.clear();

export const isEmptyOrder = ({ people: [{ email }] }) => email === '';

const sanitizeValue = (value) => typeof value === 'string' ? DOMPurify.sanitize(value) : value;
export const sanitizeObject = (obj) => {
  if (obj === null) return null;
  if (Array.isArray(obj)) return obj.map(item => sanitizeObject(item));
  if (typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        if (typeof value === 'object' || Array.isArray(value)) {
          return [key, sanitizeObject(value)];
        }
        return [key, sanitizeValue(value)];
      })
    );
  }
  return sanitizeValue(obj);
};
