import React from 'react'
import "../styles/components/Cards.css"
import { Link } from 'react-router-dom'

const Cards = ({url, title, desc}) => {
  return (
    <div className='Cards'>
        <Link to="/buy">
        <img src={url}/>
        </Link>
        <span className="res-name">{title}</span>
        <p className="res-desc">{desc}</p>
    </div>
  )
}

export default Cards