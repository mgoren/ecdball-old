import DOMPurify from 'dompurify';
import preval from 'preval.macro'

export const clamp = (value, range) => Math.min(Math.max(value, range[0]), range[1]);

export const logBuildDate = () => console.log('last build', new Date(preval`module.exports = new Date();`).toLocaleString());
export const scrollToTop = () => window.scrollTo(0,0);
export const wait = (msec) => new Promise((resolve, _) => setTimeout(resolve, msec));

export const websiteLink = (link) => `https://${link}`;
export const mailtoLink = (email) => `mailto:${email}`;

export const cachedOrder = () => JSON.parse(sessionStorage.getItem('cachedOrder'));
export const cacheOrder = (order) => sessionStorage.setItem('cachedOrder', JSON.stringify(order));
export const clearCachedOrder = () => sessionStorage.removeItem('cachedOrder');
export const cachedLastCompletedOrder = () => JSON.parse(sessionStorage.getItem('lastCompletedOrder'));
export const cacheLastCompletedOrder = (order) => sessionStorage.setItem('lastCompletedOrder', JSON.stringify(order));
export const clearCachedLastCompletedOrder = () => sessionStorage.removeItem('lastCompletedOrder');
export const isEmptyOrder = ({ people: [{ email }] }) => email === '';
export const isAllowedNavigation = (location, flag) => location.state && location.state[flag];

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
