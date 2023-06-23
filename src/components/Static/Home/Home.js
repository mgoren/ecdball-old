import { Typography, Box, } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, SectionDivider, Paragraph } from 'components/Layout/SharedStyles';

export default function Home() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">
      <PageTitle>
        Portland English Country Dance Ball<br />
        November 3-4-5, 2023
      </PageTitle>

      <Box mt={-5} mb={2}>
        <img src={process.env.PUBLIC_URL + '/ecdball/ecdball-logo.jpg'} alt="ball logo" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h5">
        <p>Dances led by<br/><StyledLink internal={true} to="/staff#ErikWeberg1">Erik Weberg</StyledLink></p>
        <p>
          Music by <em><StyledLink internal={true} to="/staff#FineCompanions">Fine Companions</StyledLink></em></p>
      </Typography>

      <Paragraph sx={{ mt: -2 }}>
          (
            <StyledLink internal={true} to="/staff#BetsyBranch">Betsy Branch</StyledLink>,&nbsp;
            <StyledLink internal={true} to="/staff#LisaScott">Lisa Scott</StyledLink><br/>
            <StyledLink internal={true} to="/staff#BillTomczak">Bill Tomczak</StyledLink>,&nbsp;
            <StyledLink internal={true} to="/staff#ErikWeberg2">Erik Weberg</StyledLink>
          )
      </Paragraph>

      <Typography variant="h5" gutterBottom>
        <p>Sound provided by <StyledLink internal={true} to="/staff#JohnOorthuys">John Oorthuys</StyledLink></p>
      </Typography>

      <Paragraph sx={{ my: 6, mx: { sm: 6 } }}>
        This year's Ball is mask optional. Proof of vaccination plus at least one booster is required.  
        See the Welcome page for more information.
      </Paragraph>

      <Typography variant="h5">
        Friday and Saturday events at
      </Typography>
      <Typography variant="h6">
          <StyledLink to="https://www.oakspark.com/dance-pavilion">Oaks Park Dance Pavilion</StyledLink><br/>
          7805 SE Oaks Park Way<br/>
          Portland, Oregon 97202
        </Typography>
      
      <Typography variant="h5" gutterBottom>
        <p>$50/person</p>
      </Typography>

      <SectionDivider/>

      <Typography variant="h5" gutterBottom>
        Pre-Ball <StyledLink internal={true} to="/workshops">workshops</StyledLink>:
      </Typography>

      <Typography variant="h6" gutterBottom>
        September 24, October 15 and 29th<br />
        3-5pm<br/>
        <StyledLink to="https://www.renpdx.org/">A Renaissance School</StyledLink><br />
        234 S Bancroft St, Portland, OR 97239
      </Typography>

      <SectionDivider/>

      <Typography variant="h4" fontStyle="italic" gutterBottom>
        Registration Opening Soon
      </Typography>
    </StyledPaper>
  );
}
