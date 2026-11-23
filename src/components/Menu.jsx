import React from 'react'
import Circle from './Circle';
import "../styles/components/Menu.css"

const Menu = () => {
  return (
    <div className="Menu">
      <Circle url="../images/biryani.jpg" name="Biryani" />
      <Circle url="../images/cake.jpg" name="Cake" />
      <Circle url="../images/china.jpg" name="China" />
      <Circle url="../images/dosa.jpg" name="Dosa" />
      <Circle url="../images/north.jpg" name="North" />
      <Circle url="../images/south.jpg" name="South" />
      <Circle url="../images/pizza.jpg" name="Pizza" />
      <Circle url="../images/rolls.png" name="Rolls" />
      <Circle url="../images/burger.jpg" name="burger" />
      <Circle url="../images/desert.jpg" name="desert" />
      <Circle url="../images/egg.jpg" name="egg" />
      <Circle url="../images/ice.jpg" name="ice" />
      <Circle url="../images/khi.jpg" name="khi" />
      <Circle url="../images/lassi.jpg" name="lassi" />
      <Circle url="../images/maggi.jpg" name="maggi" />
      <Circle url="../images/parata.jpg" name="parata" />
      <Circle url="../images/pasta.jpg" name="pasta" />
      <Circle url="../images/pastry.jpg" name="pastry" />
      <Circle url="../images/rasmali.jpg" name="rasmali" />
    </div>
  )
}

export default Menu;