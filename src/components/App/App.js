import { useState, useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { isMobile } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as S from './App-styles';
import { logBuildDate, cacheOrder } from 'utils';
import MainForm from "components/MainForm";
import Checkout from "components/Checkout";
import Confirmation from "components/Confirmation";
import Error from "components/Error";
import { PAYPAL_OPTIONS, DEFAULTS } from "config";

export default function App() {
  const [order, setOrder] = useState(JSON.parse(sessionStorage.getItem('cachedOrder')) || DEFAULTS);
  const [emailConfirmation, setEmailConfirmation] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    logBuildDate();
  }, []);

  useEffect(() => {
    cacheOrder(order);
  }, [order]);

  return (
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      <S.GlobalStyle />
      <BrowserRouter>
        <S.Container className={isMobile ? 'mobile' : 'desktop'}>
          {error && <Error error={error} />}
          <Routes>

            <Route path="/" element={
              <MainForm
                order={order} setOrder={setOrder}
                emailConfirmation={emailConfirmation} setEmailConfirmation={setEmailConfirmation}
              />
            } />

            <Route path="/checkout" element={
              <Checkout
                order={order} setOrder={setOrder}
                setError={setError}
              />
            } />

            <Route path="/confirmation" element={
              <Confirmation
                order={order}
              />
            } />

          </Routes>
        </S.Container>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}
