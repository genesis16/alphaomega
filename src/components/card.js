import React from 'react'
import './card.css'

const card = props => (
    <a href={props.url}>
      <div className="card">
        <img src={props.image} alt="card" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </a>
)
export default card
