import { useEffect } from 'react';
import { scrollToTop } from 'utils';
import ContactInfoInputs from '../ContactInfoInputs';
import { ADMISSION_QUANTITY_RANGE, PERSON_INPUTS } from "config";
import { StyledPaper, Title } from 'components/Layout/SharedStyles';
import { RightAlignedInput } from '../Input';

export default function ContactInfo({ admissionQuantity, clampValue }) {
  useEffect(() => { scrollToTop(); },[])

  return (
    <section>
      <StyledPaper className='admissions-quantity'>
        <Title variant="h6" gutterBottom={true}>Number of admissions</Title>
        <RightAlignedInput
          sx={{ maxWidth: '4rem' }}
          label={`Select admissions quantity (${ADMISSION_QUANTITY_RANGE[0]}-${ADMISSION_QUANTITY_RANGE[1]})`}
          name='admissionQuantity'
          range={ADMISSION_QUANTITY_RANGE}
          pattern='#'
          onBlur={(event) => clampValue({ event: event, range: ADMISSION_QUANTITY_RANGE})}
        />
      </StyledPaper>

      <section className='contact-section'>
        {Array(admissionQuantity).fill().map((_, index) => {
          return (
            <StyledPaper key={index}>
              <Title variant="h6" gutterBottom={true}>{PERSON_INPUTS[index].label}</Title>
              <ContactInfoInputs
                index={index}
                fields={PERSON_INPUTS[index].fields}
              />
            </StyledPaper>
          );
        })}
      </section>
    </section>
  );
}
