import { Box, Typography } from '@mui/material';
import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import CategoryItem from './CategoryItem';

function CategoryList(props) {
  const { items } = props;
  return (
    <>
      {items.length === 0 && (
        <Slide triggerOnce delay={300} direction="up">
          <Fade triggerOnce delay={400}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography className="text-body2" variant="body2">
                There is no property at this category.
              </Typography>
            </Box>
          </Fade>
        </Slide>
      )}
      <Box
        className="container-grid"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gridAutoFlow: 'dense',
          gap: '30px',
          position: 'relative',
        }}
      >
        {items.map((item, i) => (
          <Slide key={item._id} triggerOnce delay={300} direction="up">
            <Fade triggerOnce delay={400 * i}>
              <CategoryItem {...item} />
            </Fade>
          </Slide>
        ))}
      </Box>
    </>
  );
}

export default CategoryList;
