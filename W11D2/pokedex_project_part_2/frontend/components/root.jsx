import React from 'react';
import { Provider } from 'react-redux';
import PokemonsIndexContainer from './pokemons/pokemons_index_container';
import { HashRouter, Route } from "react-router-dom";
import PokemonDetail from './pokemons/pokemon_detail';

const Root = ({ store }) => (
    <Provider store = {store}>
        <HashRouter>
            <Route path="/pokemon/:id" component={PokemonDetail} />
            <Route path="/" component={PokemonsIndexContainer} />
        </HashRouter>
    </Provider>
);

export default Root;  