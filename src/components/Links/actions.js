export function onLoad() {
    return function (dispatch) {
        return fetchLinkData().then(
            (json) => dispatch(onDataLoadSuccess(json)),
            () => dispatch(onDataLoadFailed())
        );
    };
}

function onDataLoadSuccess(links) {
    return {type: "links.load.success", links};
}

function onDataLoadFailed() {
    return {type: "links.load.failed"};
}

function fetchLinkData() {
    const url = "http://ancient-tundra-31260.herokuapp.com/api/links";
    return fetch(url).then(response => response.json());
}