import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

const Page4 = () => {
  const navigate = useNavigate();
  const {
    dietaryRestrictions, setDietaryRestrictions,
    eatingSchedule, setEatingSchedule,
    favoriteFoods, setFavoriteFoods,
    foodsYouDislike, setFoodsYouDislike
  } = useContext(FormContext);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setDietaryRestrictions(prev => ({ ...prev, [name]: checked }));
  };

  const handleNext = (e) => {
    e.preventDefault(); // will block if any required field is empty
    navigate('/page5');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EFEFEF] p-4 font-sans">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-[#EDFFFA] p-6 shadow-lg sm:p-10">
        <h1 className="text-3xl font-bold text-[#01224B] text-center">Dietary Preferences</h1>

        <form onSubmit={handleNext} className="mt-6 space-y-4">
          <div>
            <p className="text-sm font-medium text-black mb-2">Dietary Restrictions</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(dietaryRestrictions).map(key => (
                <label key={key} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name={key}
                    checked={dietaryRestrictions[key]}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-[#004BA6] focus:ring-[#004BA6]"
                  />
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Eating Schedule</label>
            <input
              type="text"
              required
              value={eatingSchedule}
              onChange={e => setEatingSchedule(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Favorite Foods</label>
            <input
              type="text"
              required
              value={favoriteFoods}
              onChange={e => setFavoriteFoods(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Foods You Dislike</label>
            <input
              type="text"
              required
              value={foodsYouDislike}
              onChange={e => setFoodsYouDislike(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
            />
          </div>

          <div className="mt-10 flex justify-between">
            <button
              type="button"
              onClick={() => navigate('/page3')}
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-black font-semibold hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              type="submit"
              className="rounded-lg bg-[#004BA6] px-5 py-2.5 text-white font-semibold hover:bg-[#01224B]"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page4;
