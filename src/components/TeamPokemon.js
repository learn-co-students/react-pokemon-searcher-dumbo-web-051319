import React, { Component } from 'react';
import PokemonCard from './PokemonCard'

class TeamPokemon extends Component {

  newTeam=()=>{
    return this.props.team.map(pokemen => {
    return <PokemonCard key={pokemen.id} pokemen={pokemen} newTeam={this.props.newTeam}/>
    })


  }

  render() {
    return (
      <div>
      <h1>🏅 New Team 🎖</h1>
      {this.newTeam()}
      </div>
    );
  }

}

export default TeamPokemon;
