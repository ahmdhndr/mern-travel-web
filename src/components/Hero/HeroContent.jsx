import { Box, Typography } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Button from '../Buttons';
import HeroContentIcons from './HeroContentIcons';

export default function HeroContent(props) {
  const { data, refMostPicked } = props;

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
          variant="h3"
          className="font-base font-42 font-weight-bold color-primary"
          sx={{ textAlign: { xs: 'center', sm: 'left' } }}
        >
          Forget Busy Work, <br />
          Start Next Vacation
        </Typography>
        <Typography
          variant="body2"
          className="font-base color-text"
          sx={{
            textAlign: { xs: 'center', sm: 'left' },
            maxWidth: '340px',
            lineHeight: 'normal',
            mx: { xs: 'auto', sm: 0 },
            mt: '20px',
            mb: '30px',
          }}
        >
          We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
        </Typography>
        <Button onClick={showMostPicked}>Show Me Now</Button>
        <HeroContentIcons data={data} />
      </Fade>
    </Box>
  );
}
