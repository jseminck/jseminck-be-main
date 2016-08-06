import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import LinksPage from "./components/Links/LinksPage";
import LoginPage from './components/Login/LoginPage.js';
import NotFoundPage from './components/NotFoundPage.js';

import ServerOverview from './components/Servers/ServerOverview'; // eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LinksPage} />
    <Route path="servers" component={ServerOverview} />
    <Route path="login" component={LoginPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
