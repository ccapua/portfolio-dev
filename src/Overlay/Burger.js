import React, {  } from 'react';

const Burger = (props) => {

  return ( 
    <div id="burger" ref={props.burger} data-state="burger" onClick={props.toggleClicked}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
}
 
export default Burger;