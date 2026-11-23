import React, { useState } from 'react'
import "../styles/pages/SignUp.css";
import "../styles/pages/Buy.css";
import { Link } from 'react-router-dom';

const Buy = () => {

  const [item, setItem] = useState(0);

  return (
        <div className="SignUp">
          <h2>
            Buy Now
          </h2>
          <div id="counter">
            <button className="minus" onClick={()=>{setItem(item-1)}}>-</button>
            <div id="item-list">{item}</div>
            <button className="plus" onClick={()=>{setItem(item+1)}}>+</button>
          </div>
          <button id="buy">&gt;&gt; Buy</button>
        </div>
  )
}

export default Buy;