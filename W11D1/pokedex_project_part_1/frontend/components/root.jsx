import React from 'react';
import { Provider } from 'react-redux';
import PokemonsIndexContainer from './pokemons/pokemons_index_container';


const Root = ({ store }) => (
    <Provider store = {store}>
        <PokemonsIndexContainer />
    </Provider>
);

export default Root; 