import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BrandIcon from '../BrandIcon';

export default function Footer() {
  return (
    <Container>
      <Box component="section" className="footer">
        <Box
          className="footer-list container-grid grid-1 grid-2 grid-3 grid-4"
          sx={{
            my: '50px',
            gap: { xs: '30px', sm: '50px' },
          }}
        >
          <Box sx={{ width: '265px' }}>
            <BrandIcon />
            <Typography variant="body2" className="font-base color-text" sx={{ mt: '8px' }}>
              We kaboom your beauty holiday instantly and memorable.
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body1"
              className="font-base font-18 font-weight-semibold color-primary"
              sx={{ mb: '17px' }}
            >
              For Beginners
            </Typography>
            <Link to="#">
              <Typography variant="body1" className="font-base color-text" sx={{ mb: '8px' }}>
                New Account
              </Typography>
            </Link>
            <Link to="#">
              <Typography variant="body1" className="font-base color-text" sx={{ mb: '8px' }}>
                Start Booking a Room
              </Typography>
            </Link>
            <Link to="#">
              <Typography variant="body1" className="font-base color-text" sx={{ mb: '8px' }}>
                Use Payments
              </Typography>
            </Link>
          </Box>
          <Box>
            <Typography
              variant="body1"
              className="font-base font-18 font-weight-semibold color-primary"
              sx={{ mb: '17px' }}
            >
              Explore Us
            </Typography>
            <Link to="#">
              <Typography variant="body1" className="font-base color-text" sx={{ mb: '8px' }}>
                Our Careers
              </Typography>
            </Link>
            <Link to="#">
              <Typography variant="body1" className="font-base color-text" sx={{ mb: '8px' }}>
                Privacy
              </Typography>
            </Link>
            <Link to="#">
              <Typography variant="body1" className="font-base color-text" sx={{ mb: '8px' }}>
                Terms & Conditions
              </Typography>
            </Link>
          </Box>
          <Box>
            <Typography
              variant="body1"
              className="font-base font-18 font-weight-semibold color-primary"
              sx={{ mb: '17px' }}
            >
              Connect Us
            </Typography>
            <Link to="#">
              <Typography variant="body1" className="font-base color-text" sx={{ mb: '8px' }}>
                support@staycation.id
              </Typography>
            </Link>
            <Link to="#">
              <Typography variant="body1" className="font-base color-text" sx={{ mb: '8px' }}>
                021-2208-1996
              </Typography>
            </Link>
            <Link to="#">
              <Typography variant="body1" className="font-base color-text" sx={{ mb: '8px' }}>
                Staycation, Kemang, Jakarta
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box className="footer-cr font-base color-text" sx={{ textAlign: 'center', mb: '30px' }}>
          Copyright 2019 &#8226; All rights reserved &#8226; Staycation
        </Box>
      </Box>
    </Container>
  );
}
