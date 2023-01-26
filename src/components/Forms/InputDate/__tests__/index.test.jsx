import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputDate from '..';

export default function TestInput() {
  const [state, setState] = useState({
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  });

  const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value });
  };

  return <InputDate onChange={handleChange} name="value" value={state.value} />;
}

const setup = () => {
  const { container } = render(<TestInput />);
  const wrapper = container.querySelector('.input-date');
  const input = container.querySelector('.form-control input');

  return {
    container,
    wrapper,
    input,
  };
};

test('should have wrapper with className .input-date', () => {
  const { wrapper } = setup();

  expect(wrapper).toBeInTheDocument();
});

test('should have <input> as the child of tag with className .form-control', () => {
  const { input } = setup();

  expect(input).toBeInTheDocument();
});

test('should show date picker when click input field', () => {
  const { container, input } = setup();

  // screen.debug();
  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector('.date-range-wrapper');

  expect(datePickerWrapper).toBeInTheDocument();
});
