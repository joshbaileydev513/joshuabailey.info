import React from 'react';
import Link from 'react-router-dom';
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
      justifyContent: 'center',
    },
    size: {
      height: '300px',
      width: '300px',
      padding: '10px',
    }
};

function Projects() {
  return (
    <section style={styles.picFormat}>
      {/* Best Portfolio Piece Here */}
      <div>
        <a href="https://arcade-assembly-c977bb949035.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={ArcadeAssem} alt="Arcade Assembly" style={styles.size}/>
          {/* NEED BUTTON TO REPO */}
        </a>
      </div>
      {/* Portfolio Project #2 */}
      <div>
        <a href="https://brick-that.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={BrickThat} alt="Brick That" style={styles.size}/>
          {/* NEED BUTTON TO REPO */}
        </a>
      </div>
      {/* Portfolio Project #3 */}
      <div>
        <a href="https://joshbaileydev513.github.io/bobs-burgers-project/" target="_blank" rel="noreferrer">
          <img src={BobsBurgers} alt="Bobs Burgers API" style={styles.size}/>
          {/* NEED BUTTON TO REPO &/OR WORKING SITE OR VIDEO */}
        </a>
      </div>
      {/* Portfolio Project #4 */}
      <div>
        <img src={TextEditor} alt="Text Editor PWA" style={styles.size}/>
        {/* NEED BUTTON TO REPO &/OR WORKING SITE OR VIDEO */}
      </div>
      {/* Portfolio Project #5 */}
      <div>
        <a href="https://note-taker-app-uncc.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={NoteTaker} alt="Note Taker App" style={styles.size}/>
          {/* NEED BUTTON TO REPO &/OR WORKING SITE OR VIDEO */}
        </a>
      </div>
      {/* Portfolio Project #6 */}
      <div>
        <a href="https://app.screencastify.com/manage/videos/xrR4u9qmVMsZMdTKu5oa" target="_blank" rel="noreferrer">
          <img src={ReadmeGen} alt="readme generator" style={styles.size}/>
          {/* NEED BUTTON TO REPO &/OR WORKING SITE OR VIDEO */}
        </a>
      </div>
    </section>
  );
}

export default Projects;