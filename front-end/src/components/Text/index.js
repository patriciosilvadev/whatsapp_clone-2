import React from 'react';
import PropTypes from 'prop-types';

const Text = ({
  Tag = 'p',
  className = '',
  text = '',
  style = {},
  onClick = () => {},
  key = 0,
}) => {
  return (
    <Tag
      className={className}
      style={style}
      onClick={onClick}
      key={key}
    >
      {text}
    </Tag>
  );
};

Text.propTypes = {
  Tag: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
  key: PropTypes.number,
};

Text.defaultProps = {
  className: 'Stranger',
  text: '',
  key: 0,
  style: {},
  onClick: () => {},
};

export default Text;


