import { Box, Container, Divider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CheckoutPage from './pages/CheckoutPage';
import DetailPage from './pages/DetailPage';
import LandingPage from './pages/LandingPage';
import { CHECKOUT_PATH, DETAIL_PATH, HOME_PATH } from './utils/path';
import { theme } from './utils/theme';

function App() {
  const { pathname } = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Header isCentered={pathname === '/checkout'} />
        <Box component="main" sx={{ overflowX: 'hidden' }}>
          <Routes>
            <Route path={HOME_PATH} element={<LandingPage />} />
            <Route path={DETAIL_PATH} element={<DetailPage />} />
            <Route path={CHECKOUT_PATH} element={<CheckoutPage />} />
          </Routes>
        </Box>
        {pathname !== '/checkout' && (
          <>
            <Divider />
            <Footer />
          </>
        )}
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
