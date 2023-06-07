import { COVID_POLICY_URL, EMAIL_CONTACT } from "config";
import { mailtoLink, websiteLink } from "utils";
import { Typography } from '@mui/material';
import { StyledLink } from 'components/Layout/SharedStyles';

export default function IntroHeader() {
  return (
    <>
      <Typography gutterBottom={true}>Here is some information about the dance.</Typography>
      <Typography gutterBottom={true}><strong>Covid policy:</strong> Summary here. PCDC's full Covid policy is available <StyledLink to={websiteLink(COVID_POLICY_URL)}>here</StyledLink>.</Typography>
      <Typography gutterBottom={true}>Questions? Email <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.</Typography>
    </>
  );
}
