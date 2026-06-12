import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { FormContext } from '../InternalRoutes/FormContext';
import { FormContext } from '../FormContext';




const Page1 = () => {
  const navigate = useNavigate();
  const { age, setAge, gender, setGender, height, setHeight, weight, setWeight, bmi, setBmi } = useContext(FormContext);

  useEffect(() => {
    if (height > 0 && weight > 0) {
      const heightM = height / 100;
      setBmi((weight / (heightM * heightM)).toFixed(2));
    }
  }, [height, weight]);

  const handleNext = (e) => {
    e.preventDefault(); // let browser check required fields first
    navigate('/page2');
  };

  return (
   <>
    
   <div className="flex min-h-screen items-center justify-center bg-[#EFEFEF] p-4 font-sans">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-[#EDFFFA] p-6 shadow-lg sm:p-10">
        <h1 className="text-3xl font-bold text-[#01224B] text-center">Physical Details</h1>
        <form onSubmit={handleNext}>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-black">Age</label>
              <input
                type="number"
                required
                value={age}
                onChange={e => setAge(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Gender</label>
              <select
                required
                value={gender}
                onChange={e => setGender(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
              >
                <option value="" disabled>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Height (cm)</label>
              <input
                type="number"
                required
                value={height}
                onChange={e => setHeight(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black">Weight (kg)</label>
              <input
                type="number"
                required
                value={weight}
                onChange={e => setWeight(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-black">BMI</label>
              <input
                type="text"
                value={bmi}
                readOnly
                className="mt-1 block w-full cursor-not-allowed rounded-md border-gray-300 bg-[#EFEFEF] p-3 text-gray-500"
              />
            </div>
          </div>
          <div className="mt-10 flex justify-end">
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

    

   </>
    
  );
};

export default Page1;
