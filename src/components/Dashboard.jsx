import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Header2 from './Header2';
import Footer from './Footer';
import MovingHeader from './MovingHeader';
import MovingFooter from './MovingFooter';



import  dietPlans from  "../assets/DashBoardLogos/diet-plan.png";
import  recipes from "../assets/DashBoardLogos/rec-bg.png"
import  clinics from "../assets/DashBoardLogos/image-removebg-preview.png"
import  consult from "../assets/DashBoardLogos/consult-logo.png"

import  complaint from "../assets/DashBoardLogos/complaint-logo.png"
import  doshas from "../assets/DashBoardLogos/exploring-doshas-logo.png"
import  food from "../assets/DashBoardLogos/food-check-logo.png"
import  tasks from "../assets/DashBoardLogos/tasks-logo.png"

// --- Data for the Dashboard Cards ---
const cardData = [
  { title: '', imgSrc: `${dietPlans}`, link: '/diet-plan' },
  { title: '', imgSrc: `${recipes}`, link: '/recipes' },
  { title: '', imgSrc: `${clinics}`, link: '/clinics' },
  { title: '', imgSrc: `${consult}`, link: '/consult' },
  { title: '', imgSrc: `${food}`, link: '/food-match' },
  { title: '', imgSrc: `${doshas}`, link: '/doshas' },
  { title: '', imgSrc: `${complaint}`, link: '/complaint' },
  { title: '', imgSrc: `${tasks}`, link: '/tasks' },
];

// Reusable Card component for the dashboard grid
const DashboardCard = ({ title, imgSrc, link }) => (
  <Link to={link} className="group">
    <div className="bg-blue-900 rounded-3xl p-2 shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
  <div className="bg-white rounded-2xl flex flex-col items-center justify-center aspect-square overflow-hidden">
    
    <img
      src={imgSrc}
      alt={title}
      className="w-4/5 h-4/5 object-contain"
    />
    
    <span className="mt-4 font-bold text-center text-sm text-blue-900 uppercase tracking-wider">
      {title}
    </span>
  </div>
</div>
  </Link>
);


function Dashboard() {
  return (
    <>

    <Header/>
    <Header2/>

    <MovingHeader/>

    <div className="min-h-screen bg-cyan-50 font-sans">

      {/* Thin blue bar at the very top */}
      <div className="bg-cyan-200 h-2"></div>

      <main className="container mx-auto p-8">
        <h1 className="text-2xl text-gray-800 mb-10">Welcome,</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {cardData.map((card, index) => (
            <DashboardCard 
              key={index} 
              title={card.title} 
              imgSrc={card.imgSrc} 
              link={card.link} 
            />
          ))}
        </div>
      </main>
      
    </div>
    
    <MovingFooter/>
    <Footer/>
    </>
    
  );
}

export default Dashboard;