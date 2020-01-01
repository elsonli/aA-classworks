import React from 'react';
import ReactDOM from 'react-dom';
import * as PokemonActions from './actions/pokemon_actions'
import * as ApiUtil from './util/api_util';
import configureStore from './store/store';
import * as Selectors from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    window.receiveAllPokemons = PokemonActions.receiveAllPokemons;
    window.fetchAllPokemons = ApiUtil.fetchAllPokemons;
    
    window.selectAllPokemons = Selectors.selectAllPokemons;

    const store = configureStore();

    window.requestAllPokemons = PokemonActions.requestAllPokemons; 
    window.getState = store.getState;
    window.dispatch = store.dispatch

    ReactDOM.render(<Root store={store}/>, root);
});
