import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import CommunityGrid from './components/CommunityGrid';
import JoinCTA from './components/JoinCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-stone-200 text-stone-900">
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <CommunityGrid />
        <JoinCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;