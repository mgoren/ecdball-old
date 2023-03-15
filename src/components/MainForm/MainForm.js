import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import FormContents from "./FormContents";
import { ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_RANGE, NAME_REGEX, PHONE_REGEX, DEFAULTS } from "consts";

export default function MainForm({ order, setOrder }) {
  const navigate = useNavigate();
  const [admissionQuantity, setAdmissionQuantity] = useState(order.admissionQuantity);

  useEffect(() => { window.scrollTo(0,0); },[])

  if (JSON.stringify(order) === JSON.stringify(DEFAULTS) ) {
    sessionStorage.removeItem('lastCompletedOrder');
  }
  
  function personValidationSchema(personNum) {
    return Yup.string().when('admissionQuantity', function(admissionQuantity, schema) {
      return admissionQuantity >= personNum
        ? schema.required('Please fill out this field.').matches(NAME_REGEX, 'Invalid characters :(')
        : schema.matches(NAME_REGEX, 'Invalid characters :(');
    });
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
          email: Yup.string().email('Please enter a valid email address.').required('Please enter an email address.'),
          emailConfirmation: Yup.string().required('Please confirm your email address.').oneOf([Yup.ref('email'), null], 'Email addresses do not match.'),
          phone: Yup.string().matches(PHONE_REGEX, 'Please enter a valid phone number.').required('Please enter a phone number.'),
          admissionCost: Yup.number().min(ADMISSION_COST_RANGE[0]).max(ADMISSION_COST_RANGE[1]).required(),
          admissionQuantity: Yup.number().min(ADMISSION_QUANTITY_RANGE[0]).max(ADMISSION_QUANTITY_RANGE[1]).required(),
          donation: Yup.number().min(DONATION_RANGE[0]).max(DONATION_RANGE[1])
        })}

        onSubmit={(values) => {
          let updatedOrder = Object.assign({}, values);
          for (let i = ADMISSION_QUANTITY_RANGE[0] + 1; i <= ADMISSION_QUANTITY_RANGE[1]; i++) {
            updatedOrder[`person${i}`] = admissionQuantity >= i ? updatedOrder[`person${i}`] : '';
          }
          setOrder(updatedOrder);
          navigate('/checkout');
        }}
      >

        <FormContents admissionQuantity={admissionQuantity} setAdmissionQuantity={setAdmissionQuantity} />

      </Formik>
    </>
  );
}
