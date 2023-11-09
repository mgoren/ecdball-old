import { Typography, Box, } from '@mui/material';
import { StyledPaper, PageTitle } from 'components/Layout/SharedStyles';

export default function Home() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">
      <PageTitle>
        Portland English Country Dance Ball
      </PageTitle>

      <Box mt={-5} mb={4}>
        <img src={process.env.PUBLIC_URL + '/ecdball/ecdball-logo.jpg'} alt="ball logo" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Save the Date<br />
        Next year's Portland English Country Ball weekend<br />
        is scheduled for November 1-2-3, 2024.<br />
        Watch this space for more information.
      </Typography>
    </StyledPaper>
  );
}
