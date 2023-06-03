import * as S from './OrderSummary-styles.js';

export default function OrderSummary({ order, currentPage }) {
  const total = order.admissionCost * order.admissionQuantity + order.donation;

  return (
    <>
      <S.Spacer />
      <p><strong>{order.admissionQuantity > 1 ? 'Admissions' : 'Contact info'}</strong><br /></p>
      {order.people.slice(0, order.admissionQuantity).map((person, index) => (
        <p key={index}>
          {person.nametag && <>Nametag: {person.nametag}<br /></>}
          {person.first} {person.last} {person.pronouns && <>({person.pronouns})</>}<br />
          {person.email}<br />
          {person.phone}<br />
          {person.address}<br />
          {person.city}, {person.state} {person.zip}<br />
          {person.country && <>{person.country}</>}
        </p>
      ))}

      {isNaN(currentPage) &&
        <>
          <S.Spacer />
          <p><strong>{currentPage === 'confirmation' ? 'Amount paid' : 'Amount due'}</strong><br /></p>
          <p>
            Admissions: {order.admissionQuantity} x ${order.admissionCost} = ${order.admissionQuantity * order.admissionCost}<br />
            {order.donation > 0 &&
              <>
                Additional donation: ${order.donation}<br />
                Total: ${total}
              </>
            }
          </p>
        </>
      }
    </>
  );
}
