import { LoadingButton } from '@mui/lab';
import { Button as MuiButton } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Button(props) {
  const className = [props.className];
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={`button ${className.join('')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={props.style}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <MuiButton className={`button ${className.join('')}`} style={props.style} onClick={onClick}>
          <Link to={props.href}>{props.children}</Link>
        </MuiButton>
      );
    }
  }
  return (
    <LoadingButton
      type={props.type}
      loading={props.isLoading}
      size="large"
      className={`button ${className.join(' ')}`}
      onClick={onClick}
      style={props.style}
    >
      {props.children}
    </LoadingButton>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'link']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
};
