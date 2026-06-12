import React, { useState } from 'react';
import createdRecipe from "../assets/createdRecipe.png"

// --- SVG Icons ---
const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const FireIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0112 3c1.398 0 2.743.57 3.714 1.543C18.5 6.5 19 9 19 11c2 1 2.343 2.343 2.343 2.343a8 8 0 01-3.686 5.314z" />
    </svg>
);

const HeartIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z" />
    </svg>
);

const ClipboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
);


// --- Page Components ---

const GeneratorPage = ({ setPage }) => {
    const [ingredients, setIngredients] = useState(['']);
    const [mealType, setMealType] = useState('');
    const [dietaryPrefs, setDietaryPrefs] = useState([]);
    const [cookingTime, setCookingTime] = useState(30);
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    
    const dietaryOptions = ['Vegetarian', 'Vegan', 'Keto', 'Paleo'];

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    const toggleDietaryPref = (pref) => {
        setDietaryPrefs(prev => 
            prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]
        );
    };

    // Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (ingredients.some(i => i.trim() === "")) {
            alert("Please fill all ingredient fields");
            return;
        }
        if (!mealType) {
            alert("Please select a meal type");
            return;
        }
        if (dietaryPrefs.length === 0) {
            alert("Please select at least one dietary preference");
            return;
        }
        if (!cookingTime) {
            alert("Please set cooking time");
            return;
        }

        // ✅ Passed validation → go to RecipePage
        setPage('recipe');
    };

    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-[#0a2342]">Generate Recipe</h1>
                <p className="text-gray-500 mt-2 text-lg">Tell us what you have and we will create delicious recipes for you</p>
            </div>

            <div className="bg-gray-100/80 rounded-3xl p-8 shadow-sm">
                <form onSubmit={handleSubmit}>
                    {/* Ingredients Section */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Ingredients</h2>
                        <div className="space-y-3">
                            {ingredients.map((ingredient, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <input
                                        type="text"
                                        value={ingredient}
                                        onChange={(e) => handleIngredientChange(index, e.target.value)}
                                        placeholder="e.g., chicken breast, tomatoes"
                                        required
                                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                                    />
                                    {index === ingredients.length - 1 && (
                                        <button 
                                            type="button"
                                            onClick={handleAddIngredient} 
                                            className="bg-[#0a2342] text-white font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap hover:bg-[#1e3a5f] transition-colors shadow-md"
                                        >
                                            Add ingredient
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dietary Filters Section */}
                    <div className="mt-10">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Dietary Filters</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* Left Side Filters */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-gray-600 font-medium mb-2">Meal Type <span className="text-red-500">*</span></h3>
                                    <div className="flex gap-3">
                                        <button 
                                            type="button"
                                            onClick={() => setMealType('Lunch')} 
                                            className={`px-5 py-2 rounded-lg font-semibold transition ${mealType === 'Lunch' ? 'bg-[#0a2342] text-white' : 'bg-white text-gray-700'}`}
                                        >
                                            Lunch
                                        </button>  
                                        <button 
                                            type="button"
                                            onClick={() => setMealType('Dinner')} 
                                            className={`px-5 py-2 rounded-lg font-semibold transition ${mealType === 'Dinner' ? 'bg-[#0a2342] text-white' : 'bg-white text-gray-700'}`}
                                        >
                                            Dinner
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-gray-600 font-medium mb-2">Dietary Preferences <span className="text-red-500">*</span></h3>
                                    <div className="flex flex-wrap gap-3">
                                        {dietaryOptions.map(option => (
                                            <button 
                                                type="button"
                                                key={option} 
                                                onClick={() => toggleDietaryPref(option)} 
                                                className={`px-4 py-2 rounded-lg font-semibold transition text-sm ${dietaryPrefs.includes(option) ? 'bg-[#0a2342] text-white' : 'bg-white text-gray-700'}`}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Right Side Filters */}
                            <div className="flex items-start gap-4">
                                <div className="w-full pt-1">
                                    <h3 className="text-gray-600 font-medium mb-2">Cooking Time <span className="text-red-500">*</span></h3>
                                    <div className="text-blue-600 font-semibold text-right mb-1">&lt; {cookingTime} min</div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="120"
                                        step="5"
                                        value={cookingTime}
                                        onChange={(e) => setCookingTime(e.target.value)}
                                        required
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                </div>
                                <div className="text-center pt-1">
                                    <h3 className="text-gray-600 font-medium mb-2 whitespace-nowrap">Gluten-Free</h3>
                                    <button 
                                        type="button"
                                        onClick={() => setIsGlutenFree(!isGlutenFree)} 
                                        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${isGlutenFree ? 'bg-blue-600' : 'bg-gray-300'}`}
                                    >
                                        <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isGlutenFree ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Generate Button */}
                    <div className="mt-12 text-center">
                        <button 
                            type="submit" 
                            className="bg-[#0a2342] text-white font-bold px-10 py-3.5 rounded-lg hover:bg-[#1e3a5f] transition-colors shadow-lg text-lg"
                        >
                            Generate Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const RecipePage = ({ setPage }) => {
    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-10">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Superfood Quinoa & Chickpea Salad</h1>
                        <p className="text-gray-500 mt-1">A protein-packed vegetarian meal</p>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-red-500 cursor-pointer transition">
                        <HeartIcon/>
                        <span className="font-semibold hidden md:inline">Save Recipe</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-600 mb-6">
                    <div className="flex items-center"><ClockIcon /> 25 min prep</div>
                    <div className="flex items-center"><FireIcon /> 420 kcal per serving</div>
                </div>
                
                {/* Image */}
                <div className="mb-8">
                    <img 
                        src={createdRecipe}
                        onError={(e) => e.target.src = 'https://placehold.co/800x500/e2e8f0/64748b?text=Salad+Image'}
                        alt="Superfood Quinoa & Chickpea Salad" 
                        className="w-full h-auto max-h-[500px] object-cover rounded-xl"
                    />
                </div>

                {/* Ingredients & Instructions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Ingredients</h2>
                        <ul className="space-y-2 list-disc list-inside text-gray-700">
                           <li>1 cup Cooked Quinoa</li>
                           <li>1 can (400g) Chickpeas, rinsed & roasted</li>
                           <li>1/2 Red Bell Pepper, diced</li>
                           <li>1/4 cup Cherry Tomatoes, halved</li>
                           <li>1/4 cup Fresh Parsley, chopped</li>
                           <li>2 tbsp Olive Oil</li>
                           <li>Salt & Pepper to taste</li>
                           <li>1/4 cup Feta Cheese crumbled (optional)</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2">Instructions</h2>
                        <ol className="space-y-3 list-decimal list-inside text-gray-700">
                           <li>In a large bowl, combine the cooked quinoa, roasted chickpeas, cucumber, bell pepper, and cherry tomatoes. Season with salt and pepper.</li>
                           <li>Pour the dressing over the olive and lemon juice. Toss gently to combine.</li>
                           <li>Stir in fresh parsley and crumbled feta (if using).</li>
                           <li>Serve immediately or chill for later. Enjoy!</li>
                        </ol>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-12 text-center">
                    <button onClick={() => setPage('generator')} className="bg-gray-200 text-gray-700 font-bold px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors">
                        &larr; Back to Generator
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Main App Component ---

const FoodRecipe = () => {
    const [page, setPage] = useState('generator'); // 'generator' or 'recipe'

    return (
        <main className="bg-[#f0fcfc] min-h-screen flex items-center justify-center p-4 font-sans">
            {page === 'generator' ? <GeneratorPage setPage={setPage} /> : <RecipePage setPage={setPage} />}
        </main>
    );
};

export default FoodRecipe;
