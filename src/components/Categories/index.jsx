import { Box, Typography } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import CategoryList from './CategoryList';

export default function Categories(props) {
  const { data } = props;
  return data.map((category) => (
    <Box
      key={category._id}
      className={`category-${category._id}`}
      component="section"
      sx={{ mb: { xs: '30px', sm: '50px' } }}
    >
      <Fade triggerOnce delay={300}>
        <Typography className="font-base font-24 font-weight-semibold color-primary" variant="h4" mb="20px">
          {category.name}
        </Typography>
      </Fade>
      <CategoryList items={category.items} />
    </Box>
  ));
}
