import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

const QuotesProvider = ({ children }) => {

  const [quotes, setQuotes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasNext = (quotes && quotes.length > 0 && (quotes.length - 1) > activeIndex);
  const quote = quotes[activeIndex] && quotes[activeIndex];

  const getNext = () => hasNext && setActiveIndex(activeIndex + 1);

  const setData = (data, i = 0) => {
    setQuotes(data);
    setActiveIndex(i);
  }
  
  return (
    <QuotesContext.Provider 
      value={{
        quote, 
        quotes,
        hasNext,
        getNext,
        setData,
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
