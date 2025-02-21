'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 pt-20">
        <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1
              className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
            >
              Master Your Typing Speed
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Improve your typing speed and accuracy with our modern, interactive typing tests.
              Track your progress and compete with others in real-time.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/practice">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Get Started
                </motion.button>
              </Link>
              <Link href="/leaderboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  View Leaderboard
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="feature-card">
                <div className="text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
                  Real-time Feedback
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Get instant feedback on your typing speed, accuracy, and mistakes
                </p>
              </div>
              <div className="feature-card">
                <div className="text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
                  Multiple Tests
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose from various test durations to match your practice needs
                </p>
              </div>
              <div className="feature-card">
                <div className="text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
                  Track Progress
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Monitor your improvement over time with detailed statistics
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
