import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import * as S from './App-styles';
import Header from '../Header';
import Form from '../Form';
import PaypalCheckoutButton from '../PaypalCheckoutButton';

const paypalOptions = {
  "client-id": "AfeU3URC6FLukidcSjXRzZh2BwwwS_JsMM_T9VkjXsP591D4r__zomC4c4R5OIIk3OZiewFplpwBw9oG",
  "disable-funding": "paylater,credit",
  "enable-funding": "venmo",
  "currency": "USD",
  "locale": "en_US"
};

export default function App() {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <S.Body className='S.Body'>
        <S.Container className='S.Container'>
          <Header />
          <Form />
          <PaypalCheckoutButton product={{ description:'ticket', amount: '5' }} />
        </S.Container>
      </S.Body>
    </PayPalScriptProvider>
  );
}
