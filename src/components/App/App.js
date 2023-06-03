import { useState, useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { isMobile } from "react-device-detect";
import * as S from './App-styles';
import { logBuildDate, cache, cached } from 'utils';
import MainForm from "components/MainForm";
import Checkout from "components/Checkout";
import Confirmation from "components/Confirmation";
import Error from "components/Error";
import { PAYPAL_OPTIONS, ORDER_DEFAULTS, TITLE, CONFIRMATION_CHECK_TITLE, CONFIRMATION_PAYPAL_TITLE } from "config";
import Header from 'components/Header';
import IntroHeader from 'components/Header/IntroHeader';
import OrderSummary from "components/OrderSummary";
import Receipt from "components/Receipt";

export default function App() {
  const [order, setOrder] = useState(cached('order') || ORDER_DEFAULTS);
  const [currentPage, setCurrentPage] = useState(cached('currentPage') || 1);
  const [error, setError] = useState(null);
  const CONFIRMATION_TITLE = order.paypalEmail === 'check' ? CONFIRMATION_CHECK_TITLE : CONFIRMATION_PAYPAL_TITLE;

  useEffect(() => { logBuildDate() }, []);
  useEffect(() => { cache('order', order) }, [order]);
  useEffect(() => { cache('currentPage', currentPage) }, [currentPage]);

  return (
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      <S.GlobalStyle />
      {window.location.hostname === 'localhost' && <S.LocalhostBanner>[ LOCALHOST ]</S.LocalhostBanner>}
      <S.Container className={isMobile ? 'mobile' : 'desktop'}>
        {error && <Error error={error} />}

          <Header titleText={currentPage === 'confirmation' ? CONFIRMATION_TITLE : TITLE}>
            {currentPage === 1 && <IntroHeader />}
            {currentPage === 2 && <OrderSummary order={order} currentPage={currentPage} />}
            {currentPage === 'checkout' && <OrderSummary order={order} currentPage={currentPage} />}
            {currentPage === 'confirmation' && <Receipt order={order} />}
          </Header>

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
              setOrder={setOrder}
              setCurrentPage={setCurrentPage}
            />
          }

      </S.Container>
    </PayPalScriptProvider>
  );
}
