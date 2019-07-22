import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

export default class PokemonCollection extends Component {
  makeCards = () => {
    return this.props.data.map(pokemon => <PokemonCard key={pokemon.id} poke={pokemon} />)
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.makeCards()}
      </Card.Group>
    )
  }
}
