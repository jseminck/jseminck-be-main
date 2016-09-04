const initialState = {
    translations: [],
    index: 0,
    error: false
};

export default function serverReducer(state = initialState, action) {
    switch (action.type) {
        case 'translations.data.load.success':
            return onDataLoadSuccess(state, action.translations);
        case 'translations.data.load.error':
            return onDataLoadError(state);
        case 'translations.next':
            return onNext(state);
        case 'translations.show':
            return onShow(state);
        default:
            return state;
    }
}

function onDataLoadSuccess(state, translations) {
    return {
        ...state,
        error: false,
        index: 0,
        translations
    };
}

function onDataLoadError(state) {
    return {
        ...state,
        error: true
    };
}

function onNext(state) {
    return {
        ...state,
        show: false,
        index: state.index + 1
    };
}

function onShow(state) {
    return {
        ...state,
        show: true
    };
}