import React from 'react'
import "./Styles/Button.css"

const Button = ({handleNewQuote}) => {
  return (
    <button className="button" onClick={handleNewQuote}></button>
  )
}

export default Button