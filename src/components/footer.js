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
};

function Footer() {
  return (
    <footer class="p-3 mb-2 bg-dark text-white text-center font-weight-light" style= {styles.footer}>
      <h6>"Uncertainty and mystery are energies of life. 
        Do not let them scare you unduly, for they keep boredom at bay and spark creativity"
      </h6>
        {/* put a few links at the bottom for my linkedIn/github etc */}
        <div className="footer-icons">
          <a href="https://github.com/joshbaileydev513">
            <i className="fa fa-github" target="_blank"></i>
          </a>
          <a href="https://www.linkedin.com/in/joshuacbailey/">
            <i className="fa fa-linkedin" target="_blank"></i>
          </a>
          {/* Add more icons as needed */}
        </div>
    </footer>
  );
}

export default Footer;