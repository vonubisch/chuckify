import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { BidirectionalityContext } from '../providers/BidirectionalityProvider';

const Searchbar = ({ onSubmit, results }) => {

  const [ value, setValue ] = useState('');

  const doSubmit = (event) => {
    event.preventDefault();
    return onSubmit(value);
  }

  const bid = useContext(BidirectionalityContext);

  return (
    <div className="pt-4">
      <div className="mx-auto w-full p-3 text-gray-800 relative overflow-hidden min-w-80 max-w-xl">
        <form 
          id="search"
          className="relative mt-1" 
          onSubmit={doSubmit}
        >
          <input 
            type="text" 
            id="searchbar" 
            className={`w-full py-2 border-2 border-white rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-md ${bid.isRTL ? 'pr-3 pl-10' : 'pl-3 pr-10'}`}
            value={value}
            onChange={({ target: { value }}) => setValue(value)}
            onClick={() => setValue('')}
            placeholder="Search a Chuck Norris quote..." 
          />
          {results > 1 ?
            <span className={`block w-24 h-7 text-center rounded-lg text-xs font-bold bg-gray-300 leading-0 absolute top-2 pt-1.5 text-gray-600 ${bid.isRTL ? 'left-12' : 'right-12'}`}>
              {results} found
            </span>
            : null
          }
          <button 
            onClick={doSubmit} 
            className={`block w-7 h-7 text-center text-xl leading-0 absolute top-2.5 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors ${bid.isRTL ? 'left-2' : 'right-2'}`}
          >
            <i className="material-icons">search</i>
          </button>
        </form>
      </div>
    </div>
  )
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  results: PropTypes.number,
}

Searchbar.defaultProps = {
  onSubmit: e => e,
  results: 0,
}

export default Searchbar;