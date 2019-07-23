import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  displayPokebois = () => {
    // this.props.pokemon
    // debugger
    return this.props.pokemon.map((poke) => {
      return <PokemonCard data={poke} changeStateOnSearch={this.props.changeStateOnSearch} key={poke.id}/>
    })
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.displayPokebois()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
