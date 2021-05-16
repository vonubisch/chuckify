import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const defaultValue = 'ltr';

const BidirectionalityProvider = ({ children }) => {

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
  children: PropTypes.node.isRequired,
};

export default BidirectionalityProvider;
export const BidirectionalityContext = createContext();
