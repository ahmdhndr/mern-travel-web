import { Box } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

function HeroThumb() {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Fade triggerOnce>
        <Box
          component="div"
          className="border-radius-base"
          sx={{
            border: '2px solid #e5e5e5',
            position: 'absolute',
            bottom: 0,
            width: 520,
            height: 410.62,
            right: { md: -200, lg: 0 },
            ml: 'auto',
          }}
        />
        <Box
          className="container-thumb__image"
          sx={{
            zIndex: 5,
            height: { md: '95%', lg: 'auto' },
            position: 'absolute',
            top: 0,
            right: { md: -150, lg: 40 },
          }}
        >
          <img
            src="/images/hero-banner.jpg"
            className="border-radius-base border-radius-top-left-lg img-cover"
            alt="Thumbnail Hero"
          />
        </Box>
      </Fade>
    </Box>
  );
}

export default HeroThumb;
