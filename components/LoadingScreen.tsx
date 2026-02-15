
import React, { useState, useEffect } from 'react';

const loadingSteps = [
  "Analizando tu perfil energético...",
  "Cruzando datos con la frecuencia de la Reina...",
  "Calculando tu patrón de magnetismo...",
  "Armando tu diagnóstico personalizado...",
];

const CheckIcon: React.FC = () => (
    <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center animate-check">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
    </div>
);

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < loadingSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 900);
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(onComplete, 500);
      return () => clearTimeout(finalTimer);
    }
  }, [currentStep, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 text-white animate-fadeIn">
      <div className="w-full max-w-md">
        <h2 className="font-serif text-3xl mb-8 text-brand-gold">Analizando tus respuestas...</h2>
        <div className="space-y-4 text-left">
          {loadingSteps.map((step, index) => {
            const isCompleted = currentStep > index;
            const isAnalyzing = currentStep === index;

            return (
              <div
                key={index}
                className={`flex items-center space-x-4 transition-opacity duration-500 ${isCompleted || isAnalyzing ? 'opacity-100' : 'opacity-30'}`}
              >
                <div>
                  {isCompleted ? (
                    <CheckIcon />
                  ) : (
                    <div className={`w-7 h-7 border-2 ${isAnalyzing ? 'border-brand-gold' : 'border-white/20'} rounded-full flex items-center justify-center transition-colors`}>
                      {isAnalyzing && (
                         <div className="w-3 h-3 bg-brand-gold rounded-full animate-pulse"></div>
                      )}
                    </div>
                  )}
                </div>
                <p className={`text-lg font-medium transition-colors duration-500 ${isCompleted ? 'text-white' : 'text-white/60'}`}>{step}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
