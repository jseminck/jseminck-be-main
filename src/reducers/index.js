import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import serverOverview from './../components/Servers/reducer';
import links from './../components/Links/reducer';
import login from './../components/Login/reducer';

const rootReducer = combineReducers({
    links,
    serverOverview,
    login,
    routing: routerReducer
});

export default rootReducer;
