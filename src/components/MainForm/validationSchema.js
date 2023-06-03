import * as Yup from 'yup';
import { FIELD_CONFIG, ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_RANGE } from "config";

export function validationSchema({ currentPage, admissionQuantity }) {

  const page1Schema=Yup.object({
    people: Yup.array().of(
      Yup.lazy((value) => {
        return value.index < admissionQuantity ? personValidationSchema(value.index) : Yup.mixed().notRequired();
      })
    ),
    emailConfirmation: FIELD_CONFIG.emailConfirmation.validation,
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
    first: FIELD_CONFIG.first.validation,
    last: FIELD_CONFIG.last.validation,
    nametag: FIELD_CONFIG.nametag.validation,
    email: FIELD_CONFIG.email.validation,
    phone: FIELD_CONFIG.phone.validation,
    address: FIELD_CONFIG.address.validation,
    city: FIELD_CONFIG.city.validation,
    state: FIELD_CONFIG.state.validation,
    zip: FIELD_CONFIG.zip.validation,
    country: FIELD_CONFIG.country.validation
  });
}
