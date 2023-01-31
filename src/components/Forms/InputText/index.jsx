import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Input } from '@mui/material';

import './index.css';

export default function InputText(props) {
  const { value, type, placeholder, name, prepend, append, outerClassName, inputClassName, errResponse } = props;

  const [hasError, setHasError] = useState(null);
  let pattern = '';
  if (type === 'email') pattern = /[a-z0-9]+@[a-z0-9]+\.[a-z]{2,3}/;
  if (type === 'tel') pattern = '[0-9]*';

  const onChange = (e) => {
    const target = {
      target: {
        name,
        value: e.target.value,
      },
    };

    if (type === 'email') {
      if (!pattern.test(e.target.value)) setHasError(errResponse);
      else setHasError('');
    }

    if (type === 'tel') {
      if (e.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };
  return (
    <Box className={['input-text', outerClassName].join('')}>
      <Box className="input-group">
        {prepend && (
          <Box className="input-group-prepend">
            <Box component="span" className="input-group-text">
              {prepend}
            </Box>
          </Box>
        )}
        <input
          name={name}
          type={type}
          pattern={pattern}
          className={['form-control color-primary', inputClassName].join('')}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {append && (
          <Box className="input-group-append">
            <Box component="span" className="input-group-text">
              {append}
            </Box>
          </Box>
        )}
      </Box>
      {hasError && (
        <Box component="span" className="error-helper">
          {hasError}
        </Box>
      )}
    </Box>
  );
}

InputText.defaultProps = {
  type: 'text',
  pattern: '',
  placeholder: 'Please type here...',
  errResponse: 'Please match the requested format!',
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};
