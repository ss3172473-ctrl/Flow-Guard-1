import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProblemSection from './components/sections/ProblemSection';
import ImpactBridge from './components/sections/ImpactBridge';
import BetaResults from './components/sections/BetaResults';
import SolutionSection from './components/sections/SolutionSection';
import SystemSection from './components/sections/SystemSection';
import ReportSection from './components/sections/ReportSection';
import SocialProofSection from './components/sections/SocialProofSection';
import ConsultationForm from './components/sections/ConsultationForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ImpactBridge />
        <BetaResults />
        <SolutionSection />
        <SystemSection />
        <ReportSection />
        <SocialProofSection />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
