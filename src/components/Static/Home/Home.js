import { Typography, Box, } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, SectionDivider, Paragraph } from 'components/Layout/SharedStyles';

export default function Home() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">
      <PageTitle>
        Portland English Country Dance Ball<br />
        November 3rd, 4th, and 5th, 2023
      </PageTitle>

      <Box mt={-5} mb={4}>
        <img src={process.env.PUBLIC_URL + '/ecdball/ecdball-logo.jpg'} alt="ball logo" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h6" sx={{ mb: 2 }}>
        Dances led by <StyledLink internal={true} to="/staff#ErikWeberg1">Erik Weberg</StyledLink>
      </Typography>
      <Typography variant="h6">
        Music by <StyledLink internal={true} to="/staff#FineCompanions">Fine Companions</StyledLink>
      </Typography>
      <Paragraph sx={{ mt: 0 }}>
        (<StyledLink internal={true} to="/staff#BetsyBranch">Betsy Branch</StyledLink>, <StyledLink internal={true} to="/staff#LisaScott">Lisa Scott</StyledLink>, <StyledLink internal={true} to="/staff#BillTomczak">Bill Tomczak</StyledLink>, <StyledLink internal={true} to="/staff#ErikWeberg2">Erik Weberg</StyledLink>)
      </Paragraph>
      <Typography variant="h6">
        <p>Sound engineer <StyledLink internal={true} to="/staff#JohnOorthuys">John Oorthuys</StyledLink></p>
      </Typography>

      <Paragraph sx={{ my: 4 }}>
        This year's Ball will be mask optional.<br />
        We will no longer be verifying vaccination status.<br />
        See the <StyledLink internal={true} to="/welcome">Welcome</StyledLink> page for more information.
      </Paragraph>

      <Typography variant="h6">
        Registration: $50/person
      </Typography>
      <Paragraph sx={{ mt: 0 }}>
        Friday night dance is open to all and is not included in this fee.
      </Paragraph>
      <Paragraph>
        Friday and Saturday events at<br />
        <StyledLink to="https://www.oakspark.com/dance-pavilion">Oaks Park Dance Pavilion</StyledLink><br/>
        <StyledLink to="https://goo.gl/maps/kEXUGHVriT88hvKG8">7805 SE Oaks Park Way, Portland, OR 97202</StyledLink>
      </Paragraph>

      <SectionDivider/>

      <Typography variant="h6">
        Pre-Ball <StyledLink internal={true} to="/workshops">workshops</StyledLink>:
      </Typography>
      <Paragraph sx={{ mt: 1 }}>
        <strong>3-5pm on Sept 24, Oct 15, and Oct 29</strong><br />
        <StyledLink to="https://www.renpdx.org/">A Renaissance School</StyledLink><br />
        <StyledLink to="https://goo.gl/maps/M2CBrKV3KKJkuTb8A">234 S Bancroft St, Portland, OR 97239</StyledLink>
      </Paragraph>

      <SectionDivider/>

      <Typography variant="h4" fontStyle="italic" gutterBottom>
        Registration Opening Soon
      </Typography>
    </StyledPaper>
  );
}
