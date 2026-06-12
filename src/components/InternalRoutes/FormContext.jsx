import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  // Step 1
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const [bmi, setBmi] = useState('');

  // Step 2
  const [activityLevel, setActivityLevel] = useState('');
  const [sleepHours, setSleepHours] = useState(8);
  const [bedtime, setBedtime] = useState('22:00');
  const [wakeTime, setWakeTime] = useState('06:00');
  const [stressLevel, setStressLevel] = useState(3);
  const [digestionPatterns, setDigestionPatterns] = useState({
    regularBowelMovements: false,
    bloating: false,
    gas: false,
    acidReflux: false,
    constipation: false,
    looseStools: false,
  });

  // Step 3
  const [medicalConditions, setMedicalConditions] = useState({
    diabetes: false, hypertension: false,
    heartDisease: false, thyroid: false,
    pcos: false, arthritis: false,
    anxiety: false, depression: false,
    ibs: false, allergies: false,
  });
  const [currentMedications, setCurrentMedications] = useState('');
  const [knownAllergies, setKnownAllergies] = useState({
    dairy: false, gluten: false,
    nuts: false, soy: false,
    eggs: false, fish: false,
    shellfish: false, wheat: false,
  });

  // Step 4
  const [dietaryRestrictions, setDietaryRestrictions] = useState({
    vegetarian: false, vegan: false,
    glutenFree: false, dairyFree: false,
    lowCarb: false, keto: false,
    paleo: false, jain: false,
  });
  const [eatingSchedule, setEatingSchedule] = useState('');
  const [favoriteFoods, setFavoriteFoods] = useState('');
  const [foodsYouDislike, setFoodsYouDislike] = useState('');

  // Step 5
  const [doshaAnswers, setDoshaAnswers] = useState({});

  return (
    <FormContext.Provider value={{
      // Step 1
      age, setAge, gender, setGender, height, setHeight, weight, setWeight, bmi, setBmi,
      // Step 2
      activityLevel, setActivityLevel, sleepHours, setSleepHours, bedtime, setBedtime,
      wakeTime, setWakeTime, stressLevel, setStressLevel, digestionPatterns, setDigestionPatterns,
      // Step 3
      medicalConditions, setMedicalConditions, currentMedications, setCurrentMedications,
      knownAllergies, setKnownAllergies,
      // Step 4
      dietaryRestrictions, setDietaryRestrictions, eatingSchedule, setEatingSchedule,
      favoriteFoods, setFavoriteFoods, foodsYouDislike, setFoodsYouDislike,
      // Step 5
      doshaAnswers, setDoshaAnswers,
    }}>
      {children}
    </FormContext.Provider>
  );
};
