import { Box } from '@mui/material';
import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

export default function FeaturedImage({ data }) {
  return (
    <Box component="section" className="container-grid grid-1 grid-2 gap-10" sx={{ mb: { xs: '30px', sm: '50px' } }}>
      {data.map((item, i) => (
        <Box key={item._id} className={i === 0 ? 'row-span-2' : 'row-auto'}>
          <Slide direction="up" triggerOnce delay={200 * i} style={{ height: '100%' }}>
            <Fade triggerOnce delay={300} style={{ height: '100%' }}>
              <Box className="card">
                <figure className="img-wrapper">
                  <img src={item.url} className="img-cover" />
                </figure>
              </Box>
            </Fade>
          </Slide>
        </Box>
      ))}
    </Box>
  );
}
