import React from 'react';
import { motion } from 'framer-motion';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Left Panel with Title */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 p-8 hidden md:flex md:flex-col md:justify-center md:items-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-8xl font-bold mb-4"
          >
            ACETEK
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-4xl font-bold mb-8 0"
          >
            Student Management
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Right Panel with Login Form */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1  p-8 flex items-center justify-center overflow-hidden"
      >
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-3xl font-bold mb-8 "
          >

          </motion.h2>
          <LoginForm/>
        </div>
      </motion.div>

    </div>
  );
};

export default Login;
