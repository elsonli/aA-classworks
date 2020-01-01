import {combineReducers} from 'redux';
import pokemonsReducer from './pokemons_reducer';

const entitiesReducer = combineReducers ({
    pokemons: pokemonsReducer
});

export default entitiesReducer;