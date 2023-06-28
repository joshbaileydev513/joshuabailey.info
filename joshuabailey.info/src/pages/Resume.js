import React from 'react';

const Resume = () => {
    return (
        <div>
            <h1>Resume</h1>
             {/* Add Resume Below */}
             <p class="">
                    Enthusiastic, and driven development professional with a passion for working diligently to complete
                    any tasks at hand. Avid learner who is willing to put in the time needed to successfully pick up new
                    skills needed within any role.Currently enrolled in the Coding Bootcamp at the University of North Carolina Charlotte learning a
                    full stack of tools and technologies.
            </p>
            <div>
            <div class="btns">
                {/* need to fix the file location for my resume PDF */}
                <a href={Resume.pdf} target="_blank"><button>Download PDF Here</button></a>
            </div>
            </div>
        </div>
    );
};

export default Resume;