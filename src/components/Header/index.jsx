import { AppBar, Box, Container, Divider, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import BrandIcon from '../BrandIcon';
import { DragHandle } from '@mui/icons-material';
import DrawerComponent from './Drawer';
import ListComponent from './ListComponent';
import { Fade } from 'react-awesome-reveal';

function Header() {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Container>
        <AppBar sx={{ py: 1, bgcolor: 'transparent', position: 'static', boxShadow: 'none' }}>
          <Toolbar
            sx={{
              px: { xs: 0, md: 0 },
              backgroundColor: 'transparent',
              boxShadow: 'none',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Fade triggerOnce>
              <Box>
                <BrandIcon />
              </Box>
            </Fade>
            <Fade delay={200} triggerOnce>
              <IconButton
                edge="start"
                color="primary"
                sx={{ display: { xs: 'block', md: 'none' } }}
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
      <Divider />
    </>
  );
}

export default Header;
