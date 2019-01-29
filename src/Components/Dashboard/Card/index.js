import React from 'react'

export default class Card extends React.Component {
  render() {
    return (
      <a
        href="#"
        className={`card text-white bg-${this.props.cardColor} mb-4 mx-3`}
        style={{ maxWidth: '20rem' }}
        onClick={this.props.showButtonForm}
      >
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </a>
    )
  }
}