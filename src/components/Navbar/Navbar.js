import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Container, Menu, Link, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import ColorModeToggle from 'components/ColorModeToggle';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Welcome', path: '/welcome' },
  { title: 'Band & Caller', path: '/staff' },
  { title: 'Workshops', path: '/workshops' },
  { title: 'Schedule', path: '/schedule' },
  { title: 'Dances', path: '/dances' },
  { title: 'Fragrance-Free', path: '/fragrance' },
  { title: 'Contact Us', path: '/contact' },
  { title: 'Ways to Pay', path: '/waystopay' },
  { title: 'Registration', path: '/registration' }
];

export default function Navbar({ toggleColorMode }) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="relative" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit" aria-label="navigation menu" aria-controls="menu-appbar" aria-haspopup="true">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <Link
                  component={RouterLink}
                  to={page.path}
                  key={page.title}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  onClick={handleCloseNavMenu}
                >
                  <ListItem>
                    <Typography textAlign="center">{page.title}</Typography>
                  </ListItem>
                </Link>
              ))}
            </Menu>
            {/* <ListItem sx={{ my: 2, color: 'inherit', display: 'block' }}>
              <Typography textAlign="center">ECD Ball 2023</Typography>
            </ListItem> */}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link
                component={RouterLink}
                to={page.path}
                key={page.title}
                style={{ textDecoration: 'none', color: 'inherit' }}
                onClick={handleCloseNavMenu}
              >
                <ListItem sx={{ my: 2, color: 'inherit', display: 'block', pt: 0, pb: 0 }}>
                  {page.title}
                </ListItem>
              </Link>
            ))}
          </Box>
          {/* {window.location.hostname === 'localhost' && <Typography sx={{ color: 'red', fontWeight: 'bold' }}>[ LOCALHOST ]</Typography>} */}
          <ColorModeToggle toggleColorMode={toggleColorMode} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
