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

  handleSubmit = (e) => {
    let newPokeboi = {
      [e.target.name.name]: e.target.name.value,
      [e.target.hp.name]: e.target.hp.value,
      [e.target.frontUrl.name]: e.target.frontUrl.value,
      [e.target.backUrl.name]: e.target.backUrl.value,
    }
    // debugger
    // let formDivs = Array.prototype.slice.call(e.target.firstChild.children)
    // let newPokeboi = {}
    // formDivs.forEach((div) => {
    //   newPokeboi[div.children[1].firstChild.name] = div.children[1].firstChild.value
    // })
    this.props.fetchPostPokemon(newPokeboi)
  }

  handleChange = (e) => {
    // debugger
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="H P" placeholder="hp" name="hp" onChange={this.handleChange} />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
