import * as PokemonAction from '../actions/pokemon_actions';

const pokemonsReducer = (oldState = {}, action) => {
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case PokemonAction.RECEIVE_ALL_POKEMONS:
            const keys = Object.keys(action.pokemons);

            keys.forEach( key => {
                newState[key] = action.pokemons[key];
            });
            return newState;

        case PokemonAction.RECEIVE_POKEMON: 
            newState[action.pokemon.id] = action.pokemon;
            return newState;     

        default: 
            return oldState;
    }
}

export default pokemonsReducer;