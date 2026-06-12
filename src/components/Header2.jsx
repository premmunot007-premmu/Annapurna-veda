import React from 'react';
import { Link } from 'react-router-dom';

function Header2() {
  return (
    <header className="w-full bg-gray-200 shadow-sm">
      <div className="container mx-auto px-0 py-3 flex justify-end items-center">
        <nav className="flex items-center space-x-6">
          <Link 
            to="/page1" 
            className="text-gray-700 font-semibold hover:text-blue-600 hover:underline transition-colors duration-200 "
          >
            Edit Profile
          </Link>
          <Link 
            to="/" 
            className="text-gray-700 font-semibold hover:text-blue-600 hover:underline transition-colors duration-200"
          >
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header2;