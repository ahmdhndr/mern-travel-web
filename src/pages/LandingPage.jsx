import { Container, Divider } from '@mui/material';
import React, { createRef } from 'react';
import Hero from '../components/Hero';
import landingPageData from '../../jsonData/landingPage.json';
import MostPicked from '../components/MostPicked';
import Categories from '../components/Categories';
import Testimony from '../components/Testimony';
import Footer from '../components/Footer';

function LandingPage() {
  const refMostPickedTop = createRef();
  return (
    <>
      <Container component="main" sx={{ overflowX: 'hidden' }}>
        <Hero refMostPicked={refMostPickedTop} data={landingPageData.hero} />
        <MostPicked data={landingPageData.mostPicked} refMostPickedTop={refMostPickedTop} />
        <Categories data={landingPageData.categories} />
        <Testimony data={landingPageData.testimonial} />
      </Container>
      <Divider />
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default LandingPage;
