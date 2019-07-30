import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  displaypokemon=()=>{
    return this.props.pokemen.map(pokemen => {
    return <PokemonCard key={pokemen.id}  pokemen={pokemen} newTeam={this.props.newTeam} addPokemen={this.props.addPokemen}/>
    })

  }
  render() {

    return (
      <Card.Group itemsPerRow={6}>
        <h1>{this.displaypokemon()}</h1>
      </Card.Group>
    )
  }
}

export default PokemonCollection
