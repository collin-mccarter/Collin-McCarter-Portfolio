import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('About'); // Initialize with the default active section

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <main>
      <Navbar onNavbarLinkClick={handleNavClick} />
      
      {activeSection === 'About' && <AboutMe />}
      {activeSection === 'Contact' && <Contact />}
      {activeSection === 'Projects' && <Projects />}
      {activeSection === 'Resume' && <Resume />}

      <Footer />
    </main>
  );
}

export default App;
