import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

import './index.css';

export default function Star(props) {
  const { className, value, width, height, spacing } = props;
  const decimals = Number(value) % 1;
  const stars = [];
  let leftPos = 0;
  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftPos += width;
    stars.push(
      <Box
        className="star"
        key={`star-${i}`}
        style={{
          left: i * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      />
    );
  }

  if (decimals > 0 && value <= 5) {
    stars.push(
      <Box
        className="star"
        key="starWithDecimal"
        style={{
          left: leftPos,
          width: decimals * width - spacing,
          height: height,
        }}
      />
    );
  }

  const starPlaceholder = [];
  for (let i = 0; i < 5; i++) {
    starPlaceholder.push(
      <Box
        className="star placeholder"
        key={`star-placeholder__${i}`}
        style={{
          left: i * width,
          width: width,
          height: height,
          marginRight: spacing,
        }}
      />
    );
  }

  return (
    <Box className={['stars', className].join('')} style={{ height }}>
      {starPlaceholder}
      {stars}
    </Box>
  );
}

Star.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  spacing: PropTypes.number,
};
