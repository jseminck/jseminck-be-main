import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import serverOverview from './../components/Servers/serverReducer';
import links from './../components/Links/linksReducer';
import login from './../components/Login/loginReducer';

const rootReducer = combineReducers({
    links,
    serverOverview,
    login,
    routing: routerReducer
});

export default rootReducer;
