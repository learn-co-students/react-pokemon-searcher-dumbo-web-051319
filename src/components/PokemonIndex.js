import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

export default class PokemonPage extends React.Component {
  state = {
    data: [],
    currentPokemons: [],
    value: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then(pokemons => {
      this.setState({
        currentPokemons: pokemons,
        data: pokemons
      })
    })
  }

  handleSearchChange = (e, { value }) => {
    let result = this.state.data.filter(poke => poke.name.includes(value))
    this.setState({
      currentPokemons: result,
      value: value
    })
  }

  makePoke = (newName, newHp, newFront, newBack) => {
    let newPokemon = {
      height: 0,
      weight: 0,
      name: newName,
      abilities: [],
      moves: [],
      stats: [{}, {}, {}, {}, {}, {value: +newHp, name: "hp"}
      ],
      types:[],
      sprites: {
        front: newFront,
        back: newBack
      }
    }

    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
    .then(resp => resp.json())
    .then(newPoke => {
      this.setState({
        data: [newPoke, ...this.state.data],
        currentPokemons: [newPoke, ...this.state.currentPokemons]
      })
    })

  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonForm makePoke={this.makePoke} />
        <br />
        <PokemonCollection data={this.state.currentPokemons} />
      </div>
    )

  }

}
