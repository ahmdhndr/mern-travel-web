import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons';
import { InputNumber, InputDate } from '../Forms';
import { Fade, Slide } from 'react-awesome-reveal';

export default function BookingForm({ itemDetails, startBooking }) {
  const [data, setData] = useState({
    duration: 1,
    date: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  });

  const updateData = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(data.date.endDate);
    const duration = new Date(endDate - startDate).getDate();
    setData((prev) => ({
      ...prev,
      duration,
    }));
  }, [data.date]);

  useEffect(() => {
    const startDate = new Date(data.date.startDate);
    const endDate = new Date(startDate.setDate(startDate.getDate() + +data.duration - 1));
    setData((prev) => ({
      ...prev,
      date: {
        ...prev.date,
        endDate,
      },
    }));
  }, [data.duration]);

  return (
    <Slide direction="up" triggerOnce delay={400}>
      <Fade triggerOnce delay={500}>
        <Box className="border-frame border-radius-base" sx={{ p: { xs: '20px 30px', lg: '60px 80px' } }}>
          <Box className="detail-page-booking__content">
            <Typography
              variant="h4"
              className="font-base font-20 font-weight-semibold color-primary"
              sx={{ mb: '14px' }}
            >
              Start Booking
            </Typography>
            <Typography variant="h3" className="font-base font-36 font-weight-semibold color-green" sx={{ mb: '14px' }}>
              ${itemDetails.price}{' '}
              <Box component="span" fontWeight={300} className="color-text">
                per {itemDetails.unit}
              </Box>
            </Typography>
            <Typography variant="body2" className="font-base font-weight-normal color-primary" sx={{ mb: '8px' }}>
              How long will you stay?
            </Typography>
            <InputNumber
              max={30}
              suffix=" night"
              isSuffixPlural
              value={data.duration}
              onChange={updateData}
              name="duration"
              outerClassName="mb-24"
            />
            <Typography variant="body2" className="font-base font-weight-normal color-primary" sx={{ mb: '8px' }}>
              Pick a Date
            </Typography>
            <InputDate name="date" value={data.date} onChange={updateData} />
            <Typography variant="body2" className="font-base color-text" sx={{ mt: '14px', mb: '40px' }}>
              You will pay{' '}
              <Box fontWeight={500} component="span" className="color-primary">
                ${itemDetails.price * data.duration} USD
              </Box>{' '}
              per{' '}
              <Box fontWeight={500} component="span" className="color-primary">
                {data.duration} {data.duration > 1 ? 'nights' : 'night'}
              </Box>
            </Typography>
            <Button style={{ width: '100%' }} className="btn-primary" onClick={() => console.log('clicked')}>
              Continue to Book
            </Button>
          </Box>
        </Box>
      </Fade>
    </Slide>
  );
}

BookingForm.propTypes = {
  itemDetails: PropTypes.object,
  startBooking: PropTypes.func,
};
