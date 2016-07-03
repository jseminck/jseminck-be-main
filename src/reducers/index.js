import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import serverOverview from './../components/Servers/serverReducer';
import login from './../components/Login/loginReducer';

const rootReducer = combineReducers({
  serverOverview,
  login,
  routing: routerReducer
});

export default rootReducer;
