import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class PokemonForm extends Component {
  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleSubmit = (event) => {
    let newName = event.target.name.value
    let newHp = event.target.hp.value
    let newFront = event.target.frontUrl.value
    let newBack = event.target.backUrl.value
    this.setState({
      name: newName,
      hp: newHp,
      frontUrl: newFront,
      backUrl: newBack
    })
    this.props.makePoke(newName, newHp, newFront, newBack)
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}
