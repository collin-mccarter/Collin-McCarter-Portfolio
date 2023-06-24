import React from 'react';

const AboutMe = () => {
  return (
    <section className="about-me">
        <div className='about-me-header'>
            <h2>About Me:</h2>
        </div>
      <img src="./Screenshot 2023-06-24 at 1.42.36 PM.png"  className="profile-pic" alt="Profile" />
        <p>
            My name is Collin McCarter and I am a recent graduate of a Full-Stack Web Development Coding Bootcamp through the University of Texas at Austin. 
        </p>
        <p>
            I wanted to be a Full-Stack Web Developer because I am driven by a passion for problem solving, collaborating, and most importantly, incorporating creativity into web design. Since graduating, I have a strong passion and desire to apply what I have learned over the course of the bootcamp and to continue to gain as much knowledge and experience as I can about web development!
        </p>
    </section>
  );
};

export default AboutMe;