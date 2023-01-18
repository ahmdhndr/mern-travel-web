import { Box, Typography } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import FeatureList from './FeatureList';

function MostPicked(props) {
  const { data, refMostPickedTop } = props;
  return (
    <Box ref={refMostPickedTop} className="most-picked" component="section" sx={{ mb: { xs: '30px', md: '50px' } }}>
      <Fade triggerOnce delay={300}>
        <Typography
          className="most-picked__title"
          variant="h4"
          fontFamily="Poppins, sans-serif"
          fontSize="1.5rem"
          fontWeight={500}
          color="secondary.main"
          mb="20px"
        >
          Most Picked
        </Typography>
      </Fade>
      <FeatureList features={data} />
    </Box>
  );
}

export default MostPicked;
