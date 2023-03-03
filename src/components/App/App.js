import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";
import * as S from './App-styles';
import Header from 'components/Header';
import Form from 'components/Form';
import Checkout from "components/Checkout";
import Confirmation from "components/Confirmation";
import { PAYPAL_OPTIONS, DEFAULTS } from "consts";

export default function App() {
  const [order, setOrder] = useState(JSON.parse(sessionStorage.getItem('cachedOrder')) || DEFAULTS);
  const [status, setStatus] = useState('form');

  useEffect(() => {
    sessionStorage.setItem('cachedOrder', JSON.stringify(order));
  }, [order]);

  return (
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      <S.GlobalStyle />
      <S.Container className='S.Container'>
        {status === 'form' && <Header />}
        {status === 'form' && <Form order={order} setOrder={setOrder} setStatus={setStatus} />}
        {status === 'checkout' && <Checkout order={order} setStatus={setStatus} />}
        {status === 'confirmation' && <Confirmation order={order} />}
      </S.Container>
    </PayPalScriptProvider>
  );
}
