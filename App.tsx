
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { QUIZ_DATA, SALES_CONFIG } from './constants';
import type { QuizItem, Question } from './types';
import { Bucket } from './types';
import QuizScreen from './components/QuizScreen';
import SalesPage from './components/SalesPage';
import LoadingScreen from './components/LoadingScreen';
import ProgressBar from './components/ProgressBar';
import { trackEvent } from './utils/tracking';

declare global {
  interface Window {
    fbq: any;
  }
}

const WelcomeScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 text-white">
    <h1
      className="font-serif text-3xl md:text-5xl mb-4 opacity-0 animate-fadeIn"
      style={{ animationDelay: '300ms' }}
    >
      ¿Cuál es tu Perfil de Magnetismo?
    </h1>
    <h2
      className="font-sans text-lg md:text-xl mb-8 max-w-2xl opacity-0 animate-fadeIn text-white/80"
      style={{ animationDelay: '700ms' }}
    >
      Descubre qué está bloqueando tu Frecuencia de Reina y la clave secreta para despertar el magnetismo de Cleopatra y atraer todo lo que deseas.
    </h2>
    <button
      onClick={onStart}
      className="bg-brand-gold text-brand-purple-dark font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-brand-gold-dark transition-transform transform hover:scale-105 opacity-0 animate-fadeIn"
      style={{ animationDelay: '1100ms' }}
    >
      INICIAR EL QUIZ
    </button>
  </div>
);

const InterstitialScreen: React.FC<{ item: any; onContinue: () => void }> = ({ item, onContinue }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center animate-fadeIn">
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg border-2 border-brand-gold">
      <h3 className="font-serif text-2xl text-brand-purple-dark mb-4">{item.title}</h3>
      <p className="font-sans text-brand-purple-dark/80 mb-8">{item.text}</p>
      <button
        onClick={onContinue}
        className="bg-brand-purple text-white font-bold py-3 px-8 rounded-full text-md shadow-lg hover:bg-brand-purple-dark transition-transform transform hover:scale-105"
      >
        Continuar
      </button>
    </div>
  </div>
);

export default function App() {
  const [gameState, setGameState] = useState<'welcome' | 'quiz' | 'loading' | 'sales'>('welcome');
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [scores, setScores] = useState<Record<Bucket, number>>({
    [Bucket.Perseguidora]: 0,
    [Bucket.Bloqueada]: 0,
    [Bucket.Desconectada]: 0,
  });
  const [finalBucket, setFinalBucket] = useState<Bucket | null>(null);

  // Tracking PageView on mount
  useEffect(() => {
    trackEvent('PageView');
  }, []);

  const totalQuestions = useMemo(() => QUIZ_DATA.filter(item => item.type === 'question').length, []);
  const questionsAnswered = useMemo(() => {
    return QUIZ_DATA.slice(0, currentItemIndex).filter(item => item.type === 'question').length;
  }, [currentItemIndex]);

  const currentItem: QuizItem = QUIZ_DATA[currentItemIndex];

  const handleStartQuiz = useCallback(() => {
    trackEvent('StartQuiz');
    setGameState('quiz');
  }, []);

  const advanceToNextItem = useCallback(() => {
    if (currentItemIndex < QUIZ_DATA.length - 1) {
      setCurrentItemIndex(prev => prev + 1);
    } else {
      setGameState('loading');
    }
  }, [currentItemIndex]);
  
  const handleAnswer = useCallback((answerBuckets: Bucket[]) => {
    setScores(prevScores => {
      const newScores = { ...prevScores };
      answerBuckets.forEach(bucket => {
        newScores[bucket] += 1;
      });
      return newScores;
    });
    advanceToNextItem();
  }, [advanceToNextItem]);

  const handleContinue = useCallback(() => {
    advanceToNextItem();
  }, [advanceToNextItem]);

  const handleLoadingComplete = useCallback(() => {
    let winningBucket: Bucket = Bucket.Perseguidora;
    let maxScore = -1;

    (Object.keys(scores) as Bucket[]).forEach(bucket => {
      if (scores[bucket] > maxScore) {
        maxScore = scores[bucket];
        winningBucket = bucket;
      }
    });

    setFinalBucket(winningBucket);
    // Track Lead event when result is generated
    trackEvent('Lead', { profile: winningBucket });
    setGameState('sales');
  }, [scores]);

  const renderContent = () => {
    switch (gameState) {
      case 'welcome':
        return <WelcomeScreen onStart={handleStartQuiz} />;
      case 'quiz':
        if (currentItem.type === 'question') {
          return (
            <QuizScreen
              key={currentItemIndex}
              question={currentItem as Question}
              onAnswer={handleAnswer}
            />
          );
        }
        if (currentItem.type === 'interstitial') {
          return (
            <InterstitialScreen
              key={currentItemIndex}
              item={currentItem}
              onContinue={handleContinue}
            />
          );
        }
        return null;
      case 'loading':
        return <LoadingScreen onComplete={handleLoadingComplete} />;
      case 'sales':
        return finalBucket && <SalesPage bucket={finalBucket} config={SALES_CONFIG[finalBucket]} />;
      default:
        return <WelcomeScreen onStart={handleStartQuiz} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-brand-bg font-sans">
      {gameState === 'quiz' && <ProgressBar current={questionsAnswered} total={totalQuestions} />}
      <main className="container mx-auto max-w-3xl">
        {renderContent()}
      </main>
    </div>
  );
}
