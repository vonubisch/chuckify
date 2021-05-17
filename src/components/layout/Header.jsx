import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { withRouter, Link } from 'react-router-dom';

import { ROUTE_QUOTES } from '../pages/Quotes';
import { ROUTE_CREDITS } from '../pages/Credits';
import { BidirectionalityContext } from '../providers/BidirectionalityProvider';

// Define structure for navigation items
const pages = {
  [ROUTE_QUOTES]: { name: 'Quotes', icon: 'message' },
  [ROUTE_CREDITS]: { name: 'Credits', icon: 'stars' }
};

const Header = ({ location: { pathname } }) => {
  const bid = useContext(BidirectionalityContext);
  return (
    <nav id="header" className={`p-2.5 text-gray-500 bg-gray-900 rounded-lg shadow-lg flex relative ${bid.isRTL ? 'flex-reverse' : ''}`}>

      {/* Logo */}
      <Link to="/" className={`px-2 border-gray-800 ${bid.isRTL ? 'ml-2 border-l' : 'mr-2 border-r'}`}>
        <img src="img/logo.png" alt="Chuckify logo" className="w-8 h-8 inline mx-auto" />
        <h1 className="font-bold text-lg mx-3 inline text-white">
          Chuck<span className="font-normal text-gray-400">ify</span>
        </h1>
      </Link>

      {/* Navigation items */}
      {Object.entries(pages).map(([ route, data ]) => (
        <Link key={route} to={route} className="px-1 mt-1 hover:text-white cursor-pointer transition-colors">
          <span className={`mx-1 p-2 px-4 border-blue-500 rounded-sm font-bold transition-colors ${pathname === route ? 'text-white border-b-2' : 'font-medium hover:bg-gray-800'}`}>
            <i className={`material-icons text-xs ${bid.isRTL ? 'md:ml-3' : 'md:mr-3'}`}>{data.icon}</i>
            <span className="hidden md:inline">
              {data.name}
            </span>
          </span>
        </Link>
      ))}

      {/* RTL/LTR control */}
      <a href="#" id="button-bidirectionality" onClick={() => bid.toggle()} className={`hover:text-white cursor-pointer absolute mt-1 ${bid.isRTL ? 'left-4' : 'right-3'}`}>
        <span className="font-medium">
          <i className={`material-icons ${bid.isRTL ? '' : 'icon-flip'}`}>segment</i> 
        </span>
        <span className={`absolute right-0 top-0 -mt-1 text-xs -mr-1 bg-gray-800 text-gray-200 font-medium px-2 rounded-full uppercase`}>
          {bid.value}
        </span>
      </a>

    </nav>
  );
};

Header.propTypes = {
  location: PropTypes.object,
};

Header.defaultProps = {
  location: { pathname: '' },
};

export default withRouter(Header);