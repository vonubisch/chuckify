import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Alert = ({ value, setAlert }) => {

  if (!value || !value.length)
    return null;

  // Using a timer to close the alert is not pretty, but works for this simple app
  useEffect(() => {
    const timer = setTimeout(() => setAlert(null), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="alert" className={`alert flex flex-row items-center mt-2 mb-4 mx-32 p-3 bg-yellow-200 rounded-xl border-yellow-600 transition-all`}>
      <div className="alert-icon flex items-center bg-yellow-100 border-2 border-yellow-500 justify-center h-8 w-8 flex-shrink-0 rounded-full">
        <span className="text-yellow-500">
          <svg fill="currentColor" viewBox="0 0 20 20" className="h-6 w-6">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
          </svg>
        </span>
      </div>
      <div className="alert-content mx-4">
        <div className="alert-description text-normal font-bold text-yellow-600">
          {value}
        </div>
      </div>
    </div>
  );
};

Alert.propTypes = {
  setAlert: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

Alert.defaultProps = {
  setAlert: e => e,
  value: null,
};

export default Alert;