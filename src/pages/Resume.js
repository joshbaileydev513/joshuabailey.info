import React, { useState } from 'react';
import ResumePdf from '../assets/joshua-bailey-res-2023.pdf';
import { Document, Page, pdfjs } from 'react-pdf';

const styles = {
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
}

const Resume = () => {
    const [numPages, setNumPages] = useState(null);


    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div class="text-center">
            <h3 class="p-5">Resume</h3>
            <div style={styles.center}>
                <Document 
                    file={ResumePdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false} />
                    ))}
                </Document>
            </div>
            <p class="font-weight-light">
                Enthusiastic, and driven development professional with a passion for working diligently to complete
                any tasks at hand. Avid learner who is willing to put in the time needed to successfully pick up new
                skills needed within any role. FullStack MERN Certification from The University of North Carolina at Charlotte Coding Bootcamp.
            </p>
            <div class="p-5">
                <a href={ResumePdf} target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-outline-dark">Download PDF Here</button>
                </a>
            </div>
        </div>
    );
};

export default Resume;