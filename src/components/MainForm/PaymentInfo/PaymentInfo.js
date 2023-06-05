import { useEffect } from 'react';
import { scrollToTop } from 'utils';
import { RightAlignedInput } from '../Input';
import { ADMISSION_COST_RANGE, DONATION_OPTION, DONATION_RANGE } from "config";
import { StyledPaper, Title } from 'components/Layout/SharedStyles';
import { InputAdornment } from '@mui/material';

export default function PaymentInfo({ donate, setDonate, clampValue, admissionQuantity }) {
  useEffect(() => { scrollToTop(); },[])
  
  return (
    <section className='PaymentInfo'>
      <div className='admissions-section'>
        <StyledPaper className='admissions-cost'>
            {ADMISSION_COST_RANGE[0] < ADMISSION_COST_RANGE[1] ?
              <>
              <Title variant="h6" gutterBottom={true}>Sliding scale</Title>
                <RightAlignedInput
                  sx={{ maxWidth: '5rem' }}
                  label={`How much are you able to pay per admission? ($${ADMISSION_COST_RANGE[0]}-${ADMISSION_COST_RANGE[1]})`}
                  name="admissionCost"
                  pattern='##'
                  range={ADMISSION_COST_RANGE}
                  onBlur={(event) => clampValue({ event: event, range: ADMISSION_COST_RANGE})}
                  InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }}
                />
              </>
            :
              <>
              <Title variant="h6" gutterBottom={true}>Admission cost</Title>
                <p>
                  Number of admissions: {admissionQuantity}<br />
                  Price per admission: ${ADMISSION_COST_RANGE[0]}
                </p>
                <p>
                  Admissions total: ${admissionQuantity * ADMISSION_COST_RANGE[0]}
                </p>
              </>
            }
        </StyledPaper>

        {DONATION_OPTION &&
          <StyledPaper className='donation-section'>
            <Title variant="h6" gutterBottom={true}>Additional donation (tax deductible)</Title>
            {!donate && 
              <RightAlignedInput
                label="Would you like to make an additional donation to PCDC?"
                name="donate"
                buttonText="Yes"
                onClick={() => setDonate(true)}
              />
            }

            {donate && 
              <RightAlignedInput
                sx={{ minWidth: '6rem', maxWidth: '6rem' }}
                label="How much would you like to donate to PCDC?"
                name="donation" 
                pattern='###'
                range={DONATION_RANGE}
                onBlur={(event) => clampValue({ event: event, range: DONATION_RANGE})}
                InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }}
                autoFocus={true}
                // onFocus={(e) => e.target.select()}
              />
            }
          </StyledPaper>
        }
      </div>      
    </section>
  );
}
