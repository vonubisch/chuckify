import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import api from '../../api';
import { generateRandomHue, generateRandomColor } from '../../utils/layout';

const CategoriesProvider = ({ children }) => {

  const [categories, setCategories] = useState([]);

  useEffect(() => api.categories().then(r => setCategories(r.data)), []);

  const data = categories.map(name => ({ name, color: `${generateRandomColor()}-${generateRandomHue()}`}));

  return (
    <CategoriesContext.Provider value={data}>
      {children}
    </CategoriesContext.Provider>
  );

};

CategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CategoriesProvider;
export const CategoriesContext = createContext();
