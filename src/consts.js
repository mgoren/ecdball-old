export const ADMISSION_COST_RANGE = [15, 30];
export const ADMISSION_QUANTITY_RANGE = [1, 4];
export const DONATION_RANGE = [0, 999];

export const PAYPAL_OPTIONS = {
  "client-id": "AfeU3URC6FLukidcSjXRzZh2BwwwS_JsMM_T9VkjXsP591D4r__zomC4c4R5OIIk3OZiewFplpwBw9oG",
  "disable-funding": "paylater,credit",
  "enable-funding": "venmo",
  "currency": "USD",
  "locale": "en_US"
};

export const NAME_REGEX = "^[\\sa-zA-Z '-]*$";
export const PHONE_REGEX = "^[0-9-() ]*$";

export const DEFAULTS = { 
  fullName: '', 
  email: '', 
  phone: '', 
  admissionCost: ADMISSION_COST_RANGE[1], 
  admissionQuantity: ADMISSION_QUANTITY_RANGE[0], 
  donation: DONATION_RANGE[0], 
  person2: '', 
  person3: '', 
  person4: ''
}
