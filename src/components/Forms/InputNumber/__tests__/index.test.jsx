import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputNumber from '..';

export default function TestInput() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <InputNumber max={30} onChange={handleChange} name="value" value={value} />;
}

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector('div.form-control input');

  return {
    input,
  };
};

test('should be able to change value', () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  console.log(input.value);
  expect(input.value).toBe('23');
});

test('should not be able to change when reach max value', () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe('');
});
