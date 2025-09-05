import React from 'react';
import { motion } from 'framer-motion';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <div className="welcome-screen">
      <motion.div 
        className="welcome-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="welcome-logo"
          variants={logoVariants}
        >
          🦁
        </motion.div>
        
        <motion.h1 
          className="welcome-title"
          variants={textVariants}
        >
          Welcome to
        </motion.h1>
        
        <motion.h2 
          className="welcome-subtitle"
          variants={textVariants}
        >
          Animals Website
        </motion.h2>
        
        <motion.div 
          className="welcome-loader"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 2 }}
        />
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;