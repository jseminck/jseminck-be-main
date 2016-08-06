export function onSetState(server) {
    return function (dispatch) {
        return fetchPingServer(server).then(
            (json) => dispatch(onServerOnline(server, json.time)),
            () => dispatch(onServerOffline(server))
        );
    };
}

export function onSetCurrentTime() {
    return {type: "server.current.time"};
}

function fetchPingServer(server) {
    const url = `http://${server.heroku}.herokuapp.com/api/ping`;
    return fetch(url).then(response => response.json());
}

function onServerOnline(server, responseTime) {
    return {type: "server.online", server: server, responseTime: responseTime};
}


function onServerOffline(server, responseTime) {
    return {type: "server.offline", server: server, responseTime: responseTime};
}

