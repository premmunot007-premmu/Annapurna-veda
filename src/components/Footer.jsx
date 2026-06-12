import React from 'react';
import './Footer.css'; // Import the CSS for the custom font and icon adjustments

// SVG Icons for phone, email, and location
// These are simple SVG paths for direct embedding and easy styling
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-0.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-0.45 12.84 12.84 0 0 0 2.81 0.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mr-2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle mr-2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);


function Footer() {
  return (
    // The main footer container with background color and padding
    <footer className="bg-[#004ba6] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: AnnapurnaVeda Info */}
        <div className="flex flex-col justify-start pr-4">
          <h2 className="text-5xl font-annapurna mb-6 whitespace-nowrap leading-none">
            AnnapurnaVeda
          </h2>
          <p className="text-lg mb-3"><PhoneIcon />+91 98765 43210</p>
          <p className="text-lg mb-3"><MailIcon />annapurnaveda@gmail.com</p>
          <p className="text-lg"><MapPinIcon />Pune, India</p>
        </div>

        {/* Column 2: Important Links */}
        {/* We use border-l for the vertical separator line and pl-8 for left padding */}
        <div className="border-t pt-8 md:border-t-0 md:border-l border-white md:pl-10">
          <h3 className="text-2xl font-bold mb-5">Important Links</h3>
          <ul className="space-y-3 text-lg">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Total Visitor Count */}
        <div className="border-t pt-8 md:border-t-0 md:border-l border-white md:pl-10">
          <h3 className="text-2xl font-bold mb-5">Total Visitor Count</h3>
          <p className="text-lg">12345</p> {/* Placeholder for a dynamic visitor count */}
        </div>

        {/* Column 4: Disclaimer */}
        <div className="border-t pt-8 md:border-t-0 md:border-l border-white md:pl-10">
          <h3 className="text-2xl font-bold mb-5">Disclaimer</h3>
          <p className="text-base leading-relaxed">
            This platform is intended for use by Ayurvedic practitioners. The
            information provided is for guidance only and should not replace
            personalized medical advice. Always consult a qualified healthcare
            professional for medical concerns.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;