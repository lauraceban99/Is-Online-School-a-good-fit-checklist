import React from 'react';

interface StartScreenProps {
    onStart: () => void;
}

const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
            <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-4xl font-bold text-aia-blue text-center mb-4">
                    Is Online School Right for Your Family?
                </h1>
                <p className="text-center text-lg text-gray-600 mb-8">
                    Answer 7 quick questions to see if a flexible learning environment is the right fit for your child.
                </p>

                <ul className="space-y-4 mb-10 text-left">
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="text-gray-700">Get a <span className="font-semibold">personalized recommendation</span> based on your answers.</span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="text-gray-700">Discover if online learning matches your child's <span className="font-semibold">unique needs and goals.</span></span>
                    </li>
                    <li className="flex items-start">
                        <CheckIcon />
                        <span className="text-gray-700">Takes less than <span className="font-semibold">2 minutes</span> to complete.</span>
                    </li>
                </ul>

                <div className="text-center">
                    <button
                        onClick={onStart}
                        className="bg-aia-gold text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-md"
                    >
                        Start the Checklist &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartScreen;