import { Box, Container, Divider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import DetailPage from './pages/DetailPage';
import LandingPage from './pages/LandingPage';
import { DETAIL_PATH, HOME_PATH } from './utils/path';
import { theme } from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Header />
        <Box component="main">
          <Routes>
            <Route path={HOME_PATH} element={<LandingPage />} />
            <Route path={DETAIL_PATH} element={<DetailPage />} />
          </Routes>
        </Box>
        <Divider />
        <Footer />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
