const initialState = {
    translations: []
};

export default function serverReducer(state = initialState, action) {
    switch (action.type) {
        case 'translation.new.game':
            return onNewGame(state, action.translations);
        default:
            return state;
    }
}

function onNewGame(state, translations) {
    return {
        ...state,
        translations
    };
}