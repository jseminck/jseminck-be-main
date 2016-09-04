export function onNewGame() {
    return function (dispatch) {
        return fetchStartNewGame().then(
            (json) => dispatch(onDataLoadSuccess(json)),
            () => dispatch(onDataLoadError())
        );
    };
}

function onDataLoadSuccess(translations) {
    return {type: "translations.data.load.success", translations};
}

function onDataLoadError(translations) {
    return {type: "translations.data.load.error", translations};
}

function fetchStartNewGame() {
    const url = "http://translation.jseminck.be/api/game/start?language=Estonian";
    return fetch(url).then(response => response.json());
}
