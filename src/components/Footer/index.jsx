import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BrandIcon from '../BrandIcon';

function Footer() {
  return (
    <Box component="section" className="footer">
      <Box
        className="footer-list container-grid"
        sx={{
          my: '50px',
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gridAutoFlow: 'dense',
          gap: { xs: '30px', md: '50px' },
        }}
      >
        <Box sx={{ width: '265px' }}>
          <BrandIcon />
          <Typography variant="body2" className="text-body2" sx={{ mt: '8px' }}>
            We kaboom your beauty holiday instantly and memorable.
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" className="text-body1 color-secondary" sx={{ mb: '17px' }}>
            For Beginners
          </Typography>
          <Link to="#">
            <Typography variant="body1" className="text-body2" sx={{ mb: '8px' }}>
              New Account
            </Typography>
          </Link>
          <Link to="#">
            <Typography variant="body1" className="text-body2" sx={{ mb: '8px' }}>
              Start Booking a Room
            </Typography>
          </Link>
          <Link to="#">
            <Typography variant="body1" className="text-body2" sx={{ mb: '8px' }}>
              Use Payments
            </Typography>
          </Link>
        </Box>
        <Box>
          <Typography variant="body1" className="text-body1 color-secondary" sx={{ mb: '17px' }}>
            Explore Us
          </Typography>
          <Link to="#">
            <Typography variant="body1" className="text-body2" sx={{ mb: '8px' }}>
              Our Careers
            </Typography>
          </Link>
          <Link to="#">
            <Typography variant="body1" className="text-body2" sx={{ mb: '8px' }}>
              Privacy
            </Typography>
          </Link>
          <Link to="#">
            <Typography variant="body1" className="text-body2" sx={{ mb: '8px' }}>
              Terms & Conditions
            </Typography>
          </Link>
        </Box>
        <Box>
          <Typography variant="body1" className="text-body1 color-secondary" sx={{ mb: '17px' }}>
            Connect Us
          </Typography>
          <Link to="#">
            <Typography variant="body1" className="text-body2" sx={{ mb: '8px' }}>
              support@staycation.id
            </Typography>
          </Link>
          <Link to="#">
            <Typography variant="body1" className="text-body2" sx={{ mb: '8px' }}>
              021-2208-1996
            </Typography>
          </Link>
          <Link to="#">
            <Typography variant="body1" className="text-body2" sx={{ mb: '8px' }}>
              Staycation, Kemang, Jakarta
            </Typography>
          </Link>
        </Box>
      </Box>
      <Box className="footer-cr text-body2" sx={{ textAlign: 'center', mb: '50px' }}>
        Copyright 2019 &#8226; All rights reserved &#8226; Staycation
      </Box>
    </Box>
  );
}

export default Footer;
