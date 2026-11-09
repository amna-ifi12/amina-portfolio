import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Achievements } from './components/Achievements';
import { Portfolio } from './components/Portfolio';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Toolkit } from './components/Toolkit';
import { StrategyMatcher } from './components/StrategyMatcher';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CuteCursorSparkles } from './components/CuteCursorSparkles';
import { ServiceId } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceId | 'general-inquiry'>('meta-ads');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  const handleSelectService = (serviceId: ServiceId | 'general-inquiry') => {
    setSelectedService(serviceId);
  };

  const handleDiscussProject = (projectId: string) => {
    // Map project to appropriate service and preset message
    if (projectId === 'project-pinterest') {
      setSelectedService('pinterest-management');
      setPrefilledMessage("Hi Amina! I'd like to discuss Pinterest organic management and SEO growth for my brand.");
    } else if (projectId === 'project-meta-ads') {
      setSelectedService('meta-ads');
      setPrefilledMessage("Hi Amina! I'm interested in testing Meta Ads (Facebook/Instagram) for our upcoming campaigns.");
    } else if (projectId === 'project-google-ads') {
      setSelectedService('google-ads');
      setPrefilledMessage("Hi Amina! I'd like to discuss setting up high-intent Google Search advertising.");
    } else if (projectId === 'project-amazon-affiliate') {
      setSelectedService('affiliate-marketing');
      setPrefilledMessage("Hi Amina! We'd love to collaborate on Amazon affiliate marketing and product curation.");
    } else if (projectId === 'project-shein-affiliate') {
      setSelectedService('affiliate-marketing');
      setPrefilledMessage("Hi Amina! I'm reaching out regarding fashion/lifestyle affiliate promotion and lookbook strategy.");
    }

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const navOffset = 80;
      const pos = contactEl.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleApplyStrategyPlan = (serviceId: ServiceId, message: string) => {
    setSelectedService(serviceId);
    setPrefilledMessage(message);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#49334F] font-sans selection:bg-[#F8C8DC] selection:text-[#49334F] relative">
      {/* Interactive Cursor Sparkles (Gentle & Accessible) */}
      <CuteCursorSparkles />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 1 & 2: Hero */}
        <Hero onSelectService={handleSelectService} />

        {/* Section 3: About Me */}
        <About />

        {/* Section 4: My Expertise / Services */}
        <Services onSelectService={handleSelectService} />

        {/* Section 5: My Achievements */}
        <Achievements />

        {/* Section 6: My Portfolio / Selected Work */}
        <Portfolio onDiscussProject={handleDiscussProject} />

        {/* Section 7: Why Work With Me? */}
        <WhyWorkWithMe />

        {/* Section 8: Tools & Technologies */}
        <Toolkit />

        {/* Interactive Scope & Strategy Blueprint Matcher */}
        <StrategyMatcher onApplyPlan={handleApplyStrategyPlan} />

        {/* Section 9: Contact / Let's Collaborate */}
        <Contact 
          selectedService={selectedService} 
          prefilledMessage={prefilledMessage}
          onSelectService={handleSelectService}
        />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}
