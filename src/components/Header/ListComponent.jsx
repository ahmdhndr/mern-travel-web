import { Box, Button, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link, useLocation } from 'react-router-dom';

function ListComponent() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ width: { xs: 250, md: 'auto' } }}>
      <List sx={{ display: { xs: 'block', md: 'flex' }, alignItems: 'center' }}>
        <Fade delay={100} cascade damping={0.3} triggerOnce>
          <ListItem disablePadding={!isMobile} sx={{ width: 'auto' }}>
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
          </ListItem>
          <ListItem disablePadding={!isMobile} sx={{ width: 'auto' }}>
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
                Browse By
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding={!isMobile} sx={{ width: 'auto' }}>
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
          </ListItem>
          <ListItem disablePadding={!isMobile} sx={{ width: 'auto' }}>
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
          </ListItem>
        </Fade>
      </List>
    </Box>
  );
}

export default ListComponent;
