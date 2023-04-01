import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import { push, ref, serverTimestamp } from "firebase/database";
import { renderToStaticMarkup } from 'react-dom/server';
import { clearCachedOrder, scrollToTop } from 'utils';
import * as S from './Checkout-styles.js';
import { PAYMENT_METHODS, EMAIL_CONTACT } from 'config';
import db from 'firebase.js';
import PaypalCheckoutButton from 'components/PaypalCheckoutButton';
import Title from 'components/Title';
import OrderSummary from "components/OrderSummary";
import Check from "components/Check";
import Loading from 'components/Loading';
import Receipt from 'components/Receipt';

export default function Checkout({ order, setOrder, setError }) {
  const navigate = useNavigate();
  const [paying, setPaying] = useState(null);
  const [processing, setProcessing] = useState(null);
  const [checkPayment, setCheckPayment] = useState(null);
  const total = order.admissionCost * order.admissionQuantity + order.donation;

  if (order.fullName === '' || order.email === '' || order.phone === '') {
    window.location.replace('/');
  }

  useEffect(() => { scrollToTop(); },[])

  const handleClickBackButton = () => {
    setError(null);
    clearCachedOrder();
    navigate('/');
  }

	const saveOrderToFirebase = (paypalOrder) => {
    console.log(checkPayment ? 'paid via check' : 'paid successfully via paypal');
    const updatedOrder = {
      ...order,
      total,
      deposit: checkPayment ? 0 : total,
      paypalEmail: checkPayment ? 'check' : paypalOrder.payer.email_address,
      timestamp: serverTimestamp()
    };
    const receipt = renderToStaticMarkup(<Receipt order={updatedOrder}/>);
    const updatedOrderWithReceipt = { ...updatedOrder, receipt };
    console.log('setting order', updatedOrderWithReceipt);
    setOrder(updatedOrderWithReceipt);
		push(ref(db, 'orders/'), updatedOrderWithReceipt).then(() => {
			console.log('order saved to firebase');
      sessionStorage.removeItem('cachedOrder');
      sessionStorage.setItem('lastCompletedOrder', JSON.stringify(updatedOrderWithReceipt));
      setPaying(false);
      setProcessing(false);
      navigate('/confirmation');
		})
		.catch((err) => {
      console.err('error saving order to firebase');
			setError(checkPayment ? 
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

        {PAYMENT_METHODS.includes('paypal') && !checkPayment &&
          <PaypalCheckoutButton 
            order={order} 
            total={total} 
            setError={setError} 
            setPaying={setPaying} 
            setProcessing={setProcessing} 
            saveOrderToFirebase={saveOrderToFirebase}
          />
        }

        {PAYMENT_METHODS.includes('check') && !checkPayment && !paying &&
          <S.Text className='text-center'>
            <S.Link onClick={() => setCheckPayment(true)}>or click here to pay by check</S.Link>
          </S.Text>
        }

        {checkPayment && 
          <Check 
            setCheckPayment={setCheckPayment} 
            saveOrderToFirebase={saveOrderToFirebase}
          />
        }

      </S.TopBox>

      {!paying && 
        <S.Box className={isMobile ? 'mobile' : 'desktop'}>
          <button onClick={() => handleClickBackButton() } className='btn btn-secondary'>Back</button>
        </S.Box>
      }
    </section>
  );
}
