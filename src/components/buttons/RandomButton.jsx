import React from 'react';
import PropTypes from 'prop-types';

const RandomButton = ({ onClick, prominent }) => (
  <button
    id="button-random"
    className={`text-white font-bold mx-2 shadow-lg focus:outline-none rounded-lg ${prominent ? 'bg-green-500 hover:bg-green-600 hover:text-gray-200 text-lg py-3 px-7' : 'bg-gray-700 hover:bg-gray-600 py-1 px-4'}`}
    onClick={onClick}
  >
    <i className="material-icons text-sm mx-2 animate-spin">autorenew</i>
    {prominent ?
      'Generate new quote'
      :
      'Generate random quote'
    }
  </button>
);

RandomButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  prominent: PropTypes.bool,
};

RandomButton.defaultProps = {
  onClick: e => e,
  prominent: false,
};

export default RandomButton;