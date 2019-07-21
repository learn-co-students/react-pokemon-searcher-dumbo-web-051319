import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  // state = {pokemenon: []}

  componentDidMount() {
    // debugger
    // console.log(this)
    // fetch('http://localhost:3000/pokemon')
    //   .then((respo) => respo.json())
    //     .then((json) => this.setState({json}))
  }

  // displayPokebois = () => {
    // debugger
  // }
  // {this.displayPokebois()}

  render() {
    return (
      <Card.Group itemsPerRow={6}>
      </Card.Group>
    )
  }
}

export default PokemonCollection
