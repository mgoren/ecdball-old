import { TITLE } from 'config';
import { StyledPaper } from 'components/Layout/SharedStyles';
import { Typography, Divider } from "@mui/material";

export default function Header({ titleText = TITLE, children }) {
  return (
    <StyledPaper>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {titleText}
      </Typography>
      <Divider component="hr" sx={{borderBottomWidth: 4, mb: 2 }}/>
      {children}
    </StyledPaper>
  );
}
