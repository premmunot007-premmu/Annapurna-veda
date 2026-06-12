import React from 'react';
import './DietChart.css'; // Linking the CSS file
import q from '../assets/PhotoGallery/oatmeal.jpeg'
import w from '../assets/PhotoGallery/chicken-salad.jpeg'
import r from  '../assets/PhotoGallery/baked-salmon-with-veggies.jpeg'

import s from '../assets/PhotoGallery/salad.jpeg'
import  t from '../assets/PhotoGallery/oatmeal.jpeg'
import u from '../assets/PhotoGallery/chicken-salad.jpeg'
import v from '../assets/PhotoGallery/baked-salmon-with-veggies.jpeg'


import b from '../assets/PhotoGallery/salad.jpeg'
// --- SVG Icons ---
const PrintIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const MinusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const WaterDropIcon = ({ filled }) => <svg className={`h-5 w-5 ${filled ? 'text-blue-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 8a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" /></svg>;
const PlusIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>;

// --- Mock Data for the Diet Plan ---
const dietPlanData = {
    summary: {
        calories: { current: 1450, total: 2260 },
        protein: { current: 90, total: 150 },
        carbs: { current: 180, total: 220 },
        fat: { current: 45, total: 65 },
        water: { current: 4, total: 8 },
    },
    week: [
        // Data for Sunday, Monday, etc. would go here, but the image only shows 5 days.
        { day: 'Sunday', date: 'Sunday', meals: [/* ... */] },
        {


            day: 'Monday', date: 'Monday', meals: [
                { type: 'Breakfast', name: 'Oatmeal with Berries', calories: 350, status: 'logged', details: {img: `${q}`, ingredients: ['Oats', 'Mixed Berries', 'Milk'], p: 10, c: 60, f: 8 } },
                { type: 'Lunch', name: 'Grilled Chicken Salad', calories: 450, status: 'logged', details: {img: `${w}`, ingredients: ['Grilled Chicken Salad', 'Met perslne', 'Gwesetenmoud a en lipistettes', 'Rene poivrade penchf anad', 'Preparzian:\\eps'], p: 40, c: 25, f: 20 } },
                { type: 'Dinner', name: 'Baked Salmon with Veggies', calories: 400, status: 'logged', details: {img: `${r}`, ingredients: ['Salmon Fillet', 'Broccoli', 'Asparagus'], p: 35, c: 15, f: 22 } },
                { type: 'Dinner', name: 'Salad', calories: 400, status: 'missed', details: {img:  `${s}`, ingredients: [], p: 0, c: 0, f: 0 } },
            ]
        },
        { day: 'Tuesday', date: 'Tuesday', meals: [{ type: 'Breakfast', name: 'Oatmeal with Berries', calories: 350, status: 'logged', details: {img:  `${t}`, ingredients: ['Oats', 'Mixed Berries', 'Milk'], p: 10, c: 60, f: 8 } },
                { type: 'Lunch', name: 'Grilled  Salad', calories: 450, status: 'logged', details: {img:  `${u}`, ingredients: ['Grilled Chicken Salad', 'Met perslne', 'Gwesetenmoud a en lipistettes', 'Rene poivrade penchf anad', 'Preparzian:\\eps'], p: 40, c: 25, f: 20 } },
                { type: 'Dinner', name: 'Salmon with Veggies', calories: 600, status: 'logged', details: {img:  `${v}`, ingredients: ['Salmon Fillet', 'Broccoli', 'Asparagus'], p: 35, c: 15, f: 22 } },
                { type: 'Dinner', name: 'Salad', calories: 480, status: 'missed', details: {img:  `${b}`, ingredients: [], p: 0, c: 0, f: 0 } },
         ] },
        { day: 'Wednesday', date: 'Wednesday', meals: [/* ... */] },
        { day: 'Thursday', date: 'Thursday', meals: [/* ... */] },
    ]
};
// For demonstration, we'll just repeat Monday's data for all days
dietPlanData.week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'].map(day => ({
    ...dietPlanData.week[1],
    day,
    date: day,
}));

// --- Sub-components ---
const ProgressBar = ({ current, total, color }) => {
    const percentage = (current / total) * 100;
    return (
        <div className="bg-gray-200 rounded-full h-2 w-full">
            <div className={`h-2 rounded-full ${color}`} style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

const MealCard = ({ meal }) => {
    const getStatusIcon = (status) => {
        switch (status) {
            case 'logged': return <CheckIcon />;
            case 'skipped': return <MinusIcon />;
            case 'missed': return <XIcon />;
            default: return null;
        }
    };

    // If the meal name is empty, render a placeholder
    if (!meal.name) {
        return <div className="bg-gray-100 rounded-xl p-4 h-[100px] border border-dashed border-gray-300"></div>;
    }

    return (
        <div className="relative group">
            {/* The visible meal card */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex flex-col justify-between h-[100px]">
                <div>
                    <p className="font-semibold text-gray-500 text-sm">{meal.type}</p>
                    <p className="font-bold text-gray-800">{meal.name}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-sm">{meal.calories} kcal</p>
                    {getStatusIcon(meal.status)}
                </div>
            </div>

            {/* The hover popup card - positioned absolutely relative to the parent */}
            <div className="absolute left-full top-0 ml-4 w-[350px] z-20 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-x-2 pointer-events-none group-hover:pointer-events-auto">
                <img src={meal.details.img} alt={meal.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-2xl font-bold mb-3">{meal.name}</h3>
                <p className="text-gray-600 font-semibold mb-2">Ingredients:</p>
                <ul className="list-disc list-inside text-gray-500 mb-4 space-y-1">
                    {meal.details.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                </ul>
                <div className="grid grid-cols-4 text-center mb-6">
                    <div><p className="font-bold">{meal.calories}</p><p className="text-sm text-gray-500">Cals</p></div>
                    <div><p className="font-bold">{meal.details.p}g</p><p className="text-sm text-gray-500">P</p></div>
                    <div><p className="font-bold">{meal.details.c}g</p><p className="text-sm text-gray-500">C</p></div>
                    <div><p className="font-bold">{meal.details.f}g</p><p className="text-sm text-gray-500">F</p></div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                    <button className="w-full bg-green-700 text-white font-bold py-3 rounded-lg hover:bg-green-800 transition">Log Meal</button>
                    <button className="text-green-700 font-semibold hover:underline">Swap Meal</button>
                    <button className="text-gray-500 font-semibold text-sm hover:underline">Log Something Else</button>
                </div>
            </div>
        </div>
    );
};


function DietChart() {
    const summary = dietPlanData.summary;

    return (
        <div className="bg-[#f9f7f3] min-h-screen font-sans p-8">
            <div className="max-w-screen-2xl mx-auto">
                {/* --- Header Section --- */}
                <header className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-4xl font-bold text-gray-800">My Diet Plan</h1>
                        <p className="text-gray-500">Dashboard &gt; Diet Plan</p>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600">
                        <button className="p-2 hover:bg-gray-200 rounded-full">&lt;</button>
                        <span className="font-semibold">September 30 - October 21, 2025</span>
                        <button className="p-2 hover:bg-gray-200 rounded-full">&gt;</button>
                        <button className="p-2 hover:bg-gray-200 rounded-lg"><PrintIcon /></button>
                    </div>
                </header>
                <div className="flex justify-end space-x-4 mb-8">
                    <button className="bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-800 transition">Generate Shopping List</button>
                    <button className="bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition">Export / Print</button>
                </div>

                {/* --- Daily Summary Bar --- */}
                <div className="bg-[#f3f0e9] p-6 rounded-2xl shadow-sm mb-10">
                    <h2 className="font-bold text-xl mb-4 text-gray-800">Daily Summary Bar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
                        {/* Calories */}
                        <div className="text-center">
                            <p className="text-3xl font-bold">{summary.calories.current}</p>
                            <p className="text-gray-500">/ {summary.calories.total} kcal</p>
                            <ProgressBar current={summary.calories.current} total={summary.calories.total} color="bg-yellow-400" />
                        </div>
                        {/* Macros */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between"><span className="font-semibold">P: {summary.protein.current}/{summary.protein.total}g</span><ProgressBar current={summary.protein.current} total={summary.protein.total} color="bg-red-400" /></div>
                            <div className="flex items-center justify-between"><span className="font-semibold">C: {summary.carbs.current}/{summary.carbs.total}g</span><ProgressBar current={summary.carbs.current} total={summary.carbs.total} color="bg-green-400" /></div>
                            <div className="flex items-center justify-between"><span className="font-semibold">F: {summary.fat.current}/{summary.fat.total}g</span><ProgressBar current={summary.fat.current} total={summary.fat.total} color="bg-blue-400" /></div>
                        </div>
                        {/* Water Intake */}
                        <div className="flex justify-center items-center space-x-1 col-span-1 md:col-span-2">
                             <div className="text-center">
                                <div className="flex space-x-1 mb-2">
                                    {Array.from({ length: summary.water.total }).map((_, i) => (
                                        <WaterDropIcon key={i} filled={i < summary.water.current} />
                                    ))}
                                </div>
                                <p className="font-semibold text-gray-600">{summary.water.current}/{summary.water.total} glasses</p>
                             </div>
                        </div>
                    </div>
                </div>

                {/* --- Weekly Plan Grid --- */}
                <div className="grid grid-cols-5 gap-4">
                    {dietPlanData.week.map((dayData, index) => (
                        <div key={index} className="flex flex-col space-y-4">
                            <h3 className="font-bold text-center text-lg">{dayData.day}</h3>
                            {dayData.meals.map((meal, mealIndex) => (
                                <MealCard key={mealIndex} meal={meal} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Floating Action Button --- */}
            <button className="fixed bottom-8 right-8 bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg hover:bg-green-700 transition">
                <PlusIcon />
            </button>
        </div>
    );
}

export default DietChart;