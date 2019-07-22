import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchInput: ''
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(json => this.setState({pokemons: json}))
  }

  handleSearch = (event) => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  addPokemon = (pokemonObj) =>{
    this.setState(prevState => {
      return {
        pokemons: [...prevState.pokemons, pokemonObj]
      }
    })
  }


  render() {
    const filteredPokemons = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.searchInput)
    })

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleSearch} showNoResults={false} value={this.state.searchInput}/>
        <br />
        <PokemonCollection pokemons={filteredPokemons}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
