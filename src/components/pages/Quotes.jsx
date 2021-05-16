import React, { useEffect, useContext } from 'react';

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

  const { quote, quotes, setQuotes, activeIndex, setActiveIndex, hasNextItem, alert, setAlert } = useContext(QuotesContext);
  const categories = useContext(CategoriesContext);

  const getRandomQuote = () => {
    return api.random().then(r => {
      setQuotes([r.data]);
      setActiveIndex(0);
    });
  }

  const getRandomQuoteFromCategory = (category) => {
    return api.randomCategory(category).then(r => {
      setQuotes([r.data]);
      setActiveIndex(0);
    });
  }

  const searchQuote = (query) => {
    if (query.length < 3) {
      return setAlert('Minimum of 3 characters')
    }
    return api.search(query).then(r => {
      if (!r.data || !r.data.total) {
        setAlert(`Nothing matched '${query}', so we generated a random quote..`);
        return getRandomQuote();
      }
      setQuotes(r.data.result);
      setActiveIndex(0);
    });
  }

  const getNextQuote = () => {
    if (!hasNextItem) return;
    setActiveIndex(activeIndex + 1);
  }

  useEffect(() => {
    getRandomQuote();
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
          onClick={getRandomQuoteFromCategory}
        />
      }
      
      <Quote value={quote && quote.value} />

      <div className="text-center mt-5 flex justify-center md:flex-reverse">
        <RandomButton 
          onClick={getRandomQuote} 
          prominent={!hasNextItem}
        />
        {hasNextItem ?
          <NextButton onClick={getNextQuote} />
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