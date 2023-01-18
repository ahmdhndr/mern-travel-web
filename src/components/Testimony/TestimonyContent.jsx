import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import Star from '../Star';

function TestimonyContent(props) {
  const { data } = props;

  const CustomButton = styled(Button)({
    boxShadow: '0 8px 15px rgba(50, 82, 223, 0.3)',
    '&:hover': {
      boxShadow: '0 8px 15px rgba(50, 82, 223, 0.5)',
    },
    '&:active': {
      boxShadow: '0 8px 15px rgba(50, 82, 223, 0.5)',
    },
  });

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Slide triggerOnce cascade direction="right" damping={0.2}>
        <Typography
          color="secondary.main"
          variant="h4"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.5,
            textAlign: { xs: 'center', md: 'left' },
            mb: '40px',
          }}
        >
          {data.name}
        </Typography>
        <Star value={data.rate} width={35} height={35} spacing={2} />
        <Typography
          color="secondary.main"
          variant="h3"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: '2rem',
            lineHeight: 1.5,
            textAlign: { xs: 'center', md: 'left' },
            my: 1,
          }}
        >
          {data.content}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300,
            color: '#b0b0b0',
            width: '100%',
            textAlign: { xs: 'center', md: 'left' },
            wordWrap: 'break-word',
            lineHeight: 1.63,
            mb: '50px',
          }}
        >
          {data.familyName}
          {', '}
          {data.familyOccupation}
        </Typography>
        <CustomButton
          variant="contained"
          size="large"
          sx={{
            textTransform: 'none',
            fontSize: '1.125rem',
            fontFamily: 'Poppins, sans-serif',
            width: { xs: '100%', md: 'auto' },
            p: '12px 35px',
          }}
          onClick={() => console.log('clicked')}
        >
          Read Their Story
        </CustomButton>
      </Slide>
    </Box>
  );
}

export default TestimonyContent;
