import React from 'react';

const Resume = () => {
    const handleDownload = () => {
        window.open('./assets/Collin McCarter Resume.pdf');
    };

    return (
        <section className="resume">
            <h2>Resume:</h2>
            <div className="download-section">
                <h3>Download Resume</h3>
                <button className="download-button" onClick={handleDownload}>
                    Download PDF
                </button>
            </div>
            <div className="front-end-section">
                <h3>Front-end Proficiencies:</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Web APIs</li>
                    <li>Third Party APIs</li>
                    <li>Server Side APIs</li>
                    <li>React</li>
                    {/* Add more front-end proficiencies */}
                </ul>
            </div>
            <div className="back-end-section">
                <h3>Back-end Proficiencies:</h3>
                <ul>
                    <li>Node.js</li>
                    <li>Object Oriented Programming</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>Object Relational Mapping</li>
                    <li>Model View Controller</li>
                    <li>Regex Expressions</li>
                    <li>NoSQL</li>
                    <li>Progressive Web Applications</li>
                    <li>MERN</li>
                    {/* Add more back-end proficiencies */}
                </ul>
            </div>
        </section>
    );
};

export default Resume;