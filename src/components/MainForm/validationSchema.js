import * as Yup from 'yup';
import { ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_RANGE, NAME_REGEX, PRONOUNS_REGEX, PHONE_REGEX } from "config";

export function validationSchema({ currentPage, admissionQuantity }) {

  const page1Schema=Yup.object({
    people: Yup.array().of(
      Yup.lazy((value) => {
        return value.index < admissionQuantity ? personValidationSchema(value.index) : Yup.mixed().notRequired();
      })
    ),
    emailConfirmation: Yup.string()
      .oneOf([Yup.ref('people[0].email'), null], 'Email addresses do not match.')
      .required('Please confirm your email.'),
    admissionQuantity: Yup.number()
    .min(ADMISSION_QUANTITY_RANGE[0])
    .max(ADMISSION_QUANTITY_RANGE[1])
    .required()
  });
  
  const page2Schema=Yup.object({
    admissionCost: Yup.number()
      .min(ADMISSION_COST_RANGE[0])
      .max(ADMISSION_COST_RANGE[1])
      .required(),
    donation: Yup.number()
      .min(DONATION_RANGE[0])
      .max(DONATION_RANGE[1])
  });

  const validationSchemas = {
    1: page1Schema,
    2: page2Schema,
  };

  return validationSchemas[currentPage];
}

function personValidationSchema(index) {
  return Yup.object({
    fullName: Yup.string()
      .matches(NAME_REGEX, 'Invalid characters :(')
      .required('Please enter your name.'), // name is required
    pronouns: Yup.string()
      .matches(PRONOUNS_REGEX, 'Invalid characters :('), // pronouns are optional
    email: index < ADMISSION_QUANTITY_RANGE[1] ? // email is required
      Yup.string().email('Please enter a valid email.').required('Please enter your email.')
      : Yup.string().email('Please enter a valid email.'),
    phone: index < ADMISSION_QUANTITY_RANGE[0] ? // phone required only for first person
      Yup.string().matches(PHONE_REGEX, 'Please enter a valid phone number.').required('Please enter your phone number.')
    : Yup.string().matches(PHONE_REGEX, 'Please enter a valid phone number.')
  });
}
