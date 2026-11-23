import React from 'react'
import "../styles/pages/Search.css"
import Res from './Res'

const Search = () => {
  return (
    <div className='Search'>
        <div className='search-bar'>
        <input className="search-input" placeholder='Search for food' required/>
        {/* <img src="../images/search.svg" /> */}
        </div>

    </div>
  )
}

export default Search