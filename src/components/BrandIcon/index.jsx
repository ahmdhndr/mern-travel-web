import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandIcon() {
  return (
    <Link to="/">
      <Button sx={{ p: 0 }} className="brand-icon__button" variant="text">
        <Typography
          variant="h4"
          className="font-base font-26 font-weight-semibold color-secondary"
          textTransform="none"
        >
          Stay
          <Box component="span" className="color-primary">
            cation.
          </Box>
        </Typography>
      </Button>
    </Link>
  );
}
