import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { Box, HeaderBox, Spacer } from 'components/SharedStyles.js';
import PaypalCheckoutButton from 'components/PaypalCheckoutButton';
import Title from 'components/Title';

export default function Checkout({ setCheckingOut, order, setOrder }) {
  const total = order.admissionCost * order.admissionQuantity + order.donation;

  return (
    <HeaderBox className='checkout'>
      <Title />
      <Spacer />
      <button onClick={() => setCheckingOut(false)} className='btn btn-sm btn-secondary float-end opacity-50'>
        <FontAwesomeIcon icon={faX} /> &nbsp;cancel
      </button>
      <h3 class='text-center'>Checkout</h3>
      <Spacer />

      <p>
        <strong>Contact info:</strong><br />
        {order.fullName}<br />
        {order.email}<br />
        {order.phone}
      </p>

      <p>
        <strong>Admissions:</strong><br />
        {order.fullName}<br />
        {order.person2 && <>{order.person2}<br /></>}
        {order.person3 && <>{order.person3}<br /></>}
        {order.person4 && <>{order.person4}<br /></>}
      </p>
      
      <p>
        <strong>Order summary:</strong><br />
        Admissions: {order.admissionQuantity} x ${order.admissionCost} = ${order.admissionQuantity * order.admissionCost}<br />
        {order.donation > 0 && <>Donation: ${order.donation}<br /></>}
        Total: ${total}
      </p>
      
      <Spacer />
      <hr />
      <Spacer />

      <h3>Total: ${total}</h3>

      <Spacer />
      <PaypalCheckoutButton product={{ description: 'Megaband', amount: total }} />
    </HeaderBox>
  );
}
