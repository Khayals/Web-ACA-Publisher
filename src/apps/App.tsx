import React from 'react';
import { AboutPage, BookPage, LoginPage, RegisterPage } from '../pages/index';
import { Switch, Route, withRouter } from 'react-router-dom';

function App () {
  return (
    <Switch>
      <Route exact path='/' render={props => <AboutPage />} />
      <Route path='/book' component={BookPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/register' component={RegisterPage} />
    </Switch>
  );
}

export default App;
