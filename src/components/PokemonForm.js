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



    handleSubmit = (event) =>{
      event.preventDefault()
      this.props.handleNewPokemon(this.state)
    }

    handleChange= event => {
      this.setState({
        [event.target.name]: event.target.value
      }, () => {console.log(this.state);})
    }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <form onSubmit={this.handleSubmit}>
        
        <input onChange={this.handleChange} placeholder="Name" type='text' value={this.state.name} name= 'name'/>

        <input onChange={this.handleChange} placeholder="HP" type='text' value={this.state.hp} name= 'hp'/>

        <input onChange={this.handleChange} placeholder="frontUrl" type='text' value={this.state.frontUrl} name= 'frontUrl'/>

        <input onChange={this.handleChange} placeholder="backUrl" type='text' value={this.state.backUrl} name= 'backUrl'/>

        <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default PokemonForm



// <Form onSubmit={this.handleSubmit}>
// <Form.Group widths="equal">
// <Form.Input fluid label="Name" placeholder="Name" name="name" />
// <Form.Input fluid label="hp" placeholder="hp" name="hp" />
// <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
// <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
// </Form.Group>
// <Form.Button>Submit</Form.Button>
