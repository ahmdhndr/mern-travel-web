import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function FeatureItem(props) {
  const { imageUrl, type, price, unit, name, city, country, _id } = props;
  return (
    <Link to={`/${type.toLowerCase()}/d/${_id}`}>
      <Box className="card card-featured">
        <Box className="tag">
          <Typography variant="body2" color="#fff" fontFamily="Poppins, sans-serif">
            <Box component="span" fontSize="1rem" fontWeight={500}>
              ${price}{' '}
            </Box>
            per {unit}
          </Typography>
        </Box>
        <figure className="img-wrapper">
          <img src={imageUrl} alt={name} className="img-cover" />
        </figure>
        <Box className="meta-wrapper">
          <Typography fontFamily="Poppins" fontWeight={400} fontSize="1.25rem" variant="h5" color="#fff">
            {name}
          </Typography>
          <Box component="span" fontFamily="Poppins">
            {city}, {country}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default FeatureItem;
