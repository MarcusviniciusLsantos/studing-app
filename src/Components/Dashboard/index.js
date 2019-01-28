import React, { Component } from 'react'
import Card from './Card';
import Search from './Search';

export default class Dashboard extends Component {

  renderCard = () => {
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] || []

    return array.map(item =>
      <div className="card text-white bg-primary mb-2" style={{ maxWidth: '20rem'}}><Card /></div>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-around">
          <Search />
        </div>

        <br />
        <div className="row justify-content-around">
          {this.renderCard()}
        </div>

      </div>
    )
  }
}