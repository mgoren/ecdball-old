import { useEffect } from 'react';
import { isMobile } from "react-device-detect";
import { scrollToTop } from 'utils';
import * as S from '../Form-styles';
import ContactInfoInputs from '../ContactInfoInputs';
import { NumericInput } from '../Input';
import { ADMISSION_QUANTITY_RANGE, PERSON_INPUTS } from "config";

export default function ContactInfo({ admissionQuantity, clampValue }) {
  useEffect(() => { scrollToTop(); },[])

  return (
    <section className='ContactInfo'>
      <section className='admissions-quantity'>
        <S.Box className={isMobile ? 'mobile' : 'desktop'}>
          <S.Title className='S.Title'>Number of admissions</S.Title>
          <NumericInput
            label={`Select admissions quantity (${ADMISSION_QUANTITY_RANGE[0]}-${ADMISSION_QUANTITY_RANGE[1]})`}
            name="admissionQuantity"
            range={ADMISSION_QUANTITY_RANGE}
            onBlur={(event) => clampValue({ event: event, range: ADMISSION_QUANTITY_RANGE})}
          />
        </S.Box>
      </section>

      <section className='contact-section'>
        {Array(admissionQuantity).fill().map((_, index) => {
          return (
            <S.Box key={index} className={isMobile ? 'mobile' : 'desktop'}>
              <S.Title className='S.Title'>{PERSON_INPUTS[index].label}</S.Title>
              <ContactInfoInputs
                index={index}
                fields={PERSON_INPUTS[index].fields}
              />
            </S.Box>
          );
        })}
      </section>
    </section>
  );
}
