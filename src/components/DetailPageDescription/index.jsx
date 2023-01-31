import { Box, Typography } from '@mui/material';
import React from 'react';
import commafy from '../../utils/digitGroup';
import parser from 'html-react-parser';
import { Fade, Slide } from 'react-awesome-reveal';

export default function DetailPageDescription({ data }) {
  return (
    <Slide direction="up" triggerOnce delay={400}>
      <Fade triggerOnce delay={500}>
        <Typography variant="h4" className="font-base font-20 font-weight-semibold color-primary">
          About the place
        </Typography>
        <Box className="detail-page-description color-text">{parser(data.description)}</Box>
        <Box className="container-grid grid-detail-page-icon" sx={{ mt: '30px', gap: { xs: '15px', lg: '20px' } }}>
          {data.features.map((feature, i) => (
            <Box key={feature._id} className="hero-content__icons-content">
              <img src={feature.imageUrl} width={32} height={32} />
              <Typography className="font-base font-weight-semibold color-primary">
                {commafy(feature.qty)}{' '}
                <Box component="span" className="icons-span color-text">
                  {feature.name}
                </Box>
              </Typography>
            </Box>
          ))}
        </Box>
      </Fade>
    </Slide>
  );
}
