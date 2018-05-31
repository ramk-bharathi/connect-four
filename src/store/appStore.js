import {createStore, combineReducers} from 'redux';
import GameReducer from "./reducers/game-reducer";

const rootReducer = combineReducers({
    game: GameReducer
});

const appStore =() => {
    return createStore(rootReducer);
};

export default appStore;