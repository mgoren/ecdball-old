import { Typography, Button } from '@mui/material';
import { PAYMENT_METHODS } from 'config';

const switchToCheckText = '(or view check payment options)';
const switchToPaypalText = '(or view electronic payment options)';

export default function TogglePaymentMode({ paymentMethod, setPaymentMethod }) {
  const text = paymentMethod === 'check' ? switchToPaypalText : switchToCheckText;
  const togglePaymentMethod = () => setPaymentMethod(paymentMethod === 'check' ? 'paypal' : 'check');

  return (
    <>
      {PAYMENT_METHODS.includes('check') && PAYMENT_METHODS.includes('paypal') &&
        <Typography align='center'>
          <Button size='small' color='secondary' onClick={() => togglePaymentMethod()}>{text}</Button>
        </Typography>
      }
    </>
  );
}
