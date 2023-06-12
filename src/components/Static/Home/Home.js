import { Typography, Box, Divider } from '@mui/material';
import { StyledLink, StyledPaper } from 'components/Layout/SharedStyles';

export default function Home() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }} align="center">
      <Typography variant="h4" gutterBottom>
        <p>
          Portland English Country Dance Ball<br />
          October 28-29, 2022
        </p>
      </Typography>

      <Box my={2}>
        <img src={process.env.PUBLIC_URL + '/ecdball/ecdball-logo.jpg'} alt="ball logo" style={{ width: "100%", height: "auto" }} />
      </Box>

      <Typography variant="h5" gutterBottom>
        <p>Dances led by<br/><StyledLink to="/staff#BruceHamilton">Bruce Hamilton</StyledLink></p>
        <p>
          Music by <em><StyledLink to="/staff#FineCompanions">Fine Companions</StyledLink></em><br />
          (
            <StyledLink to="/staff#BetsyBranch">Betsy Branch</StyledLink>,&nbsp;
            <StyledLink to="/staff#LisaScott">Lisa Scott</StyledLink><br/>
            <StyledLink to="/staff#BillTomczak">Bill Tomczak</StyledLink>,&nbsp;
            <StyledLink to="/staff#ErikWeberg">Erik Weberg</StyledLink>
          )
          </p>
      </Typography>

      <Typography variant="h5" gutterBottom>
        <p>Sound provided by <StyledLink to="/staff#JohnOorthuys">John Oorthuys</StyledLink></p>
      </Typography>

      <Typography variant="h5">
        All Ball weekend events at:
      </Typography>
      <Typography variant="h6">
          Oaks Park Dance Pavilion<br/>
          7805 SE Oaks Park Way<br/>
          Portland, Oregon 97202
        </Typography>
      
      <Typography variant="h5" gutterBottom>
        <p>$50/person</p>
      </Typography>

      <Box fontStyle="italic" my={2}>
        On Sunday, October 30, Ric Goldman hosts an après ball<br/>
        social gathering for Ball attendees
      </Box>

      <Divider component="hr" sx={{borderBottomWidth: 4, mt: 4, mb: 4}}/>

      <Typography variant="h5" gutterBottom>
        Pre-ball <StyledLink to="workshops.htm">workshops</StyledLink>:
      </Typography>
      <Typography variant="h6" gutterBottom>
        Oct 2, Oct 9, Oct 23 from 3-5pm<br/>
        <StyledLink to="http://www.renpdx.org/" target="_blank" rel="noreferrer">A Renaissance School</StyledLink><br />
        234 S Bancroft St, Portland, OR 97239
      </Typography>

      <Divider component="hr" sx={{borderBottomWidth: 4, mt: 4, mb: 4}}/>

      <Typography variant="h4" fontStyle="italic" gutterBottom>
        Registration opening soon
      </Typography>
    </StyledPaper>
  );
}
