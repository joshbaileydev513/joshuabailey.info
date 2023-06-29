import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  logo: {
    display: 'flex',
    background: '#9a74db',
    width: '100%',
    alignContent: 'space-between',
  },

  nav: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    listStyleType: 'none',
    width: 'auto',
  },

  split: {
    display: 'inline-block',
  }
};

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <nav style= {styles.logo}>
      {/* NavBar Content Goes here - Contact/Portfolio/Resume */}
      {/* create a separate styling for JB */}
      <h3 style= {styles.split}> <a href="*">JB</a></h3>
      <div style= {styles.split}>
        <ul style={styles.nav}>
          {/* <li><a href="*"> Home </a></li> */}
          <li><a href="/portfolio"> Portfolio </a></li>
          <li><a href="/resume"> Resume</a></li>
          <li><a href="/contact"> Contact </a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;