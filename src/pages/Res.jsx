import React from 'react'
import Cards from '../components/Cards'
import "../styles/pages/Res.css"

const Res = () => {
  return (
    <div className="Res">
        <Cards url="../images/res/i1.jpg" title="Gobi" />
        <Cards url="../images/res/i2.jpg" title="Parota" />
        <Cards url="../images/res/i3.jpg" title="Omlet"/>
        <Cards url="../images/res/i4.jpg" title="Paneer"/>
        <Cards url="../images/res/i5.jpg" title="Men's day cake"/>
    </div>
  )
}

export default Res