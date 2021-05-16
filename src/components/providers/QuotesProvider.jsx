import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const QuotesProvider = ({ children }) => {

  const [alert, setAlert] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasNextItem = (quotes && quotes.length > 0 && (quotes.length - 1) > activeIndex);
  const quote = quotes[activeIndex] && quotes[activeIndex];
  
  return (
    <QuotesContext.Provider 
      value={{
        activeIndex,
        setActiveIndex,
        quote, 
        quotes,
        setQuotes,
        alert,
        setAlert,
        hasNextItem,
      }}
    >
      {children}
    </QuotesContext.Provider>
  );
  
};

QuotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuotesProvider;
export const QuotesContext = createContext();
