import React from 'react';
import { AboutPage, BookPage, LoginPage, RegisterPage, BerandaPage } from '../pages/index';
import { Switch, Route, withRouter } from 'react-router-dom';
import {
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  SearchComponent,
} from '../components';

import { LoadingCommon, PrivateCommon } from '../commons';

function App() {
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
            <Route path='/login' component={LoginPage} />
            <Route path='/register' component={RegisterPage} />
          </Switch>
        </div>
        <FooterComponent />
      </div>
    </div>
  );
}

export default App;
