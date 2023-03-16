import { isMobile } from "react-device-detect";
import { COVID_POLICY_URL, EMAIL_CONTACT } from "config";
import { mailtoLink, websiteLink } from "utils";
import * as S from './Header-styles';
import Title from 'components/Title';

export default function Header() {

  return (
    <S.TopBox className={isMobile ? 'mobile' : 'desktop'}>
      <Title />
      <S.Text>Here is some information about the dance.</S.Text>
      <S.Text><strong>Covid policy:</strong> Summary here. PCDC's full Covid policy is available <S.Link href={websiteLink(COVID_POLICY_URL)} target="_blank" rel="noreferrer">here</S.Link>.</S.Text>
      <S.Text>Questions? Email <S.Link href={mailtoLink(EMAIL_CONTACT)}>{EMAIL_CONTACT}</S.Link>.</S.Text>
    </S.TopBox>
  );
}