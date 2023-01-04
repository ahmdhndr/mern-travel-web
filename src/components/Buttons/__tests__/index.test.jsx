import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

test('Should not allowed click button if disabled is persist', () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.attributes('disabled')).toBeInTheDocument();
});
