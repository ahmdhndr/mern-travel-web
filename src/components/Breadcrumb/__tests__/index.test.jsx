import React from 'react';
import { render } from '@testing-library/react';
import Breadcrumb from '..';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const setup = () => {
  const breadcrumbList = [
    { pageTitle: 'Home', pageHref: '/' },
    { pageTitle: 'House Details', pageHref: '' },
  ];

  const { container } = render(
    <BrowserRouter>
      <Routes>
        <Route path={breadcrumbList[0].pageHref} element={<Breadcrumb data={breadcrumbList} />} />
      </Routes>
    </BrowserRouter>
  );

  const breadcrumb = container.querySelector('.MuiBreadcrumbs-root');
  return {
    breadcrumb,
  };
};

test('should have <ol> tag with className .MuiBreadcrumbs-ol and have text Home & House Details', () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent('Home');
  expect(breadcrumb).toHaveTextContent('House Details');
});
