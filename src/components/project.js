import React from 'react';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import ArcadeAssem from '../assets/arcadeassembly.png';
import BobsBurgers from '../assets/bobs-burgers.png';
import HomePic from '../assets/home-page-pic.png';
import BrickThat from '../assets/brick-that-pic.png';
import TextEditor from '../assets/text-editor.png';
import ReadmeGen from '../assets/readme-gen.png';
import NoteTaker from '../assets/note-taker.png';

const styles = {
    picFormat: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      borderRadius: '15px',
      padding: '15px',
      margin: '15px',
    },
    size: {
      height: 'auto',
      width: '100px'
    }
};

function Projects() {
  return (
    <section style={styles.picFormat}>
      {/* Best Portfolio Piece Here */}
      <div>
        <img src={ArcadeAssem} alt="Arcade Assembly" style={styles.size}/>
        {/* NEED LINK TO REPO &/OR WORKING SITE OR VIDEO */}
      </div>
      {/* Portfolio Project #2 */}
      <div>
        <img src={BrickThat} alt="Brick That" style={styles.size}/>
        {/* NEED LINK TO REPO &/OR WORKING SITE OR VIDEO */}
      </div>
      {/* Portfolio Project #3 */}
      <div>
        <img src={BobsBurgers} alt="Bobs Burgers API" style={styles.size}/>
        {/* NEED LINK TO REPO &/OR WORKING SITE OR VIDEO */}
      </div>
      {/* Portfolio Project #4 */}
      <div>
        <img src={TextEditor} alt="Text Editor PWA" style={styles.size}/>
        {/* NEED LINK TO REPO &/OR WORKING SITE OR VIDEO */}
      </div>
      {/* Portfolio Project #5 */}
      <div>
        <img src={NoteTaker} alt="Note Taker App" style={styles.size}/>
        {/* NEED LINK TO REPO &/OR WORKING SITE OR VIDEO */}
      </div>
      {/* Portfolio Project #6 */}
      <div>
        <img src={ReadmeGen} alt="readme generator" style={styles.size}/>
        {/* NEED LINK TO REPO &/OR WORKING SITE OR VIDEO */}
      </div>
    </section>
  );
}

export default Projects;