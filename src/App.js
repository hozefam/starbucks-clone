import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Fade } from 'react-awesome-reveal';
import Footer from './Footer';
import Header from './Header';
import HomeScreen from './screens/HomeScreen';
import React from 'react';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
