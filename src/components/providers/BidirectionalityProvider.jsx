import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const BidirectionalityProvider = ({ children, defaultValue }) => {

  const [ value, setValue ] = useState(defaultValue);

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('dir', value);
  }, [ value ]);

  return (
    <BidirectionalityContext.Provider 
      value={{
        value, 
        toggle: () => setValue(value === 'ltr' ? 'rtl' : 'ltr'), 
        isRTL: value === 'rtl', 
        isLTR: value === 'ltr',
      }}
    >
      {children}
    </BidirectionalityContext.Provider>
  );
  
};

BidirectionalityProvider.propTypes = {
  defaultValue: PropTypes.string,
  children: PropTypes.node.isRequired,
};

BidirectionalityProvider.defaultProps = {
  defaultValue: 'ltr',
}

export default BidirectionalityProvider;
export const BidirectionalityContext = createContext();
