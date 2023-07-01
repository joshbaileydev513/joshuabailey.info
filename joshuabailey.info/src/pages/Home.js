import React from 'react';

const styles = {
    background: {
        backgroundColor: '#BEBEBE',
    },
    // pic: {
    //     backgroundImage: 'url(./assets/images/home-page-pic.png)',
    // },
};

const Home = () => {
    return (
        <div class="h-100 d-inline-block" style={styles.background}>
            {/* Inset Picture of Me here */}
            <h3 class="p-5 text-center">FullStack Developer - MERN </h3>
            <img src="/assets/images/home-page-pic.png" alt="Josh Pic" />
             <p class="text-center font-weight-light">
                    Hi there! I am a FullStack Developer within MERN, currently enrolled in a coding bootcamp at The University
                    of North Carolina at Charlotte. I am passionate about creating visually appealing and user-friendly
                    websites and applications. My goal is to use my skills and knowledge to create meaningful and impactful digital
                    experiences for users. In my free time, I enjoy staying up to date with the latest technology and trends in the industry
                    and participating in coding challenges. I am excited to continue learning and growing as a developer, and I am eager to
                    start applying my skills to real-world projects. Thank you for visiting my website!
                </p>
        </div>
    );
};

export default Home;