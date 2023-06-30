import React from 'react';

const Contact = () => {
    return (
        <div>
            <h3 class="p-5 text-center">Contact Me</h3>
             {/* Add contact info (PH #/ EM / GitHub / LinkedIn) */}
             <div class="p-5 text-center">
                <button onClick={() => window.location = 'mailto:jbailey2124@gmail.com'} type="button" class="btn btn-outline-dark">EMAIL</button>
                <a href="tel:5135185570"><button type="button" class="btn btn-outline-dark">CALL</button></a>
             </div>
        </div>
    );
};

export default Contact;