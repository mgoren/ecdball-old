import { useEffect } from 'react';
import { EMAIL_CONTACT, DETAILS_URL, WAIVER_URL, PAYPAL_ME_URL } from 'config';
import { mailtoLink, websiteLink, scrollToTop } from 'utils';
import OrderSummary from 'components/OrderSummary';
import { StyledLink } from 'components/Layout/SharedStyles';
import { Divider, Typography } from '@mui/material';

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
      <Typography component='p' color='error'>
        <strong>Your registration is not yet complete!</strong><br />
        Please send a check for ${order.total} to secure your spot.
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        Make your check out to PCDC, write your name in the memo area, and mail to:
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        Portland ECD Ball<br />
        David Macemon<br />
        19936 Derby St<br />
        West Linn, OR 97068
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        Alternatively, you can pay via PayPal.Me <StyledLink to={websiteLink(PAYPAL_ME_URL)}>here</StyledLink>. 
        This requires you to have a PayPal account, but you can sign up for one on the spot. You can then pay by credit card, debit card, or your bank account. 
        Please specify the registration amount and "Add a Note" to include your name. 
      </Typography>

      <SharedReceipt />
      
      <Divider component="hr" sx={{borderBottomWidth: 4, my: 4}}/>
      <Typography component='p' variant="h6" gutterBottom={true}>Registration Information:</Typography>
      <OrderSummary order={order} currentPage='confirmation' />
    </>
  );
}

function PaypalReceipt({ order }) {
  return (
    <>
      <Typography component='p' sx={{ mt: 2 }}>
        We're excited to have you attend this year's Ball. 
        Your payment to PCDC for ${order.total} has been successfully processed. 
        Your name will be on a list at the door. (You will not receive a physical ticket.) 
        Please note that there is a $3 daily parking fee at Oaks Park. This is not included in your registration.
      </Typography>

      <SharedReceipt />

      <Divider component="hr" sx={{borderBottomWidth: 4, my: 4}}/>
      <Typography component='p' variant="h6" gutterBottom={true}>Registration Information:</Typography>
      <OrderSummary order={order} currentPage='confirmation' />
    </>
  );
}

export function AdditionalPersonReceipt({ order }) {
  return (
    <>
      <Typography component='p' sx={{ mt: 2 }}>
        We're excited to have you attend this year's Ball. 
        Your name will be on a list at the door. (You will not receive a physical ticket.) 
        Please note that there is a $3 daily parking fee at Oaks Park. This is not included in your registration.
      </Typography>

      <SharedReceipt />
    </>
  )
}

export function SharedReceipt() {
  return (
    <>
      <Typography component='p' sx={{ mt: 2 }}>
        COVID Policy: Masks are optional at this year's Ball. 
        Per PCDC policy, vaccination / booster are no longer verified. 
        Signed waivers are still required. 
        If you have not signed a PCDC waiver, you may download a waiver <StyledLink to={websiteLink(WAIVER_URL)}>here</StyledLink> to bring with you. 
        We will also have copies at the Ball.
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        If you indicated that you could volunteer, Janet will be in touch a few weeks before the Ball. 
        If you can offer hospitality or are requesting hospitality (Limited), Cynthia will be in touch in a few weeks.
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        We intend to send out the Ball booklets that also include maps to venues during August. 
        Please have a look at <StyledLink to={websiteLink(DETAILS_URL)}>{DETAILS_URL}</StyledLink> for more information such as Ball instructions and Ball workshops.
      </Typography>

      <Typography component='p' sx={{ mt: 2 }}>
        Questions:  Contact David at <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.
      </Typography>
    </>
  );
}
