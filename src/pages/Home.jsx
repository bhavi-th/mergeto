import React from 'react'
import Hero from './Hero'
import Res from './Res'
import "../styles/pages/Home.css"

const Home = () => {
  return (
    <div className='Home'>
    <Hero />
    <h2 id="res">
      Restaurant Foods
    </h2>
    <Res />
    </div>
  )
}

export default Home