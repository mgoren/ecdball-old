import { useEffect } from 'react';
import { scrollToTop } from 'utils.js';
import { Input, CheckboxInput } from '../Input';
import { StyledPaper, Title } from 'components/Layout/SharedStyles';
import { Box, Typography } from '@mui/material';
import { VOLUNTEER_OPTIONS, HOSPITALITY_OPTIONS, SCHOLARSHIP_OPTIONS, SHARE_OPTIONS } from 'config';

export default function MiscInfo() {
  useEffect(() => { scrollToTop(); },[])
  return (
    <StyledPaper className='MiscInfo'>
      <Box sx={{ mb: 6 }}>
        <Title>Volunteering</Title>
        <CheckboxInput
          label='I would like to volunteer to help! I am available for:'
          name='volunteer'
          options={VOLUNTEER_OPTIONS}
        />
        <Typography sx={{ mt: 1.5 }}>Our Volunteer coordinator, Janet Trygstad will contact you.</Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Title>Hospitality (limited availability)</Title>
        <CheckboxInput
          name='hospitality'
          options={HOSPITALITY_OPTIONS}
        />
        <Typography sx={{ mt: 1.5 }}>Our hospitality coordinator, Cynthia Stenger will contact you.</Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Title>Scholarships (limited availability)</Title>
        <CheckboxInput
          name='scholarship'
          options={SCHOLARSHIP_OPTIONS}
        />
        <Typography sx={{ mt: 1.5 }}>Our registrar, David Macemon will contact you. At checkout please select "Check" payment.</Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Title>Contact information sharing</Title>
        <CheckboxInput
          name='share'
          options={SHARE_OPTIONS}
        />
      </Box>

      <Title>Final comments</Title>
      <Input
        type='textarea'
        name='comments'
        label="Please elaborate on any of the above questions or add any additional comments about your registration. Let us know if we missed anything, or there is something else we should know."
      />
    </StyledPaper>
  );
}
