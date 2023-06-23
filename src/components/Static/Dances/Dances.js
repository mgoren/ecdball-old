import { Box, Grid } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, Paragraph, SectionDivider } from 'components/Layout/SharedStyles';
import { DANCES } from 'config';

const halfLength = Math.ceil(DANCES.length / 2);
const col1 = DANCES.slice(0, halfLength);
const col2 = DANCES.slice(halfLength);

export default function Dances() {
  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">

      <PageTitle>
        Portland English Country Dance Ball<br />
        List of Dances
      </PageTitle>

      <Grid container>
        <Grid item xs={12} sm={6}>
          {col1.map((item, index) => (
            <Box key={index} sx={{ border: '1px solid', mb: 1, p: 1, mr: 2 }}>
              {item}
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          {col2.map((item, index) => (
            <Box key={index} sx={{ border: '1px solid', mb: 1, p: 1, mr: 2 }}>
              {item}
            </Box>
          ))}
        </Grid>
      </Grid>

      <SectionDivider />

      <Paragraph>
        <em>All dances will be prompted but workshop attendance is advised.</em>
      </Paragraph>

      <Paragraph>
        Find dance instructions, selected sheet music, and videos in 
        the <StyledLink to="/ecdball/2023PortlandBall_DanceInstructions.pdf">Dance Instructions packet</StyledLink>.
      </Paragraph>

    </StyledPaper>
  );
}
