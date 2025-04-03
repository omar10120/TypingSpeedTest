'use client';

import { useState, useEffect, useCallback } from 'react';
import { calculateWPM, calculateAccuracy } from '@/utils/calculations';
import { motion } from 'framer-motion';

interface TypingTestProps {
  duration?: number;
}

export default function TypingTest({ duration = 60 }: TypingTestProps) {
  
  const [currentWord, setCurrentWord] = useState('');
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWPM] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [wordList, setWordList] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [totalTyped, setTotalTyped] = useState(0);
  const [isCurrentWordWrong, setIsCurrentWordWrong] = useState(false);
  const [shakeEffect, setShakeEffect] = useState(false);

  const commonWords = [
    'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I',
    'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at',
    'this', 'but', 'his', 'by', 'from', 'they', 'we', 'say', 'her', 'she',
    'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their', 'what'
  ];

  const generateWords = useCallback(() => {
    const words: string[] = [];
    for (let i = 0; i < 200; i++) {
      const randomIndex = Math.floor(Math.random() * commonWords.length);
      words.push(commonWords[randomIndex]);
    }
    return words;
  }, []);

  useEffect(() => {
    setWordList(generateWords());
  }, [generateWords]);

  useEffect(() => {
    // Reset the test when duration changes
    setTimeLeft(duration);
    setIsActive(false);
    setCurrentWord('');
    setCurrentWordIndex(0);
    setMistakes(0);
    setTotalTyped(0);
    setWPM(0);
    setAccuracy(100);
    setWordList(generateWords());
    setIsCurrentWordWrong(false);
  }, [duration, generateWords]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const correctWord = wordList[currentWordIndex];
    
    if (!isActive && value.length === 1) {
      setIsActive(true);
    }

    // Check if current typing is wrong
    const isWrong = !correctWord.startsWith(value);
    setIsCurrentWordWrong(isWrong);

    if (isWrong && !shakeEffect) {
      setShakeEffect(true);
      setTimeout(() => setShakeEffect(false), 500);
    }

    if (value.endsWith(' ')) {
      const typedWord = value.trim();
      
      setTotalTyped(prev => prev + 1);
      if (typedWord !== correctWord) {
        setMistakes(prev => prev + 1);
      }

      setCurrentWord('');
      setCurrentWordIndex(prev => prev + 1);
      setIsCurrentWordWrong(false);
      
      const elapsedMinutes = (duration - timeLeft) / 60;
      const newWPM = calculateWPM(currentWordIndex + 1, elapsedMinutes);
      const newAccuracy = calculateAccuracy(mistakes, totalTyped + 1);
      
      setWPM(newWPM);
      setAccuracy(newAccuracy);
    } else {
      setCurrentWord(value);
    }
  };

  const restartTest = () => {
    setTimeLeft(duration);
    setIsActive(false);
    setCurrentWord('');
    setCurrentWordIndex(0);
    setMistakes(0);
    setTotalTyped(0);
    setWPM(0);
    setAccuracy(100);
    setWordList(generateWords());
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto p-8 space-y-8"
    >
      <div className="flex justify-between items-center mb-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-2xl backdrop-blur-sm">
        <motion.div 
          className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          animate={{ scale: timeLeft <= 10 ? [1, 1.1, 1] : 1 }}
          transition={{ repeat: timeLeft <= 10 ? Infinity : 0, duration: 1 }}
        >
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
        </motion.div>
        <div className="flex gap-8">
          <motion.div 
            className="stat-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 px-2 font-bold">WPM</span>
            <span className="text-2xl font-bold text-purple-500">{wpm}</span>
          </motion.div>
          <motion.div 
            className="stat-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 px-2 font-bold">Accuracy</span>
            <span className="text-2xl font-bold text-pink-500">{accuracy}%</span>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className={`relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 ${
          isCurrentWordWrong ? 'border-red-500 dark:border-red-500' : ''
        }`}
        animate={{ 
          boxShadow: isActive 
            ? isCurrentWordWrong 
              ? '0 0 20px rgba(239, 68, 68, 0.2)' 
              : '0 0 20px rgba(168, 85, 247, 0.2)' 
            : '0 0 0 rgba(168, 85, 247, 0)'
        }}
      >
        <div className="text-xl leading-relaxed mb-4">
          {wordList.slice(currentWordIndex, currentWordIndex + 10).map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`mr-3 ${
                index === 0 
                  ? `font-medium border-b-2 ${
                      isCurrentWordWrong 
                        ? 'text-red-500 border-red-500' 
                        : 'text-purple-500 border-purple-500'
                    }` 
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          animate={shakeEffect ? { x: [-2, 2, -2, 2, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <input
            type="text"
            value={currentWord}
            onChange={handleInput}
            className={`w-full p-6 text-lg rounded-xl focus:outline-none focus:ring-2 
                     bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm
                     transition-all duration-300 ease-in-out ${
                       isCurrentWordWrong 
                         ? 'focus:ring-red-500 border-red-500 text-red-500' 
                         : 'focus:ring-purple-500 dark:focus:ring-pink-500'
                     }`}
            placeholder={isActive ? '' : 'Type to start...'}
            disabled={timeLeft === 0}
          />
        </motion.div>
      </motion.div>

      {timeLeft === 0 && (
        <motion.div 
          className="text-center py-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <div className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Test Complete!
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={restartTest}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl
                     hover:from-purple-600 hover:to-pink-600 transition-all duration-300 ease-in-out
                     shadow-lg hover:shadow-xl"
          >
            Try Again
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}
