import React from 'react';
import { Document, Page } from 'react-pdf';
import ResumePdf from '../joshua-bailey-res-2023.pdf';

const Resume = () => {
    return (
        <div>
            <h3 class="p-5 text-center">Resume</h3>
            <Document file={ResumePdf}>
                <Page pageNumber={1} />
            </Document>
            <p class="text-center font-weight-light">
                Enthusiastic, and driven development professional with a passion for working diligently to complete
                any tasks at hand. Avid learner who is willing to put in the time needed to successfully pick up new
                skills needed within any role. FullStack MERN Certication from The University of North Carolina at Charlotte Coding Bootcamp.
            </p>
            <div>
                <div class="p-5 text-center">
                    {/* need to fix the file location for my resume PDF */}
                    <a href={Resume.pdf} target="_blank"><button type="button" class="btn btn-outline-dark">Download PDF Here</button></a>
                </div>
            </div>
        </div>
    );
};

export default Resume;