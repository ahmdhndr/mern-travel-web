import { Container } from '@mui/material';
import React, { createRef } from 'react';
import Hero from '../components/Hero';
import data from '../../jsonData/landingPage.json';
import MostPicked from '../components/MostPicked';

function LandingPage() {
  const refMostPickedTop = createRef();
  return (
    <Container component="main">
      <Hero refMostPicked={refMostPickedTop} data={data.hero} />
      <MostPicked data={data.mostPicked} refMostPickedTop={refMostPickedTop} />
    </Container>
  );
}

export default LandingPage;
