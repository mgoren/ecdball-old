import { EMAIL_CONTACT, DETAILS_URL, CONTACT_TRACING_URL, WAIVER_URL } from 'config';
import { mailtoLink, websiteLink } from 'utils';
import * as S from './Receipt-styles.js';
import OrderSummary from 'components/OrderSummary';

export default function Receipt({ order }) {
  const paidByCheck = order.paypalEmail === 'check';

  return (
    <>
      <S.Text>
        <p>
          Thanks, {order.fullName}!
        </p>
      </S.Text>
      {paidByCheck && 
        <>
          <S.Text className='text-danger'>
            <p>
              <strong>Your registration is not yet complete!</strong><br />
              Please send a check for ${order.total} to secure your spot.
            </p>
          </S.Text>
          <S.Text>
            <p>
              Please send a check by carrier pigeon to... somewhere.
            </p>
          </S.Text>
        </>
      }
      {!paidByCheck &&
        <S.Text>
          <p>
            Your payment to PCDC for ${order.total} has been successfully processed.<br />
            Thank you for registering in advance for the Portland Megaband dance.<br />
            Your name will be on a list at the door. (You will not receive a physical ticket.)
          </p>
        </S.Text>
      }

      {!paidByCheck &&
        <S.Text>
          <p>
            A receipt containing this information is being sent to {order.email}.
          </p>
        </S.Text>
      }

      <OrderSummary order={order} orderComplete={!paidByCheck} />

      {!paidByCheck &&
        <>
          <hr />

          <S.Subhead className='text-center'>Expedited Entry</S.Subhead>
          <S.Text>
            <p>
              If you have not already done so, you can expedite the sign-in process by doing these ahead of time:
            </p>
          </S.Text>
          <S.Text>
            <p>
              &#8674; Fill out the <S.Link href={websiteLink(CONTACT_TRACING_URL)} target="_blank" rel="noreferrer">PCDC Contact Tracing form</S.Link> online.<br />
              &#8674; Print and bring with you a signed copy of the <S.Link href={websiteLink(WAIVER_URL)} target="_blank" rel="noreferrer">PCDC event waiver</S.Link>.
            </p>
          </S.Text>

          <hr />

          <S.Subhead className='text-center'>Event Details</S.Subhead>
          <S.Text>
            <p>
              Saturday, March 11, 2023<br />
              7:30pm (doors at 6:30, beginner lesson at 7:00)<br />
              Oaks Park Dance Pavilion<br />
              7805 SE Oaks Park Way in Portland
            </p>
          </S.Text>
          <S.Text>
            <p>
              Parking is $3/car.
            </p>
          </S.Text>
          <S.Text>
            <p>
              <strong>Covid policy:</strong> Everyone must be vaccinated, including at least one booster if eligible. A well-fitted mask covering nose and mouth is required for attendees. PCDC's full Covid policy is available <S.Link href="https://pcdc.fun/covid19" target="_blank" rel="noreferrer">here</S.Link>.
            </p>
          </S.Text>
          <S.Text>
            <p>
              See <S.Link href={websiteLink(DETAILS_URL)} target="_blank" rel="noreferrer">{DETAILS_URL}</S.Link> for further details.<br />
              Email <S.Link href={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</S.Link> if you have any questions.
            </p>
          </S.Text>
        </>
      }      
    </>
  );
}
