import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function BrandIcon() {
  return (
    <Link to="/">
      <Button sx={{ p: 0 }} className="brand-icon__button" variant="text">
        <Typography
          color="primary"
          variant="body2"
          sx={{ fontFamily: 'Poppins, sans-serif' }}
          fontSize="1.625rem"
          textTransform="none"
          fontWeight={500}
        >
          Stay
          <Box component="span" color="secondary.main">
            cation.
          </Box>
        </Typography>
      </Button>
    </Link>
  );
}

export default BrandIcon;
