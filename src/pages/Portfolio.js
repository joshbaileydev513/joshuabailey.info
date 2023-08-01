import React from 'react';
import Projects from '../components/project';

const Portfolio = () => {
    return (
        <div>
            <h3 class="p-3 text-center">Portfolio</h3>
             <p class="text-center font-weight-light">
                    Below are they various projects or applications I feel the most proud of. Each picture is linked to the
                    live application along with a button to bring you to the github repo!
            </p>
             <Projects />
             <br/>
        </div>
    );
};

export default Portfolio;