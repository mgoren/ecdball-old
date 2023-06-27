import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { removeExtraPeople, sanitizeObject, warnBeforeUserLeavesSite } from 'utils';
import FormContents from "./FormContents";
import { validationSchema } from './validationSchema';
import { NUM_PAGES } from 'config';
import countryMapping from 'countryMapping';

export default function MainForm({ order, setOrder, currentPage, setCurrentPage }) {
  const [admissionQuantity, setAdmissionQuantity] = useState(order.admissionQuantity);

  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      window.addEventListener('beforeunload', warnBeforeUserLeavesSite);
      return () => window.removeEventListener('beforeunload', warnBeforeUserLeavesSite);
    }
  }, []);

  // it doesn't get here until all validations are passing
  function handleNextPage(values, actions) {
    const submittedOrder = Object.assign({}, values);
    const trimmedOrder = removeExtraPeople(submittedOrder);
    const sanitizedOrder = sanitizeObject(trimmedOrder);
    const orderWithCountry = { ...sanitizedOrder, people: sanitizedOrder.people.map(updateCountry) };
    // console.log(orderWithCountry);
    setOrder(orderWithCountry);
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

function updateCountry(person) {
  const region = person.state.toLowerCase().replace(/\s/g, '').trim();
  const country = countryMapping[region] || person.country;
  return { ...person, country };
}
