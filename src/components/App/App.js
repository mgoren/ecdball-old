import { useState, useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { isMobile } from "react-device-detect";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import * as S from './App-styles';
import { logBuildDate, cache, cached, clearCache } from 'utils';
import MainForm from "components/MainForm";
import Checkout from "components/Checkout";
import Confirmation from "components/Confirmation";
import Error from "components/Error";
import LocationMonitor from "components/LocationMonitor";
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
      <BrowserRouter>
        <LocationMonitor currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <S.Container className={isMobile ? 'mobile' : 'desktop'}>
          {error && <Error error={error} />}
          <Routes>

            <Route path="/" element={
              <MainForm
                order={order} setOrder={setOrder}
                currentPage={currentPage} setCurrentPage={setCurrentPage}
              />
            } />

            <Route path="/checkout" element={
              currentPage === 'checkout' ?
                <Checkout order={order} setOrder={setOrder} setError={setError} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              :
                <Navigate replace to='/' />
            } />

            <Route path="/confirmation" element={
              currentPage === 'confirmation' ?
                <Confirmation
                  order={order}
                />
              :
                <Navigate replace to='/' />
            } />

          </Routes>
        </S.Container>
      </BrowserRouter>
    </PayPalScriptProvider>
  );
}
