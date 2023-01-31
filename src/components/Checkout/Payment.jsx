import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';

import { InputFile, InputText } from '../Forms';

import logoBCA from '/images/logo-bca.png';
import logoMandiri from '/images/logo-mandiri.png';

export default function Payment(props) {
  const { data, itemDetails, checkout } = props;
  const tax = 10;
  const subTotal = itemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <Box sx={{ px: { xs: '16px', md: 0 }, pr: { md: '80px' }, pt: '30px' }}>
          <Typography variant="body2" className="font-base font-weight-normal color-primary" sx={{ mb: '20px' }}>
            Transfer Pembayaran:
          </Typography>
          <Typography variant="body2" className="font-base font-weight-normal color-primary">
            Tax:{' '}
            <Box component="span" fontWeight={500}>
              {tax}%
            </Box>
          </Typography>
          <Typography variant="body2" className="font-base font-weight-normal color-primary" sx={{ my: '10px' }}>
            Sub total:{' '}
            <Box component="span" fontWeight={500}>
              ${subTotal} USD
            </Box>
          </Typography>
          <Typography variant="body2" className="font-base font-weight-normal color-primary" sx={{ mb: '20px' }}>
            Grand total:{' '}
            <Box component="span" fontWeight={500}>
              ${grandTotal} USD
            </Box>
          </Typography>
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Box>
              <img src={logoBCA} alt="Logo BCA" width={60} />
            </Box>
            <Box>
              <Typography variant="body2" className="font-base font-weight-normal color-primary">
                Bank Central Asia
              </Typography>
              <Typography variant="body2" className="font-base font-weight-normal color-primary">
                2208 1996
              </Typography>
              <Typography variant="body2" className="font-base font-weight-normal color-primary">
                BuildWith Angga
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '16px', mt: '20px' }}>
            <Box>
              <img src={logoMandiri} alt="Logo Mandiri" width={60} />
            </Box>
            <Box>
              <Typography variant="body2" className="font-base font-weight-normal color-primary">
                Bank Mandiri
              </Typography>
              <Typography variant="body2" className="font-base font-weight-normal color-primary">
                2208 1996
              </Typography>
              <Typography variant="body2" className="font-base font-weight-normal color-primary">
                BuildWith Angga
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: { xs: '16px', md: 0 }, pl: { md: '80px' }, pt: '30px', borderLeft: '1px solid #e5e5e5' }}>
          <Fade triggerOnce delay={600} cascade damping={0.2}>
            <label htmlFor="paymentProof" className="color-primary">
              Upload Bukti Transfer
            </label>
            <InputFile
              accept="image/*"
              id="paymentProof"
              name="paymentProof"
              value={data.paymentProof}
              onChange={props.onChange}
            />
            <label htmlFor="bankName" className="color-primary">
              Asal Bank
            </label>
            <InputText type="text" id="bankName" name="bankName" value={data.bankName} onChange={props.onChange} />
            <label htmlFor="bankHolder" className="color-primary">
              Nama Pengirim
            </label>
            <InputText
              type="text"
              id="bankHolder"
              name="bankHolder"
              value={data.bankHolder}
              onChange={props.onChange}
            />
          </Fade>
        </Box>
      </Box>
    </Fade>
  );
}
