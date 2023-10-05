import React from 'react';
import HomePic from '../assets/home-page-pic.png';

const styles = {
    background: {
        backgroundColor: '#BEBEBE',
        fontFamily: 'monospace',
    },
    pic: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '35px',
    },
    border: {
        borderRadius: '2px 75px',
    },
    textPadding: {
        padding: '0px 50px',
    }
};

const Home = () => {
    return (
        <div class="h-100 d-inline-block" style={styles.background}>
            {/* Inset Picture of Me here */}
            <h3 class="p-3 text-center">FullStack Developer - MERN </h3>
            <div style={styles.pic} alt="Responsive image">
                <img style={styles.border} src={HomePic} alt="Josh Pic"/>
            </div>
             <p class="text-center font-weight-light" style={styles.textPadding}>
                    Hi there, I am a Developer with a FullStack MERN Certication from The University of North Carolina at Charlotte Coding Bootcamp. I am passionate about creating visually appealing and user-friendly
                    websites and applications. My goal is to use my skills and knowledge to create meaningful and impactful digital
                    experiences for users. In my free time, I enjoy staying up to date with the latest technology and trends in the industry
                    and participating in coding challenges. I am excited to continue learning and growing as a developer, and I am eager to
                    start applying my skills to real-world projects!
                </p>
        </div>
    );
};

export default Home;