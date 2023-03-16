import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import * as S from './Confirmation-styles';
import { mailtoLink, websiteLink } from 'utils';

import { EMAIL_CONTACT, DETAILS_URL, CONTACT_TRACING_URL, WAIVER_URL } from 'config';
import Title from 'components/Title';
import OrderSummary from 'components/OrderSummary';

export default function Confirmation({ order }) {
  if (sessionStorage.getItem('lastCompletedOrder') === null) {
    window.location.replace('/');
  } 

  if (order.fullName === '') {
    order = JSON.parse(sessionStorage.getItem('lastCompletedOrder'));
  }

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  const total = order.admissionCost * order.admissionQuantity + order.donation;

  return (
    <S.TopBox className={isMobile ? 'mobile' : 'desktop'}>
      <Title text='Megaband Confirmation' />
      <S.Text>Thanks, {order.fullName}!</S.Text>
      <S.Text>
        Your payment to PCDC for ${total} has been successfully processed.<br />
        Thank you for registering in advance for the Portland Megaband dance.<br />
        Your name will be on a list at the door. (You will not receive a physical ticket.)
      </S.Text>
      <S.Text>A receipt containing this information is being sent to {order.email}.</S.Text>

      <OrderSummary order={order} orderComplete={true} />

      <hr />

      <S.Subhead className='text-center'>Expedited Entry</S.Subhead>
      <S.Text>If you have not already done so, you can expedite the sign-in process by doing these ahead of time:</S.Text>
      <S.Text>
      &#8674; Fill out the <S.Link href={websiteLink(CONTACT_TRACING_URL)} target="_blank" rel="noreferrer">PCDC Contact Tracing form</S.Link> online.<br />
      &#8674; Print and bring with you a signed copy of the <S.Link href={websiteLink(WAIVER_URL)} target="_blank" rel="noreferrer">PCDC event waiver</S.Link>.
      </S.Text>
        
      <hr />

      <S.Subhead className='text-center'>Event Details</S.Subhead>
      <S.Text>
        Saturday, March 11, 2023<br />
        7:30pm (doors at 6:30, beginner lesson at 7:00)<br />
        Oaks Park Dance Pavilion<br />
        7805 SE Oaks Park Way in Portland
      </S.Text>
      <S.Text>Parking is $3/car.</S.Text>
      <S.Text><strong>Covid policy:</strong> Everyone must be vaccinated, including at least one booster if eligible. A well-fitted mask covering nose and mouth is required for attendees. PCDC's full Covid policy is available <S.Link href="https://pcdc.fun/covid19" target="_blank" rel="noreferrer">here</S.Link>.</S.Text>
      <S.Text>
        See <S.Link href={websiteLink(DETAILS_URL)} target="_blank" rel="noreferrer">{DETAILS_URL}</S.Link> for further details.<br />
        Email <S.Link href={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</S.Link> if you have any questions.

      </S.Text>
    </S.TopBox>
  );
}
