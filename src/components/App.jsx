import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Container from './layout/Container';
import Quotes, { ROUTE_QUOTES } from './pages/Quotes';
import Credits, { ROUTE_CREDITS } from './pages/Credits';
import BidirectionalityProvider from './providers/BidirectionalityProvider';
import QuotesProvider from './providers/QuotesProvider';
import CategoriesProvider from './providers/CategoriesProvider';

const App = () => (
  <React.StrictMode>
    <BidirectionalityProvider>
      <CategoriesProvider>
        <Container>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path={ROUTE_CREDITS}> {/* Define route exact path first */}
                <Credits />
              </Route>
              <Route path={ROUTE_QUOTES}> {/* Everything else matches this route */}
                <QuotesProvider>
                  <Quotes />
                </QuotesProvider>
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </Container>
      </CategoriesProvider>
    </BidirectionalityProvider>
  </React.StrictMode>
);

export default App;
