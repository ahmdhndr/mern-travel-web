import { Container, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import itemDetails from '../../jsonData/itemDetails.json';
import BookingForm from '../components/BookingForm';
import Categories from '../components/Categories';
import DetailPageDescription from '../components/DetailPageDescription';
import DetailPageTitle from '../components/DetailPageTitle';
import FeaturedImage from '../components/FeaturedImage';
import Testimony from '../components/Testimony';

export default function DetailPage() {
  const breadcrumbList = [
    { pageTitle: 'Home', pageHref: '/' },
    { pageTitle: 'House Details', pageHref: '' },
  ];

  return (
    <Container>
      <Helmet>
        <title>Staycation | {itemDetails.name}</title>
      </Helmet>
      <DetailPageTitle data={itemDetails} breadcrumb={breadcrumbList} />
      <FeaturedImage data={itemDetails.imageUrls} />
      <Grid component="section" container sx={{ mb: '70px' }} spacing={5}>
        <Grid item xs={12} sm={6} sx={{ flexBasis: { lg: '55%' }, maxWidth: { lg: '55%' } }}>
          <DetailPageDescription data={itemDetails} />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ flexBasis: { lg: '45%' }, maxWidth: { lg: '45%' } }}>
          <BookingForm itemDetails={itemDetails} />
        </Grid>
      </Grid>
      <Categories data={itemDetails.categories} />
      <Testimony data={itemDetails.testimonial} />
    </Container>
  );
}
