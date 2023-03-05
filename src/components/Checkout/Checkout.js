import { TailSpin } from 'react-loading-icons'
import { useState, useEffect } from "react";
import * as S from './Checkout-styles.js';
import PaypalCheckoutButton from 'components/PaypalCheckoutButton';
import Title from 'components/Title';
import OrderSummary from "components/OrderSummary";

export default function Checkout({ order, setStatus, setError }) {
  const [paying, setPaying] = useState(null);
  const [processing, setProcessing] = useState(null);
  const total = order.admissionCost * order.admissionQuantity + order.donation;

  useEffect(() => { window.scrollTo(0,0); },[])

  return (
    <section className='checkout'>
      <S.TopBox className='S.TopBox'>
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

        <PaypalCheckoutButton order={order} total={total} setStatus={setStatus} setError={setError} setPaying={setPaying} setProcessing={setProcessing} />
      </S.TopBox>

      {!paying && 
        <S.Box className='box-back'>
          <button onClick={() => setStatus('form')} className='btn btn-secondary'>Back</button>
        </S.Box>
      }
    </section>    
  );
}
