import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import api from '../../api';
import { generateRandomHue, generateRandomColor } from '../../utils/layout';

const CategoriesProvider = ({ children }) => {

  const [categories, setCategories] = useState([]);

  const { source, get } = api();

  useEffect(() => {

    get('categories')
      .then(({ data }) => setCategories(
        data.map(name => ({ name, color: `${generateRandomColor()}-${generateRandomHue()}`}))
      ))
      .catch(e => e); // We do nothing when we cannot fetch the categories, but the cancel function may trigger it, so we catch it and do nothing
    
    return () => {
      source.cancel();
    }
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {children}
    </CategoriesContext.Provider>
  );

};

CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoriesProvider;
export const CategoriesContext = createContext();
