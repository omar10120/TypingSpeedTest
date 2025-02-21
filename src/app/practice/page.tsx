'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TypingTest from '@/components/TypingTest';
import TimeSelector from '@/components/TimeSelector';

export default function Practice() {
  const [selectedTime, setSelectedTime] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.header 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            Test Your Speed
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Test your typing speed and accuracy with style
          </motion.p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <TimeSelector 
            selectedTime={selectedTime} 
            onTimeChange={setSelectedTime} 
          />
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <TypingTest duration={selectedTime * 60} />
        </motion.div>
      </div>
    </div>
  );
}
