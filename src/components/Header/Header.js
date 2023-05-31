import { isMobile } from "react-device-detect";
import * as S from './Header-styles';
import Title from 'components/Title';
import { TITLE } from 'config';

export default function Header({ titleText = TITLE, children }) {
  return (
    <S.TopBox className={isMobile ? 'mobile' : 'desktop'}>
      <Title text={titleText} />
      {children}
    </S.TopBox>
  );
}
