import React from 'react';
import Header from './Header';
import MainContent from './MainContent'; // Import the new component
import Footer from './Footer';
import LogoLoop from './LogoLoop';
import MovingFooter from './MovingFooter';
import MovingHeader from './MovingHeader';

function HomePage() {
  return (
    <div>
      <Header />
      <MovingHeader />
      <MainContent />
      <MovingFooter/>
      <Footer/>  
      
    </div>
  );
}

export default HomePage;