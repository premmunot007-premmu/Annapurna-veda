import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../FormContext';

const Page3 = () => {
  const navigate = useNavigate();
  const {
    medicalConditions, setMedicalConditions,
    currentMedications, setCurrentMedications,
    knownAllergies, setKnownAllergies
  } = useContext(FormContext);

  const handleCheckboxChange = (setter) => (e) => {
    const { name, checked } = e.target;
    setter(prev => ({ ...prev, [name]: checked }));
  };

  const handleNext = (e) => {
    e.preventDefault(); // browser checks required fields
    navigate('/page4');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EFEFEF] p-4 font-sans">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-[#EDFFFA] p-6 shadow-lg sm:p-10">
        <h1 className="text-3xl font-bold text-[#01224B] text-center">Medical Information</h1>

        <form onSubmit={handleNext} className="mt-6 space-y-4">
          <div>
            <p className="text-sm font-medium text-black mb-2">Medical Conditions</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(medicalConditions).map(key => (
                <label key={key} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name={key}
                    checked={medicalConditions[key]}
                    onChange={handleCheckboxChange(setMedicalConditions)}
                    className="h-4 w-4 rounded border-gray-300 text-[#004BA6] focus:ring-[#004BA6]"
                  />
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Current Medications</label>
            <input
              type="text"
              required
              value={currentMedications}
              onChange={e => setCurrentMedications(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 bg-white p-3 shadow-sm focus:border-[#004BA6] focus:ring focus:ring-[#004BA6]"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-black mb-2">Known Allergies</p>
            <div className="grid grid-cols-2 gap-2">
              {Object.keys(knownAllergies).map(key => (
                <label key={key} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name={key}
                    checked={knownAllergies[key]}
                    onChange={handleCheckboxChange(setKnownAllergies)}
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
              onClick={() => navigate('/page2')}
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

export default Page3;
