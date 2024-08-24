// src/App.js
import React from 'react';
import ContactSection from './ContactSection';
import './index.css'; // Import the CSS file for any custom styles if needed

function App() {
  return (
    <div className="App bg-white text-gray-900 font-sans">
      <h1 className="text-4xl font-bold text-center mt-10 mb-6 bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text shadow-lg">
        CONTACT SECTION
      </h1>
      <ContactSection />
    </div>
  );
}

export default App;
