import { Grid } from '@mui/material';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import TestimonyContent from './TestimonyContent';
import TestimonyThumb from './TestimonyThumb';

function Testimony(props) {
  const { refMostPicked, data } = props;

  return (
    <Grid
      className="hero-container"
      container
      wrap="nowrap"
      sx={{
        mt: { xs: '30px', md: '50px' },
        mb: { xs: '80px', md: '100px' },
        mx: 'auto',
        position: 'relative',
        height: { xs: 'auto', md: '541px' },
      }}
    >
      <Grid className="hero-container__content" item md={7} lg={8} sx={{ m: 'auto', order: 2 }}>
        <TestimonyContent data={data} refMostPicked={refMostPicked} />
      </Grid>
      <Grid className="hero-container__thumb" item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <TestimonyThumb imageUrl={data.imageUrl} />
      </Grid>
    </Grid>
  );
}

export default Testimony;
