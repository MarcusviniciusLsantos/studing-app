import React from 'react'

export default class Search extends React.Component {
  render() {
    return (
      <form class="form-inline">
        <input class="form-control mb-3 mx-3" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success mb-3 mx-3" type="submit">Search</button>
      </form>
    )
  }
}