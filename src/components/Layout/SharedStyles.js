import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import { Button, Paper, Link, Typography } from '@mui/material';
import { paperStyle } from './LayoutStyles';

export const StyledPaper = (props) => {
  const theme = useTheme();
  return <Paper sx={paperStyle(theme)} {...props} />;
};

export const StyledGreyButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.backButton.main,
  color: theme.palette.backButton.main,
  '&:hover': { 
    borderColor: theme.palette.backButton.hover,
    color: theme.palette.backButton.hover,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
  '&:active': { 
    borderColor: theme.palette.backButton.active,
    color: theme.palette.backButton.active,
  },
  '&:focus': {
    borderColor: theme.palette.backButton.hover,
    color: theme.palette.backButton.hover,
  },
}));

export const StyledLink = ({ children, to, ...props }) => {
  return (
    <Link color="secondary" target="_blank" rel="noreferrer" href={to} {...props}>
      {children}
    </Link>
  );
}

export const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
