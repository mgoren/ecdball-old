import DOMPurify from 'dompurify';
import preval from 'preval.macro'

export const clamp = (value, range) => Math.min(Math.max(value, range[0]), range[1]);
export const websiteLink = (link) => `https://${link}`;
export const mailtoLink = (email) => `mailto:${email}`;
export const scrollToTop = () => window.scrollTo(0,0);
export const sanitizeValue = (value) => typeof value === 'string' ? DOMPurify.sanitize(value) : value;
export const cacheOrder = (order) => sessionStorage.setItem('cachedOrder', JSON.stringify(order));
export const clearCachedOrder = () => sessionStorage.removeItem('cachedOrder');
export const logBuildDate = () => console.log('last build', new Date(preval`module.exports = new Date();`).toLocaleString());
