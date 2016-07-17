import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import serverReducer from './../components/Servers/serverReducer';

const rootReducer = combineReducers({
  serverOverview: serverReducer,
  routing: routerReducer
});

export default rootReducer;
