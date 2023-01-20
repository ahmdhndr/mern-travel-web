import { Grid } from '@mui/material';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import HeroContent from './HeroContent';
import HeroThumb from './HeroThumb';

function Hero(props) {
  const { refMostPicked, data } = props;

  return (
    <Slide direction="up" triggerOnce>
      <Grid
        className="hero-container"
        container
        wrap="nowrap"
        sx={{
          mt: { xs: '30px', md: '50px' },
          mb: { xs: '30px', md: '50px' },
          mx: 'auto',
        }}
      >
        <Grid className="hero-text" item md={7} lg={6} sx={{ m: 'auto' }}>
          <HeroContent data={data} refMostPicked={refMostPicked} />
        </Grid>
        <Grid className="hero-illustration" item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <HeroThumb />
        </Grid>
      </Grid>
    </Slide>
  );
}

export default Hero;
