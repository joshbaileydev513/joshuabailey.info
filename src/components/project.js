import React from 'react';
import Link from 'react-router-dom';
// Here we are importing a CSS file as a dependency
// import '../styles/Header.css';
import ArcadeAssem from '../assets/arcadeassembly.png';
import BobsBurgers from '../assets/bobs-burgers.png';
import BrickThat from '../assets/brick-that-pic.png';
import TextEditor from '../assets/text-editor.png';
import ReadmeGen from '../assets/readme-gen.png';
import NoteTaker from '../assets/note-taker.png';

const styles = {
  picFormat: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  size: {
    borderRadius: '50px',
    height: '250px',
    width: '250px',
    border: '2px solid #555555',
    padding: '10px',
    margin: '10px'
  },
  btnCenter: {
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none'
  }
};

function Projects() {
  return (
    <section style={styles.picFormat}>
      {/* Best Portfolio Piece Here */}
      <div>
        <a class="text-decoration-none" href="https://arcade-assembly-c977bb949035.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={ArcadeAssem} alt="Arcade Assembly" style={styles.size} />
          <br />
          <div style={styles.btnCenter}>
            <button type="button" class="btn btn-outline-dark">Arcade Assembly</button>
          </div>
        </a>
      </div>
      {/* Portfolio Project #2 */}
      <div>
        <a class="text-decoration-none" href="https://brick-that.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={BrickThat} alt="Brick That" style={styles.size} />
          <br />
          <div style={styles.btnCenter} >
            <button type="button" class="btn btn-outline-dark">BrickThat</button>
          </div>
        </a>
      </div>
      {/* Portfolio Project #3 */}
      <div>
        <a class="text-decoration-none" href="https://joshbaileydev513.github.io/bobs-burgers-project/" target="_blank" rel="noreferrer">
          <img src={BobsBurgers} alt="Bobs Burgers API" style={styles.size} />
          <br />
          <div style={styles.btnCenter} >
            <button type="button" class="btn btn-outline-dark">Bob's Burgers BIO</button>
          </div>
        </a>
      </div>
      {/* Portfolio Project #4 */}
      <div>
        <a class="text-decoration-none" href="https://joshbaileydev513.github.io/bobs-burgers-project/" target="_blank" rel="noreferrer">
          <img src={TextEditor} alt="Text Editor PWA" style={styles.size} />
          <br />
          <div style={styles.btnCenter} >
            <button type="button" class="btn btn-outline-dark">J.A.T.E</button>
          </div>
        </a>
      </div>
      {/* Portfolio Project #5 */}
      <div>
        <a class="text-decoration-none" href="https://note-taker-app-uncc.herokuapp.com/" target="_blank" rel="noreferrer">
          <img src={NoteTaker} alt="Note Taker App" style={styles.size} />
          <br />
          <div style={styles.btnCenter} >
            <button type="button" class="btn btn-outline-dark">Note Taker Express</button>
          </div>
        </a>
      </div>
      {/* Portfolio Project #6 */}
      <div>
        <a class="text-decoration-none" href="https://app.screencastify.com/manage/videos/xrR4u9qmVMsZMdTKu5oa" target="_blank" rel="noreferrer">
          <img src={ReadmeGen} alt="readme generator" style={styles.size} />
          <br />
          <div style={styles.btnCenter} >
            <button type="button" class="btn btn-outline-dark">ReadMe Generator</button>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;