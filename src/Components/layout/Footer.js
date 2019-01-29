import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="fixed-bottom" style={{ backgroundColor: '#f8f9fa'}}>
        <strong style={{ left: '0'}}>
          Copyright &copy; 2018
          <a href='http://localhost:3000/'> Marcus Vinícius</a>
        </strong>
        {/* <div className="pull-right" /> */}
      </footer>
    )
  }
}