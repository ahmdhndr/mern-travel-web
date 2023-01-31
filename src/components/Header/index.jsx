import { DragHandle } from '@mui/icons-material';
import { AppBar, Box, Container, Divider, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import BrandIcon from '../BrandIcon';
import DrawerComponent from './Drawer';
import ListComponent from './ListComponent';

export default function Header(props) {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (props.isCentered) {
    return (
      <>
        <Container>
          <AppBar className="header-container" sx={{ p: '24px 0', textAlign: 'center' }}>
            <Fade triggerOnce>
              <Box>
                <BrandIcon />
              </Box>
            </Fade>
          </AppBar>
        </Container>
        <Slide triggerOnce>
          <Divider />
        </Slide>
      </>
    );
  }

  return (
    <>
      <Container>
        <AppBar className="header-container" sx={{ p: '8px 0' }}>
          <Toolbar className="toolbar">
            <Fade triggerOnce>
              <Box>
                <BrandIcon />
              </Box>
            </Fade>
            <Fade delay={200} triggerOnce>
              <IconButton
                edge="start"
                color="primary"
                sx={{ display: { xs: 'block', sm: 'none' } }}
                aria-label="open drawer"
                onClick={() => setOpenDrawer(true)}
              >
                <DragHandle />
              </IconButton>
            </Fade>
            {isMobile ? (
              <DrawerComponent
                onOpen={() => setOpenDrawer(true)}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              />
            ) : (
              <ListComponent />
            )}
          </Toolbar>
        </AppBar>
      </Container>
      <Slide triggerOnce>
        <Divider />
      </Slide>
    </>
  );
}
