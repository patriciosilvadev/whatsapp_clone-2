import React from 'react';
import PropTypes from 'prop-types';

const Img = ({
  src = '',
  alt = '',
  className = '',
  onError = () => {},
  onClick = () => {},
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={onError}
      onClick={onClick}
    />
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  onError: PropTypes.func,
};

Img.defaultProps = {
  className: "",
  onError: () => {},
};

export default Img;
