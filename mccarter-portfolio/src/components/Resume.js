import React from 'react';

const Resume = () => {
    const handleDownload = () => {
        // Replace the 'resume.pdf' with the actual path or URL of your resume PDF file
        window.open('/path/to/resume.pdf', '_blank');
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