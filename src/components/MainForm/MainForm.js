import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { sanitizeObject, warnBeforeUserLeavesSite } from 'utils';
import FormContents from "./FormContents";
import { validationSchema } from './validationSchema';
import { NUM_PAGES } from 'config';

export default function MainForm({ order, setOrder, currentPage, setCurrentPage }) {
  const [admissionQuantity, setAdmissionQuantity] = useState(order.admissionQuantity);

  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      window.addEventListener('beforeunload', warnBeforeUserLeavesSite);
      return () => window.removeEventListener('beforeunload', warnBeforeUserLeavesSite);
    }
  }, []);

  function handleNextPage(values, actions) {
    actions.setTouched({});
    const submittedOrder = Object.assign({}, values);
    const trimmedOrder = removeExtraPeople(submittedOrder);
    const sanitizedOrder = sanitizeObject(trimmedOrder);
    console.log(sanitizedOrder);
    setOrder(sanitizedOrder);
    setCurrentPage(currentPage === NUM_PAGES ? 'checkout' : currentPage + 1);
  }

  return (
    <Formik
      initialValues={order}
      validationSchema={validationSchema({ currentPage, admissionQuantity })}
      onSubmit={ (values, actions) => {handleNextPage(values, actions);} }
    >
      <FormContents
        admissionQuantity={admissionQuantity} setAdmissionQuantity={setAdmissionQuantity}
        currentPage={currentPage} setCurrentPage={setCurrentPage}
      />
    </Formik>
  );
}

const removeExtraPeople = (order) => {
  return Object.fromEntries(
    Object.entries(order).map(([key, value]) => {
      if (key === 'people') {
        return [key, value.map(
          person => person.index < order.admissionQuantity ? person : { ...person, fullName: '', pronouns: '', email: '', phone: '' }
        )];
      }
      return [key, value];
    })
  );
}
