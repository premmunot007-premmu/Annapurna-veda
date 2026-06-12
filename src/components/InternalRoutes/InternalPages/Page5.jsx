import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import DoshaIcon from '../DoshaIcon';
import DoshaQuestions from '../DoshaQuestion';
import { FormContext } from '../FormContext';

const Page5 = () => {
  const navigate = useNavigate();
  const { doshaAnswers, setDoshaAnswers } = useContext(FormContext);

  const handleDoshaChange = (questionId, value) => {
    setDoshaAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Check if all questions are answered
    const unanswered = DoshaQuestions.some(q => !doshaAnswers[q.id]);

    if (unanswered) {
      alert('Please answer all questions before submitting.');
      return;
    }

    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#EFEFEF] p-4 font-sans">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-[#EDFFFA] p-6 shadow-lg sm:p-10">
        <form onSubmit={handleSubmit}>
          <div className="text-center mb-8">
            <DoshaIcon />
            <h1 className="mt-4 text-xl font-semibold text-[#01224B]">Dosha Assessment</h1>
            <p className="mt-1 text-sm text-black">Discover your Ayurvedic constitution</p>
          </div>

          <div className="space-y-8">
            {DoshaQuestions.map(q => (
              <div key={q.id}>
                <p className="text-sm font-semibold text-black">{q.id}. {q.question}</p>
                <div className="mt-3 space-y-3">
                  {q.options.map(option => (
                    <label
                      key={option.type}
                      className={`flex cursor-pointer items-center rounded-lg border p-3 transition-all ${
                        doshaAnswers[q.id] === option.type
                          ? 'border-[#004BA6] bg-blue-50 ring-2 ring-[#004BA6]'
                          : 'border-gray-300 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option.type}
                        required
                        checked={doshaAnswers[q.id] === option.type}
                        onChange={() => handleDoshaChange(q.id, option.type)}
                        className="h-4 w-4 border-gray-400 text-[#004BA6] focus:ring-[#004BA6]"
                      />
                      <span
                        className={`ml-4 mr-2 rounded-md px-2 py-0.5 text-xs font-semibold ${
                          option.type === 'VATA'
                            ? 'bg-blue-100 text-blue-800'
                            : option.type === 'PITTA'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {option.type}
                      </span>
                      <span className="text-sm text-black">{option.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-between">
            <button
              type="button"
              onClick={() => navigate('/page4')}
              className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-black font-semibold hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              type="submit"
              className="rounded-lg bg-[#004BA6] px-5 py-2.5 text-white font-semibold hover:bg-[#01224B]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page5;
