const initialState = {
    musics: []
}

function FavoritesReducer(state = initialState, action) {

    switch(action.type) {

        case 'ADD_FAVORITES':

            return { ...state, musics: [ ...state.musics, action.payload ] };

        case 'DEL_FAVORITES':

            return { ...state, musics: [ ...state.musics.filter(music => music !== action.payload) ] };

        default:
            
            return state;

    }
}

export default FavoritesReducer;