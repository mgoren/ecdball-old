import Title from 'components/Title';
import { TITLE } from 'config';
import { StyledPaper } from 'components/Layout/SharedStyles';

export default function Header({ titleText = TITLE, children }) {
  return (
    <StyledPaper>
      <Title text={titleText} />
      {children}
    </StyledPaper>
  );
}
