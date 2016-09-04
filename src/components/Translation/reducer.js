const initialState = {
    translations: [],
    error: false
};

export default function serverReducer(state = initialState, action) {
    switch (action.type) {
        case 'translations.data.load.success':
            return onDataLoadSuccess(state, action.translations);
        case 'translations.data.load.error':
            return onDataLoadError(state);
        default:
            return state;
    }
}

function onDataLoadSuccess(state, translations) {
    return {
        ...state,
        error: false,
        translations
    };
}

function onDataLoadError(state) {
    return {
        ...state,
        error: true
    };
}