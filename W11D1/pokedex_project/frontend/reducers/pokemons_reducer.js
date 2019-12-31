import {RECEIVE_ALL_POKEMONS} from '../actions/pokemon_actions';

const pokemonsReducer = (oldState = {}, action) => {
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_POKEMONS:
            const keys = Object.keys(action.pokemons);

            keys.forEach( key => {
                newState[key] = action.pokemons[key];
            });
            return newState;

        default: 
            return oldState;
    }
}

export default pokemonsReducer;