import { Box, Grid } from '@mui/material';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import HeroContent from './HeroContent';
import HeroThumb from './HeroThumb';

export default function Hero(props) {
  const { refMostPicked, data } = props;

  return (
    <Box component="section" className="hero-container">
      <Slide direction="up" triggerOnce>
        <Grid
          container
          wrap="nowrap"
          sx={{
            mt: { xs: '30px', sm: '50px' },
            mb: { xs: '30px', sm: '50px' },
            mx: 'auto',
          }}
        >
          <Grid className="hero-text" item sm={7} md={6} sx={{ m: 'auto' }}>
            <HeroContent data={data} refMostPicked={refMostPicked} />
          </Grid>
          <Grid className="hero-illustration" item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <HeroThumb />
          </Grid>
        </Grid>
      </Slide>
    </Box>
  );
}
