import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {front: true}

  displayHP = () => {
    let hP = this.props.data.stats.find((stat) => stat.name === 'hp')
    // debugger
    return hP.value
  }

  displayImage = () => {
    if (this.state.front === true) {
      return <img alt="oh no!" src={this.props.data.sprites.front} />
    } else {
      return <img alt="oh no!" src={this.props.data.sprites.back} />
    }
  }

  flipPokeboi = () => {
    this.setState({front: !this.state.front})
  }

  render() {
    // console.log(this.props)
    // debugger
    return (
      <Card>
        <div>
          <div onClick={this.flipPokeboi} className="image">
            {this.displayImage()}
          </div>
          <div className="content">
            <div className="header">{this.props.data.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.displayHP()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
