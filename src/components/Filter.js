import React from 'react';

class Filter extends React.Component {

  state = {
        "value": 0,
        "name": "hp"
      }

  handleChange = (e) => {
    // debugger
    this.props.filterByHP(e.target.value.slice(13))
  }

  render() {
    return(
      <div>
        <br/>
        <h3>Sort by H P:</h3>
        <select onChange={this.handleChange}>
          <option name='attack' >Greater than 10</option>
          <option name='attack' >Greater than 20</option>
          <option name='attack' >Greater than 30</option>
          <option name='attack' >Greater than 40</option>
          <option name='attack' >Greater than 50</option>
          <option name='attack' >Greater than 60</option>
          <option name='attack' >Greater than 70</option>
          <option name='attack' >Greater than 80</option>
          <option name='attack' >Greater than 90</option>
          <option name='attack' >Greater than 100</option>
          <option name='attack' >Greater than 110</option>
        </select>
      </div>
    );
  }

}

export default Filter;
