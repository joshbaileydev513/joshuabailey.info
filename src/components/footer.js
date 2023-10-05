import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    left: '0',
    right: '0',
    bottom: '0',
  },
  icons: {
    display: 'flex',
    justifyContent: 'space-around',
    textDecoration: 'none',
    color: '#333',
    fontSize: '24px',
    margin: '0 10px',
    paddingTop: '10px',
  },
};

function Footer() {
  return (
    <footer class="p-3 mb-2 bg-dark text-white text-center font-weight-light" style= {styles.footer}>
      <h6>"Uncertainty and mystery are energies of life. 
        Do not let them scare you unduly, for they keep boredom at bay and spark creativity"
        {/* put a few links at the bottom for my linkedIn/github etc */}
          <div>
            <div style={styles.icons}>
                <a href="https://github.com/joshbaileydev513" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/joshuacbailey/" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              {/* Add more icons as needed */}
            </div>
        </div>
      </h6>
    </footer>
  );
}

export default Footer;