import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonsIndex extends React.Component {
    constructor(props) {
        super(props);
    }  

    componentDidMount() {
        this.props.requestAllPokemons();
    }

    render() {

        return (
            <section className="pokedex">    
                <ul>
                    {
                    this.props.pokemons.map(pokemon => {
                        return <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />
                    })
                    }
                </ul>
            </section>
        )
    }

} 


export default PokemonsIndex; 