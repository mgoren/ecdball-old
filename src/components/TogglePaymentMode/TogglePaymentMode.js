import * as S from './TogglePaymentMode-styles.js';
import { PAYMENT_METHODS } from 'config';

const switchToCheckText = '(or view check payment options)';
const switchToPaypalText = '(or view electronic payment options)';

export default function TogglePaymentMode({ paymentMethod, setPaymentMethod }) {
  const text = paymentMethod === 'check' ? switchToPaypalText : switchToCheckText;
  const togglePaymentMethod = () => setPaymentMethod(paymentMethod === 'check' ? 'paypal' : 'check');

  return (
    <>
      {PAYMENT_METHODS.includes('check') && PAYMENT_METHODS.includes('paypal') &&
        <S.Text className='text-center'>
          <S.Link onClick={() => togglePaymentMethod()}>{text}</S.Link>
        </S.Text>
      }
    </>
  );
}
