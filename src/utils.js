export const clamp = (value, range) => Math.min(Math.max(value, range[0]), range[1]);
export const websiteLink = (link) => `https://${link}`;
export const mailtoLink = (email) => `mailto:${email}`;
export const scrollToTop = () => window.scrollTo(0,0);
