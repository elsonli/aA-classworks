import React from 'react';

class PokemonsIndex extends React.Component {
    constructor(props) {
        super(props);
    }  

    componentDidMount() {
        this.props.requestAllPokemons();
    }

    render() {

        return (
            <ul>
                {
                this.props.pokemons.map((pokemon, idx) => {
                    return (
                        <li key={idx}> 
                            {pokemon.name} 
                            <img src={pokemon.image_url} width='150' height='150'/>
                        </li>
                    )
                })
                }
            </ul>
        )
    }

} 


export default PokemonsIndex; 