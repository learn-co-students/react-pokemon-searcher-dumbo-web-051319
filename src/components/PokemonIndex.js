import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import TeamPokemon from './TeamPokemon'



class PokemonPage extends React.Component {

  state = {
    pokemen:[],
    searchTerm:'',
    team:[]

  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(pokeData => this.setState ({
      pokemen:pokeData})
    )}

    onChange=(event)=>{
      this.setState({
        searchTerm:event.target.value
      });
    }

    addPokemen=(newpokemon)=>{
      const pokemen ={
        name:newpokemon.name,
        stats: [
          {
            value:newpokemon.hp,
            name:"hp"
          }
        ],
        sprites:{
          front:newpokemon.frontUrl,
          back:newpokemon.backUrl
        }
      }
      this.setState({
      pokemen:[...this.state.pokemen,newpokemon]
      });

    }

    newTeam=(player)=>{
      this.setState({
        team:[...this.state.team,player]
      });
    }


    filteredPokemon=()=>{
        return this.state.pokemen.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    }

  render() {

    // const filteredPokemon = this.state.pokemen
    //  .filter(pokemen =>  pokemen.name.includes(this.state.searchTerm))
    return (
      <div>
        <PokemonForm addPokemen={this.addPokemen}/>
        <h1>Pokemon Searcher</h1>
        <br/>
        <br/>
        <TeamPokemon team={this.state.team} />
        < input type="search" value={this.state.searchTerm} onChange={this.onChange} placeholder="Search"/>
        <br />
        <br/>
        <PokemonCollection newTeam={this.newTeam} addPokemen={this.addPokemen} pokemen={this.filteredPokemon()}/>
        <br />

      </div>
    )
  }
}



export default PokemonPage
