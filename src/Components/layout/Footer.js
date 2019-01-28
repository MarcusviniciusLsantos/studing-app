import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="navbar navbar-light bg-light footerFixed" >
        <strong>
          Copyright &copy; 2018
      <a href='http://localhost:3000/'> Marcus Vinícius</a>
        </strong>
        <div className="pull-right" />
      </footer>
    )
  }
}