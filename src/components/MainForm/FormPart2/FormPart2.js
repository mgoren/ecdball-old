import { isMobile } from "react-device-detect";
import * as S from '../Form-styles';
import { NumericInput, ButtonInput } from '../Input';
import { ADMISSION_COST_RANGE, DONATION_OPTION, DONATION_RANGE } from "config";

export default function FormPart2({ donate, setDonate, clampValue }) {

  return (
    <>
      <div className='page2'>
        <section className='admissions-cost'>
          <S.Box className={isMobile ? 'mobile' : 'desktop'}>
            <S.Title className='S.Title'>Sliding scale</S.Title>

            <NumericInput 
              label="How much are you able to pay per admission? ($15-30)"
              name="admissionCost"
              range={ADMISSION_COST_RANGE}
              onBlur={(event) => clampValue({ event: event, range: ADMISSION_COST_RANGE})}
              showDollarSign={true}
            />
            <S.Spacer />

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
      </div>      
    </>
  );
}
