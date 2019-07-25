import React from 'react';

export default function AboutMe() {
  return (
    <section class="about-me">
        <div id="about-me" class="scroll"></div>
        <h2>About Me</h2>
        <hr/>
          <p>Hello! My name is Chris Capua (pronounced "CAP-wuh"). I am a web developer and software engineer.
           After 5 years in the education world, I've decided to return to my first passion -- tech.<br/><br/>
           As a band director and music teacher, I learned a lot about communication and organization, and I'm confident that I can bring
           that knowledge to my web development / software engineering career.<br/><br/> While you're here, I hope that you'll
           take a look at my projects and contact me if you're interested in having me as a part of your team. If you think I'm the right
           person to design and implement a web page for your business or organization, I would love to hear from you.</p>
          <div class="skills-and-languages">
            <div class="float-boxes">
              <h3>Skills</h3>
              <div class="about-me-container">
                <div class="list-container">
                  <h4>Technical</h4>
                  <hr/>
                    <ul>
                      <li>Problem Solving</li>
                      <li>Gimp</li>
                      <li>Atom</li>
                      <li>Git</li>
                    </ul>
                </div>
                <div class="list-container">
                  <h4>Soft</h4>
                  <hr/>
                    <ul>
                      <li>Teamwork</li>
                      <li>Communication</li>
                      <li>Organization</li>
                      <li>Strong desire to learn</li>
                      <li>Good work ethic</li>
                    </ul>
                </div>
              </div>
            </div>
            <div class="float-boxes">
              <h3>Languages</h3>
              <div class="about-me-container">
                <div class="list-container">
                  <h4>Proficient</h4>
                  <hr/>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>JavaScript ES6</li>
                      <li>Python</li>
                    </ul>
                </div>
                <div class="list-container">
                  <h4>Exposure</h4>
                  <hr/>
                    <ul>
                      <li>C++</li>
                      <li>C#</li>
                      <li>SQL</li>
                      <li>Java</li>
                      <li>React.js</li>
                      <li>jQuery</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        <div id="resume">
          <a href="http://www.chriscapua.com/Chris Capua - Resume.pdf" download><img src="./icons/file.svg" alt="a document"/>My Resume (Click to download)</a>
        </div>
      </section>
  );
}
