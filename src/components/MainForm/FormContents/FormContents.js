import { useState, useEffect } from 'react';
import { Form, useFormikContext } from 'formik';
import { clamp, cache } from 'utils';
import FormPage1 from '../FormPage1';
import FormPage2 from '../FormPage2';
import ButtonRow from 'components/ButtonRow';
import { NUM_PAGES } from 'config';

export default function FormContents({ admissionQuantity, setAdmissionQuantity, currentPage, setCurrentPage }) {
  const formik = useFormikContext();
  const { values } = formik;
  const [donate, setDonate] = useState(values.donation > 0);

  // refactor to use ref instead of directly accessing DOM
  useEffect(() => {
    if (formik.isSubmitting && Object.keys(formik.errors).length > 0) {
      const firstInvalidFieldName = getFirstInvalidFieldName(formik.errors);
      console.log('validation failed on', firstInvalidFieldName);
      if (firstInvalidFieldName) {
        const invalidFieldElement = document.getElementsByName(firstInvalidFieldName)[0];
        if (invalidFieldElement) {
          invalidFieldElement.focus();
        }
      }
    }
  }, [formik.isSubmitting, formik.errors]);

  useEffect(() => {
    setAdmissionQuantity(values.admissionQuantity);
  }, [values.admissionQuantity, setAdmissionQuantity]);
  
  function clampValue({ event, range }) {
    const [field, value] = [event.target.name, parseInt(event.target.value) || range[0]];
    const clampedValue = clamp(value, range);
    formik.setFieldValue(field, clampedValue);
    formik.handleBlur(event); // bubble up to formik
  };

  function handleClickBackButton() {
    const orderInProgress = Object.assign({}, values);
    cache('order', orderInProgress);
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

// helpers for focusing on first invalid field; make generic and move to utils?

const getFirstInvalidFieldName = (errors) => {
  // brittle: relies on formik only generating errors on the people and emailConfirmation fields
  // brittle: relies on the order fields appear in the form
  if (emailConfirmationIsFirstInvalidFeld(errors)) {
    return 'emailConfirmation';
  }
  if (errors.people) {
    for (const i in errors.people) {
      if (errors.people[i] !== null) {
        for (const field in errors.people[i]) {
          return `people[${i}].${field}`;
        }
      }
    }
  }
  return null;
};

const emailConfirmationIsFirstInvalidFeld = (errors) => {
  if (Object.keys(errors).includes('emailConfirmation')) {
    if (!errors.people || !errors.people[0] || (!errors.people[0].fullName && !errors.people[0].pronouns && !errors.people[0].email)) {
      return true;
    }
  }
}
