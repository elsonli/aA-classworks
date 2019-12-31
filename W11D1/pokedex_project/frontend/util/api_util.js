export const fetchAllPokemons = () => {
    return $.ajax ({
        url: '/api/pokemons',
        method: 'GET'
    });
}

