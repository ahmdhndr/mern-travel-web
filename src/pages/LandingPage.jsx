import { Container } from '@mui/material';
import React, { createRef } from 'react';
import { Helmet } from 'react-helmet-async';
import landingPageData from '../../jsonData/landingPage.json';
import Categories from '../components/Categories';
import Hero from '../components/Hero';
import MostPicked from '../components/MostPicked';
import Testimony from '../components/Testimony';

export default function LandingPage() {
  const refMostPickedTop = createRef();
  return (
    <>
      <Helmet>
        <title>Staycation | Home</title>
      </Helmet>
      <Container sx={{ overflowX: 'hidden' }}>
        <Hero refMostPicked={refMostPickedTop} data={landingPageData.hero} />
        <MostPicked data={landingPageData.mostPicked} refMostPickedTop={refMostPickedTop} />
        <Categories data={landingPageData.categories} />
        <Testimony data={landingPageData.testimonial} />
      </Container>
    </>
  );
}
