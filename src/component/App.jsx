import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { About } from './about/About';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Home } from './home/Home';
import { OurHoney } from './our-honey/OurHoney';
import { FourOFour } from './404/FourOFour';

const App = () => (
  <BrowserRouter basename={ process.env.PUBLIC_URL }>
    <Header />

    <main>
      <Switch>
        <Route path="/" exact name="home" component={ Home } />
        <Route path="/about" exact component={ About } />
        <Route exact path="/honey" component={ OurHoney } />
        {/*<Route exact path="/" component={ BlogsNews } />*/ }

        <Route component={ FourOFour } />
      </Switch>
    </main>

    <Footer />
  </BrowserRouter>
);

export default App;
