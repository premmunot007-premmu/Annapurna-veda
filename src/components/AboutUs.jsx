import React from 'react';
// You would typically use an icon library like 'react-icons' for these.
// Assuming you have a way to display flag and lightbulb icons, 
// I'll use placeholders or simple elements for the image replication.

const AboutUs = () => {
  return (
    // Outer container for centering and background (if needed)
    <div className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 bg-white min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-normal text-gray-800 mb-12">
        About us
      </h1>

      {/* Mission & Vision Section (Two-Column Layout) */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 text-center md:text-left">
        
        {/* Our Mission Column */}
        <div className="flex flex-col items-center md:items-start p-4">
          <div className="flex items-center space-x-3 mb-4">
            {/* Icon Placeholder (Flag/Goal icon) */}
            <span className="text-3xl text-green-600">
              {/* Replace with actual icon component, e.g., <FaFlag className="text-green-600" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 2v18h2V2H3zm16 0h-4v18h4V2zM9 2v18h4V2H9z"/>
              </svg>
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Our mission:</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            At annapurnaVeda, we believe that true wellness comes from *balancing the mind, body, and soul* through the timeless wisdom of Ayurveda. Our mission is to help you embrace a healthier lifestyle with natural healing practices, nourishing foods, and personalized care.
          </p>
        </div>
        
        {/* Our Vision Column */}
        <div className="flex flex-col items-center md:items-start p-4">
          <div className="flex items-center space-x-3 mb-4">
            {/* Icon Placeholder (Lightbulb/Idea icon) */}
            <span className="text-3xl text-green-600">
              {/* Replace with actual icon component, e.g., <FaLightbulb className="text-green-600" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M4.343 5.657l-.707.707m1.414 12.02l.707-.707M19.07 19.07l-.707-.707M18 10a8 8 0 11-16 0 8 8 0 0116 0z"/>
              </svg>
            </span>
            <h2 className="text-2xl font-bold text-gray-800">Our Vision:</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            We bring you wholesome Ayurvedic nutritional dishes crafted with carefully chosen ingredients that not only delight your taste buds but also *restore inner balance*. Each recipe is rooted in ancient traditions and designed to support digestion, immunity, and overall vitality.
          </p>
        </div>
      </div>
      
      {/* Full-Width Image Section */}
      <div className="max-w-4xl w-full">
        {/* 💡 IMPORTANT: Replace the src attribute with the actual path to your food image */}
        <img
          src="/path/to/your/ayurvedic-food-image.jpg" 
          alt="A selection of Ayurvedic nutritional dishes on a wooden platter."
          className="w-full h-auto object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default AboutUs;