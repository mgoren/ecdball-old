import * as S from './OrderSummary-styles.js';

export default function OrderSummary({ order, orderComplete = false }) {
  const total = order.admissionCost * order.admissionQuantity + order.donation;

  return (
    <>
      <S.Subhead className='text-center'>Order summary</S.Subhead>

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
        <strong>
          {!orderComplete && 'Amount due:'}
          {orderComplete && 'Amount paid:'}
        </strong><br />
        Megaband admissions: {order.admissionQuantity} x ${order.admissionCost} = ${order.admissionQuantity * order.admissionCost}<br />
        {order.donation > 0 && <>Additional donation: ${order.donation}<br /></>}
        {order.donation > 0 && <>Total: ${total}</>}
      </p>
    </>
  );
}
