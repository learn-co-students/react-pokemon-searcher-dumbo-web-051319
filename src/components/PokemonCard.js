import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    cardPosition: `${this.props.data.sprites.front}`
    // back: `${this.props.data.sprites.back}`
  }


  flipCard = (event) => {
    // debugger
    // console.log(this.props.data.sprites.back);
    (this.state.cardPosition === this.props.data.sprites.front)?
    this.setState({cardPosition: `${this.props.data.sprites.back}`}):
    this.setState({cardPosition: `${this.props.data.sprites.front}`})
    // event.target.src=this.state.back
    // (this.state.cardPosition === 'front')?
    // event.target.src = this.props.data.sprites.front:
    // event.target.src = this.props.data.sprites.back
  }


  render() {
    // debugger
    return (
      <Card>
        <div onClick={this.flipCard}>
          <div className="image">
            <img src={this.state.cardPosition} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.data.name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.data.stats.find(stat =>stat.name ==='hp').value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
