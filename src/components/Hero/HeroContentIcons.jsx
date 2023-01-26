import { Box } from '@mui/material';
import React from 'react';
import commafy from '../../utils/digitGroup';

export default function HeroContentIcons(props) {
  const { data } = props;
  return (
    <Box className="hero-content__icons-container" component="div">
      <Box className="hero-content__icons-content">
        <img src="/images/icons/icon-traveler.svg" width={32} height={32} />
        <Box className="icons-text color-primary" component="p">
          {commafy(data.travelers)}{' '}
          <Box className="icons-span color-text" component="span">
            travelers
          </Box>
        </Box>
      </Box>
      <Box className="hero-content__icons-content">
        <img src="/images/icons/icon-treasure.svg" width={32} height={32} />
        <Box className="icons-text color-primary" component="p">
          {commafy(data.treasures)}{' '}
          <Box className="icons-span color-text" component="span">
            treasures
          </Box>
        </Box>
      </Box>
      <Box className="hero-content__icons-content">
        <img src="/images/icons/icon-location.svg" width={32} height={32} />
        <Box className="icons-text color-primary" component="p">
          {commafy(data.cities)}{' '}
          <Box className="icons-span color-text" component="span">
            cities
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
