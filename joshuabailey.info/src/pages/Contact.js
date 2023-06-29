import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1>Contact Me</h1>
             {/* Add contact info (PH #/ EM / GitHub / LinkedIn) */}
             <div>
             <button onClick={() => window.location = 'mailto:jbailey2124@gmail.com'}>Email Me</button>
             <a href="tel:5135185570"><button>Call Me</button></a>
             </div>
        </div>
    );
};

export default Contact;