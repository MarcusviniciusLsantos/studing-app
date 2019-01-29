import React, { Component } from 'react'
import Card from './Card';
import Search from './Search';

export default class Dashboard extends Component {

  renderCard = () => {
    var array = [{id:0,color:'primary'}, {id:0,color:'secondary'}, {id:0,color:'success'}, {id:0,color:'danger'}, {id:0,color:'warning'}, {id:0,color:'info'}, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] || []

    return array.map(item =>
      <Card cardColor={item.color || 'primary'}/>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-start">
          <Search />
        </div>

        <br />
        <div className="row justify-content-start">
          {this.renderCard()}
        </div>
      </div>
    )
  }
}