import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function FeatureItem(props) {
  const { imageUrl, price, unit, name, city, country, _id } = props;
  return (
    <Link to={`/properties/${_id}`}>
      <Box className="card card-featured">
        <Box className="tag">
          <Typography variant="body2" className="font-base color-white">
            <Box component="span" fontWeight={500}>
              ${price}{' '}
            </Box>
            per {unit}
          </Typography>
        </Box>
        <figure className="img-wrapper">
          <img src={imageUrl} alt={name} className="img-cover" />
        </figure>
        <Box className="meta-wrapper">
          <Typography className="font-base font-weight-normal font-20 color-white">{name}</Typography>
          <Box component="span">
            {city}, {country}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
