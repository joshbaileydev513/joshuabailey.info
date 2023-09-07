import React from 'react';
import ContactPic from '../assets/contact-pic.jpeg';

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
    },
    pic: {
        alignSelf: 'center',
        margin: '25px',
        height: '350px',
        width: '350px',
        borderRadius: '15px 50px',
    },
}

const Contact = () => {
    return (
        <div style={styles.main}>
            <h3 class="p-3 text-center">Contact Me</h3>
            <img src={ContactPic} alt="Contact Picture" style={styles.pic}/>
            <p class="text-center font-weight-light"> As a software developer, I am driven by an unwavering passion for learning and an eagerness to take on any new task that comes my way. 
                My dedication and hardworking capabilities have allowed me to continuously expand my skill set and tackle complex challenges with enthusiasm. 
                I firmly believe in the power of continuous improvement, and I am committed to staying at the forefront of technological advancements in the field. 
                I am confident that my enthusiasm, coupled with my strong work ethic, would make me a valuable asset to your team. I look forward to the opportunity to contribute and grow with your company!</p>
             {/* Add contact info (PH #/ EM / GitHub / LinkedIn) */}
             <div class="p-4 text-center">
                <button onClick={() => window.location = 'mailto:jbailey2124@gmail.com'} type="button" class="btn btn-outline-dark">EMAIL</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="tel:5135185570"><button type="button" class="btn btn-outline-dark">CALL</button></a>
             </div>
        </div>
    );
};

export default Contact;