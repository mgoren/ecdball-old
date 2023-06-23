import { useState, useEffect } from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import MainForm from "components/MainForm";
import Checkout from "components/Checkout";
import Confirmation from "components/Confirmation";
import Error from "components/Error";
import Header from 'components/Header';
import IntroHeader from 'components/Header/IntroHeader';
import OrderSummary from "components/OrderSummary";
import Receipt from "components/Receipt";
import { logBuildDate, cache, cached } from 'utils';
import { PAYPAL_OPTIONS, ORDER_DEFAULTS, TITLE, CONFIRMATION_CHECK_TITLE, CONFIRMATION_PAYPAL_TITLE } from "config";
// import { Checkbox } from '@mui/material';
// import { StyledPaper } from 'components/Layout/SharedStyles';

export default function Registration() {
  // const [registering, setRegistering] = useState(false);
  return (
    // registering || cached('order') ? <RealRegistration /> : <PreRegistration setRegistering={setRegistering} />
    <RealRegistration />
  );
}

// const PreRegistration = ({ setRegistering }) => {
//   return(
//     <StyledPaper>
//       <p>I acknowledge that I will follow the ECD Ball COVID Safety Policy in effect on October 28/29, 2022.</p>

//       <p>If I have not attended a PCDC dance event in 2022, I will...</p>
//       <ul>
//         <li>Bring proof of my COVID vaccination and at least 1 booster (if I am eligible).</li>
//         <li>Sign a PCDC events waiver.</li>
//       </ul>

//       <p>I acknowledge that today's mask requirements are that everyone must wear a mask while in hall, except while eating, drinking, or performing on stage.  If PCDC rules change to allow optional masking, the Ball will be mask optional.</p>

//       <p>
//         I understand and agree to these requirements:
//         <Checkbox onChange={() => setRegistering(true)} />
//       </p>
//     </StyledPaper>
//   );
// }

const RealRegistration = () => {
  const [order, setOrder] = useState(cached('order') || ORDER_DEFAULTS);
  const [currentPage, setCurrentPage] = useState(cached('currentPage') || 1);
  const [error, setError] = useState(null);
  const CONFIRMATION_TITLE = order.paypalEmail === 'check' ? CONFIRMATION_CHECK_TITLE : CONFIRMATION_PAYPAL_TITLE;

  useEffect(() => { logBuildDate() }, []);
  useEffect(() => { cache('order', order) }, [order]);
  useEffect(() => { cache('currentPage', currentPage) }, [currentPage]);

  return (
    <PayPalScriptProvider options={PAYPAL_OPTIONS}>
      {error && <Error error={error} />}

      <Header
        titleText={currentPage === 'confirmation' ? CONFIRMATION_TITLE : TITLE}
        currentPage={currentPage}
      >
        {currentPage === 1 && <IntroHeader />}
        {currentPage === 2 && <OrderSummary order={order} currentPage={currentPage} />}
        {currentPage === 3 && <OrderSummary order={order} currentPage={currentPage} />}
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
    </PayPalScriptProvider>
  );
}
