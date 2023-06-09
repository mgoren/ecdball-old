import { Box, Typography } from '@mui/material';
import { VOLUNTEER_OPTIONS } from 'config';

export default function OrderSummary({ order, currentPage }) {
  const total = order.admissionCost * order.admissionQuantity + order.donation;

  const volunteerTitles = order.volunteer.map(volunteer => {
    const volunteerOption = VOLUNTEER_OPTIONS.find(option => option.value === volunteer);
    return volunteerOption ? volunteerOption.label : volunteer;
  });

  return (
    <>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body" gutterBottom sx={{ fontWeight: 'bold' }}>
          {order.admissionQuantity > 1 ? 'Admissions' : 'Contact info'}
        </Typography>
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
      </Box>

      {(isNaN(currentPage) || currentPage > 2) &&
        <Box sx={{ mt: 5 }}>
          <Typography variant="body" gutterBottom sx={{ fontWeight: 'bold' }}>
            Miscellanea
          </Typography>
          <p>
            Volunteer: {order.volunteer.length > 1 ? volunteerTitles.join(', ') : ' not signed up'}<br />
            Share my info with other organizers: {order.share.toString().length > 0 ? 'yes' : 'no'}<br />
            {order.comments && <>Comments: {order.comments}<br /></>}
          </p>
        </Box>
      }

      {isNaN(currentPage) &&
        <Box sx={{ mt: 5 }}>
          <Typography variant="body" gutterBottom sx={{ fontWeight: 'bold' }}>
            {currentPage === 'confirmation' && order.paypalEmail !== 'check' ? 'Amount paid' : 'Amount due'}
          </Typography>
          <p>
            Admissions: {order.admissionQuantity} x ${order.admissionCost} = ${order.admissionQuantity * order.admissionCost}<br />
            {order.donation > 0 &&
              <>
                Additional donation: ${order.donation}<br />
                Total: ${total}
              </>
            }
          </p>
        </Box>
      }
    </>
  );
}
