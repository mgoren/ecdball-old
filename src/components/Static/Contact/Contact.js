import { Box, } from '@mui/material';
import { StyledPaper, Paragraph, Header, PageTitle, StyledLink } from 'components/Layout/SharedStyles';

export default function Contact() {
  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>
      <PageTitle>
        Contact Us
      </PageTitle>

      <Header>
        Need to reach us?
      </Header>

      <Paragraph sx={{ mt: 0 }}>
        We'd love to hear from you...
      </Paragraph>

      <Box sx={{ mx: 3 }}>
        <Paragraph>
          <strong>Registration</strong><br />
          For any registration questions or concerns, email David Macemon 
          at <StyledLink to="mailto:registrar@portlandecdball.info?subject=2023%20Portland%20ECD%20Ball%20-%20Registration%20Question">registrar@portlandecdball.info</StyledLink>
        </Paragraph>

        <Paragraph>
          <strong>Website</strong><br />
          For any website questions or issues, email Ash Goren 
          at <StyledLink to="mailto:webmaster@portlandecdball.info?subject=2023%20Portland%20ECD%20Ball%20-%20Website%20Question">webmaster@portlandecdball.info</StyledLink>
        </Paragraph>

        <Paragraph>
          <strong>Volunteering</strong><br />
          If you can help out before, during, or after the weekend, 
          (or your volunteering arrangements change), email Janet Trygstad 
          at <StyledLink to="mailto:volunteering@portlandecdball.info?subject=2023%20Portland%20ECD%20Ball%20-%20Volunteering%20Question">volunteering@portlandecdball.info</StyledLink>
        </Paragraph>

        <Paragraph>
          <strong>Hospitality</strong><br />
          If you need hospitality or can provide hospitality, please contact Cynthia Stenger 
          at <StyledLink to="mailto:hospitality@portlandecdball.info?subject=2023%20Portland%20ECD%20Ball%20-%20Hospitality%20Question">hospitality@portlandecdball.info</StyledLink>
        </Paragraph>

        <Paragraph>
          <strong>General Questions</strong><br />
          For questions about the Ball including our COVID related 
          safety policies, email David Macemon 
          at <StyledLink to="mailto:chair@portlandecdball.info?subject=2023%20Portland%20ECD%20Ball%20-%20General%20Question">chair@portlandecdball.info</StyledLink>
        </Paragraph>
      </Box>
    </StyledPaper>
  );
}
