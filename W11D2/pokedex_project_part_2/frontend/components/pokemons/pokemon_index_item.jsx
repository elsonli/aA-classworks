import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
    return (
        <li key={props.pokemon.id}>
            {props.pokemon.name}
            <img src={props.pokemon.image_url} width='150' height='150' />
            <Link to={`/pokemons/${props.pokemon.id}`}>  <br></br> Yee Haw Mahda Pahka </Link>
        </li>
    )
};


export default PokemonIndexItem; 