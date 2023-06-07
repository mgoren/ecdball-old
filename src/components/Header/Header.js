import { TITLE } from 'config';
import { StyledPaper } from 'components/Layout/SharedStyles';
import { Typography, Divider, Stepper, Step, StepLabel } from "@mui/material";
import { NUM_PAGES } from 'config';

export default function Header({ titleText = TITLE, currentPage, children }) {
  const steps = ['Contact', 'Misc', 'Payment', 'Checkout'];

  return (
    <StyledPaper>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {titleText}
      </Typography>
      {currentPage !== 'confirmation' &&
        <Stepper
          activeStep={isFinite(currentPage) ? currentPage - 1 : NUM_PAGES}
          sx={{
            my: 5,
            '& .MuiStepLabel-root .Mui-active': {color: 'secondary.main'},
            '& .MuiStepLabel-root .Mui-completed': {color: 'secondary.main'}
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      }
      <Divider component="hr" sx={{borderBottomWidth: 4, mb: 2 }}/>


      {children}
    </StyledPaper>
  );
}
