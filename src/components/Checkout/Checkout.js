import { TailSpin } from 'react-loading-icons'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { isMobile } from "react-device-detect";
import * as S from './Checkout-styles.js';
import PaypalCheckoutButton from 'components/PaypalCheckoutButton';
import Title from 'components/Title';
import OrderSummary from "components/OrderSummary";

export default function Checkout({ order, setError }) {
  const navigate = useNavigate();
  const [paying, setPaying] = useState(null);
  const [processing, setProcessing] = useState(null);
  const total = order.admissionCost * order.admissionQuantity + order.donation;

  if (order.fullName === '' || order.email === '' || order.phone === '') {
    window.location.replace('/');
  } 

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  return (
    <section className='checkout'>
      <S.TopBox className={isMobile ? 'mobile' : 'desktop'}>
        {processing && 
          <>
            <S.Spacer />
            <S.Spacer />
            <div className='text-center loading-icon-container'>
              <TailSpin stroke='black' strokeWidth='2.5' />
            </div>
            <S.Spacer />
            <S.Subhead className='text-center text-danger'>Processing your payment...</S.Subhead>
            <S.Spacer />
            <S.Spacer />
          </>
        }

        {!processing &&
          <>
            <Title />
            <OrderSummary order={order} />
            <S.Spacer/>
            <hr/>
            <S.Subhead className='text-center'>Amount due: ${total}</S.Subhead>
            <S.Spacer />
          </>
        }

        <PaypalCheckoutButton order={order} total={total} setError={setError} setPaying={setPaying} setProcessing={setProcessing} />
      </S.TopBox>

      {!paying && 
        <S.Box className={isMobile ? 'mobile' : 'desktop'}>
          <button onClick={() => navigate('/')} className='btn btn-secondary'>Back</button>
        </S.Box>
      }
    </section>    
  );
}
