import { useState, useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { isMobile } from "react-device-detect";
import * as S from './App-styles';
import { logBuildDate, cache, cached } from 'utils';
import MainForm from "components/MainForm";
import Checkout from "components/Checkout";
import Confirmation from "components/Confirmation";
import Error from "components/Error";
import { PAYPAL_OPTIONS, DEFAULTS } from "config";

export default function App() {
  const [order, setOrder] = useState(cached('order') || DEFAULTS);
  const [currentPage, setCurrentPage] = useState(cached('currentPage') || 1);
  const [error, setError] = useState(null);

  useEffect(() => { logBuildDate() }, []);
  useEffect(() => { cache('order', order) }, [order]);
  useEffect(() => { cache('currentPage', currentPage) }, [currentPage]);

  return (
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      <S.GlobalStyle />
      {window.location.hostname === 'localhost' && <S.LocalhostBanner>[ LOCALHOST ]</S.LocalhostBanner>}
      <S.Container className={isMobile ? 'mobile' : 'desktop'}>
        {error && <Error error={error} />}

          {isFinite(currentPage) &&
            <MainForm
              order={order} setOrder={setOrder}
              currentPage={currentPage} setCurrentPage={setCurrentPage}
            />
          }

          {currentPage === 'checkout' &&
            <Checkout
              order={order} setOrder={setOrder}
              setCurrentPage={setCurrentPage}
              setError={setError}
            />
          }

          {currentPage === 'confirmation' &&
            <Confirmation
              order={order} setOrder={setOrder}
              setCurrentPage={setCurrentPage}
            />
          }

      </S.Container>
    </PayPalScriptProvider>
  );
}
