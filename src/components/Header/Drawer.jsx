import { Drawer, SwipeableDrawer } from '@mui/material';
import React from 'react';
import ListComponent from './ListComponent';

function DrawerComponent(props) {
  const { open, onOpen, onClose } = props;
  return (
    <SwipeableDrawer anchor="right" variant="temporary" onOpen={onOpen} open={open} onClose={onClose}>
      <ListComponent />
    </SwipeableDrawer>
  );
}

export default DrawerComponent;
