import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function CategoryItem(props) {
  const { imageUrl, name, city, country, _id, isPopular } = props;
  return (
    <Box className="card">
      <Link to={`/places/d/${_id}`}>
        {isPopular && (
          <Box className="tag">
            <Typography variant="body2" className="font-base color-white">
              <Box component="span" fontWeight={500}>
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
          <Typography className="font-base font-20 font-weight-normal color-primary" fontSize="1.25rem" variant="h5">
            {name}
          </Typography>
          <Box component="span" className="font-base color-text">
            {city}, {country}
          </Box>
        </Box>
      </Link>
    </Box>
  );
}

export default CategoryItem;
