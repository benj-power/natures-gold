import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Home } from './home/Home';

const App = () => (
  <BrowserRouter basename={ process.env.PUBLIC_URL }>
    <Header />

    <main>
      <Switch>
        <Route exact path="/" component={ Home } />
        {/*<Route exact path="/" component={ About Us } />*/ }
        {/*<Route exact path="/" component={ OurHoney } />*/ }
        {/*<Route exact path="/" component={ BlogsNews } />*/ }
      </Switch>
    </main>

    <Footer />
  </BrowserRouter>
);

export default App;
