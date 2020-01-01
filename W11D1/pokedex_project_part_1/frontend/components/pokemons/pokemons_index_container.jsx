import { connect } from 'react-redux';
import * as Selectors from '../../reducers/selectors';
import PokemonsIndex from './pokemons_index';
import * as PokemonActions from '../../actions/pokemon_actions';

const mapStateToProps = state => ({
    pokemons: Selectors.selectAllPokemons(state)
});

const mapDispatchToProps = dispatch => ({
    requestAllPokemons: () => PokemonActions.requestAllPokemons()(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsIndex);