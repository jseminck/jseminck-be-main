import moment from 'moment';
import getServerList from './../../utils/getServerList';

function getInitialState() {
  return {
    time: undefined,
    servers: getServerList().map(server => Object.assign(server, {state: 'loading', delay: 0}))
  };
}

export default function serverReducer(state = getInitialState(), action) {
  switch (action.type) {
    case "server.current.time":
      return setCurrentTime(state);
    case "server.online":
      return modifyServerState(state, action, 'online');
    case "server.offline":
      return modifyServerState(state, action, 'offline');
    default:
      return state;
  }
}

function setCurrentTime(state) {
  return {
    ...state,
    time: moment().unix()
  };
}

function modifyServerState(state, {server, responseTime}, newStateValue) {
  return {
    ...state,
    servers: state.servers.map(server => {
      if (server.name === server.name) {
        server.state = newStateValue;
        server.delay = moment().unix() - state.time;
      }
      return server;
    })
  };
}
