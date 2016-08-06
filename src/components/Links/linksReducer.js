const initialState = {
    links: [],
    error: false
};

export default function serverReducer(state = initialState, action) {
    switch (action.type) {
        case "links.load.success":
            return onLoadSuccess(state, action.links);
        case "links.load.failed":
            return onLoadFailed(state);
        default:
            return state;
    }
}

function onLoadSuccess(state, links) {
    return {
        ...state,
        links
    }
}

function onLoadFailed(state) {
    return {
        ...state,
        links: [],
        error: true
    }
}