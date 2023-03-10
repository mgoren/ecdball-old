import { useState, useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { isMobile } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import preval from 'preval.macro'
import * as S from './App-styles';
import Form from 'components/Form';
import Checkout from "components/Checkout";
import Confirmation from "components/Confirmation";
import Error from "components/Error";
import { PAYPAL_OPTIONS, DEFAULTS } from "consts";

export default function App() {
  const [order, setOrder] = useState(JSON.parse(sessionStorage.getItem('cachedOrder')) || DEFAULTS);
  const [error, setError] = useState(null);

  useEffect(() => {
    logBuildDate();
  }, []);

  useEffect(() => {
    sessionStorage.setItem('cachedOrder', JSON.stringify(order));
  }, [order]);

  return (
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      <S.GlobalStyle />
      <BrowserRouter>
        <S.Container className={isMobile ? 'mobile' : 'desktop'}>
          {error && <Error error={error} />}
          <Routes>
            <Route path="/" element={<Form order={order} setOrder={setOrder} />} />
            <Route path="/checkout" element={<Checkout order={order} setError={setError} />} />
            <Route path="/confirmation" element={<Confirmation order={order} />} />
          </Routes>
        </S.Container>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}

function logBuildDate() {
  const buildDate = preval`module.exports = new Date();`;
  console.log('last build', new Date(buildDate).toLocaleString());
}
