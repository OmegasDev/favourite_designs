import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import ToolsProjects from './components/ToolsProjects';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Team from './pages/Team';
import UseCases from './pages/UseCases';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AgentDetails from './pages/AgentDetails';
import ChatWithSalma from './pages/ChatWithSalma';
import ChatBubble from './components/ChatBubble';
import AgentsMarketplace from './pages/AgentsMarketplace';
import About from './pages/About';
import PortfolioPage from './pages/Portfolio';
import Partnership from './pages/Partnership';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <WhatWeDo />
              <HowItWorks />
              <Portfolio />
              <ToolsProjects />
              <FinalCTA />
            </>
          } />
          <Route path="/team" element={<Team />} />
          <Route path="/use-cases" element={<UseCases />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agent/:id" element={<AgentDetails />} />
          <Route path="/chat" element={<ChatWithSalma />} />
          <Route path="/agents" element={<AgentsMarketplace />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/partnership" element={<Partnership />} />
        </Routes>
        <ChatBubble />
        <Footer />
      </div>
    </Router>
  );
}

export default App;