import { Container, Divider } from '@mui/material';
import React, { createRef } from 'react';
import landingPageData from '../../jsonData/landingPage.json';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MostPicked from '../components/MostPicked';
import Testimony from '../components/Testimony';

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
