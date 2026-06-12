import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import DietChart from './components/DietCharts';
import ComplaintForm from './components/Complaint';
import TasksPage from './components/Tasks';
import ExploarationDoshas from './components/ExploringDoshas';
import FoodChecker from './components/FoodMatch';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import NearbyClinics from './components/NearByClinics';



// Internal  Pages
import Page1 from './components/InternalRoutes/InternalPages/Page1';
import Page2 from './components/InternalRoutes/InternalPages/Page2';
import Page3 from './components/InternalRoutes/InternalPages/Page3';
import Page4 from './components/InternalRoutes/InternalPages/Page4';
import Page5 from './components/InternalRoutes/InternalPages/Page5';

import { FormContext, FormProvider } from './components/InternalRoutes/FormContext';
import SignIn from './components/SignIn';
import FoodRecipe from './components/Recipe';
import Consulting from './components/ConsultDoctor';

// Importing Signing


export default function () {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public / Landing page */}
        <Route path="/" element={<HomePage />} />

        {/* Dashboard and card routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/diet-plan" element={<DietChart />} />
        <Route path="/complaint" element={<ComplaintForm />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/doshas" element={<ExploarationDoshas />} />
        <Route path="/food-match" element={<FoodChecker />} />
        <Route path="/clinics" element={<NearbyClinics />} />
        <Route path="/recipes" element={<FoodRecipe />} />
        <Route path="/consult" element={<Consulting />}/>  
        

        
        {/* Providing route AboutUS, ContactUs */}
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />

        {/* Signing in route */}
          <Route path="/signin" element={<SignIn />} />   {/* SignIn page */}



      </Routes>
        

       
       


          <FormProvider>
    
        <Routes>
          <Route path="/ask" element={<Navigate to="/page1" />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
    
    </FormProvider>




    </BrowserRouter>



    // All Internal Routes






  );
}
