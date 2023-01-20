import { Box } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

function HeroThumb() {
  return (
    <Box className="hero-thumb__container">
      <Fade triggerOnce>
        <Box component="div" className="hero-thumb__frame border-radius-base" />
        <Box className="hero-thumb__image">
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
