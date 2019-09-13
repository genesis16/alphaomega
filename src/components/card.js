import React from 'react'
import './card.css'

<<<<<<< HEAD
const card = props => ( <
  a href = {
    props.url
  } >
  <
  div className = "card" >
  <
  img src = {
    props.image
  }
  /> <
  h3 > {
    props.title
  } < /h3> <
  p > {
    props.text
  } < /p> <
  /div> <
  /a>
=======
const card = props => (
    <a href={props.url}>
      <div className="card">
        <img src={props.image} alt="card" />
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </a>
>>>>>>> b733ad99c962e233689354a2fc79bb37d3ca456a
)
export default card