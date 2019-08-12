import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {


  state = {
    allPokemon: [], 
   

}


  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => this.setState({
        allPokemon: data
      }))
}

  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
        
          name: event.target.name,
          abilities: [
          ],
         
          "stats": [
            {
              value: event.target.hp,
              "name": "hp"
            }
          ],
        
          "sprites": {
            front: event.target.front,
            back: event.target.back
          }
      })
    })

  }

  render() {

    // console.log(this.state.allPokemon)


    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection allPokemon={this.state.allPokemon} />
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonPage
