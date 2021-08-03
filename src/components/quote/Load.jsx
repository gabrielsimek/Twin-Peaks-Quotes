import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ onClick }) => {
  return (
    <button onClick={onClick}>
    Get Quote!
    </button>
  );
};

Load.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Load;
