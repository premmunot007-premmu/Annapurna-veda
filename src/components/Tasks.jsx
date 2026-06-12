import React, { useState, useEffect } from 'react';

// --- Initial Data for the Task Cards ---
const initialTaskData = [
  {
    id: 'routine',
    title: 'Daily Routine',
    tasks: [
      { id: 1, text: '7:00 AM → Wake up, drink 1 glass of warm water with lemon', completed: false },
      { id: 2, text: '7:15 AM → Freshen up (brush, wash face)', completed: false },
      { id: 3, text: '7:30 AM → Light stretching / 5 min deep breathing', completed: false },
      { id: 4, text: '7:45 AM → Morning walk in fresh air (optional)', completed: false },
      { id: 5, text: '8:15 AM → Healthy breakfast (see food section below)', completed: false },
      { id: 6, text: '9:00 AM - 6:00 PM → College/ work/study with short breaks', completed: false },
      { id: 7, text: '12:30 PM → Lunch (balanced meal)', completed: false },
      { id: 8, text: '4:30 PM → Healthy snack + hydration break', completed: false },
      { id: 9, text: '7:30 PM → Evening exercise / yoga', completed: false },
      { id: 10, text: '8:30 PM → Dinner (light & nutritious)', completed: false },
      { id: 11, text: '10:30 PM → Journaling / reflection / gratitude', completed: false },
      { id: 12, text: '11:00 PM → Sleep', completed: false },
    ],
  },
  {
    id: 'eating',
    title: 'Healthy Eating & Drinking',
    tasks: [
        { id: 13, text: 'Morning (7:00-8:00 AM) → Warm water with lemon OR soaked almonds + walnuts', completed: false },
        { id: 14, text: 'Breakfast (8:15 AM) → Oats with fruits / Poha with veggies / Whole grain toast + peanut butter / Smoothie', completed: false },
        { id: 15, text: 'Mid-Morning (11:00 AM) → Green tea OR coconut water + 1 fruit (apples/oranges/papaya)', completed: false },
        { id: 16, text: 'Lunch (12:30 PM) → Brown rice / chapati + dal + sabzi + curd + salad', completed: false },
        { id: 17, text: 'Evening Snack (4:30 PM) → Sprouts chaat / fruit salad / roasted makhana + green tea', completed: false },
        { id: 18, text: 'Dinner (8:30 PM) → Vegetable soup + 2 rotis + light sabzi OR quinoa with stir-fry veggies', completed: false },
        { id: 19, text: 'Hydration (throughout day) → 2.5-3 liters of water, herbal teas for detox', completed: false },
    ],
  },
  {
    id: 'exercise',
    title: 'Exercise + Meditation/Yoga',
    tasks: [
        { id: 20, text: 'Morning (7:30-8:00 AM) → 5 min deep breathing / Anulom-Vilom pranayama', completed: false },
        { id: 21, text: '10 min Surya Namaskar (sun salutations)', completed: false },
        { id: 22, text: '5 min light stretches (neck, shoulders, back)', completed: false },
        { id: 23, text: 'Evening (7:30-8:00 PM) → 15-20 min cardio or strength workout (jogging, skipping, bodyweight exercises)', completed: false },
        { id: 24, text: '10 min yoga poses (Bhujangasana, Balasana, Setu Bandhasana for relaxation)', completed: false },
        { id: 25, text: '5-10 min guided meditation / mindfulness before dinner', completed: false },
    ],
  },
];

// --- Sub-components for better structure ---

const GaugeMeter = ({ overall }) => {
    // The needle's rotation is based on the overall score. 
    // It rotates from -90deg (0%) to +90deg (100%).
    const rotation = -90 + (overall * 1.8);

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-32">
                {/* Gauge Background Arc using SVG for perfect curves */}
                <svg viewBox="0 0 100 50" className="w-full h-full">
                    <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#e5e7eb" strokeWidth="20" />
                    <path d="M 10 50 A 40 40 0 0 1 34 11.5" fill="none" stroke="#22d3ee" strokeWidth="20" /> 
                    <path d="M 34 11.5 A 40 40 0 0 1 66 11.5" fill="none" stroke="#c084fc" strokeWidth="20" />
                    <path d="M 66 11.5 A 40 40 0 0 1 90 50" fill="none" stroke="#f472b6" strokeWidth="20" />
                </svg>
               
                {/* Needle */}
                <div 
                    className="absolute bottom-0 left-1/2 w-0.5 h-[calc(50%-10px)] bg-gray-800 origin-bottom transition-transform duration-500" 
                    style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
                >
                    <div className="absolute top-[-8px] left-1/2 w-4 h-4 bg-gray-800 rounded-full -translate-x-1/2 border-2 border-white"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-white rounded-full -translate-x-1/2 translate-y-1/2 border-4 border-gray-800"></div>
            </div>

            <div className="text-center mt-4">
                <p className="text-sm font-semibold text-gray-500 tracking-wider">OVERALL WELLNESS SCORE</p>
                <p className="text-5xl font-extrabold text-gray-800">{overall}%</p>
            </div>
        </div>
    );
};

const TaskCard = ({ title, tasks, onToggle }) => (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b">{title}</h3>
        <ul>
            {tasks.map(task => (
                <li key={task.id} className="flex items-start gap-3 mb-3">
                    <input
                        type="checkbox"
                        id={`task-${task.id}`}
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                    />
                    <label
                        htmlFor={`task-${task.id}`}
                        className={`text-sm leading-tight ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'} cursor-pointer`}
                    >
                        {task.text}
                    </label>
                </li>
            ))}
        </ul>
    </div>
);


function TasksPage() {
    const [tasksData, setTasksData] = useState(initialTaskData);
    const [percentages, setPercentages] = useState({ routine: 0, eating: 0, exercise: 0, overall: 0 });

    useEffect(() => {
        // This effect runs whenever tasksData changes to recalculate percentages
        const newPercentages = {};
        let totalTasks = 0;
        let totalCompleted = 0;

        tasksData.forEach(category => {
            const completedCount = category.tasks.filter(t => t.completed).length;
            const totalCount = category.tasks.length;
            const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
            newPercentages[category.id] = percentage;
            totalTasks += totalCount;
            totalCompleted += completedCount;
        });

        newPercentages.overall = totalTasks > 0 ? Math.round((totalCompleted / totalTasks) * 100) : 0;

        setPercentages(newPercentages);
    }, [tasksData]);


    const handleToggle = (categoryId, taskId) => {
        setTasksData(currentData =>
            currentData.map(category => {
                if (category.id === categoryId) {
                    return {
                        ...category,
                        tasks: category.tasks.map(task =>
                            task.id === taskId ? { ...task, completed: !task.completed } : task
                        ),
                    };
                }
                return category;
            })
        );
    };

    return (
        <div className="bg-cyan-50 min-h-screen font-sans p-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Tasks Overview</h1>

            {/* Top Section: Visualization */}
            <div className="max-w-7xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <GaugeMeter {...percentages} />
                
                <div className="text-lg font-bold text-gray-700 space-y-2">
                    <p>Daily routine : {percentages.routine}%</p>
                    <p>Healthy Eating & Drinking: {percentages.eating}%</p>
                    <p>Exercise & Meditation/Yoga: {percentages.exercise}%</p>
                </div>
            </div>

            {/* Bottom Section: Task Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tasksData.map(category => (
                    <TaskCard 
                        key={category.id}
                        title={category.title}
                        tasks={category.tasks}
                        onToggle={(taskId) =>handleToggle (category.id, taskId)}
                    />
                ))}
            </div>
        </div>
    );
}

export default TasksPage;