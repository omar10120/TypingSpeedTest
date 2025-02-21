'use client';

import { motion } from 'framer-motion';

interface TimeSelectorProps {
  selectedTime: number;
  onTimeChange: (time: number) => void;
}

export default function TimeSelector({ selectedTime, onTimeChange }: TimeSelectorProps) {
  const timeOptions = [1, 2, 3, 5, 10];

  return (
    <div className="flex justify-center gap-3 mb-8">
      {timeOptions.map((time) => (
        <motion.button
          key={time}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onTimeChange(time)}
          className={`px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300
            ${selectedTime === time
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
            }
          `}
        >
          {time} min
        </motion.button>
      ))}
    </div>
  );
}
