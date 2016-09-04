import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import serverOverview from './../components/Servers/reducer';
import links from './../components/Links/reducer';
import login from './../components/Login/reducer';
import translation from './../components/Translation/reducer';

const rootReducer = combineReducers({
    links,
    serverOverview,
    login,
    translation,
    routing: routerReducer
});

export default rootReducer;
