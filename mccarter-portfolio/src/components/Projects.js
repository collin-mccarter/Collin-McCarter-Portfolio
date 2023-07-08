import React from 'react';

const Projects = () => {
   // Array of project data
   const projects = [
      {
         title: 'Beat Spotify',
         description: 'The purpose of this project was to use everything we have learned in the past 6 modules to create a font-end application. The application is a lighthearted game designed to use two server-side APIs that provides the album images for a user and also uses another API to search for song lyrics. The goal of the game is to guess as many songs correct in a row, and your score will be logged in a local highscore table.',
         deployLink: 'https://bocabooii.github.io/Beat-Spotify/',
         repoLink: 'https://github.com/collin-mccarter/Beat-Spotify',
         image: '/Collin-McCarter-Portfolio/assets/BeatSpotify.png'
      },
      {
         title: `Book'n Borrow`,
         description: `Book'n Borrow is a website designed to give users the option to loan out old college textbooks that they are no longer using and to make money by loaning the book. It also allows a user to be able to search for and be able to rent out textbooks that they may need for their courses.`,
         deployLink: 'https://booknborrow.herokuapp.com/',
         repoLink: 'https://github.com/collin-mccarter/book-n-borrow',
         image: '/Collin-McCarter-Portfolio/assets/BooknBorrow.png'
      },
      {
         title: 'E-Commerce Back End',
         description: 'The goal of this project was to build the back end for an e-commerce site. I used a working Express.js API and configured it to use Sequelize to interact with a MySQL database.',
         deployLink: 'https://drive.google.com/file/d/122CtPIx4Q3Eeeegmt__gsh21ldGmmUuG/view',
         repoLink: 'https://github.com/collin-mccarter/E-commerce-Back-End',
         image: '/Collin-McCarter-Portfolio/assets/E-Commerce.png'
      },
      {
         title: 'Tech Blog',
         description: 'I built a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well. This site was built completely from scratch and deployed to Heroku. It follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.',
         deployLink: 'https://collin-tech-blog-fa9bf163a397.herokuapp.com/',
         repoLink: 'https://github.com/collin-mccarter/Tech-Blog',
         image: '/Collin-McCarter-Portfolio/assets/TechBlog.png'
      },
      {
         title: 'Social Network API',
         description: 'I built an API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. Express.js was used for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages, a JavaScript date library and the native JavaScript Date object was used to format timestamps.',
         deployLink: 'https://example.com/project3',
         repoLink: 'https://github.com/collin-mccarter/Social-Network-API',
         image: '/Collin-McCarter-Portfolio/assets/Social Network API.png'
      },
      {
         title: 'Employee Tracker',
         description: `Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems. So I built a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.`,
         deployLink: 'https://drive.google.com/file/d/1dNsnGSnwHETU9-UO1gznQXMJDITbTLGm/view',
         repoLink: 'https://github.com/collin-mccarter/Employee-Tracker',
         image: '/Collin-McCarter-Portfolio/assets/Employee Manager.png'
      },
      // Add more projects here...
   ];

   return (
      <section className="project-section">
         <h2>Projects:</h2>
         <div className="project-list">
            {projects.map((project, index) => (
               <div className="project" key={index}>
                  <div className="project-image">
                     <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-details">
                     <h3>{project.title}</h3>
                     <p>{project.description}</p>
                     <div className="project-links">
                        <button className='projects-button'>
                           <a href={project.deployLink} target="_blank">
                              View Demo
                           </a>
                        </button>
                        <button className='projects-button'>
                           <a href={project.repoLink} target="_blank">
                              GitHub Repository
                           </a>
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Projects;
