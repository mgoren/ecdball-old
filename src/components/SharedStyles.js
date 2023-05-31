import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;
Container.displayName = 'S.Container';

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
Box.displayName = 'S.Box';

export const TopBox = styled(Box)`
  padding: 0 24px 24px 24px;

  &.desktop {
    border-top: 10px solid var(--color-darkpurple);
  }
`;
TopBox.displayName = 'S.TopBox';


// headings, text, links

export const Subhead = styled.h4`
  padding-top: 22px;
`;
Subhead.displayName = 'S.Subhead';

export const Text = styled.div`
  padding: 10px 24px 1rem 24px;
`;
Text.displayName = 'S.Text';

export const Link = styled.a`
  color: var(--color-link);
  cursor: pointer;

  &:hover {
    color: var(--color-link-hover);
  }
`;


// spacing
export const Spacer = styled.div`
  height: 2rem;
`;
Spacer.displayName = 'S.Spacer';
