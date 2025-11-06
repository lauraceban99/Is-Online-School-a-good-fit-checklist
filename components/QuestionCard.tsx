import React, { useState, useEffect } from 'react';
import type { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answeredYes: boolean) => void;
  onGoBack: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const XIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onGoBack, questionNumber, totalQuestions }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timer);
  }, [question.id]);
  
  const handleAnswerClick = (answer: boolean) => {
    setAnimate(false); 
    setTimeout(() => {
        onAnswer(answer);
    }, 300); 
  }

  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className={`transition-all duration-500 transform w-full max-w-2xl mx-auto ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-aia-blue">Question {questionNumber} of {totalQuestions}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
                className="bg-aia-gold h-2.5 rounded-full transition-all duration-500 ease-out" 
                style={{ width: `${progressPercentage}%` }}>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-aia-blue text-center mb-8 min-h-[100px] flex items-center justify-center">{question.text}</h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => handleAnswerClick(true)}
            className="flex items-center justify-center w-full sm:w-auto text-lg font-bold text-white bg-green-500 rounded-lg px-8 py-4 hover:bg-green-600 transition-transform transform hover:scale-105"
            aria-label="Yes"
          >
            <CheckIcon /> Yes
          </button>
          <button
            onClick={() => handleAnswerClick(false)}
            className="flex items-center justify-center w-full sm:w-auto text-lg font-bold text-white bg-red-500 rounded-lg px-8 py-4 hover:bg-red-600 transition-transform transform hover:scale-105"
            aria-label="No"
          >
            <XIcon /> No
          </button>
        </div>
      </div>
      <div className="text-center mt-4">
        {questionNumber > 1 && (
            <button 
                onClick={onGoBack}
                className="text-sm text-gray-500 hover:text-aia-blue hover:underline transition-colors"
            >
                &larr; Go Back
            </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;