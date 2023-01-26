import { Grid } from '@mui/material';
import React from 'react';
import TestimonyContent from './TestimonyContent';
import TestimonyThumb from './TestimonyThumb';

export default function Testimony(props) {
  const { refMostPicked, data } = props;

  return (
    <Grid
      className="testimony-container"
      container
      wrap="nowrap"
      sx={{
        mt: { xs: '30px', sm: '50px' },
        mb: { xs: '80px', sm: '100px' },
        mx: 'auto',
        position: 'relative',
        height: { xs: 'auto', sm: '541px' },
      }}
    >
      <Grid className="testimony-text" item sm={7} sx={{ m: 'auto', order: 2 }}>
        <TestimonyContent data={data} refMostPicked={refMostPicked} />
      </Grid>
      <Grid className="testimony-illustration" item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
        <TestimonyThumb imageUrl={data.imageUrl} />
      </Grid>
    </Grid>
  );
}
