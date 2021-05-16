import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { BidirectionalityContext } from '../providers/BidirectionalityProvider';

const NextButton = ({ onClick }) => {
  const bid = useContext(BidirectionalityContext)
  return (
    <button 
      id="button-next" 
      className="bg-green-500 hover:bg-green-600 hover:text-gray-200 text-white text-lg font-bold py-3 px-7 rounded-lg mx-2 transition-colors shadow-lg focus:outline-none"
      onClick={onClick}
    >
      Next quote
      <i className={`material-icons text-sm mx-3 ${bid.isRTL ? 'icon-flip' : ''}`}>double_arrow</i>
      
    </button>
  );
}

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NextButton;