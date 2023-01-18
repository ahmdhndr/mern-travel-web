import { Box } from '@mui/material';
import React from 'react';
import { Slide } from 'react-awesome-reveal';

function TestimonyThumb(props) {
  const { imageUrl } = props;
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Slide triggerOnce>
        <Box
          component="div"
          className="border-radius-base"
          sx={{
            border: '2px solid #e5e5e5',
            width: '356px',
            height: '486px',
            position: 'absolute',
            top: 0,
            left: { md: -80, lg: 0 },
          }}
        />
        <Box
          className="container-thumb__image"
          sx={{
            zIndex: 5,
            height: '501.88px',
            width: '365.98px',
            position: 'absolute',
            top: 40,
            left: { md: -40, lg: 40 },
          }}
        >
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
