import { Box, Typography } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Breadcrumb from '../Breadcrumb';
import './index.css';

export default function DetailPageTitle({ data, breadcrumb }) {
  return (
    <Box
      className="detail-page__head"
      sx={{
        mt: { xs: '30px', sm: '50px' },
        mb: { xs: '30px', sm: '50px' },
        mx: 'auto',
      }}
    >
      <Box className="detail-page__grid">
        <Fade delay={100} cascade damping={0.2} triggerOnce>
          <Box className="detail-page__breadcrumbs">
            <Breadcrumb data={breadcrumb} />
          </Box>
          <Box className="detail-page__title" sx={{ textAlign: 'center' }}>
            <Typography variant="h3" className="font-base font-36 font-weight-semibold color-primary">
              {data.name}
            </Typography>
            <Typography variant="body2" className="font-base font-18 color-text">
              {data.city}, {data.country}
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}
