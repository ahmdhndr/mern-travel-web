import { Box } from '@mui/material';
import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import FeatureItem from './FeatureItem';

function FeatureList(props) {
  const { features } = props;
  return (
    <Box
      className="container-grid"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gridAutoFlow: 'dense',
        gap: '30px',
        position: 'relative',
      }}
    >
      {features.map((feature, i) => (
        <Box key={feature._id} className={i === 0 ? 'row-span-2' : 'row-auto'}>
          <Slide triggerOnce direction="up" delay={300 * i} cascade>
            <Fade triggerOnce delay={400 * i} cascade>
              <FeatureItem {...feature} />
            </Fade>
          </Slide>
        </Box>
      ))}
    </Box>
  );
}

export default FeatureList;
