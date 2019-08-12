import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

 
  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  
  
  render() {
    console.log(this.state.name)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onChange={this.handleOnChange} onSubmit={this.props.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input type="text" onChange={this.handleOnChange} value={this.state.name} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input type="text" onChange={this.handleOnChange} value={this.state.hp} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input type="text" onChange={this.handleOnChange} value={this.state.frontUrl} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input type="text" onChange={this.handleOnChange} value={this.state.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
