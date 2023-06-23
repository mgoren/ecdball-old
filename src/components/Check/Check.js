import { useState } from 'react';
import Reaptcha from 'reaptcha';
import { CAPTCHA_KEY, PAYPAL_ME_URL } from 'config';
import { websiteLink } from 'utils';
import { Typography, Box, Button } from '@mui/material';
import { StyledLink } from 'components/Layout/SharedStyles';

export default function Check({ saveOrderToFirebase, processing, setProcessing }) {
  const [verified, setVerified] = useState(false);

  const handleRegister = async () => {
    setProcessing(true);
    saveOrderToFirebase('check');
  }

  return (
    <section>
      {!processing &&
        <>
          <Typography sx={{ mt: 2 }}>Make your check out to PCDC, write your name in the memo area, and mail to:</Typography>
          <Typography sx={{ mt: 2 }}>
            Portland ECD Ball<br />
            David Macemon<br />
            19936 Derby St<br />
            West Linn, OR 97068
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Alternatively, you can pay via PayPal.Me <StyledLink to={websiteLink(PAYPAL_ME_URL)}>here</StyledLink>. 
            This requires you to have a PayPal account, but you can sign up for one on the spot. You can then pay by credit card, debit card, or your bank account. 
            Please specify the registration amount and "Add a Note" to include your name. 
            (Be sure to also complete this registration form; we will email you the PayPal.Me link as well.)
          </Typography>

          <Box sx={{ my: 3 }}>
            <Reaptcha
              sitekey={CAPTCHA_KEY}
              onVerify={() => setVerified(true)}
              onExpire={() => setVerified(false)}
            />
          </Box>

          <Button variant='contained' color='success' disabled={!verified} onClick={handleRegister} sx={{ mb: 2 }}>
            Register and agree to send a check
          </Button>
        </>
      }
    </section>
  );
}
