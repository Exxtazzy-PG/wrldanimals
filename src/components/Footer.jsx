import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Twitter, Instagram, Youtube, Facebook, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, url: 'https://twitter.com/animalsworld', label: 'Twitter' },
    { icon: Instagram, url: 'https://instagram.com/animalsworld', label: 'Instagram' },
    { icon: Youtube, url: 'https://youtube.com/animalsworld', label: 'YouTube' },
    { icon: Facebook, url: 'https://facebook.com/animalsworld', label: 'Facebook' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@animalsworld.com' },
    { icon: Phone, text: '+7 (495) 123-45-67' },
    { icon: MapPin, text: 'Москва, Россия' }
  ];

  const quickLinks = [
    { label: 'О проекте', href: '#' },
    { label: 'Каталог животных', href: '#catalog' },
    { label: 'Галерея', href: '#gallery' },
    { label: 'Интересные факты', href: '#facts' },
    { label: 'Контакты', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <span className="footer-logo-icon">🦁</span>
              <span className="footer-logo-text">Animals World</span>
            </div>
            <p className="footer-description">
              Исследуйте удивительный мир животных вместе с нами. 
              Узнавайте новое, делитесь открытиями и помогайте сохранить 
              природное разнообразие нашей планеты.
            </p>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="social-link-footer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Быстрые ссылки</h3>
            <div className="quick-links">
              {quickLinks.map((link, index) => (
                <a key={index} href={link.href} className="quick-link">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Контакты</h3>
            <div className="contact-list-footer">
              {contactInfo.map((contact, index) => (
                <div key={index} className="contact-item-footer">
                  <contact.icon size={18} />
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
            
            <div className="newsletter">
              <h4 className="newsletter-title">Подписка на новости</h4>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Ваш email"
                  className="newsletter-input"
                />
                <button className="newsletter-button">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="copyright">
            © 2024 Animals World. Все права защищены.
          </p>
          <div className="footer-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;