import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import commafy from '../../utils/digitGroup';

function Hero(props) {
  const { refMostPicked, data } = props;

  const CustomButton = styled(Button)({
    boxShadow: '0 8px 15px rgba(50, 82, 223, 0.3)',
    '&:hover': {
      boxShadow: '0 8px 15px rgba(50, 82, 223, 0.5)',
    },
    '&:active': {
      boxShadow: '0 8px 15px rgba(50, 82, 223, 0.5)',
    },
  });

  const showMostPicked = () => {
    window.scrollTo({
      top: refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="section"
      className="hero"
      sx={{
        display: 'flex',
        alignItems: { xs: 'center', lg: 'flex-end' },
        justifyContent: 'space-between',
        mt: { xs: '30px', md: '50px' },
        mb: { xs: '30px', md: '50px' },
        flexDirection: { xs: 'column', md: 'row' },
        overflowX: 'hidden',
      }}
    >
      <Box component="div" className="hero-content" sx={{ flexGrow: 1 }}>
        <Typography
          color="secondary.main"
          variant="h3"
          sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '2.625rem', lineHeight: 1.5 }}
        >
          Forget Busy Work, <br />
          Start Next Vacation
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300,
            color: '#b0b0b0',
            maxWidth: '335px',
            wordWrap: 'break-word',
            mt: '20px',
            mb: '30px',
            lineHeight: 1.63,
          }}
        >
          We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
        </Typography>
        <CustomButton
          variant="contained"
          size="large"
          sx={{
            textTransform: 'none',
            fontFamily: 'Poppins, sans-serif',
            width: { xs: '100%', md: 'auto' },
            mb: '82px',
            p: '12px 35px',
          }}
          onClick={showMostPicked}
        >
          Show Me Now
        </CustomButton>
        <Box
          className="hero-content__icons"
          component="div"
          sx={{ display: 'flex', alignItems: 'center', gap: '50px' }}
        >
          <Box fontFamily="Poppins, sans-serif" fontWeight={500}>
            <img src="/images/icons/ic_traveler.svg" width={32} height={32} />
            <Box component="p" color="secondary.main" sx={{ marginBlockStart: '10px', marginBlockEnd: 0 }}>
              {commafy(data.travelers)}{' '}
              <Box component="span" color="#b0b0b0" fontWeight={300}>
                travelers
              </Box>
            </Box>
          </Box>
          <Box fontFamily="Poppins, sans-serif" fontWeight={500}>
            <img src="/images/icons/icon-treasure.svg" width={32} height={32} />
            <Box component="p" color="secondary.main" sx={{ marginBlockStart: '10px', marginBlockEnd: 0 }}>
              {commafy(data.treasures)}{' '}
              <Box component="span" color="#b0b0b0" fontWeight={300}>
                treasures
              </Box>
            </Box>
          </Box>
          <Box fontFamily="Poppins, sans-serif" fontWeight={500}>
            <img src="/images/icons/ic_location.svg" width={32} height={32} />
            <Box component="p" color="secondary.main" sx={{ marginBlockStart: '10px', marginBlockEnd: 0 }}>
              {commafy(data.cities)}{' '}
              <Box component="span" color="#b0b0b0" fontWeight={300}>
                cities
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        className="hero-banner"
        sx={{ display: { xs: 'none', md: 'block' }, position: 'relative', width: { md: '40%', lg: 'auto' } }}
      >
        <Box
          className="hero-banner__picture"
          sx={{
            // width: { md: 260, lg: 520 },
            // height: { md: 205.31, lg: 410.62 },
            width: 520,
            height: 410.62,
            position: 'absolute',
            top: { md: -200, lg: -40 },
            left: { md: 10, lg: -40 },
            zIndex: 5,
          }}
        >
          <img src="/images/hero-banner.jpg" className="hero-banner__picture__thumb" alt="banner" />
        </Box>
        <Box
          component="div"
          className="hero-banner__frame"
          sx={{
            border: '2px solid #e5e5e5',
            // width: { md: 253, lg: 506 },
            // height: { md: 192.125, lg: 398.25 },
            display: { md: 'none', lg: 'block' },
            width: 506,
            height: 398.25,
            borderRadius: '15px',
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default Hero;
