import React from 'react';

const Footer = () => (
  <div id="footer" className="flex flex-col">
    <p className="w-full text-center my-12 p-12 text-gray-600 text-sm">
      with 
      {' '}
      <span className="text-red-500 text-xl animate-pulse">&hearts;</span> 
      {' '}
      developed by 
      {' '}
      <a href="https://vonubisch.com" className="text-blue-600 font-medium hover:text-white cursor-pointer transition-colors" target="_blank" rel="noreferrer">
        Björn S. von Ubisch
      </a>
    </p>
  </div>
);

export default Footer;
