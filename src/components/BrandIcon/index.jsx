import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function BrandIcon() {
  return (
    <Link to="/">
      <Button className="brand-icon__button" variant="text">
        <Typography
          variant="body2"
          sx={{ fontFamily: 'Poppins, sans-serif' }}
          fontSize="1.625rem"
          color="#3252DF"
          textTransform="none"
        >
          Stay<span style={{ color: '#152C5B' }}>cation.</span>
        </Typography>
      </Button>
    </Link>
  );
}

export default BrandIcon;
