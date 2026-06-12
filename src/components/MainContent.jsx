import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from "react-router-dom";
import q from  "../assets/ShriNarendraModi.png"
import w from  "../assets/MinstryOfAyush.png"
import e  from   "../assets/Herbs.jpg"
import s from"../assets/Herbs.jpg" 

import a  from "../assets/MinstryOfAyush.png" ;
// Your icons remain the same here (GoogleIcon, AppleIcon)...

function MainContent() {
  const navigate = useNavigate();


  const images = [`${e}`,
    `${q}`,
   `${w}` 
   
  ];

  const [index, setIndex] = useState(0);

  // Auto-change image every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Animation variants
  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageAnimationLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* --- Section 1: Slideshow + Signup Form --- */}
        <motion.section 
          className="bg-[#edfffa] rounded-2xl p-8 lg:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* ✅ Animated slideshow */}
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

          {/* ✅ Signup form */}
          <div className="bg-white p-8 rounded-xl shadow-inner">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create an account</h2>
            <p className="text-gray-600 mb-6">
              Already have an account?{" "}
              <Link to="/signin" className="text-green-700 font-semibold hover:underline">
                Sign in
              </Link>
            </p>

            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                navigate('/page1');
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" required placeholder="First Name" className="w-full p-3 rounded-md bg-gray-100 focus:ring-2 focus:ring-green-600 focus:bg-white"/>
                <input type="text" required placeholder="Last Name" className="w-full p-3 rounded-md bg-gray-100 focus:ring-2 focus:ring-green-600 focus:bg-white"/>
              </div>
              <input type="email" required placeholder="Email" className="w-full p-3 rounded-md bg-gray-100 focus:ring-2 focus:ring-green-600 focus:bg-white"/>
              <input type="password" required placeholder="Enter Your Password" className="w-full p-3 rounded-md bg-gray-100 focus:ring-2 focus:ring-green-600 focus:bg-white"/>
              <button type="submit" className="w-full bg-[#079fb3] text-white font-bold py-3 rounded-md hover:bg-blue-800 transition-colors duration-300">
                Create Account
              </button>
            </form>
          </div>
        </motion.section>

        {/* --- Section 2: Ministry of AYUSH --- */}
        <motion.section 
          className="bg-[#edfffa] rounded-2xl p-8 lg:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardAnimation}
        >
          <motion.img 
            src= {a}
            alt="Ministry of Ayush elements" 
            className="rounded-lg w-full h-auto object-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageAnimationLeft}
          />
          <div className="text-gray-800">
            <h3 className="text-2xl font-bold mb-4">The Ministry of AYUSH</h3>
            <p className="text-base leading-relaxed">
              is an Indian government ministry focused on developing and protecting traditional medicine systems, including Ayurveda, Yoga and Naturopathy, Unani, Siddha, and Homeopathy, plus Sowa-Rigpa. Established in 2014, its objectives are to revive ancient knowledge, strengthen AYUSH systems for healthcare, and ensure quality, evidence, and global relevance for these systems. Initiatives include integrating AYUSH with modern medicine, conserving medicinal plants, and implementing schemes like the National AYUSH Mission (NAM) to expand healthcare access.
            </p>
          </div>
        </motion.section>

        {/* --- Section 3: Ayurveda --- */}
        <motion.section 
          className="bg-[#edfffa] rounded-2xl p-8 lg:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardAnimation}
        >
          <motion.img 
            src={s}
            alt="Ayurvedic spices and herbs with mortar and pestle" 
            className="rounded-lg w-full h-auto object-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageAnimationLeft}
          />
          <div className="text-gray-800">
            <h3 className="text-2xl font-bold mb-4">Ayurveda</h3>
            <p className="text-base leading-relaxed">
              the ancient 'science of life' from India, is a holistic system of medicine focused on achieving a dynamic balance between the mind, body, and spirit. It operates on the principle that the universe is composed of five elements which combine to form three fundamental energies, or doshas: Vata (air & space), Pitta (fire & water), and Kapha (earth & water). Every individual has a unique blend of these doshas, which defines their personal constitution. Through personalized approaches including diet, herbal remedies, yoga, meditation, and detoxification therapies like Panchakarma, Ayurveda aims not merely to treat symptoms but to address the root cause of illness, empowering individuals to prevent disease and maintain vibrant health by living in harmony with their nature.
            </p>
          </div>
        </motion.section>

      </div>
    </main>
  );
}

export default MainContent;
