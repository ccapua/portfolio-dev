import React from 'react';
import './Overlay.css';

return (
  <div class="overlay">
        <nav class="top-nav">
          <ul>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#photography">Photography</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
          </ul>
        </nav>
        <div class="photo-lightbox">
          <img src=""/>
        </div>
        <div class="project-lightbox">
          <h4><a href="./projects/fallingblock/falling_block.html">Falling Block Game</a></h4>
          <hr/>
          <div class="project-image">
            <a href="./projects/fallingblock/falling_block.html">
              <img src="./images/fallingblock.gif"/>
            </a>
          </div>
          <p>My second project using lots of Vanilla JavaScript DOM Manipulation. A
          recreation of a familiar classic.<br/><br/> Tracks score and increases speed
          as the score increases. Only playable with a keyboard at the moment.
          Click the image to see the project.</p>
          <h5>What I used to make this</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Vanilla JavaScript</li>
            <li>Inkscape</li>
            <li>Atom</li>
          </ul>
        </div>
        <div class="project-lightbox">
          <h4><a href="./projects/checkers/checkers.html">Checkers</a></h4>
          <hr/>
          <div class="project-image">
            <a href="./projects/checkers/checkers.html">
              <img src="./images/checkers.gif"/>
            </a>
          </div>
          <p>This was my first attempt at making something that heavily
          relies on DOM Manipulation. The only non-browser-drawn elements are
          the pictures of the pieces, which I got from <a href="www.flaticon.com">FlatIcon</a>.
          You can choose to be red or black, and the computer will make random moves.
          Click the image to see the project.</p>
          <h5>What I used to make this</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Vanilla JavaScript</li>
            <li>Atom</li>
            <li>FlatIcon</li>
          </ul>
        </div>
        <div class="project-lightbox">
          <h4><a href="./projects/TicTacToe/tictactoe.html">Tic-tac-toe</a></h4>
          <hr/>
          <div class="project-image">
            <a href="./projects/TicTacToe/tictactoe.html">
              <img src="./images/tictactoe.gif"/>
            </a>
          </div>
          <p>It's tic-tac-toe! Computer makes dummy moves, and the game tracks wins
          losses, and draws. Click the image to see the project.</p>
          <h5>What I used to make this</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Vanilla JavaScript</li>
            <li>Atom</li>
          </ul>
        </div>
        </div>
        <div class="project-lightbox">
          <h4><a href="./projects/hangman/hangman.html">Hangman</a></h4>
          <hr/>
          <div class="project-image">
            <a href="./projects/hangman/hangman.html">
              <img src="./images/hangman.gif"/>
            </a>
          </div>
          <p>My first game project. Selects from a list of several words. I found
          a list of words and formatted it to be used in this project with Python.
          Click the image to see the project.</p>
          <h5>What I used to make this</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Vanilla JavaScript</li>
            <li>Atom</li>
            <li>Python</li>
            <li>MS Paint</li>
          </ul>
        </div>
      </div>
      </div>
)
