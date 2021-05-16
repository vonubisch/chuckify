import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ data, onClick }) => {

  if (!data || !data.length) 
    return null;

  return (
    <ul className="justify-center my-2 select-none text-center text-white font-sans text-sm md:px-32 h-10 md:h-full overflow-scroll md:overflow-auto whitespace-nowrap md:whitespace-normal">
      {data.map((category) => (
        <li key={category.name} className="inline">
          <button 
            className={`py-1 px-3 mb-2 shadow-md no-underline rounded-full bg-${category.color} hover:bg-white hover:text-${category.color} font-semibold focus:outline-none active:shadow-none mx-1`}
            onClick={() => onClick(category.name)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  )

}

Categories.propTypes = {
  data: PropTypes.array,
  onClick: PropTypes.func,
}

Categories.defaultProps = {
  data: [],
  onClick: e => e,
}

export default Categories;