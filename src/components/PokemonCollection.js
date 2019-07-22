import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render(){
    return(
      <Card.Group itemsPerRow={6}>
      {this.props.pokemons.map(pokemon => {
        const hp_obj = pokemon.stats.find(obj => obj.name === 'hp')
        const hp = hp_obj.value
        return (
            <PokemonCard name={pokemon.name} image={pokemon.sprites.front} hp={hp} backImage={pokemon.sprites.back}/>
        )
      })}
      </Card.Group>
    )
  }




}

export default PokemonCollection
