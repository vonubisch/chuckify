import React from 'react';
import PropTypes from 'prop-types';

import Typewriter from 'typewriter-effect';

const Quote = ({ value }) => (
  <div id="quote" className="w-full mx-auto rounded-xl bg-gray-200 shadow-lg p-10 text-gray-800 relative overflow-hidden min-w-80 max-w-3xl mt-5 h-50 direction-ltr" data-value={value}>
    
    {value ? // If the quote is true-ish, display it
      <div className="relative mt-1">
        <div className="w-full mb-10">
          <div className="text-gray-400 text-left leading-tight h-8"><i className="material-icons text-xl md:text-6xl ">format_quote</i></div>
          <div className="text-lg md:text-xl text-gray-600 font-medium px-5 md:px-20 italic">
            <Typewriter
              options={{
                cursor: ' █',
                strings: value,
                delay: 30,
                autoStart: true,
              }}
            />
          </div>
          <div className="text-gray-400 text-right leading-tight h-3 -mt-3"><i className="material-icons text-xl md:text-6xl">format_quote</i></div>
        </div>
      </div>
      : // If the quote is falsey, it's still loading
      <div className="text-center py-5">
        <i className="material-icons animate-spin text-5xl text-gray-400">autorenew</i>
      </div>
    }

    <div className="absolute top-0 left-0 w-full h-2 flex">
      <div className="h-2 bg-blue-500 flex-1" />
      <div className="h-2 bg-red-500 flex-1" />
      <div className="h-2 bg-yellow-500 flex-1" />
      <div className="h-2 bg-blue-500 flex-1" />
      <div className="h-2 bg-green-500 flex-1" />
      <div className="h-2 bg-red-500 flex-1" />
    </div>
  </div>
);

Quote.propTypes = {
  onNext: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
}

Quote.defaultProps = {
  onNext: e => e,
  value: null,
}

export default Quote;