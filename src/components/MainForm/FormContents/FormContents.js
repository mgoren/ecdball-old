import { useState, useEffect } from 'react';
import { Form, useFormikContext } from 'formik';
import { isMobile } from "react-device-detect";
import { clamp } from 'utils';
import * as S from '../Form-styles';
import { NumericInput, ButtonInput } from '../Input';
import ContactInfoInputs from '../ContactInfoInputs';
import { ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_OPTION, DONATION_RANGE } from "config";

const person1Inputs = { fullName: {}, pronouns: {}, email: {}, emailConfirmation: {}, phone: {} };
const person2Inputs = { fullName: {}, pronouns: {}, email: {} };
const person3Inputs = { fullName: {}, pronouns: {}, email: {} };
const person4Inputs = { fullName: {}, pronouns: {}, email: {} };

export default function FormContents({ admissionQuantity, setAdmissionQuantity}) {
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

  return(
    <Form>
      <section className='contact-section'>
        <S.Box className={isMobile ? 'mobile' : 'desktop'}>
          <S.Title className='S.Title'>Your contact information</S.Title>

          <ContactInfoInputs
            index={0}
            inputs = {person1Inputs}
            autoFocus = {isMobile || values.people[0].fullName ? '' : 'autoFocus'}
          />

        </S.Box>
      </section>

      <section className='admissions-section'>
        <S.Box className={isMobile ? 'mobile' : 'desktop'}>
          <S.Title className='S.Title'>Dance admissions</S.Title>

          <NumericInput 
            label="How much are you able to pay per admission? ($15-30)"
            name="admissionCost"
            range={ADMISSION_COST_RANGE}
            onBlur={(event) => clampValue({ event: event, range: ADMISSION_COST_RANGE})}
            showDollarSign={true}
          />

          <S.Spacer />

          <NumericInput 
            label="Select admissions quantity (1-4)" 
            name="admissionQuantity" 
            range={ADMISSION_QUANTITY_RANGE}
            onBlur={(event) => clampValue({ event: event, range: ADMISSION_QUANTITY_RANGE})}
          />

          <S.Spacer />

        </S.Box>

        {admissionQuantity >= 2 &&
          <S.Box className={isMobile ? 'mobile' : 'desktop'}>
            <S.Title className='S.Title'>Second admission</S.Title>
            <ContactInfoInputs
              index={1}
              inputs={person2Inputs} 
            />
          </S.Box>
        }
        {admissionQuantity >= 3 &&
          <S.Box className={isMobile ? 'mobile' : 'desktop'}>
            <S.Title className='S.Title'>Third admission</S.Title>
            <ContactInfoInputs
              index={2}
              inputs={person3Inputs} 
            />
          </S.Box>
        }
        {admissionQuantity >= 4 &&
          <S.Box className={isMobile ? 'mobile' : 'desktop'}>
            <S.Title className='S.Title'>Fourth admission</S.Title>
            <ContactInfoInputs
              index={3}
              inputs={person4Inputs} 
            />
          </S.Box>
        }


      </section>

      {DONATION_OPTION &&
        <section className='donation-section'>
          <S.Box className={isMobile ? 'mobile' : 'desktop'}>
            <S.Title className="S.Title">Additional donation (tax deductible)</S.Title>

            {!donate && 
              <ButtonInput 
                label="Would you like to make an additional donation to PCDC?"
                name="donate"
                buttonText="Yes"
                onClick={() => setDonate(true)}
              />
            }

            {donate && 
              <NumericInput 
                label="How much would you like to donate to PCDC?"
                name="donation" 
                range={DONATION_RANGE}
                onBlur={(event) => clampValue({ event: event, range: DONATION_RANGE})}
                showDollarSign={true}
              />
            }
          </S.Box>
        </section>
      }

      <section className='continue-button'>
        <S.Box className={`text-end ${isMobile ? 'mobile' : 'desktop'}`}>
          <S.NextButton type='submit' className='btn btn-primary'>Checkout...</S.NextButton>
        </S.Box>
      </section>
    </Form>
  )
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
