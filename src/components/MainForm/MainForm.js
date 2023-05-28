import { useState } from 'react';
import { Formik } from 'formik';
import { sanitizeObject, clearCachedLastCompletedOrder, clearCachedOrder } from 'utils';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import FormContents from "./FormContents";
import { validationSchema } from './validationSchema';
import { NUM_PAGES } from 'config';

export default function MainForm({ order, setOrder }) {
  const navigate = useNavigate();
  const [admissionQuantity, setAdmissionQuantity] = useState(order.admissionQuantity);
  const [currentPage, setCurrentPage] = useState(1);

  clearCachedOrder();
  clearCachedLastCompletedOrder();

  function handleNextPage(values, actions) {
    actions.setTouched({});
    if (currentPage === NUM_PAGES) {
      submitForm(values);
    } else {
      setCurrentPage(currentPage + 1);
    }
  }

  function submitForm(values) {
    const submittedOrder = Object.assign({}, values);
    const trimmedOrder = removeExtraPeople(submittedOrder);
    const sanitizedOrder = sanitizeObject(trimmedOrder);
    console.log(sanitizedOrder);
    setOrder(sanitizedOrder);
    navigate('/checkout', { state: { fromForm: true } });
  }

  return (
    <>
      <Header />
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
    </>
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
