import * as APIUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMONS = 'RECEIVE_ALL_POKEMONS'
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemons = (pokemons) => {
    return {
        type: RECEIVE_ALL_POKEMONS,
        pokemons
    };
}

export const requestAllPokemons = () => (dispatch) => {
    return (
        APIUtil.fetchAllPokemons()
            .then(pokemons => dispatch(receiveAllPokemons(pokemons)))
    );
}

export const receivePokemon = (pokemon) => {
    return {
        type: RECEIVE_POKEMON,
        pokemon
    };
}

export const requestPokemon = (pokemon) => (dispatch) => {
    return (
        APIUtil.fetchPokemon(pokemon)
            .then(pokemon => dispatch(receivePokemon(pokemon)))
    );
}
