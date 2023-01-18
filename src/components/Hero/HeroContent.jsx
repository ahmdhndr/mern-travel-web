import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import HeroContentIcons from './HeroContentIcons';

function HeroContent(props) {
  const { data, refMostPicked } = props;

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
    <Box>
      <Fade triggerOnce>
        <Typography
          color="secondary.main"
          variant="h3"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '2.625rem',
            lineHeight: 1.5,
            textAlign: { xs: 'center', md: 'left' },
          }}
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
            width: '100%',
            textAlign: { xs: 'center', md: 'left' },
            maxWidth: '335px',
            wordWrap: 'break-word',
            mx: { xs: 'auto', md: 0 },
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
        <HeroContentIcons data={data} />
      </Fade>
    </Box>
  );
}

export default HeroContent;
