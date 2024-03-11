import { EMAIL_CONTACT } from "config";
import { mailtoLink } from "utils";
import { Typography } from '@mui/material';
import { StyledLink } from 'components/Layout/SharedStyles';

export default function IntroHeader() {
  return (
    <>
      <strong><font color='red'>TESTING ONLY - NOT FOR EVENT REGISTRATION</font></strong>
      <Typography gutterBottom={true}>Questions? Email <StyledLink to={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</StyledLink>.</Typography>
    </>
  );
}
