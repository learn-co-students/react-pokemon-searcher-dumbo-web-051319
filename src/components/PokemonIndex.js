import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
// import { Search } from 'semantic-ui-react'
import Search from './Search'
import Filter from './Filter'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemon`)
    .then(res => res.json())
    .then(allpokemon => {
      this.setState({pokemon: allpokemon})
      })
  }

  handleSearchChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  getSearchResults = () => {
    return [...this.state.pokemon].filter(poke => poke.name.includes(this.state.searchTerm))
  }

  handleNewPokemon = (pokeInput) => {
    const pokeObject = {
      name: pokeInput.name,
      sprites: {
        front: pokeInput.frontUrl,
        back: pokeInput.backUrl
      },
      stats: [
      {
        name: "hp",
        value: +pokeInput.hp
      }
      ]
    }

    fetch(`http://localhost:3000/pokemon`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(pokeObject)
      })
      .then(res => res.json())
      .then(newPoke => {
        this.setState({
          pokemon: [...this.state.pokemon, newPoke]
          })
        })
  }

  getHP = (poke) => {
    return +poke.stats.find(stat => stat.name === "hp").value
  }

  handleFilterChange = (e) => {
    let sorted;
    switch (e.target.value) {
      case "name":
      sorted = [...this.state.pokemon].sort((a,b) => a.name.localeCompare(b.name))
      break;
      case "hp":
      sorted = [...this.state.pokemon].sort((a,b) => this.getHP(a) - this.getHP(b))
      break;
      case "":
      sorted = [...this.state.pokemon].sort((a,b) => a.id - b.id)
      }
    this.setState({
      pokemon: sorted
      })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search searchTerm={this.state.searchTerm} onSearchChange={this.handleSearchChange} />
        <br />
        <Filter onChange={this.handleFilterChange}/>
        <br />
        <PokemonCollection pokemon={this.getSearchResults()}/>
        <br />
        <PokemonForm onNewPokemon={this.handleNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
