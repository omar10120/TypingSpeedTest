'use client';

import { motion } from 'framer-motion';

export default function About() {
  const features = [
    {
      title: "Modern Design",
      description: "Clean, intuitive interface with smooth animations and a contemporary aesthetic",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      title: "Real-time Analysis",
      description: "Instant feedback on typing speed, accuracy, and error patterns",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Customizable Tests",
      description: "Multiple test durations and difficulty levels to suit your needs",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-center animate-gradient"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1 }}
          >
            About TypeMaster
          </motion.h1>

          <motion.div
            className="prose prose-lg dark:prose-invert mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
              TypeMaster is a modern typing test platform designed to help you improve your typing speed and accuracy.
              Built with the latest web technologies, it provides an engaging and effective way to enhance your typing skills.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index + 0.7 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-purple-500/10 dark:bg-purple-500/20 rounded-lg mr-4">
                    <div className="text-purple-500">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="glass-container p-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index + 1 }}
                >
                  <span className="font-medium text-gray-800 dark:text-gray-200">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Ready to improve your typing skills?
            </p>
            <motion.a
              href="/practice"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Practicing
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
