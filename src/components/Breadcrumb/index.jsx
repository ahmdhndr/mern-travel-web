import { Box, Breadcrumbs, Typography } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

import './index.css';

export default function Breadcrumb(props) {
  return (
    <Fade triggerOnce>
      <Breadcrumbs aria-label="breadcrumb">
        {props.data.map((item, index) => (
          <Box key={`breadcrumb-${index}`}>
            {index === props.data.length - 1 ? (
              <Typography
                variant="body2"
                sx={{ letterSpacing: 0 }}
                className="font-base font-18 font-weight-semibold color-primary"
              >
                {item.pageTitle}
              </Typography>
            ) : (
              <Link to={item.pageHref}>
                <Typography variant="body2" className="link font-base font-18 color-text">
                  {item.pageTitle}
                </Typography>
              </Link>
            )}
          </Box>
        ))}
      </Breadcrumbs>
    </Fade>
  );
}
