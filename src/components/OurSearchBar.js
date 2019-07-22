import React from 'react';

const OurSearchBar = (props) => {
  return (
    <input
    type='text'
    value={props.searchTerm}
    onChange={props.handleChange}
    />
  )
}

export default OurSearchBar
