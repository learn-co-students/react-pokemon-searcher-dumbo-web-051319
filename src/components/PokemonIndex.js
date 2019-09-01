import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import OurSearchBar from './OurSearchBar.js'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state={
    data: [],
    searchTerm: ''
  }

  filteredPokemons = () => {
    return this.state.data.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm)
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => this.setState({data: data}))
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleNewPokemon = (newPokemon) => {
    const pokemonObj = {
      id: 1,
      name: newPokemon.name,
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      },
      stats: [
        {
          name: 'hp' ,
          value: parseInt(newPokemon.hp)
        }
      ]
    }

    fetch ('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(pokemonObj)
    })
    .then(res => res.json())
    .then(newestPokemon => {
      this.setState({
        data: [...this.state.data, newestPokemon]
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <OurSearchBar handleChange={this.handleChange}  />
        <br />
        <PokemonForm
        handleNewPokemon={this.handleNewPokemon}
        />
        <br />
        <PokemonCollection
        data={this.filteredPokemons()}
        />
      </div>
    )
  }
}

export default PokemonPage
