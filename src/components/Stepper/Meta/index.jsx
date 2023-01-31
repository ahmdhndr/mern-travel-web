import { Box, Typography } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Meta({ data, current }) {
  return (
    <Fade delay={300} triggerOnce>
      <Box sx={{ mb: '30px', textAlign: 'center' }}>
        <Typography variant="h3" className="font-base font-36 font-weight-bold color-primary" sx={{ mb: '4px' }}>
          {data[current]?.title}
        </Typography>
        <Typography variant="body2" className="font-base font-18 color-text" sx={{ mb: '50px' }}>
          {data[current]?.description}
        </Typography>
      </Box>
    </Fade>
  );
}
