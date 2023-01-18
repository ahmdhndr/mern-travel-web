import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const { imageUrl, name, city, country, _id, isPopular } = props;
  return (
    <Box className="card">
      {isPopular && (
        <Box className="tag">
          <Typography variant="body2" color="#fff" fontFamily="Poppins, sans-serif">
            <Box component="span" fontSize="1rem" fontWeight={500}>
              Popular{' '}
            </Box>
            Choice
          </Typography>
        </Box>
      )}
      <figure className="img-wrapper" style={{ height: '180px' }}>
        <img src={imageUrl} alt={name} className="img-cover" />
      </figure>
      <Box className="meta-wrapper">
        <Link className="stretched-link" to={`/places/d/${_id}`}>
          <Typography fontFamily="Poppins" fontWeight={400} fontSize="1.25rem" variant="h5">
            {name}
          </Typography>
        </Link>
        <Box component="span" fontFamily="Poppins">
          {city}, {country}
        </Box>
      </Box>
    </Box>
  );
}

export default CategoryItem;
