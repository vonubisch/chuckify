import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div id="container" className="container mx-auto p-3">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
