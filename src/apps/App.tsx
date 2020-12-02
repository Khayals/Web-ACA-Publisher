import React, { useState, useEffect } from 'react';
import {
  AboutPage,
  BookPage,
  LoginPage,
  RegisterPage,
  BerandaPage,
} from '../pages/index';
import { Switch, Route, withRouter } from 'react-router-dom';
import {
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  SearchComponent,
} from '../components';

import { LoadingCommon, PrivateCommon } from '../commons';

function App () {
  const [state, setState] = useState({
    userStatus: '',
    userInfo: '',
    isAuthenticated: false,
  });
  if (state.userStatus === 'user') {
    return (
      <div>
        <LoadingCommon />
        <div className='wrapper kode-header-class-3'>
          <HeaderComponent />
          <BannerComponent />
          <SearchComponent />
          <div className='kode-content'>
            <Switch>
              <Route exact path='/' render={props => <AboutPage />} />
              <Route path='/beranda' component={BerandaPage} />
              <Route path='/book' component={BookPage} />
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </div>
    );
  } else if (state.userStatus === 'admin') {
  } else {
    return (
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    );
  }
}

export default App;
