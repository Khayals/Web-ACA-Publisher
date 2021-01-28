import React, { useState, useEffect } from 'react';
import {
  AboutPage,
  BookPage,
  LoginPage,
  RegisterPage,
  BerandaPage,
  UploadPage
} from '../pages/index';
import { Switch, Route, withRouter } from 'react-router-dom';

import { LoadingCommon, PrivateCommon } from '../commons';

function App() {
  const [state, setState] = useState({
    userStatus: '',
    userInfo: '',
    isAuthenticated: false,
  });
  if (state.userStatus === 'user') {
    return (
      <div>
        <LoadingCommon />
        <Switch>
          <Route exact path='/' component={BerandaPage} />
          <Route path='/tentang-kami' render={props => <AboutPage />} />
          <Route path='/buku' component={BookPage} />
        </Switch>
      </div>
    );
  } else if (state.userStatus === 'admin') {
    return <div></div>;
  } else {
    return (
      <Switch>
        <Route exact path='/' component={BerandaPage} />
        <Route path='/tentang-kami' render={props => <AboutPage />} />
        <Route path='/buku' component={BookPage} />
        <Route path='/penulis' component={UploadPage} />
        <Route path='/masuk' component={LoginPage} />
        <Route path='/daftar' component={RegisterPage} />
      </Switch>
    );
  }
}

export default App;
