import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    currentImg: this.props.poke.sprites.front
  }

  handleClick = (event) => {
    let front = this.props.poke.sprites.front
    let back = this.props.poke.sprites.back
    if(this.state.currentImg === front) {
      this.setState({
        currentImg: back
      })
    } else {
      this.setState({
        currentImg: front
      })
    }
  }

  render() {
    let hpStat = this.props.poke.stats.find(stat => stat.name === "hp").value
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.currentImg} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
                {hpStat} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
