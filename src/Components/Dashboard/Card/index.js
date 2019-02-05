import React from 'react'
import './index.css'

export default class Card extends React.Component {
  render() {
    const { children, cardColor, showButtonForm, theme, subjectMatter } = this.props;
    return (
      <a
        href="#"
        className={`card text-white bg-${cardColor} mb-4 mx-3 card-main`}
        onClick={showButtonForm}
      >
        <div className="card-header">{typeof theme === 'string' ? theme.slice(0, 25) : null} {theme.length >= 30 ? '...' : null}</div>
        <div className="card-body">
          <h5 className="card-title">{typeof subjectMatter === 'string' ? subjectMatter.slice(0, 20) : null} {subjectMatter.length >= 25 ? '...' : null}</h5>
          <p className="card-text" >{typeof children === 'string' ? children.slice(0, 134) : null}
            {children.length >= 135 ? ' ...' : null}</p>
        </div>
      </a>
    )
  }
}