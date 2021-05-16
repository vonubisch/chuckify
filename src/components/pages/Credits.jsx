import React, { useContext } from 'react';

import { BidirectionalityContext } from '../providers/BidirectionalityProvider';

const ROUTE_CREDITS = '/credits';

// Better to store this data in another place, but this will do for this project
const data = [
  { name: 'React', description: 'Frontend framework', url: 'https://reactjs.org', icon: 'https://reactjs.org/favicon-32x32.png' },
  { name: 'React Router DOM', description: 'Router', url: 'https://reactrouter.com/web/guides/quick-start', icon: 'https://reactrouter.com/favicon-16x16.png' },
  { name: 'TailwindCSS', description: 'UI framework', url: 'https://tailwindcss.com/docs', icon: 'https://tailwindcss.com/favicon-32x32.png' },
  { name: 'Axios', description: 'HTTP requests', url: 'https://axios-http.com', icon: 'https://axios-http.com/assets/favicon.ico' },
  { name: 'Material Icons', description: 'Icon set', url: 'https://material-ui.com/components/icons/', icon: 'https://material-ui.com/static/favicon.ico' },
  { name: 'Typewriter', description: 'Typewriter effect', url: 'https://www.npmjs.com/package/typewriter-effect', icon: 'https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png' },
  { name: 'ESLint', description: 'Pretty code', url: 'https://eslint.org', icon: 'https://eslint.org/assets/img/favicon.512x512.png' },
  { name: 'Firebase Hosting', description: 'Hosting', url: 'https://console.firebase.google.com', icon: 'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/favicon.ico' },
  { name: 'GitHub', description: 'Version control', url: 'https://github.com', icon: 'https://github.githubassets.com/favicons/favicon.png' },
];

const Credits = () => {
  const bid = useContext(BidirectionalityContext);
  return (
    <div className="w-full max-w-screen-xl mx-auto p-0 md:p-6 mt-5">
      <div className="relative rounded overflow-hidden">
        <div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-2 flex direction-left">
            <div className="h-2 bg-blue-500 flex-1" />
            <div className="h-2 bg-red-500 flex-1" />
            <div className="h-2 bg-yellow-500 flex-1" />
            <div className="h-2 bg-blue-500 flex-1" />
            <div className="h-2 bg-green-500 flex-1" />
            <div className="h-2 bg-red-500 flex-1" />
          </div>
          <div className="sm:flex sm:items-center px-2 py-4">
            <div className="flex-grow">
              <h3 className="font-bold text-lg px-5 py-3 leading-tight border-b-1 border-gray-600 text-gray-900">
                Credits
                </h3>
              <div className="w-full">
                {data.map((d) => (
                  <a href={d.url} key={d.name} target="_blank" rel="noreferrer" className="flex cursor-pointer my-1 hover:bg-gray-200 rounded">
                    <div className="w-8 h-10 text-center py-0">
                      <p className={`text-3xl pt-3 text-blue-500 ${bid.isRTL ? 'pr-2' : 'pl-2'}`}>
                        <img src={d.icon} className="h-4 w-4 rounded-lg" alt={d.name} />
                      </p>
                    </div>
                    <div className="w-3/5 h-10 py-2 px-3">
                      <p className="font-bold text-gray-800">
                        {d.name}
                      </p>
                    </div>
                    <div className={`w-3/5 h-10 p-2.5 ${bid.isRTL ? 'text-left' : 'text-right'}`}>
                      <p className="text-sm text-gray-500">
                        {d.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="sm:flex bg-gray-200 sm:items-center px-2 py-4">
            <div className="flex-grow text-center">
              <a href="https://github.com/vonubisch/chuckify/" target="_blank" rel="noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 font-bold rounded">
                <i className="material-icons text-sm mx-2">code</i>
                  View project on GitHub
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
export { ROUTE_CREDITS }