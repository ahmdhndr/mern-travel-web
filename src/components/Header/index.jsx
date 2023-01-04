import { Box, Button, Container, Divider, Toolbar } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandIcon from '../BrandIcon';

function Header() {
  const location = useLocation();

  return (
    <>
      <Container component="header" sx={{ position: 'relative' }}>
        <Box sx={{ flexGrow: 1, py: 1 }}>
          <Toolbar
            sx={{
              backgroundColor: 'transparent',
              boxShadow: 'none',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <BrandIcon />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link to="/">
                <Button
                  variant="text"
                  className={`nav-menu__item ${location.pathname === '/' ? 'active' : ''}`}
                  sx={{
                    textTransform: 'none',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    color: '#152C5B',
                    fontSize: '1rem',
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/browse">
                <Button
                  variant="text"
                  className={`nav-menu__item ${location.pathname === '/browse' ? 'active' : ''}`}
                  sx={{
                    textTransform: 'none',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    color: '#152C5B',
                    fontSize: '1rem',
                  }}
                >
                  Browse by
                </Button>
              </Link>
              <Link to="/stories">
                <Button
                  variant="text"
                  className={`nav-menu__item ${location.pathname === '/stories' ? 'active' : ''}`}
                  sx={{
                    textTransform: 'none',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    color: '#152C5B',
                    fontSize: '1rem',
                  }}
                >
                  Stories
                </Button>
              </Link>
              <Link to="/agents">
                <Button
                  variant="text"
                  className={`nav-menu__item ${location.pathname === '/agents' ? 'active' : ''}`}
                  sx={{
                    textTransform: 'none',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    color: '#152C5B',
                    fontSize: '1rem',
                  }}
                >
                  Agents
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Box>
      </Container>
      <Divider />
    </>
  );
}

export default Header;
