import { useEffect } from 'react';
import { EMAIL_CONTACT, DETAILS_URL, CONTACT_TRACING_URL, WAIVER_URL, PAYPAL_ME_URL } from 'config';
import { mailtoLink, websiteLink, scrollToTop } from 'utils';
import * as S from './Receipt-styles.js';
import OrderSummary from 'components/OrderSummary';

export default function Receipt({ order }) {
  useEffect(() => { scrollToTop() },[]);
  return(
    <>
      <p>Thanks, {order.people[0].first}!</p>
      {order.paypalEmail === 'check' ? <CheckReceipt order={order}/> : <PaypalReceipt order={order }/>}
    </>
  );
}

function CheckReceipt({ order }) {
  return (
    <>
      <p className='text-danger'>
        <strong>Your registration is not yet complete!</strong><br />
        Please send a check for ${order.total} to secure your spot.
      </p>

      <p>Please send a check by carrier pigeon to... somewhere.</p>
      <p>
        Alternatively, you can pay via PayPal.Me <S.Link href={websiteLink(PAYPAL_ME_URL)} target="_blank">here</S.Link>. This requires you to have a PayPal account, but you can sign up for one on the spot. You can then pay by credit card, debit card, or your bank account. Please specify the registration amount and "Add a Note" to include your name.
      </p>

      <OrderSummary order={order} currentPage='confirmation' />
    </>
  );
}

function PaypalReceipt({ order }) {
  return (
    <>
      <p>
        Your payment to PCDC for ${order.total} has been successfully processed.<br />
        Thank you for registering in advance for the Portland Megaband dance.<br />
        Your name will be on a list at the door. (You will not receive a physical ticket.)
      </p>

      <OrderSummary order={order} currentPage='confirmation' />

      <hr />

      <S.Subhead className='text-center'>Important Info</S.Subhead>

      <p>If you have not already done so, you can expedite the entry process by doing these ahead of time:</p>

      <p>
        &#8674; Fill out the <S.Link href={websiteLink(CONTACT_TRACING_URL)} target="_blank" rel="noreferrer">PCDC Contact Tracing form</S.Link> online.<br />
        &#8674; Print and bring with you a signed copy of the <S.Link href={websiteLink(WAIVER_URL)} target="_blank" rel="noreferrer">PCDC event waiver</S.Link>.
      </p>

      <hr />

      <S.Subhead className='text-center'>Event Details</S.Subhead>

      <p>
        Event info here<br />
      </p>
      <p><strong>Covid policy:</strong> Everyone must be vaccinated, including at least one booster if eligible. A well-fitted mask covering nose and mouth is required for attendees. PCDC's full Covid policy is available <S.Link href="https://pcdc.fun/covid19" target="_blank" rel="noreferrer">here</S.Link>.</p>
      <p>
        See <S.Link href={websiteLink(DETAILS_URL)} target="_blank" rel="noreferrer">{DETAILS_URL}</S.Link> for further details.<br />
        Email <S.Link href={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</S.Link> if you have any questions.
      </p>
    </>
  );
}
