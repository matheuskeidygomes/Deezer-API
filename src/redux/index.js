import { combineReducers } from 'redux';
import FavoritesReducer from './reducers/FavoritesReducer';

export default combineReducers({

    ListFavorites: FavoritesReducer,
    
});