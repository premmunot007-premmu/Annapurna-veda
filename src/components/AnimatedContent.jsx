import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";

function MainContent() {
  const navigate = useNavigate();

  const images = [
    "src/assets/ShriNarendraModi.png",
    "src/assets/MinstryOfAyush.png",
    "src/assets/Herbs.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <main className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Section with slideshow */}
        <motion.section className="bg-[#edfffa] rounded-2xl p-8 lg:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Slideshow container */}
          <div className="relative text-center lg:text-left w-full h-64 lg:h-80 overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="Slideshow"
                className="w-full h-full object-cover rounded-lg shadow-md"
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>

          {/* Form (your existing one) */}
          <div className="bg-white p-8 rounded-xl shadow-inner">
            {/* ... your form code stays unchanged ... */}
          </div>
        </motion.section>

        {/* Other sections (Ministry, Ayurveda, etc.) remain as they were */}
      </div>
    </main>
  );
}

export default MainContent;
