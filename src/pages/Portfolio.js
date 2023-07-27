import React from 'react';
import Projects from '../components/project';

const Portfolio = () => {
    return (
        <div>
            <h3 class="p-5 text-center">Portfolio</h3>
             <Projects />
             <p class="text-center font-weight-light">
                    Above are they various projects or applications I feel the most proud of. Each picture is linked to the
                    live application along with a button to bring you to the github repo!
            </p>
        </div>
    );
};

export default Portfolio;