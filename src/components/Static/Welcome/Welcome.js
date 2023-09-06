import { StyledLink, StyledPaper, PageTitle, Paragraph, Header } from 'components/Layout/SharedStyles';

export default function Welcome() {

  return (
    <StyledPaper extraStyles={{ maxWidth: 750 }}>
      <PageTitle>
        Welcome!
      </PageTitle>

      <Header>
        COVID Safety Policy
      </Header>

      <Paragraph>
        Following are the COVID safety requirements for the 2023 Portland English Country Ball. 
        Should the public health situation require us to change these safety policies, attendees 
        will be notified by email and will be offered the option to cancel their registration and 
        receive a full refund.
      </Paragraph>

      <Paragraph>
        <strong>MASKING:</strong> Masking will be optional for this year's ball. Please respect everyone's choices 
        regarding masking. You are very welcome to wear a mask or to not wear a mask, depending on 
        your needs and comfort level.
      </Paragraph>

      <Paragraph>
        Should the public health situation require us to change these safety policies, we may change 
        this policy to require the wearing of a well-fitted mask.
      </Paragraph>

      <Paragraph>
        <strong>VACCINATIONS:</strong> As of September 5th, 2023 PCDC is no longer verifying vaccination status 
        (barring any unforeseen circumstances) at any events.
      </Paragraph>

      <Paragraph>
        <strong>TESTING:</strong> For the good of the community we would like it if you tested before you arrived at 
        the ball, though we will not ask for proof of a negative test.
      </Paragraph>

      <Paragraph>
        <strong>WAIVER:</strong> As of September 5th, 2023, PCDC is no longer requiring signed waivers to attend PCDC events.
      </Paragraph>

      <Paragraph>
        <strong>If you are sick or test positive for COVID,</strong> please do not attend the ball. We will issue a full 
        refund for dancers who need to cancel because of COVID symptoms, a positive test, or exposure 
        to COVID within the last 5 days. To be eligible for a refund, you need to <StyledLink internal={true} to="/contact">contact us</StyledLink> prior to 
        the ball.
      </Paragraph>

      <Header>
        Dancing
      </Header>

      <Paragraph>
        At the Ball, most dances will be walked through to remind dancers of the figures, and all dances will be prompted. 
        We encourage you to familiarize yourself with the <StyledLink internal={true} to="/dances">dances on the program</StyledLink> and 
        check out the information in our <StyledLink to="/ecdball/2023PortlandBall_DanceInstructions.pdf">Dance Instructions packet</StyledLink>.
      </Paragraph>

      <Header>
        Scholarships
      </Header>

      <Paragraph>
        We have a limited number of scholarships available. If you need a scholarship, please request it when you register.
      </Paragraph>

      <Header>
        Volunteering
      </Header>

      <Paragraph>
        We would love to have your help with the many small and easy tasks required to make this 
        Ball a success,  such as helping to set up and decorate the hall on Saturday morning or 
        packing things away after the ball.  You can sign up for volunteering on our registration 
        form, or email our <StyledLink to="mailto:volunteering@portlandecdball.info">volunteer coordinator</StyledLink> to 
        ask how you can help.
      </Paragraph>

      <Header>
        Hospitality
      </Header>

      <Paragraph>
        We will have limited opportunities for hosting traveling dancers. You can easily request 
        hospitality or offer hospitality on our registration form, or email 
        our <StyledLink to="mailto:hospitality@portlandecdball.info">hospitality coordinator</StyledLink>.
      </Paragraph>

      <Header>
        Portland Area Ball Workshops
      </Header>

      <Paragraph>
        In the Portland area, there will be three <StyledLink internal={true} to="/workshops">workshop sessions</StyledLink> in 
        September and October to prepare for the Ball.
      </Paragraph>

      <Header>
        Parking at Oaks Park
      </Header>

      <Paragraph>
        There is a $3/day parking fee at Oaks Park.
      </Paragraph>
    </StyledPaper>
  );
}
