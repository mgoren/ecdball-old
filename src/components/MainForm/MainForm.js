import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import { sanitizeObject, clearCache } from 'utils';
import Header from "./Header";
import { useNavigate, useLocation } from 'react-router-dom';
import FormContents from "./FormContents";
import { validationSchema } from './validationSchema';
import { NUM_PAGES } from 'config';

export default function MainForm({ order, setOrder, currentPage, setCurrentPage }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [admissionQuantity, setAdmissionQuantity] = useState(order.admissionQuantity);

  // useEffect(() => {
  //   if (location.pathname === '/') { 
  //     console.log('currentPage', currentPage)
  //     if (isNaN(currentPage)) {
  //       clearCache();
  //       setCurrentPage(1);
  //     }
  //   }
  // }, [location]);

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
    setCurrentPage('checkout');
    navigate('/checkout');
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
