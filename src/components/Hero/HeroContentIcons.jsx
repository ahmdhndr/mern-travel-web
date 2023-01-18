import { Box } from '@mui/material';
import React from 'react';
import commafy from '../../utils/digitGroup';

function HeroContentIcons(props) {
  const { data } = props;
  return (
    <Box className="hero-content__icons" component="div" sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
      <Box fontFamily="Poppins, sans-serif" fontWeight={500} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <img src="/images/icons/ic_traveler.svg" width={32} height={32} />
        <Box component="p" color="secondary.main" sx={{ marginBlockStart: '10px', marginBlockEnd: 0 }}>
          {commafy(data.travelers)}{' '}
          <Box component="span" color="#b0b0b0" fontWeight={300}>
            travelers
          </Box>
        </Box>
      </Box>
      <Box fontFamily="Poppins, sans-serif" fontWeight={500} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <img src="/images/icons/icon-treasure.svg" width={32} height={32} />
        <Box component="p" color="secondary.main" sx={{ marginBlockStart: '10px', marginBlockEnd: 0 }}>
          {commafy(data.treasures)}{' '}
          <Box component="span" color="#b0b0b0" fontWeight={300}>
            treasures
          </Box>
        </Box>
      </Box>
      <Box fontFamily="Poppins, sans-serif" fontWeight={500} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <img src="/images/icons/ic_location.svg" width={32} height={32} />
        <Box component="p" color="secondary.main" sx={{ marginBlockStart: '10px', marginBlockEnd: 0 }}>
          {commafy(data.cities)}{' '}
          <Box component="span" color="#b0b0b0" fontWeight={300}>
            cities
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default HeroContentIcons;
