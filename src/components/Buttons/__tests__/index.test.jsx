import React from 'react';
import { render } from '@testing-library/react';
import Button from '..';

test('Should not allowed click button if disabled is persist', () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});
