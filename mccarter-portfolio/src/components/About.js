import React from 'react';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className='about-me-header'>
                <h2>About Me:</h2>
            </div>
            <img src="./assets/Screenshot 2023-06-24 at 1.42.36 PM.png" className="profile-pic" alt="Profile" />
            <p>
                My name is Collin McCarter and I am a recent graduate of a Full-Stack Web Development Coding Bootcamp through the University of Texas at Austin.
            </p>
            <p>
                I gained hands-on experience in building responsive and user-friendly websites. During my studies, I honed my skills in HTML, CSS, JavaScript, and various front-end frameworks like React and Vue.js. I have a solid understanding of UI/UX principles and strive to create visually appealing and intuitive web interfaces. Additionally, I am proficient in version control systems such as Git, which enables me to collaborate effectively with other developers.

                During the program, I had the opportunity to work with a team of experienced developers on a real-world project. This experience allowed me to contribute to the development of a dynamic web application using technologies such as Node.js and Express.js. I also gained exposure to database management systems like MongoDB, further expanding my skill set.
            </p>
            <p>
                I am a quick learner, always eager to explore new technologies and trends in the web development industry. I am particularly interested in gaining more experience in full-stack development and working on projects that challenge me to solve complex problems.
            </p>
            <p>
                As a junior web developer, I am seeking opportunities to contribute my skills and grow within a collaborative and innovative team. I am open to both freelance and full-time positions, as I believe each offers unique opportunities for professional development.
            </p>
            <p>
                If you're looking for a motivated and ambitious web developer who is ready to hit the ground running and learn from experienced professionals, please feel free to reach out. Let's connect and discuss how we can create impactful web solutions together!

            </p>
            
            <div className="education">
                <h3>Education</h3>
                <div className="education-item">
                    <h4>Coding Bootcamp – University of Texas, Austin</h4>
                    <p>Certificate - Full Stack Developer</p>
                    <p>Completed July 2023</p>
                </div>
                <div className="education-item">
                    <h4>Oklahoma State University</h4>
                    <p>Bachelor of Science in Agriculture - Animal Science</p>
                    <p>Graduated May 2022</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;