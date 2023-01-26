import { Box, Input } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

export default function InputNumber(props) {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } = props;

  const onChange = (e) => {
    let value = String(e.target.value);

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <Box className={['input-number', props.outerClassName].join(' ')}>
      <Box className="input-group">
        <Box className="input-group-prepend">
          <Box component="span" className="input-group-text minus" onClick={minus}>
            -
          </Box>
        </Box>
        <Input
          fullWidth
          min={min}
          max={max}
          name={name}
          readOnly
          className="form-control"
          placeholder={placeholder ? placeholder : '0'}
          value={`${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? 's' : ''}`}
          onChange={onChange}
        />
        <Box className="input-group-append">
          <Box component="span" className="input-group-text plus" onClick={plus}>
            +
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: '',
  suffix: '',
};

InputNumber.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isSuffixPlural: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
};
