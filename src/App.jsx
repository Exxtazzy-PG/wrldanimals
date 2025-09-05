import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import WelcomeScreen from './components/WelcomeScreen.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import CatalogSection from './components/CatalogSection.jsx';
import GallerySection from './components/GallerySection.jsx';
import FactsSection from './components/FactsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import './App.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (showWelcome) {
    return <WelcomeScreen />;
  }

  return (
    <ThemeProvider>
      <ConfigProvider>
        <div className="App">
          <Header />
          <main>
            <HeroSection />
            <CatalogSection />
            <GallerySection />
            <FactsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </ConfigProvider>
    </ThemeProvider>
  );
}

export default App;