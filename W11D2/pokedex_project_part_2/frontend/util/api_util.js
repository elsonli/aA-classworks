export const fetchAllPokemons = () => {
    return $.ajax ({
        url: '/api/pokemons',
        method: 'GET'
    });
}

export const fetchPokemon = (pokemon) => {
    return $.ajax ({
        url:`/api/pokemons/${pokemon.id}`,
        method: 'GET'
    })
}