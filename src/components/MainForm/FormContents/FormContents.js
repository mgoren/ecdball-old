import { useState, useEffect } from 'react';
import { Form, useFormikContext } from 'formik';
import { clamp, cache, getFirstInvalidFieldName } from 'utils';
import FormPage1 from '../FormPage1';
import FormPage2 from '../FormPage2';
import ButtonRow from 'components/ButtonRow';
import { NUM_PAGES } from 'config';

export default function FormContents({ admissionQuantity, setAdmissionQuantity, currentPage, setCurrentPage }) {
  const formik = useFormikContext();
  const { values } = formik;
  const [donate, setDonate] = useState(values.donation > 0);

  useEffect(() => {
    setAdmissionQuantity(values.admissionQuantity);
  }, [values.admissionQuantity, setAdmissionQuantity]);

  // scroll to first invalid field
  // refactor to use ref instead of directly accessing DOM
  // https://stackoverflow.com/questions/65899623/scroll-to-first-invalid-field-with-formik-and-userefs-react
  useEffect(() => {
    if (formik.isSubmitting && Object.keys(formik.errors).length > 0) {
      const firstInvalidFieldName = getFirstInvalidFieldName(formik.errors);
      console.log('validation failed on', firstInvalidFieldName);
      if (firstInvalidFieldName) {
        const invalidFieldElement = document.getElementsByName(firstInvalidFieldName)[0];
        if (invalidFieldElement) {
          // console.log('scrolling to first invalid field', invalidFieldElement)
          invalidFieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // invalidFieldElement.focus({ preventScroll: true }); // does weird things
        }
      }
    }
  }, [formik.isSubmitting, formik.errors]);
  
  function clampValue({ event, range }) {
    const [field, value] = [event.target.name, parseInt(event.target.value) || range[0]];
    const clampedValue = clamp(value, range);
    formik.setFieldValue(field, clampedValue);
    formik.handleBlur(event); // bubble up to formik
  };

  function handleClickBackButton() {
    const orderInProgress = Object.assign({}, values);
    cache('order', orderInProgress);
    formik.setSubmitting(false);
    setCurrentPage(currentPage - 1);
  }

  return(
    <Form>
      {currentPage === 1 && <FormPage1 admissionQuantity={admissionQuantity} clampValue={clampValue} />}
      {currentPage === 2 && <FormPage2 donate={donate} setDonate={setDonate} clampValue={clampValue} />}      
      <ButtonRow
        backButtonProps = {currentPage > 1 ? { onClick: handleClickBackButton } : undefined}
        nextButtonProps = {{ type: 'submit', text: currentPage === NUM_PAGES ? 'Checkout...' : 'Next...'}}
      />
    </Form>
  );
}
