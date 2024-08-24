import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import './ContactCard.css'; // Import the CSS file for additional styles

const ContactCard = ({ name, designation, email, phone, linkedin, additionalInfo, contactLink }) => {
  const handleContactClick = () => {
    // Redirect to the contact link when the button is clicked
    window.location.href = contactLink;
  };

  return (
    <div className="contact-card bg-[#122314d9] border-[0.4rem] border-[#7CA97C] shadow-md p-6 w-80 m-5 text-left relative transition-all duration-600 ease-in-out overflow-hidden hover:h-[400px] hover:shadow-lg">
      <div className="card-content flex flex-col items-center">
        <h2 className="text-xl mb-2 text-white font-bold uppercase">{name}</h2>
        <p className="text-white flex items-center justify-center mb-2">
          <a href={`mailto:${email}`} className="text-whitesmoke flex items-center">
            <FaEnvelope className="icon text-[#7CA97C] mr-2" />
            {email}
          </a>
        </p>
        <p className="text-white flex items-center justify-center mb-2">
          <FaPhone className="icon text-[#7CA97C] mr-2" />
          {phone}
        </p>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-email text-whitesmoke font-bold flex items-center justify-start mt-2 hover:underline">
          <FaLinkedin className="icon text-[#7CA97C] mr-2" />
          LinkedIn
        </a>
        <div className="additional-info hidden p-2 text-aliceblue text-sm text-left hover:block">
          <p><strong>Additional Info:</strong></p>
          <p>{additionalInfo}</p>
        </div>
        <button 
          className="contact-btn bg-[#7CA97C] text-black border-none py-3 px-6 rounded-full mt-3 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#3E6040] hover:scale-105"
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
