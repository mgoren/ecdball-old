import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import preval from 'preval.macro'
import * as S from './App-styles';
import Form from 'components/Form';
import Checkout from "components/Checkout";
import Confirmation from "components/Confirmation";
import Error from "components/Error";
import { PAYPAL_OPTIONS, DEFAULTS } from "consts";

export default function App() {
  const [order, setOrder] = useState(JSON.parse(sessionStorage.getItem('cachedOrder')) || DEFAULTS);
  const [status, setStatus] = useState('form');
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
      <S.Container className={isMobile ? 'mobile' : 'desktop'}>
        {error &&
          <Error error={error} />
        }
        {status === 'form' &&
          <Form order={order} setOrder={setOrder} setStatus={setStatus} />
        }
        {status === 'checkout' &&
          <Checkout order={order} setStatus={setStatus} setError={setError} />
        }
        {status === 'confirmation' &&
          <Confirmation order={order} />
        }
      </S.Container>
    </PayPalScriptProvider>
  );
}

function logBuildDate() {
  const buildDate = preval`module.exports = new Date();`;
  console.log('last build', new Date(buildDate).toLocaleString());
}
