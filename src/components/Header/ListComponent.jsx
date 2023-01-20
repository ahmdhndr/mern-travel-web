import { Box, Button, List, ListItem, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link, useLocation } from 'react-router-dom';

function ListComponent() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box className="navigation">
      <List className="navigation__menu-list">
        <Fade delay={100} cascade damping={0.3} triggerOnce>
          <ListItem disablePadding={!isMobile}>
            <Link to="/">
              <Button
                variant="text"
                className={`nav-menu__item color-primary ${location.pathname === '/' ? 'active' : ''}`}
                sx={{
                  textTransform: 'none',
                }}
              >
                Home
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding={!isMobile}>
            <Link to="/browse">
              <Button
                variant="text"
                className={`nav-menu__item color-primary ${location.pathname === '/browse' ? 'active' : ''}`}
                sx={{
                  textTransform: 'none',
                }}
              >
                Browse By
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding={!isMobile}>
            <Link to="/stories">
              <Button
                variant="text"
                className={`nav-menu__item color-primary ${location.pathname === '/stories' ? 'active' : ''}`}
                sx={{
                  textTransform: 'none',
                }}
              >
                Stories
              </Button>
            </Link>
          </ListItem>
          <ListItem disablePadding={!isMobile}>
            <Link to="/agents">
              <Button
                variant="text"
                className={`nav-menu__item color-primary ${location.pathname === '/agents' ? 'active' : ''}`}
                sx={{
                  textTransform: 'none',
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
