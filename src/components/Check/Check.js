import { useState } from 'react';
import Reaptcha from 'reaptcha';
import { CAPTCHA_KEY } from 'config';
import { Typography, Box, Button } from '@mui/material';

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
          <Typography sx={{ mt: 2 }}>
            Instructions here on paying by check
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
