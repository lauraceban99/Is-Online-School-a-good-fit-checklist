import React, { useState, useCallback } from 'react';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import ZohoForm from './components/ZohoForm';
import StartScreen from './components/StartScreen';
import { QUIZ_QUESTIONS } from './constants';
import type { Question } from './types';

const App: React.FC = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showZohoForm, setShowZohoForm] = useState(false);
  const [answerHistory, setAnswerHistory] = useState<boolean[]>([]);

  const handleAnswer = useCallback((answeredYes: boolean) => {
    if (answeredYes) {
      setScore(prevScore => prevScore + 1);
    }
    setAnswerHistory(prev => [...prev, answeredYes]);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowZohoForm(true);
    }
  }, [currentQuestionIndex]);
  
  const handleGoBack = useCallback(() => {
      if (currentQuestionIndex > 0) {
          const lastAnswer = answerHistory[answerHistory.length - 1];
          if (lastAnswer) {
              setScore(prev => prev - 1);
          }
          setAnswerHistory(prev => prev.slice(0, -1));
          setCurrentQuestionIndex(prev => prev - 1);
      }
  }, [currentQuestionIndex, answerHistory]);

  const handleFormSuccess = () => {
    setShowZohoForm(false);
    setQuizFinished(true);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    setShowZohoForm(false);
    setAnswerHistory([]);
  };

  const renderContent = () => {
    if (quizFinished) {
      return (
        <div className="w-full max-w-2xl mx-auto">
          <ResultCard score={score} />
           <div className="text-center mt-8">
                <button
                    onClick={restartQuiz}
                    className="bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300"
                >
                    Take the Checklist Again
                </button>
            </div>
        </div>
      );
    }

    if (showZohoForm) {
        return <ZohoForm onSuccess={handleFormSuccess} />
    }
    
    if (!quizStarted) {
        return <StartScreen onStart={() => setQuizStarted(true)} />;
    }

    const currentQuestion: Question = QUIZ_QUESTIONS[currentQuestionIndex];
    return (
      <QuestionCard
        key={currentQuestion.id}
        question={currentQuestion}
        onAnswer={handleAnswer}
        onGoBack={handleGoBack}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={QUIZ_QUESTIONS.length}
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6 lg:p-8">
        <main className="w-full flex-grow flex justify-center items-center py-8">
            {renderContent()}
        </main>
    </div>
  );
};

export default App;