import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="animal-silhouette silhouette-1">🦁</div>
        <div className="animal-silhouette silhouette-2">🐘</div>
        <div className="animal-silhouette silhouette-3">🦅</div>
        <div className="animal-silhouette silhouette-4">🐺</div>
        <div className="animal-silhouette silhouette-5">🦋</div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-logo" variants={itemVariants}>
            <div className="logo-circle">
              <span className="logo-symbol">🌍</span>
            </div>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Мир Животных
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Удивительная планета дикой природы
          </motion.p>

          <motion.p className="hero-description" variants={itemVariants}>
            Откройте для себя невероятное разнообразие животного мира. 
            Изучайте, восхищайтесь и узнавайте удивительные факты о наших 
            соседях по планете.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#catalog" className="btn btn-primary">
              Исследовать каталог
            </a>
            <a href="#gallery" className="btn btn-secondary">
              Смотреть галерею
            </a>
          </motion.div>

          <motion.div 
            className="scroll-indicator"
            variants={itemVariants}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;