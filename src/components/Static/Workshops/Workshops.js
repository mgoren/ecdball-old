import { Box } from '@mui/material';
import { StyledLink, StyledPaper, PageTitle, Paragraph, SectionDivider, Header } from 'components/Layout/SharedStyles';

export default function Workshops() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>
      <PageTitle>
        Workshops
      </PageTitle>

      <Header>
        Pre-ball Workshops
      </Header>

      <Paragraph> 
        In the Portland area, there will be three Sunday pre-ball workshop sessions:
      </Paragraph>

      <Paragraph>
        <strong>September 24:</strong> Erik Weberg calling; music by Bill Tomczak and Lisa Scott<br />
        <strong>October 15:</strong> Erik Weberg calling; music by Betsy Branch, Bill Tomczak and Lisa Scott<br />
        <strong>October 29:</strong> Erik Weberg calling; music by Betsy Branch, Bill Tomczak and Lisa Scott
      </Paragraph>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Paragraph>
          <strong>Time:</strong> 3:00p-5:00p
          </Paragraph>

          <Paragraph>
            <strong>Location:</strong><br />
            <StyledLink to="https://www.renpdx.org/">A Renaissance School</StyledLink><br />
            234 S Bancoft St<br />
            Portland, OR 97239<br />
          </Paragraph>

          <Paragraph>
            Suggested donation is $10 - $15
          </Paragraph>
        </Box>

        <Box sx={{ mt: 1 }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11187.605253951842!2d-122.675108!3d45.491932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b6b14393093%3A0x166aad2b1a113960!2s234%20S%20Bancroft%20St%2C%20Portland%2C%20OR%2097239!5e0!3m2!1sen!2sus!4v1687468886079!5m2!1sen!2sus" 
          title="Google map embed for A Renaissance School"  
          style={{border: 0}} allowFullScreen="" loading="lazy" 
          width={230} height={230}
          referrerPolicy="no-referrer-when-downgrade" />
        </Box>
      </Box>

      <Paragraph align="justify">
        <strong>NOTE:</strong> We want to protect the floor, so please be sure to bring dancing shoes 
        or warm socks.
      </Paragraph>

      <Paragraph align="justify">
        The ball workshops are designed for learning the dances on the ball program and are not intended 
        to be an introduction to English country dance. Each of these workshops will focus on different 
        ball dances and styling tips. Familiarity with English figures and geography will be assumed at 
        the workshops.
      </Paragraph>

      <Paragraph align="justify">
        If you are new to English country dance, please attend the <StyledLink to="https://portlandcountrydance.org/english-country-dance">PCDC Friday Night English Dance</StyledLink> as 
        often as possible prior to participating in the workshops.
      </Paragraph>

      <SectionDivider />

      <Header sx={{ mb: 0 }}>
        "Day of" Ball Workshop
      </Header>

      <Paragraph variant="body2" sx={{ mt: 0 }}>
        <em>(Ball attendees only - included in the price of registration)</em>
      </Paragraph>

      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Paragraph>
            <strong>Date:</strong> November 4
          </Paragraph>

          <Paragraph>
            <strong>Time:</strong> 12:00 – 2:30
          </Paragraph>

          <Paragraph>
            <strong>Location:</strong><br />
            <StyledLink to="https://www.oakspark.com/dance-pavilion">Oaks Park Dance Pavilion</StyledLink><br />
            7805 Oaks Park Way<br />
            Portland, OR 97202<br />
          </Paragraph>

          <Paragraph>
            There is a $3 daily parking charge at Oaks Park.
          </Paragraph>
        </Box>

        <Box sx={{ mt: 1 }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d358132.1996215507!2d-122.662034!3d45.471661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950ae61a3f21f5%3A0x8e96e1b9b9ac2b5c!2s7805%20SE%20Oaks%20Park%20Way%2C%20Portland%2C%20OR%2097202!5e0!3m2!1sen!2sus!4v1686634645346!5m2!1sen!2sus" 
            title="Google map embed for Oaks Park Dance Pavilion"  
            style={{border: 0}} allowFullScreen="" loading="lazy" 
            width={230} height={230}
            referrerPolicy="no-referrer-when-downgrade" />
        </Box>
      </Box>

      <Paragraph align="justify">
        The afternoon workshop will include a review of most of the Ball dances and styling suggestions for 
        greater dancing pleasure. We will spend time on those dances that are a bit more challenging, so 
        that in the evening more time can be spent dancing rather than learning. We strongly advise 
        attendance at the workshop - plus it is fun!
      </Paragraph>
    </StyledPaper>
  );
}
