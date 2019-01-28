import React, { Component } from 'react'
import Card from './Card';
import Search from './Search';

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <br />
        <Card />
      </div>
    )
  }
}