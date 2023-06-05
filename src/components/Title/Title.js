import { TITLE } from 'config';
import { Typography, Divider } from "@mui/material";

export default function Title({ text = TITLE, classes }) {
  return (
    <>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {text}
      </Typography>
      <Divider component="hr" sx={{borderBottomWidth: 1, mb: 2 }}/>
    </>
  );
}