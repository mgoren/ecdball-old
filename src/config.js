export const SANDBOX_MODE = true;

export const PAYMENT_METHODS = ['paypal', 'check']; // options are paypal and/or check

export const ADMISSION_COST_RANGE = [15, 30];
export const ADMISSION_QUANTITY_RANGE = [1, 4];

export const DONATION_OPTION = true;
export const DONATION_RANGE = [0, 999];

export const EMAIL_CONTACT = 'contra@portlandcountrydance.org';
export const DETAILS_URL = 'portlandmegaband.com';
export const COVID_POLICY_URL = 'pcdc.fun/covid19';
export const CONTACT_TRACING_URL = 'pcdc.fun/contact-trace';
export const WAIVER_URL = 'pcdc.fun/files/PCDC_Events_Waiver.pdf';

export const PAYPAL_OPTIONS = {
  "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
  "disable-funding": "paylater,credit",
  "enable-funding": "venmo",
  "currency": "USD",
  "locale": "en_US"
};

export const NAME_REGEX = "^[^<>&@]+$";
export const PRONOUNS_REGEX = "^[^<>&@]+$";
export const PHONE_REGEX = "^[0-9-() ]*$";

export const DEFAULTS = { 
  fullName: '', 
  pronouns: '',
  email: '', 
  emailConfirmation: '', 
  phone: '', 
  admissionCost: ADMISSION_COST_RANGE[1], 
  admissionQuantity: ADMISSION_QUANTITY_RANGE[0], 
  donation: DONATION_RANGE[0], 
  person2: '', 
  person3: '', 
  person4: ''
}
