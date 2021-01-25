import React from 'react';
import PropTypes from 'prop-types';

import './_spinner.scss';

const Spinner = ({
  size = '30px',
}) => {
  return (
    <div
      className="spinner"
      style={{
        top: `calc(50% - (${size} / 2))`,
        left: `calc(50% - (${size} / 2))`,
        width: `${size}`,
        height: `${size}`,
      }}
    >
      <span className="spinnerinner1" />
      <span className="spinnerinner2" />
      <span
        className="spinnerinner3"
        style={{
          top: `calc(${size} * 0.1)`,
          left: `calc(${size} * 0.1)`,
          width: `calc(${size} - ((${size} * 0.1) * 2))`,
          height: `calc(${size} - ((${size} * 0.1) * 2))`,
        }}
      />
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.string.isRequired,
};

Spinner.defaultProps = {

};

export default Spinner;
