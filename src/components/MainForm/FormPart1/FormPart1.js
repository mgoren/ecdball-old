import { isMobile } from "react-device-detect";
import * as S from '../Form-styles';
import ContactInfoInputs from '../ContactInfoInputs';
import { NumericInput } from '../Input';
import { ADMISSION_QUANTITY_RANGE } from "config";

const person1Inputs = { fullName: {}, pronouns: {}, email: {}, emailConfirmation: {}, phone: {} };
const person2Inputs = { fullName: {}, pronouns: {}, email: {} };
const person3Inputs = { fullName: {}, pronouns: {}, email: {} };
const person4Inputs = { fullName: {}, pronouns: {}, email: {} };

export default function FormPart1({ admissionQuantity, clampValue }) {

  return (
    <>
      <div className='page1'>
        <section className='admissions-quantity'>
          <S.Box className={isMobile ? 'mobile' : 'desktop'}>
            <S.Title className='S.Title'>Number of admissions</S.Title>
            <NumericInput 
              label="Select admissions quantity (1-4)" 
              name="admissionQuantity" 
              range={ADMISSION_QUANTITY_RANGE}
              onBlur={(event) => clampValue({ event: event, range: ADMISSION_QUANTITY_RANGE})}
            />
          </S.Box>
        </section>

        <section className='contact-section'>
          <S.Box className={isMobile ? 'mobile' : 'desktop'}>
            <S.Title className='S.Title'>Your contact information</S.Title>

            <ContactInfoInputs
              index={0}
              inputs = {person1Inputs}
              // autoFocus = {isMobile || values.people[0].fullName ? '' : 'autoFocus'}
            />

          </S.Box>
        </section>

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
      </div>
    </>
  );
}
