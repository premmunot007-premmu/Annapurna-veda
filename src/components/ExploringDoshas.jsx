import React from 'react';
import z from '../assets/PhotoGallery/vatta-removebg-preview.png'
import x from '../assets/PhotoGallery/pitta-removebg-preview.png'
import c from  '../assets/PhotoGallery/kapha-removebg-preview.png'

const ExploarationDoshas = () => {
    // Data for the Dosha cards, structured for easy mapping.
    const doshasData = [
        {
            name: 'VATTA',
            imageSrc: `${z}`,
            content: {
                'Elements': 'Air + Ether (Space)',
                'Qualities': 'Dry, light, cold, rough, mobile, and subtle.',
                'Functions': [
                    'Governs movement in the body (breathing, blinking, muscle and tissue movement, heartbeat, communication of nerves).',
                    'Responsible for creativity, flexibility, and quick thinking.'
                ],
                'Physical Traits (when balanced)': 'Slim body frame, energetic, quick to learn.',
                'Imbalance Signs': 'Anxiety, insomnia, constipation, dryness of skin, restlessness, overthinking.',
                'Balancing Tips': 'Warm, grounding foods; regular routine; calming yoga and meditation; oil massages.'
            }
        },
        {
            name: 'Pitta',
            imageSrc: `${x}`,
            content: {
                'Elements': 'Fire + Water',
                'Qualities': 'Hot, sharp, light, oily, intense, and spreading.',
                'Functions': [
                    'Governs digestion, metabolism, body temperature, and vision.',
                    'Responsible for intelligence, courage, and decision-making.'
                ],
                'Physical Traits (when balanced)': 'Medium build, sharp intellect, strong appetite, leadership qualities.',
                'Imbalance Signs': 'Irritability, anger, inflammation, heartburn, ulcers, excessive sweating.',
                'Balancing Tips': 'Cooling foods (sweet, bitter, astringent tastes), staying hydrated, avoiding excessive heat, practicing calming exercises like swimming or moonlight walks.'
            }
        },
        {
            name: 'Kapha',
            imageSrc: `${c}`,
            content: {
                'Elements': 'Earth + Water',
                'Qualities': 'Heavy, slow, steady, smooth, cool, and oily.',
                'Functions': [
                    'Governs structure, stability, lubrication, and immunity in the body.',
                    'Provides calmness, patience, and strength.'
                ],
                'Physical Traits (when balanced)': 'Strong body, good stamina, compassionate nature, grounded personality.',
                'Imbalance Signs': 'Weight gain, lethargy, depression, congestion, allergies, excessive sleep.',
                'Balancing Tips': 'Light, warm, and spicy foods; active lifestyle; stimulating yoga and pranayama; avoiding overeating and excessive rest.'
            }
        }
    ];

    // Sub-component for rendering a single section within a card
    const InfoSection = ({ title, text }) => {
        const isList = Array.isArray(text);
        return (
            <div>
                <p className="text-gray-800">
                    <span className="font-semibold">{title}:</span>{' '}
                    {!isList && text}
                </p>
                {isList && (
                    <ul className="list-disc list-inside pl-2 mt-1 space-y-1">
                        {text.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                )}
            </div>
        );
    };

    return (
        <div className="bg-[#eef2f0] min-h-screen p-4 sm:p-8 font-serif">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Exploring Doshas</h1>
                
                <div className="space-y-8">
                    {doshasData.map((dosha) => (
                        <div 
                            key={dosha.name} 
                            className="bg-white rounded-lg border border-gray-300 shadow-md p-6 flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]"
                        >
                            {/* Image Section */}
                            <div className="flex-shrink-0 text-center">
                                <img 
                                    src={dosha.imageSrc} 
                                    // alt={${dosha.name} Dosha} 
                                    alt = "I am great Doshas"
                                    className="w-36 h-36 rounded-full border-4 border-gray-200 object-cover"
                                />
                                <p className="mt-2 font-bold text-lg text-gray-700">{dosha.name.toUpperCase()}</p>
                            </div>

                            {/* Details Section */}
                            <div className="flex-grow text-sm text-gray-600 leading-relaxed space-y-3">
                                {Object.entries(dosha.content).map(([title, text]) => (
                                    <InfoSection key={title} title={title} text={text} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExploarationDoshas;