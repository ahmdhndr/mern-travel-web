import { Button as MuiButton } from '@mui/material';
import React from 'react';

export default function Button({ children, onClick, className, style }) {
  return (
    <MuiButton variant="contained" size="large" className={`button ${className}`} onClick={onClick} style={style}>
      {children}
    </MuiButton>
  );
}
