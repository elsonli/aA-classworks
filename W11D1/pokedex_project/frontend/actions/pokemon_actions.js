import * as APIUtil from "../util/api_util";

export const RECEIVE_ALL_POKEMONS = 'RECEIVE_ALL_POKEMONS'


export const receiveAllPokemons = (pokemons) => {
    return {
        type: RECEIVE_ALL_POKEMONS,
        pokemons
    }
}

export const requestAllPokemons = () => (dispatch) => {
    return (
        APIUtil.fetchAllPokemons()
            .then(pokemons => dispatch(receiveAllPokemons(pokemons)))
    );
}