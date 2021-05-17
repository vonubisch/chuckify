import React, { useState, useEffect, useContext } from 'react';

import Quote from '../widgets/Quote';
import Author from '../widgets/Author';
import Categories from '../widgets/Categories';
import Searchbar from '../widgets/Searchbar';
import NextButton from '../buttons/NextButton';
import RandomButton from '../buttons/RandomButton';
import Alert from '../widgets/Alert';

import { QuotesContext } from '../providers/QuotesProvider';
import { CategoriesContext } from '../providers/CategoriesProvider';

import api from '../../api';

const ROUTE_QUOTES = '/';

const Quotes = () => {
  
  const [alert, setAlert] = useState(null);
  
  const { setData, quote, quotes, getNext, hasNext} = useContext(QuotesContext);
  const categories = useContext(CategoriesContext);
  
  const { get, source, isCancel } = api(); // Create API instance and get cancel-able source

  // Event handlers
  const onSuccess = ({ data }) => setData([ data ]);
  const onFail = e => !isCancel(e) && setAlert('Connection to API lost'); // Check if request is not manually canceled, otherwise display error
  
  // Get a random quote
  const getRandom = () => get('random').then(onSuccess).catch(onFail);

  // Get a random quote from a category
  const getFromCategory = (category) => get(`random?category=${category}`).then(onSuccess).catch(onFail);

  // Search for a quote
  const searchQuote = (query) => {
    if (query.length < 3) {
      return setAlert('Minimum of 3 characters')
    }
    return get(`search?query=${query}`).then(({ data: { total, result } }) => {
      if (!result || !total) {
        setAlert(`Nothing matched '${query}', so we generated a random quote..`);
        return getRandom();
      }
      setData(result);
    }).catch(onFail);
  }

  useEffect(() => {
    getRandom(); // Initially fetch random quote
    return () => {
      source.cancel(); // Clear up any pending API calls
    };
  }, []);

  return (
    <>
      <Searchbar
        onSubmit={searchQuote}
        results={quotes.length}
      />

      {alert ?
        <Alert value={alert} setAlert={setAlert} />
        : 
        <Categories
          data={categories}
          onClick={getFromCategory}
        />
      }
      
      <Quote value={quote && quote.value} />

      <div className="text-center mt-5 flex justify-center md:flex-reverse">
        <RandomButton 
          onClick={getRandom} 
          prominent={!hasNext}
        />
        {hasNext ?
          <NextButton onClick={getNext} />
          : null
        }
      </div>

      <Author
        name={`Carlos Ray 'Chuck' Norris`}
        description="is an American martial artist, actor, film producer, and screenwriter."
        twitterURL="https://twitter.com/chucknorris"
        instagramURL="https://www.instagram.com/chucknorris/"
      />
    </>
  )
}

export default Quotes;
export { ROUTE_QUOTES }