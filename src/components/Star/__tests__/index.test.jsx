import React from 'react';
import { render } from '@testing-library/react';
import Star from '..';

test('Should have props value (width, height, value, spacing)', () => {
  const width = 35;
  const height = 35;
  const spacing = 2;
  const { container } = render(<Star width={width} height={height} spacing={spacing} value={4.3} />);
  const starFilled = 'div.stars div.star:not(.placeholder)';

  expect(container.querySelector('div.stars')).toBeInTheDocument();
  expect(container.querySelector('div.stars')).toHaveAttribute('style', expect.stringContaining(`height: ${height}px`));
  expect(container.querySelector(starFilled)).toBeInTheDocument();
  expect(container.querySelector(starFilled)).toHaveAttribute('style', expect.stringContaining(`width: ${width}px`));
  expect(container.querySelector(starFilled)).toHaveAttribute('style', expect.stringContaining(`height: ${height}px`));
  expect(container.querySelector(starFilled)).toHaveAttribute(
    'style',
    expect.stringContaining(`margin-right: ${spacing}px`)
  );
});
