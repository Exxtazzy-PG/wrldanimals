import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Globe, Heart } from 'lucide-react';
import './FactsSection.css';

const FactsSection = () => {
  const factsData = [
    {
      id: 1,
      icon: Lightbulb,
      title: 'Удивительный интеллект',
      fact: 'Дельфины могут узнавать себя в зеркале и имеют собственные имена - уникальные звуковые сигналы.',
      color: '#3b82f6'
    },
    {
      id: 2,
      icon: Zap,
      title: 'Невероятная скорость',
      fact: 'Гепард может разогнаться до 120 км/ч всего за 3 секунды, что быстрее большинства спортивных автомобилей.',
      color: '#f59e0b'
    },
    {
      id: 3,
      icon: Globe,
      title: 'Миграционные рекорды',
      fact: 'Арктическая крачка совершает самую длинную миграцию - 70,000 км в год от Арктики до Антарктики.',
      color: '#10b981'
    },
    {
      id: 4,
      icon: Heart,
      title: 'Эмоциональная связь',
      fact: 'Слоны могут горевать по умершим сородичам и возвращаться к местам их гибели спустя годы.',
      color: '#ef4444'
    },
    {
      id: 5,
      icon: Lightbulb,
      title: 'Суперспособности',
      fact: 'Акулы могут чувствовать электрические поля других живых существ и ориентироваться по магнитному полю Земли.',
      color: '#8b5cf6'
    },
    {
      id: 6,
      icon: Zap,
      title: 'Экстремальная выносливость',
      fact: 'Императорские пингвины могут нырять на глубину до 500 метров и задерживать дыхание на 20 минут.',
      color: '#06b6d4'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="facts" className="section facts-section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg">Удивительные факты</h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Невероятные способности и особенности животного мира
          </p>
        </motion.div>

        <motion.div
          className="facts-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {factsData.map((fact) => (
            <motion.div
              key={fact.id}
              className="fact-card"
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="fact-icon" style={{ backgroundColor: fact.color }}>
                <fact.icon size={24} color="white" />
              </div>
              
              <div className="fact-content">
                <h3 className="fact-title">{fact.title}</h3>
                <p className="fact-text">{fact.fact}</p>
              </div>
              
              <div className="fact-decoration" style={{ backgroundColor: fact.color }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FactsSection;