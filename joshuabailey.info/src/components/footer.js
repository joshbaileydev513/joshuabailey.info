import React from 'react';

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '0',
  },
};

function Footer() {
  return (
    <footer class="p-3 mb-2 bg-dark text-white" style= {styles.footer}>
      <h6>"Uncertainty and mystery are energies of life. 
        Do not let them scare you unduly, for they keep boredom at bay and spark creativity"
      </h6>
      {/* put a few links at the bottom for my linkedIn/github etc */}
    </footer>
  );
}

export default Footer;