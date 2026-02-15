
import React from 'react';
import type { Question } from '../types';
import { Bucket } from '../types';

interface QuizScreenProps {
  question: Question;
  onAnswer: (buckets: Bucket[]) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ question, onAnswer }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 animate-fadeIn">
      <div className="w-full max-w-2xl text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-white mb-12 leading-tight tracking-tight px-4">{question.text}</h2>
        <div className="grid grid-cols-1 gap-4 px-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => onAnswer(answer.buckets)}
              className="bg-white/5 backdrop-blur-sm text-white/90 font-medium text-lg p-6 rounded-2xl border border-white/10 hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold transition-all duration-300 transform hover:scale-[1.02] w-full text-left flex items-center group shadow-lg"
            >
              <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mr-4 group-hover:border-brand-gold transition-colors text-sm font-bold bg-white/5">
                {String.fromCharCode(65 + index)}
              </span>
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
