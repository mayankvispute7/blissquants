import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/ui/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import StatsAndLogos from './components/sections/StatsAndLogos';
import CoreOfferings from './components/sections/CoreOfferings';
import Footer from './components/layout/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen 
            key="loading-screen" 
            onComplete={() => setIsLoading(false)} 
          />
        )}
      </AnimatePresence>

      <div className="min-h-screen relative bg-dark">
        {!isLoading && <Navbar />}
        
        <main>
          {!isLoading && (
            <>
              <Hero />
              <Features />
              <StatsAndLogos />
              <CoreOfferings />
              {/* TrustStrip has been removed from here */}
              <Footer />
            </>
          )}
        </main>
      </div>
    </>
  );
}

export default App;