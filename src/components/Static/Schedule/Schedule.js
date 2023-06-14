import { Typography, Box, Divider } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, Paragraph, SectionDivider } from 'components/Layout/SharedStyles';

export default function Schedule() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>

      <PageTitle>
        Portland English Country Dance Ball<br />
        Weekend Schedule
      </PageTitle>

      <Typography variant="body2" align="center">
        <p>
          (This page is our Weekend schedule - for our pre-Ball workshops, 
          go <StyledLink to="/workshops">here)</StyledLink>
        </p>
      </Typography>

      <Divider component="hr" sx={{borderBottomWidth: 4, mt: 4, mb: 4}}/>

      <Typography variant="h5" align="center" gutterBottom>
        <p>
        Friday October 28, 2022
        </p>
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          mt: 4,
          mb: 2,
          columnGap: 2
        }}
        align="center"
      >
        <Box>
          <Paragraph>
            <strong>Pre-Ball Dance</strong> <br />
            7:30pm – 10:30pm
          </Paragraph>

          <Paragraph>
            <StyledLink to="http://oaksparkdancepavilion.com/" target="_blank" rel="noreferrer">Oaks Park Dance Pavilion</StyledLink><br />
            7805 Oaks Park Way<br />
            Portland, OR 97202<br />
          </Paragraph>

          <Paragraph>
            $10 admission fee (not included in the Ball registration)
          </Paragraph>
        </Box>
        <Box>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d358132.1996215507!2d-122.662034!3d45.471661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950ae61a3f21f5%3A0x8e96e1b9b9ac2b5c!2s7805%20SE%20Oaks%20Park%20Way%2C%20Portland%2C%20OR%2097202!5e0!3m2!1sen!2sus!4v1686634645346!5m2!1sen!2sus" 
          title="Google map embed for Friday dance location"  
          style={{border: 0}} allowfullscreen="" loading="lazy" 
          width={250} height={250}
          referrerpolicy="no-referrer-when-downgrade"></iframe>

        </Box>
      </Box>

      <Paragraph align="center">
        Our regular Friday night English dance will be held at the Oaks Park 
        Dance Pavilion.  The program will include some of the Ball dances plus 
        many other delightful dances. Let new friends know who you are - bring 
        your own badge (or use one of our paper ones) for this dance. 
      </Paragraph>

      <SectionDivider />

    
    </StyledPaper>
  )  
}
