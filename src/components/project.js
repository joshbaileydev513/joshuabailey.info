import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import HomePic from '../assets/home-page-pic.png'


function Projects() {
  return (
    <section>
      {/* Best Portfolio Piece Here */}
      <div>
        <img src={HomePic} alt="Josh Pic" />
      </div>
      {/* Portfolio Project #2 */}
      <div>
        <img src={HomePic} alt="Josh Pic" />
      </div>
      {/* Portfolio Project #3 */}
      <div>
        <img src={HomePic} alt="Josh Pic" />
      </div>
      {/* Portfolio Project #4 */}
      <div>
        <img src={HomePic} alt="Josh Pic" />
      </div>
      {/* Portfolio Project #5 */}
      <div>
        <img src={HomePic} alt="Josh Pic" />
      </div>
      {/* Portfolio Project #6 */}
      <div>
        <img src={HomePic} alt="Josh Pic" />
      </div>
    </section>
  );
}

export default Projects;