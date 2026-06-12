import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

const Page2 = () => {
  const navigate = useNavigate();
  const {
    activityLevel, setActivityLevel,
    sleepHours, setSleepHours,
    bedtime, setBedtime,
    wakeTime, setWakeTime,
    stressLevel, setStressLevel,
    digestionPatterns, setDigestionPatterns
  } = useContext(FormContext);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setDigestionPatterns(prev => ({ ...prev, [name]: checked }));
  };

  const handleNext = (e) => {
    e.preventDefault(); // browser will check required fields
    navigate('/page3');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EFEFEF] p-4 font-sans">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-[#EDFFFA] p-6 shadow-lg sm:p-10">
        <h1 className="text-3xl font-bold text-[#01224B] text-center">Lifestyle & Digestion</h1>

        <form onSubmit={handleNext} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Activity Level</label>
            <select
              required
              value={activityLevel}
              onChange={e => setActivityLevel(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
            >
              <option value="" disabled>Select</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black">Sleep Hours</label>
              <input
                type="number"
                required
                value={sleepHours}
                onChange={e => setSleepHours(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Stress Level (1-5)</label>
              <input
                type="number"
                min="1"
                max="5"
                required
                value={stressLevel}
                onChange={e => setStressLevel(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black">Bedtime</label>
              <input
                type="time"
                required
                value={bedtime}
                onChange={e => setBedtime(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Wake Time</label>
              <input
                type="time"
                required
                value={wakeTime}
                onChange={e => setWakeTime(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-black mb-2">Digestion Patterns</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(digestionPatterns).map(key => (
                <label key={key} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name={key}
                    checked={digestionPatterns[key]}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 rounded border-gray-300 text-[#004BA6] focus:ring-[#004BA6]"
                  />
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-between">
            <button
              type="button"
              onClick={() => navigate('/page1')}
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

export default Page2;
