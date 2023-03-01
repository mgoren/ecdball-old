import { useEffect } from "react";
import * as S from './Checkout-styles.js';
import * as SS from 'components/SharedStyles.js';
import PaypalCheckoutButton from 'components/PaypalCheckoutButton';
import Title from 'components/Title';

export default function Checkout({ setCheckingOut, order, setOrder }) {
  useEffect(() => { window.scrollTo(0,0); },[])

  const total = order.admissionCost * order.admissionQuantity + order.donation;

  return (
    <section className='checkout'>
      <SS.TopBox className='SS.TopBox'>
        <Title />
          <S.Subhead className='text-center'>Order summary</S.Subhead>
          <SS.Text>
            <strong>Contact info:</strong><br />
            {order.fullName}<br />
            {order.email}<br />
            {order.phone}
          </SS.Text>

          <SS.Text>
            <strong>Admissions:</strong><br />
            {order.fullName}<br />
            {order.person2 && "{order.person2}<br />"}
            {order.person3 && "{order.person3}<br />"}
            {order.person4 && "{order.person4}<br />"}
          </SS.Text>
          
          <SS.Text>
            <strong>Order summary:</strong><br />
            Admissions: {order.admissionQuantity} x ${order.admissionCost} = ${order.admissionQuantity * order.admissionCost}<br />
            {order.donation > 0 && "Donation: ${order.donation}<br />"}
            Total: ${total}
          </SS.Text>
          <SS.Spacer/>

          <hr/>
          
          <S.Subhead className='text-center'>Amount due: ${total}</S.Subhead>
          <SS.Spacer />
          <PaypalCheckoutButton product={{ description: 'Megaband', amount: total }} />
      </SS.TopBox>
      <SS.Box>
        <button onClick={() => setCheckingOut(false)} className='btn btn-secondary'>Back</button>
      </SS.Box>
    </section>    
  );
}
