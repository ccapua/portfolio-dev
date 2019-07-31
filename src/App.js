import React, { useRef, useState } from 'react';
import Burger from './Overlay/Burger.js';
import Overlay from './Overlay/Overlay.js';
import Landing from './Landing/Landing.js';
import Projects from './Projects/Projects.js';
import AboutMe from './AboutMe/AboutMe.js';
import Pictures from './Pictures/Pictures.js';
import Contact from './Contact/Contact.js';

function App() {
  // state:
  const [page, setPage] = useState('landing');

  // refs:
  const overlay = useRef();
  const burger = useRef();

  const changePage = function(clicked) {
    setPage(clicked);
  }

  const displayPage = function() {
    console.log('hi');
    switch (page) {
      case 'landing':
        return <Landing/>;
      case 'projects':
        return <Projects/>;
      case 'about-me':
        return <AboutMe/>;
      case 'pictures':
        return <Pictures/>;
      case 'contact':
        return <Contact/>;
      default:
        break;
    }
  }

  const toggleClicked = function() {
    if (overlay) {
      if (overlay.current.dataset.state === 'on') {
        overlay.current.dataset.state = 'off'    
        burger.current.dataset.state = "burger";
      } else if (overlay.current.dataset.state === 'off') {
        overlay.current.dataset.state = 'on';
        burger.current.dataset.state = "x";
      }
    }
  }

  return (
    <div id="app">
      <Burger burger={burger} toggleClicked={toggleClicked}/>
      <Overlay overlay={overlay} changePage={changePage} toggleClicked={toggleClicked}/>
      {displayPage()}
    </div>
  );
}

export default App;
