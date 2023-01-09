import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function FeatureItem(props) {
  const { imageUrl, csx, price, unit, name, city, country, _id } = props;
  return (
    <Card className={`most-picked__featured__item ${csx}`}>
      <figure className="img-wrapper">
        <img src={imageUrl} alt={name} className="img-cover" />
      </figure>
      <Box className="badge">
        <Typography variant="body2" color="#fff" fontFamily="Poppins, sans-serif">
          <Box component="span" fontSize="1rem" fontWeight={500}>
            ${price}{' '}
          </Box>
          per {unit}
        </Typography>
      </Box>
      <Box className="meta-wrapper">
        <Typography className="meta-wrapper__title" fontFamily="poppins" variant="body2">
          <Link to={`/places/d/${_id}`}>{name}</Link>
        </Typography>
        <Typography className="meta-wrapper__paragraph" variant="body2" fontFamily="poppins">
          {city}, {country}
        </Typography>
      </Box>
    </Card>
  );
}

export default FeatureItem;
