import { useState, useEffect } from 'react';
import { Form, useFormikContext } from 'formik';
import { isMobile } from "react-device-detect";
import { clamp } from 'utils';
import * as S from '../Form-styles';
import { NumericInput, ButtonInput } from '../Input';
import ContactInfoInputs from '../ContactInfoInputs';
import { ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_OPTION, DONATION_RANGE } from "config";

const person2Inputs = { fullName: {label: 'Name for second admission', id: 'person2'} };
const person3Inputs = { fullName: {label: 'Name for third admission', id: 'person3'} };
const person4Inputs = { fullName: {label: 'Name for fourth admission', id: 'person4'} };

export default function FormContents({ admissionQuantity, setAdmissionQuantity}) {
  const formik = useFormikContext();
  const { values } = formik;
  const [donate, setDonate] = useState(values.donation > 0);

  useEffect(() => {
    if (formik.isSubmitting && Object.keys(formik.errors).length > 0) {
      // refactor to use refs instead of directly accessing DOM
      document.getElementsByName(Object.keys(formik.errors)[0])[0].focus();
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
          <S.Title className='S.Title'>Contact information</S.Title>

          <ContactInfoInputs
            values={values}
            autoFocus = {isMobile || values.fullName ? '' : 'autoFocus'}
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

          { admissionQuantity >= 2 && <ContactInfoInputs inputs={person2Inputs} /> }
          { admissionQuantity >= 3 && <ContactInfoInputs inputs={person3Inputs} /> }
          { admissionQuantity >= 4 && <ContactInfoInputs inputs={person4Inputs} /> }

        </S.Box>
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
