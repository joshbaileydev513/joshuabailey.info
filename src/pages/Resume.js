import React, { useState } from 'react';
import ResumePdf from '../assets/joshua-bailey-res-2023.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
import Family from '../assets/family.png';
// import '../index.css';

const styles = {
    center: {
        display: 'flex',
        justifyContent: 'center',
        /* For iPhone SE */
        '@media max-width: 320': {
            maxWidth: '100%',
            height: 'auto',
        },
        /* For iPhone XR */
        '@media max-width: 321, min-width: 414': {
            maxWidth: '100%',
            height: 'auto',
        },
        /* For iPhone 12 Pro */
        '@media min-width: 415': {
            maxWidth: '100%',
            height: 'auto',
        },
    },
     textStyling: {
        padding: '0px 50px',
        fontFamily: 'monospace',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'light',
    },
    pic: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50px',
    },
    border: {
        borderRadius: '5px 50px',
    },
};

const Resume = () => {
    const [numPages, setNumPages] = useState(null);


    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div class="text-center" style={styles.textStyling}>
            <h3 class="p-3 font-weight-bold">Resume</h3>
            <p class="font-weight-light">
                Enthusiastic, and driven development professional with a passion for working diligently to complete
                any tasks at hand. Avid learner who is willing to put in the time needed to successfully pick up new
                skills needed within any role. FullStack MERN Certification from The University of North Carolina at Charlotte Coding Bootcamp.
            </p>
            <div style={styles.pic} alt="Responsive image">
                <img style={styles.border} src={Family} alt="Family Pic"/>
            </div>
            {/* <div style={styles.center} class="responsive-container">
                <Document 
                    file={ResumePdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page style={{ width: '50px',  }} key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false} />
                    ))}
                </Document>
            </div> */}
            <div class="p-5">
                <a href={ResumePdf} target="_blank" rel="noopener noreferrer">
                    <button type="button" class="btn btn-outline-dark">Download PDF Here</button>
                </a>
            </div>
        </div>
    );
};

export default Resume;