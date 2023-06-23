import { Box } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, Paragraph, SectionDivider, Header } from 'components/Layout/SharedStyles';

export default function Dances() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">

      <PageTitle>
        Portland English Country Dance Ball<br />
        List of Dances
      </PageTitle>

      Grid of dances goes here...

      <SectionDivider />

      <Paragraph>
        <em>All dances will be prompted but workshop attendance is advised.</em>
      </Paragraph>

      <Paragraph>
        Find dance instructions, selected sheet music, and links to videos here in 
        the <StyledLink to="/ecdball/2023PortlandBall_DanceInstructions.pdf">Dance Instructions packet</StyledLink>.
      </Paragraph>

      {/* decide how to format/whether to add the "may require Adobe Reader" bit */}

    </StyledPaper>
  );
}
