import { Typography, Link, Box, Container, Divider } from '@mui/material';

export default function Home() {

  return (
    <Container align="center">
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
        <p>Dances led by<br/><Link href="/staff#BruceHamilton">Bruce Hamilton</Link></p>
        <p>
          Music by <em><Link href="/staff#FineCompanions">Fine Companions</Link></em><br />
          (<Link href="/staff#BetsyBranch">Betsy Branch</Link>,&nbsp;
          <Link href="/staff#LisaScott">Lisa Scott</Link><br/>
          <Link href="/staff#BillTomczak">Bill Tomczak</Link>,&nbsp;
          <Link href="/staff#ErikWeberg">Erik Weberg</Link>)
          </p>
      </Typography>

      <Typography variant="h5" gutterBottom>
        <p>Sound provided by <Link href="/staff#JohnOorthuys">John Oorthuys</Link></p>
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
        Pre-ball <Link href="workshops.htm">workshops</Link>:
      </Typography>
      <Typography variant="h6" gutterBottom>
        Oct 2, Oct 9, Oct 23 from 3-5pm<br/>
        <Link href="http://www.renpdx.org/" target="_blank" rel="noreferrer">A Renaissance School</Link><br />
        234 S Bancroft St, Portland, OR 97239
      </Typography>

      <Divider component="hr" sx={{borderBottomWidth: 4, mt: 4, mb: 4}}/>

      <Typography variant="h4" fontStyle="italic" gutterBottom>
        Registration opening soon
      </Typography>
    </Container>
  );
}
