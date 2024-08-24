import React from 'react';
import ContactCard from './ContactCard';

const contacts = [
  {
    name: 'Kailash Nadh',
    designation: 'Co-founder of FOSS United and CTO of Zerodha',
    email: 'kailash@example.com',
    phone: '+91-12345-67890',
    linkedin: 'https://www.linkedin.com/in/kailash-nadh/',
    additionalInfo: 'Expert in financial technology and software development.',
    contactLink:'https://nadh.in/',
  },
  {
    name: 'Rushabh Mehta',
    designation: 'Co-founder of FOSS United and founder of Frappe',
    email: 'rushabh@example.com',
    phone: '+91-98765-43210',
    linkedin: 'https://www.linkedin.com/in/rushabhmehta/',
    additionalInfo: 'Known for creating the ERPNext open-source project.',
    contactLink:'https://www.linkedin.com/in/rushabhmehta1?originalSubdomain=in',
  },
  {
    name: 'Poruri Sai Rahul',
    designation: 'CEO of FOSS United',
    email: 'rahul@example.com',
    phone: '+91-12345-11111',
    linkedin: 'https://www.linkedin.com/in/rahul-poruri/',
    additionalInfo: 'A leader in the open-source community and policy advocate.',
    contactLink:'https://rahulporuri.github.io/talks.html',
  },
  {
    name: 'Venkatesh Hariharan',
    designation: 'Public Policy Consultant',
    email: 'venkatesh@example.com',
    phone: '+91-54321-11111',
    linkedin: 'https://www.linkedin.com/in/venky7/',
    additionalInfo: 'Specializes in public policy and legal reforms.',
    contactLink:'https://www.linkedin.com/in/venky7/',
  },
];

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center bg-white p-10">
      <div className="flex flex-wrap justify-center items-center">
        {contacts.map((contact, index) => (
          <ContactCard
            key={index}
            name={contact.name}
            designation={contact.designation}
            email={contact.email}
            phone={contact.phone}
            linkedin={contact.linkedin}
            additionalInfo={contact.additionalInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
