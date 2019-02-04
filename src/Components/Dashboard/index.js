import React, { Component } from 'react'

import Card from './Card';
import Search from './Search';
import Form from './Form';

import './dashboard.css';

import fire from '../../config/firebase';

export default class Dashboard extends Component {
  state = {
    showForm: false,
    formCard: true,
    card: []
  }

  async componentDidMount() {
    await fire.db.collection("cards").where('user_uid', '==', 'vini').get().then((querySnapshot) => {
      console.log('query is empty?->', querySnapshot.empty)
      querySnapshot.forEach(async (doc) => {
        const card = await this.state.card
        await card.push(doc.data())
        await this.setState({ card: card })
        await console.log('card ', card)
      });
    });
  }

  showButtonForm = () => {
    this.setState({ showForm: !this.state.showForm, formCard: !this.state.formCard })
  }

  renderCard = () => {
    var array = this.state.card || null
    return array.map((item, index) =>
      <Card
        cardColor={item.colorForm || 'primary'}
        showButtonForm={this.showButtonForm}
        key={index}
        theme={item.theme}
        subjectMatter={item.subjectMatter}
      >
        {item.summary}
      </Card>
    )
  }

  render() {
    return (
      <div className="container" >
        {this.state.showForm ?
          <div className="row justify-content-center">
            <Form showButtonForm={this.showButtonForm} />
          </div>
          :
          <>
            <div className="row justify-content-start">
              <Search />
            </div>
            <div className="row justify-content-start">
              {this.renderCard()}
            </div>
          </>
        }
        <input
          type="button"
          className={`btn btn-${this.state.formCard ? 'primary' : 'danger'} button-card`}
          placeholder="Create Card"
          value={this.state.formCard ? '+' : 'x'}
          onClick={this.showButtonForm}></input>
      </div>
    )
  }
}