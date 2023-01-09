import { Box } from '@mui/material';
import React from 'react';
import FeatureItem from './FeatureItem';

function FeatureList(props) {
  const { features } = props;
  return (
    <Box
      className="most-picked__featured__container"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        width: '100%',
        gap: '30px',
      }}
    >
      {features.map((feature, i) => (
        <FeatureItem key={feature._id} csx={i === 0 ? 'grid-row-span-2' : 'grid-row-auto'} {...feature} />
      ))}
    </Box>
  );
}

export default FeatureList;
