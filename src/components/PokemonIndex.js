import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {pokemenon: []}


  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then((respo) => respo.json())
        .then((json) => this.setState({pokemon: json}))
  }

  componentWillReceiveProps() {
    console.log(this.state.pokemon)
  }


  render() {
    console.log(this.state.pokemon)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokenmon={this.state.pokemon} />
        <br />
        <PokemonForm />
      </div>
    )
  }
}

export default PokemonPage
