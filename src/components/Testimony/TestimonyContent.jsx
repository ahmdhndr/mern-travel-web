import { Box, Typography } from '@mui/material';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import Button from '../Buttons';
import Star from '../Star';

function TestimonyContent(props) {
  const { data } = props;

  return (
    <Box>
      <Slide triggerOnce direction="right">
        <Typography
          variant="h4"
          className="font-base font-weight-semibold font-24 color-primary"
          sx={{
            lineHeight: 1.5,
            textAlign: { xs: 'center', md: 'left' },
            mb: '40px',
          }}
        >
          {data.name}
        </Typography>
        <Star value={data.rate} width={35} height={35} spacing={2} />
        <Typography
          variant="h3"
          className="font-base font-weight-normal font-32 color-primary"
          sx={{
            lineHeight: 1.5,
            textAlign: { xs: 'center', md: 'left' },
            my: 1,
          }}
        >
          {data.content}
        </Typography>
        <Typography
          variant="body2"
          className="font-base color-text font-18"
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            lineHeight: 'normal',
            mb: '50px',
          }}
        >
          {data.familyName}
          {', '}
          {data.familyOccupation}
        </Typography>
        <Button style={{ marginBottom: 0 }} onClick={() => console.log('clicked')}>
          Read Their Story
        </Button>
      </Slide>
    </Box>
  );
}

export default TestimonyContent;
