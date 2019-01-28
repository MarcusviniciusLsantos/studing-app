import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="localhost:3000">
          <img src="https://getbootstrap.com/docs/4.2/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
          &nbsp;Studing
      </a>
      </nav>
    )
  }
}