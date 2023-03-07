import styled from 'styled-components';

// boxes

export const Box = styled.div`
  background-color: white;
  border: 1px solid #dadce0;
  border-radius: 8px;
  padding: 40px;

  &.desktop {
    margin-top: 12px;
  }
`;
Box.displayName = 'SS.Box';

export const TopBox = styled(Box)`
  padding: 0 24px 24px 24px;

  &.desktop {
    border-top: 10px solid var(--color-darkpurple);
  }
`;
TopBox.displayName = 'SS.TopBox';


// headings, text, links

export const Subhead = styled.h4`
  padding-top: 22px;
`;
Subhead.displayName = 'SS.Subhead';

export const Text = styled.div`
  padding: 10px 24px 1rem 24px;
`;
Text.displayName = 'SS.Text';

export const Link = styled.a`
  color: var(--color-link);
`;


// spacing
export const Spacer = styled.div`
  height: 2rem;
`;
Spacer.displayName = 'SS.Spacer';
