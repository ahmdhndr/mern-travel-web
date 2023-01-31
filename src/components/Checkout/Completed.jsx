import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

import completedIcon from '/images/icons/completed-icon.png';

export default function Completed() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fade triggerOnce>
      <Box
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: '50px', px: { xs: '16px', md: 0 } }}
      >
        <Box sx={{ width: '100%', maxWidth: '396px', textAlign: 'center' }}>
          <img src={completedIcon} alt="Completed Checkout" className="img-cover" style={{ marginBottom: '20px' }} />
          <Typography variant="body2" className="font-base color-text">
            We will inform you via email later once the transaction has been accepted
          </Typography>
        </Box>
      </Box>
    </Fade>
  );
}
