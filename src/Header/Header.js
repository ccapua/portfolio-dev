import React from 'react';
import Overlay from '../Overlay/Overlay.js';

export default function Header(props) {
  return (
    <Overlay>
      <div id="burger" data-state="burger">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </Overlay>
  );
}
