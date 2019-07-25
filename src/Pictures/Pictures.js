import React from 'react';

export default function Pictures() {
  return (
    <section class="photography">
        <div id="photography" class="scroll">
        </div>
        <h2>Photography</h2>
        <hr/>
        <p>If you would like to use some of my photos, please let me know!</p>
        <div class="slideshow">
            <img id="left-arrow" alt="left arrow" src="./icons/left.svg"/>
            <img id="loading" src="./images/loading.gif"/>
            <img id="photo" src=""/>
            <img id="right-arrow" alt="right arrow" src="./icons/right.svg"/>
        </div>
        <div id="insta">
          <a target="_blank" href="http://www.instagram.com/capuac">See more of my photos</a>
        </div>
      </section>
  );
}
