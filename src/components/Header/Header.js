import { TITLE } from 'config';
import { StyledPaper } from 'components/Layout/SharedStyles';
import { Typography, Divider, Stepper, Step, StepLabel, MobileStepper, Button } from "@mui/material";
import { NUM_PAGES } from 'config';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

export default function Header({ titleText = TITLE, currentPage, children }) {
  const steps = ['Contact', 'Misc', 'Payment', 'Checkout'];

  return (
    <StyledPaper>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {titleText}
      </Typography>
      {currentPage === 'temporarily-disabled' &&
      <>
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
        <MobileStepper
          variant="dots"
          steps={NUM_PAGES + 1}
          position="static"
          activeStep={isFinite(currentPage) ? currentPage - 1 : NUM_PAGES}
          sx={{ maxWidth: 400, flexGrow: 1 }}
          nextButton={
            <>
              <Button size="small" sx={currentPage === 'checkout' ? { display: 'none' } : {} }>
                {currentPage === NUM_PAGES ? 'Checkout' : 'Next'}
                <KeyboardArrowRight />
              </Button>
              {currentPage === 'checkout' && <div />}
            </>
          }
          backButton={
            <>
              {currentPage === 1 && <div />}
              <Button size="small" disabled={currentPage === 1} sx={currentPage === 1 ? { display: 'none' } : {} }>
                <KeyboardArrowLeft />
                Back
              </Button>
            </>
          }
        />
      </>
      }
      <Divider component="hr" sx={{borderBottomWidth: 4, mb: 2 }}/>


      {children}
    </StyledPaper>
  );
}
