import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from "react";
import * as S from './App-styles';
import Header from 'components/Header';
import Form from 'components/Form';
import Checkout from "components/Checkout";
import { PAYPAL_OPTIONS, ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_RANGE } from "consts";

const DEFAULTS = { 
  fullName: '', 
  email: '', 
  phone: '', 
  admissionCost: ADMISSION_COST_RANGE[1], 
  admissionQuantity: ADMISSION_QUANTITY_RANGE[0], 
  donation: DONATION_RANGE[0], 
  person2: '', 
  person3: '', 
  person4: ''
}

export default function App() {
  const [order, setOrder] = useState(DEFAULTS);
  const [checkingOut, setCheckingOut] = useState(false);

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
