import { Box, Typography } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import CategoryList from './CategoryList';

function Categories(props) {
  const { data } = props;
  return data.map((category) => (
    <Box
      key={category._id}
      className={`category-${category._id}`}
      component="section"
      sx={{ mb: { xs: '30px', md: '50px' } }}
    >
      <Fade triggerOnce delay={300}>
        <Typography
          className="category__title"
          variant="h4"
          fontFamily="poppins"
          fontSize="1.5rem"
          fontWeight={500}
          color="secondary.main"
          mb="20px"
        >
          {category.name}
        </Typography>
      </Fade>
      <CategoryList items={category.items} />
    </Box>
  ));
}

export default Categories;
