import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {pokemon: [
    {
      "height": 0,
      "weight": 0,
      "id": 0,
      "name": "",
      "sprites": {front: "", back: ""},
      "abilities": [""],
      "moves": [],
      "stats": [
        {
          "value": 0,
          "name": "special-defense"
        },
        {
          "value": 0,
          "name": "special-attack"
        },
        {
          "value": 0,
          "name": "defense"
        },
        {
          "value": 0,
          "name": "attack"
        },
        {
          "value": 0,
          "name": "speed"
        },
        {
          "value": 0,
          "name": "hp"
        }]
      }]
    }


  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then((respo) => respo.json())
        .then((json) => this.setState({pokemon: json}))
  }

  setAllPokemonToState = () => {
    fetch('http://localhost:3000/pokemon')
      .then((respo) => respo.json())
        .then((json) => this.setState({pokemon: json}))
  }

  componentWillReceiveProps() {
    console.log(this.state.pokemon)
  }

  fetchPostPokemon = (pokeboi) => {
    // debugger
    let protoObj = {
      "height": 0,
      "weight": 0,
      "id": 0,
      "name": "",
      "sprites": {front: "", back: ""},
      "abilities": [""],
      "moves": [],
      "stats": [
        {
          "value": 0,
          "name": "special-defense"
        },
        {
          "value": 0,
          "name": "special-attack"
        },
        {
          "value": 0,
          "name": "defense"
        },
        {
          "value": 0,
          "name": "attack"
        },
        {
          "value": 0,
          "name": "speed"
        },
        {
          "value": 0,
          "name": "hp"
        }]
      }

      protoObj.name = pokeboi.name
      protoObj.sprites = {front: pokeboi.frontUrl, back: pokeboi.backUrl}
      protoObj.stats[5] = {"value": pokeboi.hp, "name": "hp"}
      fetch('http://localhost:3000/pokemon', {
        method: "POST",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(protoObj)
      })
        .then(() => {
          this.setAllPokemonToState()
        })
  }

  changeStateOnSearch = (e) => {
    let query = document.querySelector('.ui.icon.input').firstChild.value
    if(query === "") {
      return
    }
    let result = []
    if(query) {
      result = this.state.pokemon.find ((pokeboi) => {
        return pokeboi.name === query
      })
    }
    if(result) {
      this.setState({pokemon: [result]})
    } else {
      // debugger
      this.setAllPokemonToState()
    }
  }

  render() {
    // console.log(this.state.pokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <Search
          onSearchChange={_.debounce((event) => this.changeStateOnSearch(event))}
          showNoResults={false}
          // <Input />
        />
        <br />
        <PokemonForm fetchPostPokemon={this.fetchPostPokemon} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </div>
    )
  }
}

export default PokemonPage
