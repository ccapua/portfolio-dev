import React from 'react';

export default function Projects() {
  return (
    <main class="main">
      <section id="jumbo" class="jumbo scroll">
        <div>
          <h1>CHRIS</h1>
          <h2>Web Developer / Engineer</h2>
          <h1>CAPUA</h1>
        </div>
      </section>
      <section class="projects">
        <div id="projects">
        </div>
        <h2>Projects</h2>
        <hr/>
        <h3>Personal</h3>
        <div class="projects-container">
          <div class="project-box">
            <h4>Falling Block Game</h4>
            <hr/>
            <div class="image">
              <img alt="project image" src="./images/fallingblock.png"/>
            </div>
            <p>Click for more info</p>
          </div>

          <div class="project-box">
            <h4>Checkers</h4>
            <hr/>
            <div class="image">
              <img alt="project image" src="./images/checkers.png"/>
            </div>
            <p>Click for more info</p>
          </div>

          <div class="project-box">
            <h4>Tic-tac-toe</h4>
            <hr/>
            <div class="image">
              <img alt="project image" src="./images/tictactoe.png"/>
            </div>
            <p>Click for more info</p>
          </div>

          <div class="project-box">
            <h4>Hangman</h4>
            <hr/>
            <div class="image">
              <img alt="project image" src="./images/hangman.png"/>
            </div>
            <p>Click for more info</p>
          </div>


        </div>
      </section>
  );
}
