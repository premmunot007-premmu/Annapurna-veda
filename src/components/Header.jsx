import React from 'react';
import './Header.css'; // We'll create this file next for the custom font

import gov1 from "../assets/Government_of_India_logo.png"
import w from "../assets/annapurna-sanskrit-logo.png"
import q from "../assets/Ayush-Logo.png"
// --- SVG Icons --- 
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);


function Header() {
  return (
    <header className="w-full shadow-lg">
      {/* Top Header Bar */}
      <div className="bg-[#efefef] px-6 py-2 flex justify-between items-center">
        {/* Left Logo: Government of India */}
        <div className="flex-shrink-0">
          <img 
            src={gov1} 
            alt="Government of India Logo" 
            className="h-16 w-auto" 
          />
        </div>
        
        {/* Center Title */}
        <div className="text-center">
          <h1 className="text-5xl text-[#005128] font-annapurna whitespace-nowrap">
            AnnapurnaVeda
          </h1>
          <img src={w} alt="logo" />
        </div>
        
        {/* Right Logo: Ministry of Ayush */}
        <div className="flex-shrink-0">
          <img 
            src= {q} 
            alt="Ministry of Ayush Logo" 
            className="h-20 w-auto"
          />
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="bg-[#004ba6] text-white px-8 py-3 flex justify-between items-center">
        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center space-x-10 text-lg">
            <li><a href="/" className="hover:text-gray-300 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300 transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-gray-300 transition-colors">Contact Us</a></li>
          </ul>
        </nav>
        
        {/* Social Media Icons */}
        <div className="flex items-center space-x-6">
          <a href="#" aria-label="Instagram" className="hover:opacity-75"><InstagramIcon /></a>
          <a href="#" aria-label="Facebook" className="hover:opacity-75"><FacebookIcon /></a>
          <a href="#" aria-label="Twitter X" className="hover:opacity-75"><XIcon /></a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-75"><LinkedInIcon /></a>
        </div>
      </div>
    </header>
  );
}

export default Header;