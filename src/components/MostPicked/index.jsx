import { Box, Typography } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import FeatureList from './FeatureList';

function MostPicked(props) {
  const { data, refMostPickedTop } = props;
  return (
    <Box ref={refMostPickedTop} className="most-picked" component="section" sx={{ mb: { xs: '30px', md: '50px' } }}>
      <Fade triggerOnce delay={300}>
        <Typography variant="h4" className="font-base font-24 font-weight-semibold color-primary" sx={{ mb: '20px' }}>
          Most Picked
        </Typography>
      </Fade>
      <FeatureList features={data} />
    </Box>
  );
}

export default MostPicked;
