import { Box, Typography } from '@mui/material';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { InputText } from '../Forms';

export default function BookingInformation(props) {
  const { data, itemDetails, checkout } = props;

  return (
    <Fade triggerOnce>
      <Box
        className="container-grid grid-1 grid-2"
        sx={{
          gap: 0,
          marginBottom: '30px',
          mx: 'auto',
          width: '100%',
          maxWidth: '900px',
        }}
      >
        <Box className="card" sx={{ px: { xs: '16px', md: 0 }, pr: { md: '80px' }, pt: '30px' }}>
          <figure className="img-wrapper" style={{ height: '270px' }}>
            <img src={itemDetails.imageUrls[0].url} alt={itemDetails.name} className="img-cover" />
          </figure>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: '16px', justifyContent: 'space-between' }}>
            <Box>
              <Typography
                className="font-base font-20 font-weight-normal color-primary"
                fontSize="1.25rem"
                variant="h5"
              >
                {itemDetails.name}
              </Typography>
              <Box component="span" className="font-base color-text">
                {itemDetails.city}, {itemDetails.country}
              </Box>
            </Box>
            <Box className="color-text">
              <Box fontWeight={500} component="span" className="color-primary">
                ${itemDetails.price * checkout.duration} USD
              </Box>{' '}
              per{' '}
              <Box fontWeight={500} component="span" className="color-primary">
                {checkout.duration} {itemDetails.unit}
                {checkout.duration > 1 ? 's' : ''}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: { xs: '16px', md: 0 }, pl: { md: '80px' }, pt: '30px', borderLeft: '1px solid #e5e5e5' }}>
          <Fade triggerOnce cascade damping={0.2}>
            <label htmlFor="firstName" className="color-primary">
              First Name
            </label>
            <InputText id="firstName" name="firstName" value={data.firstName} onChange={props.onChange} />
            <label htmlFor="lastName" className="color-primary">
              Last Name
            </label>
            <InputText id="lastName" name="lastName" value={data.lastName} onChange={props.onChange} />
            <label htmlFor="email" className="color-primary">
              Email Address
            </label>
            <InputText id="email" type="email" name="email" value={data.email} onChange={props.onChange} />
            <label htmlFor="phone" className="color-primary">
              Phone Number
            </label>
            <InputText id="phone" type="tel" name="phone" value={data.phone} onChange={props.onChange} />
          </Fade>
        </Box>
      </Box>
    </Fade>
  );
}
