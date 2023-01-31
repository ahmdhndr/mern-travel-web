import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Box, Input, InputBase } from '@mui/material';

export default function InputFile(props) {
  const { value, accept, placeholder, name, prepend, append, outerClassName, inputClassName } = props;

  const refInputFile = useRef(null);

  return (
    <Box className={['input-text', outerClassName].join(' ')}>
      <Box className="input-group">
        {prepend && (
          <Box className="input-group-prepend">
            <Box component="span" className="input-group-text">
              {prepend}
            </Box>
          </Box>
        )}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          type="file"
          value={value}
          placeholder={placeholder}
          onChange={props.onChange}
          style={{ display: 'none' }}
        />
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={value}
          placeholder={placeholder}
          className={['form-control', inputClassName].join(' ')}
        />
        {append && (
          <Box className="input-group-append">
            <Box component="span" className="input-group-text">
              {append}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

InputFile.defaultProps = {
  placeholder: 'Browse a file...',
};

InputFile.propTypes = {
  name: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};
