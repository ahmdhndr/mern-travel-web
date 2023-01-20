import { Box } from '@mui/material';
import React from 'react';
import { Slide } from 'react-awesome-reveal';

function TestimonyThumb(props) {
  const { imageUrl } = props;
  return (
    <Box className="testimony-thumb__container">
      <Slide triggerOnce>
        <Box component="div" className="testimony-thumb__frame border-radius-base" />
        <Box className="testimony-thumb__image">
          <img
            src={imageUrl}
            className="border-radius-base border-radius-bottom-right-lg img-cover"
            alt="Thumbnail Hero"
          />
        </Box>
      </Slide>
    </Box>
  );
}

export default TestimonyThumb;
