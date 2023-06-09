import { useState, useEffect } from "react";
import { push, ref, serverTimestamp } from "firebase/database";
import { renderToStaticMarkup } from 'react-dom/server';
import { scrollToTop, warnBeforeUserLeavesSite } from 'utils';
import { PAYMENT_METHODS, EMAIL_CONTACT, NUM_PAGES } from 'config';
import db from 'firebase.js';
import PaypalCheckoutButton from 'components/PaypalCheckoutButton';
import Check from "components/Check";
import Loading from 'components/Loading';
import Receipt from 'components/Receipt';
import TogglePaymentMode from 'components/TogglePaymentMode';
import ButtonRow from 'components/ButtonRow/index.js';
import { StyledPaper, Title } from 'components/Layout/SharedStyles';
import { Hidden } from '@mui/material';
import { MyMobileStepper } from 'components/MyStepper';

export default function Checkout({ order, setOrder, setError, setCurrentPage }) {
  const [paying, setPaying] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS[0]);
  const [paypalButtonsLoaded, setPaypalButtonsLoaded] = useState(false);

  useEffect(() => { scrollToTop() },[]);

  useEffect(() => {
    if (window.location.hostname !== 'localhost') {
      window.addEventListener('beforeunload', warnBeforeUserLeavesSite);
      return () => window.removeEventListener('beforeunload', warnBeforeUserLeavesSite);
    }
  }, []);

  const total = order.admissionCost * order.admissionQuantity + order.donation;

  const handleClickBackButton = () => {
    setError(null);
    setCurrentPage(NUM_PAGES);
  }

	const saveOrderToFirebase = (paypalOrder) => {
    console.log(`paid via ${paymentMethod}`);
    const updatedOrder = {
      ...order,
      volunteer: order.volunteer,
      share: order.share,
      people: order.people.slice(0, order.admissionQuantity),
      total,
      deposit: paymentMethod === 'check' ? 0 : total,
      paypalEmail: paymentMethod === 'check' ? 'check' : paypalOrder.payer.email_address,
      timestamp: serverTimestamp()
    };
    const receipt = renderToStaticMarkup(<Receipt order={updatedOrder} currentPage='confirmation' />);
    const updatedOrderWithReceipt = { ...updatedOrder, receipt };
    console.log('setting order', updatedOrderWithReceipt);
    setOrder(updatedOrderWithReceipt);
		push(ref(db, 'orders/'), updatedOrderWithReceipt).then(() => {
			console.log('order saved to firebase');
      // clearCache('order');
      // cache('lastCompletedOrder', updatedOrderWithReceipt);
      setPaying(false);
      setProcessing(false);
      setCurrentPage('confirmation');
		})
		.catch((err) => {
      console.err('error saving order to firebase');
			setError(paymentMethod === 'check' ? 
        `We encountered an issue recording your information: ${err}. Please contact ${EMAIL_CONTACT}.` 
        : `Your payment was processed successfully but we encountered an issue recording your information: ${err}. Please contact ${EMAIL_CONTACT}.`
      );
		});
	}

  return (
    <section>
      <StyledPaper align='center'>

        {processing && <Loading text='Processing payment...' />}

        {!processing &&
          <Title>Amount due: ${total}</Title>
        }

        {paymentMethod === 'paypal' &&
          <PaypalCheckoutButton 
            paypalButtonsLoaded={paypalButtonsLoaded} setPaypalButtonsLoaded={setPaypalButtonsLoaded}
            total={total} 
            setError={setError} 
            setPaying={setPaying} 
            processing={processing} setProcessing={setProcessing} 
            saveOrderToFirebase={saveOrderToFirebase}
          />
        }

        {paymentMethod === 'check' && 
          <>
            <Check 
              processing={processing} setProcessing={setProcessing}
              saveOrderToFirebase={saveOrderToFirebase}
            />
          </>
        }

        {!paying && !processing && (paymentMethod === 'check' || paypalButtonsLoaded) &&
          <TogglePaymentMode paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
        }
      </StyledPaper>

      {!paying && !processing &&
        <>
          <Hidden mdDown>
            <ButtonRow backButtonProps = {{ onClick: handleClickBackButton }} />
          </Hidden>

          <Hidden mdUp>
            <MyMobileStepper currentPage={'checkout'} onClickBack={handleClickBackButton} />
          </Hidden>
        </>
      }
    </section>
  );
}
