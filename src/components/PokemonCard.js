import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    cardflipped:false
  }

  handleClick=()=>{
      this.setState({
        cardflipped:true
      });
  }


  clickTeam=(event)=>{
    this.props.newTeam(this.props.pokemen)
  }



  render() {
      const sprite = this.state.cardflipped ? this.props.pokemen.sprites.back:this.props.pokemen.sprites.front


    return (
      <Card >
        <div>
          <div className="image">
          <button onClick={this.clickTeam}>🎳</button>
            <img onClick={this.handleClick} src={sprite} />
          </div>
          <div className="content">
            <div className="header"> {this.props.pokemen.name} </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemen.stats.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
