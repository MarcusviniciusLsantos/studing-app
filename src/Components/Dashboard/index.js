import React, { Component } from 'react'
import Card from './Card';
import Search from './Search';
import Form from './Form';

export default class Dashboard extends Component {
  state = {
    showForm: false
  }

  showButtonForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  renderCard = () => {
    var array = [{ id: 0, color: 'primary' }, { id: 0, color: 'secondary' }, { id: 0, color: 'success' }, { id: 0, color: 'danger' }, { id: 0, color: 'warning' }, { id: 0, color: 'info' }, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18] || []

    return array.map((item, index) =>
      <Card cardColor={item.color || 'primary'} showButtonForm={this.showButtonForm} key={index} />
    )
  }

  render() {
    return (
      <div className="container">

        {this.state.showForm ?

          <div className="row justify-content-center">
            <Form showButtonForm={this.showButtonForm} />
          </div>


          :
          <>
            <div className="row justify-content-start">
              <Search />
            </div>
            <br />
            <div className="row justify-content-start">
              {this.renderCard()}
            </div>
          </>
        }

      </div>
    )
  }
}