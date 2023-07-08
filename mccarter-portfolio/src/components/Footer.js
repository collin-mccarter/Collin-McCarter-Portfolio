import React from 'react';

const Footer = () => {
    const handleEmailClick = () => {
        const email = 'collinmccarter12@gmail.com';
        window.location.href = `mailto:${email}`;
        alert('Email has been opened in a new window!');
    };

    return (
        <footer className="footer">
            <div className="footer-icons">
                <a
                    href="https://github.com/collin-mccarter"

                >
                    <i className="fab fa-github fa-2xl"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/collin-mccarter-ab441b271/"
                >
                    <i className="fab fa-linkedin fa-2xl"></i>
                </a>
                <a
                    href="https://www.facebook.com/collin.mccarter.98"
                >
                    <i className="fab fa-facebook fa-2xl"></i>
                </a>
                <a onClick={handleEmailClick}>
                    <i className="far fa-envelope fa-2x"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
