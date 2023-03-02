import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";
import * as S from './App-styles';
import Header from 'components/Header';
import Form from 'components/Form';
import Checkout from "components/Checkout";
import { PAYPAL_OPTIONS, DEFAULTS } from "consts";

export default function App() {
  const [order, setOrder] = useState(JSON.parse(sessionStorage.getItem('cachedOrder')) || DEFAULTS);
  const [checkingOut, setCheckingOut] = useState(false);

  useEffect(() => {
    sessionStorage.setItem('cachedOrder', JSON.stringify(order));
  }, [order]);

  return (
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      <S.GlobalStyle />
      <S.Container className='S.Container'>
        {!checkingOut && <Header />}
        {!checkingOut && <Form order={order} setOrder={setOrder} setCheckingOut={setCheckingOut} />}
        {checkingOut && <Checkout order={order} setOrder={setOrder} setCheckingOut={setCheckingOut} />}
      </S.Container>
    </PayPalScriptProvider>
  );
}
