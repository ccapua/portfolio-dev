import React, { useState } from 'react';
import Landing from '../Landing/Landing';

const Overlay = (props) => {
  //state:
  const [clicked, setClicked] = useState(false);

  //displaying the overlay:
  const displayOverlay = function(clicked) {
    if (clicked) {
      return (
        <nav class="top-nav">
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#photography">Photography</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
          </ul>
        </nav>
      )
    }
  }
    
  //render:
  return (
    <Burger onClick={() => {
      if (clicked) { setClicked(false); }
      else { setClicked(true); }
    }
    />
    {displayOverlay(clicked)}
    <Landing />
  );
    
}
 
export default Overlay;

<div class="overlay">
            
            <div class="photo-lightbox">
              <img src=""/>
            </div>
            
          </div>