import { Grid } from '@mui/material';
import React from 'react';
import TestimonyContent from './TestimonyContent';
import TestimonyThumb from './TestimonyThumb';

function Testimony(props) {
  const { refMostPicked, data } = props;

  return (
    <Grid
      className="testimony-container"
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
      <Grid className="testimony-text" item md={7} sx={{ m: 'auto', order: 2 }}>
        <TestimonyContent data={data} refMostPicked={refMostPicked} />
      </Grid>
      <Grid className="testimony-illustration" item md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <TestimonyThumb imageUrl={data.imageUrl} />
      </Grid>
    </Grid>
  );
}

export default Testimony;
