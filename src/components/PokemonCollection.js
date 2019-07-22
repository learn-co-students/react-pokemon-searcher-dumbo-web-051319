import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {


  grabPokemons = () => {
    return this.props.data.map(pokemon => {
    return  <PokemonCard key={pokemon.id} data={pokemon} />
    })
  }


  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.grabPokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
