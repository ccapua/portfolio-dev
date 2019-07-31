import React, { useContext } from 'react';

const Overlay = (props) => {

  //render:
  return (
    <div id='overlay' ref={props.overlay} data-state="off">
      <nav className="top-nav">
        <ul>
          <li><div id="landing" onClick={() => {props.changePage('landing'); props.toggleClicked()}}><span>Landing</span></div></li>
          <li><div id="projects" onClick={() => {props.changePage('projects'); props.toggleClicked()}}><span>Projects</span></div></li>
          <li><div id="about-me" onClick={() => {props.changePage('about-me'); props.toggleClicked()}}><span>About Me</span></div></li>
          <li><div id="pictures" onClicked={() => {props.changePage('pictures'); props.toggleClicked()}}><span>Photography</span></div></li>
          <li><div id="contact" onClicked={() => {props.changePage('contact'); props.toggleClicked()}}><span>Contact Me</span></div></li>
        </ul>
      </nav>
    </div>
  );
    
}
 
export default Overlay;