import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { BidirectionalityContext } from '../providers/BidirectionalityProvider';

const Author = ({ name, description, facebookURL, instagramURL, twitterURL }) => {
  const bid = useContext(BidirectionalityContext);
  return (
    <div className="container mx-auto w-f mt-10 lg:px-64 xl:px-96">
      <div className="bg-gray-900 rounded-xl py-5  pb-7 shadow-lg relative overflow-hidden px-5 md:px-10">
        <img src="img/logo.png" alt="Chuckify logo" className="rounded-full w-12 md:w-20 shadow-xl absolute mt-2" />
        <div className={`${bid.isRTL ? 'pr-16 md:pr-32' : 'pl-16 md:pl-32'}`}>
          <h2 className="font-bold block text-lg text-white mb-1">
            {name}
          </h2>
          <h3 className="text-gray-500 text-sm block">
            {description}
          </h3>
          <div className="text-gray-400 text-xs pt-5">
            {facebookURL ?
              <a href={facebookURL} className="bg-gray-800 hover:bg-gray-700 py-1 px-3 rounded mr-1" target="_blank" rel="noreferrer">
                Facebook
              </a>
              : null
            }
            {twitterURL ?
              <a href={twitterURL} className="bg-gray-800 hover:bg-gray-700 py-1 px-3 rounded mr-1" target="_blank" rel="noreferrer">
                Twitter
              </a>
              : null
            }
            {instagramURL ?
              <a href={instagramURL} className="bg-gray-800 hover:bg-gray-700 py-1 px-3 rounded mr-1" target="_blank" rel="noreferrer">
                Instagram
              </a>
              : null
            }
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 flex direction-ltr">
          <div className="h-2 bg-blue-500 flex-1" />
          <div className="h-2 bg-green-500 flex-1" />
          <div className="h-2 bg-red-500 flex-1" />
          <div className="h-2 bg-yellow-500 flex-1" />
          <div className="h-2 bg-blue-500 flex-1" />
          <div className="h-2 bg-red-500 flex-1" />
        </div>
      </div>
    </div>
  );
};

Author.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  facebookURL: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  instagramURL: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  twitterURL: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
}

Author.defaultProps = {
  name: "John doe",
  description: "It's empty here",
  facebookURL: null,
  instagramURL: null,
  twitterURL: null,
}

export default Author;