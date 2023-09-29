import React from 'react';
import Projects from '../components/project';

const styles = {
    textStyling: {
        padding: '0px 50px',
        fontFamily: 'monospace',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'light',
    },
};

const Portfolio = () => {
    return (
        <div>
            <h3 class="p-3 text-center">Portfolio</h3>
             <p class="text-center font-weight-light" style={styles.textStyling}>
                    Below are they various projects or applications I feel the most proud of. Each picture is linked to the
                    live page or video walkthrough along with a button to bring you to the github repo!
            </p>
             <Projects />
             <br/>
        </div>
    );
};

export default Portfolio;