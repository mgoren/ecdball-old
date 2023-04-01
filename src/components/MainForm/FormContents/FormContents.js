import { useState, useEffect } from 'react';
import { Form, useFormikContext } from 'formik';
import { isMobile } from "react-device-detect";
import { clamp } from 'utils';
import * as S from '../Form-styles';
import { Input, NumericInput, ButtonInput } from '../Input';
import { ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_OPTION, DONATION_RANGE } from "config";
import ContactInfoInputs from '../ContactInfoInputs';

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
            showInputs={['name', 'pronouns', 'email', 'emailConfirmation', 'phone']}
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

          { admissionQuantity >= 2 &&
            <Input
              label = 'Name for second admission'
              type = 'text'
              name = 'person2'
            />
          }

          { admissionQuantity >= 3 &&
            <Input
              label = 'Name for third admission'
              type = 'text'
              name = 'person3'
            />
          }

          { admissionQuantity >= 4 &&
            <Input
              label = 'Name for fourth admission'
              type = 'text'
              name = 'person4'
            />
          }

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
