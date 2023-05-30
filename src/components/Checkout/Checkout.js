import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import { push, ref, serverTimestamp } from "firebase/database";
import { renderToStaticMarkup } from 'react-dom/server';
import { scrollToTop, cache, clearCache } from 'utils';
import * as S from './Checkout-styles.js';
import { PAYMENT_METHODS, EMAIL_CONTACT, NUM_PAGES } from 'config';
import db from 'firebase.js';
import PaypalCheckoutButton from 'components/PaypalCheckoutButton';
import Title from 'components/Title';
import OrderSummary from "components/OrderSummary";
import Check from "components/Check";
import Loading from 'components/Loading';
import Receipt from 'components/Receipt';
import TogglePaymentMode from 'components/TogglePaymentMode';
import { ButtonRow } from 'components/ButtonRow/index.js';

export default function Checkout({ order, setOrder, setError, currentPage, setCurrentPage }) {
  const navigate = useNavigate();
  const [paying, setPaying] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS[0]);
  const [paypalButtonsLoaded, setPaypalButtonsLoaded] = useState(false);

  useEffect(() => { scrollToTop() }, []);

  // useEffect(() => {
  //   const handlePopState = () => {
  //     console.log('back button pushed')
  //     setCurrentPage(NUM_PAGES);
  //   };
  //   window.addEventListener('popstate', handlePopState);
  //   return () => { window.removeEventListener('popstate', handlePopState) };
  // }, []);

  const total = order.admissionCost * order.admissionQuantity + order.donation;

  const handleClickBackButton = () => {
    setError(null);
    navigate('/');
  }

	const saveOrderToFirebase = (paypalOrder) => {
    console.log(`paid via ${paymentMethod}`);
    const updatedOrder = {
      ...order,
      people: order.people.slice(0, order.admissionQuantity),
      total,
      deposit: paymentMethod === 'check' ? 0 : total,
      paypalEmail: paymentMethod === 'check' ? 'check' : paypalOrder.payer.email_address,
      timestamp: serverTimestamp()
    };
    const receipt = renderToStaticMarkup(<Receipt order={updatedOrder}/>);
    const updatedOrderWithReceipt = { ...updatedOrder, receipt };
    console.log('setting order', updatedOrderWithReceipt);
    setOrder(updatedOrderWithReceipt);
		push(ref(db, 'orders/'), updatedOrderWithReceipt).then(() => {
			console.log('order saved to firebase');
      clearCache('order');
      cache('lastCompletedOrder', updatedOrderWithReceipt);
      setPaying(false);
      setProcessing(false);
      setCurrentPage('confirmation');
      navigate('/confirmation', {replace: true });
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
    <section className='checkout'>
      <S.TopBox className={isMobile ? 'mobile' : 'desktop'}>

        {processing && <Loading text='Processing payment...' />}

        {!processing &&
          <>
            <Title />
            <S.Container>
              <OrderSummary order={order} />
            </S.Container>
            <S.Spacer/>
            <hr/>
            <S.Subhead className='text-center'>Amount due: ${total}</S.Subhead>
            <S.Spacer />
          </>
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
            <S.Spacer />
          </>
        }

        {!paying && !processing && (paymentMethod === 'check' || paypalButtonsLoaded) &&
          <TogglePaymentMode paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
        }
      </S.TopBox>

      {!paying && !processing &&
        <ButtonRow backButtonProps = {{ onClick: handleClickBackButton }} />
      }
    </section>
  );
}
