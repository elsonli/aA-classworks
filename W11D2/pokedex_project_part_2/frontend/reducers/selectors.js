export const selectAllPokemons = (state) => {
    return Object.values(state.entities.pokemons)
} 