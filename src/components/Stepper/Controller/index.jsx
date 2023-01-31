import { Box, Grid } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Controller(props) {
  return (
    <Fade triggerOnce>
      <Box component="section" sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <Box>
          <Box>{props.children}</Box>
        </Box>
      </Box>
    </Fade>
  );
}
