import React from 'react'
import "../styles/components/Circle.css"
import { Link } from 'react-router-dom'

const Circle = ({name, url}) => {
  return (
        <Link to="/buy" params={{ url, name}}>
          <img src={url} alt={name} className="Circle" />
        </Link>
  )
}

export default Circle