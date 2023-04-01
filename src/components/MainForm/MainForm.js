import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { isEqual } from 'lodash';
import { scrollToTop, sanitizeValue } from 'utils';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import FormContents from "./FormContents";
import { ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_RANGE, NAME_REGEX, PHONE_REGEX, DEFAULTS } from "config";

export default function MainForm({ order, setOrder }) {
  const navigate = useNavigate();
  const [admissionQuantity, setAdmissionQuantity] = useState(order.admissionQuantity);

  useEffect(() => { scrollToTop(); },[])

  if (isEqual(order, DEFAULTS)) {
    sessionStorage.removeItem('lastCompletedOrder');
  }

  function personValidationSchema(personNum) {
    return Yup.string().when('admissionQuantity', function(admissionQuantity, schema) {
      return admissionQuantity >= personNum
        ? schema.required('Please fill out this field.').matches(NAME_REGEX, 'Invalid characters :(')
        : schema.matches(NAME_REGEX, 'Invalid characters :(');
    });
  }

  function sanitizeOrder(submittedOrder) {
    return Object.fromEntries(
      Object.entries(submittedOrder).map(([key, value]) => {
        if (key.startsWith('person')) { // clear person fields beyond admissionQuantity
          value = parseInt(key.slice(6)) <= admissionQuantity ? value : '';
        }
        return [key, sanitizeValue(value)];
      })
    );
  }
  
  return (
    <>
      <Header />

      <Formik
        initialValues={order}

        validationSchema={Yup.object({
          fullName: Yup.string().matches(NAME_REGEX, 'Invalid characters :(').required('Please enter your name.'),
          person2: personValidationSchema(2),
          person3: personValidationSchema(3),
          person4: personValidationSchema(4),
          email: Yup.string().email('Please enter a valid email.').required('Please enter your email.'),
          emailConfirmation: Yup.string().required('Please confirm your email.').oneOf([Yup.ref('email'), null], 'Email addresses do not match.'),
          phone: Yup.string().matches(PHONE_REGEX, 'Please enter a valid phone number.').required('Please enter your phone number.'),
          admissionCost: Yup.number().min(ADMISSION_COST_RANGE[0]).max(ADMISSION_COST_RANGE[1]).required(),
          admissionQuantity: Yup.number().min(ADMISSION_QUANTITY_RANGE[0]).max(ADMISSION_QUANTITY_RANGE[1]).required(),
          donation: Yup.number().min(DONATION_RANGE[0]).max(DONATION_RANGE[1])
        })}

        onSubmit={(values) => {
          const submittedOrder = Object.assign({}, values);
          const sanitizedOrder = sanitizeOrder(submittedOrder);
          setOrder(sanitizedOrder);
          navigate('/checkout');
        }}
      >

        <FormContents admissionQuantity={admissionQuantity} setAdmissionQuantity={setAdmissionQuantity} />

      </Formik>
    </>
  );
}
