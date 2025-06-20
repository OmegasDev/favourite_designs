import React, { useState, useEffect } from 'react';
import { 
  Send, 
  RefreshCw, 
  Zap, 
  Smartphone, 
  Shield, 
  Globe, 
  DollarSign, 
  Users, 
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  ArrowRight,
  Menu,
  X,
  Wallet,
  TrendingUp,
  Clock
} from 'lucide-react';
import ScrollAnimation from './components/ScrollAnimations';

function App() {
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-dark-purple text-charcoal font-inter">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-dark-purple/95 backdrop-blur-sm border-b border-vibrant-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Only Image, Larger Size */}
            <ScrollAnimation animationType="fade-right">
              <div className="flex items-center">
                <img 
                  src="/ziPay 1.png" 
                  alt="ziPay Logo" 
                  className="h-32 w-auto"
                />
              </div>
            </ScrollAnimation>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <ScrollAnimation animationType="fade-down" delay={200}>
                <a href="#about" className="text-off-white hover:text-purple transition-all duration-300 font-medium hover:scale-105">
                  About
                </a>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-down" delay={400}>
                <a href="#how-it-works" className="text-off-white hover:text-purple transition-all duration-300 font-medium hover:scale-105">
                  How It Works
                </a>
              </ScrollAnimation>
              <ScrollAnimation animationType="fade-down" delay={600}>
                <button className="bg-charcoal text-off-white px-6 py-2 rounded-full hover:bg-purple hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105">
                  Join Waitlist
                </button>
              </ScrollAnimation>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-purple p-2 hover:scale-110 transition-transform duration-200 relative z-50"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-dark-purple/98 backdrop-blur-sm border-b border-vibrant-purple/20 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <a 
              href="#about" 
              onClick={closeMobileMenu}
              className="block text-off-white hover:text-purple transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-vibrant-purple/30"
            >
              About
            </a>
            <a 
              href="#how-it-works" 
              onClick={closeMobileMenu}
              className="block text-off-white hover:text-purple transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-vibrant-purple/30"
            >
              How It Works
            </a>
            <a 
              href="#waitlist" 
              onClick={closeMobileMenu}
              className="block bg-charcoal text-off-white px-6 py-3 rounded-full hover:bg-purple hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl text-center"
            >
              Join Waitlist
            </a>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-dark-purple/20 backdrop-blur-sm z-40"
            onClick={closeMobileMenu}
          ></div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dark-purple">
        {/* Animated Background Elements with Vibrant Purple Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-vibrant-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-aqua rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <ScrollAnimation animationType="fade-right">
                <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-off-white">
                  The  <span className="text-purple text-gradient-animate">Smartest way</span>.<br />
                  To <span className="text-aqua text-gradient-animate animation-delay-1000">send</span>.<br />
                  Money <span className="text-vibrant-purple text-gradient-animate animation-delay-2000">Across</span>.<br />
                  <span className="text-purple bg-gradient-to-r from-purple via-aqua to-vibrant-purple bg-clip-text text-transparent animate-gradient">Borders</span>.
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animationType="fade-right" delay={500}>
                <p className="hero-subtitle text-xl text-slate-gray mb-8 leading-relaxed">
                Cross-border payments made simple — fast, secure, and currency-smart.
                </p>
              </ScrollAnimation>

              {/* Email Signup Form */}
              <ScrollAnimation animationType="fade-up" delay={1000}>
                <div className="max-w-md mx-auto lg:mx-0">
                  <form action="https://formsubmit.co/zipaybenew@gmail.com" method="POST" className="flex flex-col sm:flex-row gap-3">
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                    <input type="hidden" name="_subject" value="New ziPay Waitlist Signup!" />
                    
                    <div className="flex-1">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-full border border-vibrant-purple/30 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent transition-all duration-300 hover:shadow-md focus:scale-105 bg-off-white text-charcoal"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="mobile-button bg-charcoal text-off-white px-8 py-3 rounded-full hover:bg-purple hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group transform hover:scale-105"
                    >
                      Join the Waitlist
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                  
                  <p className="mobile-text text-sm text-slate-gray mt-3">
                    Launching soon. Be the first to try it.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Column - Enhanced Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <ScrollAnimation animationType="fade-left" delay={800}>
                <div className="relative">
                  {/* Phone Frame - More Realistic */}
                  <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-700 w-80 h-[640px] animate-phone-float relative">
                    {/* Phone Notch */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full z-10"></div>
                    
                    {/* Screen */}
                    <div className="bg-gradient-to-br from-purple via-vibrant-purple to-purple rounded-[2.5rem] h-full flex flex-col justify-center items-center relative overflow-hidden phone-glow">
                      {/* Status Bar */}
                      <div className="absolute top-4 left-6 right-6 flex justify-between items-center text-white text-xs z-20">
                        <span className="font-medium">9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 border border-white rounded-sm">
                            <div className="w-3 h-1 bg-white rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* App Interface */}
                      <div className="text-white text-center space-y-8 px-6 mt-8">
                        <div className="space-y-4 animate-slide-down">
                          <div className="text-sm opacity-80 font-medium">You Send</div>
                          <div className="text-3xl font-bold animate-number-change flex items-center justify-center gap-2">
                            <DollarSign className="w-6 h-6" />
                            100 USD
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                            <RefreshCw className="w-8 h-8 text-aqua animate-spin-slow" />
                          </div>
                          <div className="absolute -inset-4 border-2 border-aqua rounded-full opacity-30 animate-ping"></div>
                          <div className="absolute -inset-8 border border-white/20 rounded-full opacity-20 animate-pulse"></div>
                        </div>
                        
                        <div className="space-y-6 animate-slide-up">
                          <div className="text-sm opacity-80 font-medium">They Receive</div>
                          <div className="space-y-4">
                            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                              <div className="text-2xl font-bold animate-number-change animation-delay-1000 flex items-center justify-center gap-2">
                                ₦165,000 NGN
                              </div>
                            </div>
                            <div className="text-lg opacity-90 font-medium">or</div>
                            <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                              <div className="text-2xl font-bold animate-number-change animation-delay-2000 flex items-center justify-center gap-2">
                                <Wallet className="w-5 h-5" />
                                0.0010 BTC
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Background Elements */}
                      <div className="absolute top-8 right-6 w-20 h-20 bg-aqua/20 rounded-full animate-pulse"></div>
                      <div className="absolute bottom-12 left-6 w-12 h-12 bg-white/10 rounded-full animate-bounce-slow"></div>
                      <div className="absolute top-1/2 left-4 w-8 h-8 bg-white/5 rounded-full animate-float"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -left-6 bg-aqua text-white p-4 rounded-full shadow-lg animate-bounce-slow">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-purple text-white p-4 rounded-full shadow-lg animate-pulse-slow">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="absolute top-1/2 -right-8 bg-emerald-green text-white p-3 rounded-full shadow-lg animate-float">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-vibrant-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-off-white">How ziPay Works</h2>
              <p className="text-xl text-slate-grey max-w-2xl mx-auto">
                Simple, fast, and secure money transfers in three easy steps
              </p>
            </div>
          </ScrollAnimation>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <ScrollAnimation animationType="fade-up" delay={200}>
              <div className="text-center group bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple to-vibrant-purple rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-aqua rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Send Money</h3>
                <p className="text-slate-gray leading-relaxed">
                  Choose any currency — USD, BTC, EUR, or more. Enter the amount and recipient details.
                </p>
              </div>
            </ScrollAnimation>

            {/* Step 2 */}
            <ScrollAnimation animationType="fade-up" delay={400}>
              <div className="text-center group bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple to-vibrant-purple rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <RefreshCw className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-aqua rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse animation-delay-1000">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">We Convert It</h3>
                <p className="text-slate-gray leading-relaxed">
                  Real-time conversion to local currency using the best exchange rates available.
                </p>
              </div>
            </ScrollAnimation>

            {/* Step 3 */}
            <ScrollAnimation animationType="fade-up" delay={600}>
              <div className="text-center group bg-off-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple to-vibrant-purple rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-aqua rounded-full flex items-center justify-center text-white font-bold text-sm animate-pulse animation-delay-2000">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Receiver Gets It Instantly</h3>
                <p className="text-slate-gray leading-relaxed">
                  No delays or hassles. Money arrives in their preferred currency within seconds.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Mobile Layout - Enhanced with Animations */}
          <div className="md:hidden space-y-6">
            {/* Step 1 - Full Width */}
            <ScrollAnimation animationType="fade-right" delay={200}>
              <div className="mobile-card bg-off-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple to-vibrant-purple rounded-full flex items-center justify-center">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-aqua rounded-full flex items-center justify-center text-white font-bold text-xs">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-charcoal">Send Money</h3>
                    <p className="text-slate-gray text-sm">Choose your currency</p>
                  </div>
                </div>
                <p className="text-slate-gray leading-relaxed mobile-text">
                  Choose any currency — USD, BTC, EUR, or more. Enter the amount and recipient details.
                </p>
              </div>
            </ScrollAnimation>

            {/* Steps 2 & 3 - Side by Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Step 2 */}
              <ScrollAnimation animationType="fade-left" delay={400}>
                <div className="mobile-card bg-off-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple to-vibrant-purple rounded-full flex items-center justify-center mx-auto">
                      <RefreshCw className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-aqua rounded-full flex items-center justify-center text-white font-bold text-xs">
                      2
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-center text-charcoal">We Convert It</h3>
                  <p className="text-slate-gray text-sm leading-relaxed text-center mobile-text">
                    Real-time conversion using the best exchange rates.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Step 3 */}
              <ScrollAnimation animationType="fade-right" delay={600}>
                <div className="mobile-card bg-off-white rounded-2xl p-6 shadow-lg">
                  <div className="relative mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple to-vibrant-purple rounded-full flex items-center justify-center mx-auto">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-aqua rounded-full flex items-center justify-center text-white font-bold text-xs">
                      3
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-center text-charcoal">Instant Delivery</h3>
                  <p className="text-slate-gray text-sm leading-relaxed text-center mobile-text">
                    Money arrives in seconds, no delays or hassles.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ziPay Section */}
      <section className="py-20 bg-dark-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animationType="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-off-white">Built for Africa. Ready for the World.</h2>
              <p className="text-xl text-slate-gray max-w-2xl mx-auto">
                Everything you need for seamless cross-border payments
              </p>
            </div>
          </ScrollAnimation>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <ScrollAnimation animationType="fade-up" delay={100}>
              <div className="bg-off-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple to-vibrant-purple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Real-time Currency Conversion</h3>
                <p className="text-slate-gray">
                  Get the best exchange rates with instant conversion between fiat and crypto currencies.
                </p>
              </div>
            </ScrollAnimation>

            {/* Feature 2 */}
            <ScrollAnimation animationType="fade-up" delay={200}>
              <div className="bg-off-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-aqua to-teal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Fiat & Crypto Supported</h3>
                <p className="text-slate-gray">
                  Send USD, EUR, BTC, ETH and receive in Naira, Cedis, or any supported local currency.
                </p>
              </div>
            </ScrollAnimation>

            {/* Feature 3 */}
            <ScrollAnimation animationType="fade-up" delay={300}>
              <div className="bg-off-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple to-vibrant-purple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">No Banks or POS Needed</h3>
                <p className="text-slate-gray">
                  Skip traditional banking hassles. Everything happens through our secure platform.
                </p>
              </div>
            </ScrollAnimation>

            {/* Feature 4 */}
            <ScrollAnimation animationType="fade-up" delay={400}>
              <div className="bg-off-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-aqua to-teal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Secure Internal Wallets</h3>
                <p className="text-slate-gray">
                  Bank-grade security with encrypted wallets and multi-factor authentication.
                </p>
              </div>
            </ScrollAnimation>

            {/* Feature 5 */}
            <ScrollAnimation animationType="fade-up" delay={500}>
              <div className="bg-off-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-purple to-vibrant-purple rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Easy Withdrawals</h3>
                <p className="text-slate-gray">
                  Withdraw to local bank accounts, mobile money, or crypto wallets through trusted partners.
                </p>
              </div>
            </ScrollAnimation>

            {/* Feature 6 */}
            <ScrollAnimation animationType="fade-up" delay={600}>
              <div className="bg-off-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-br from-aqua to-teal rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Made for Everyone</h3>
                <p className="text-slate-gray">
                  Perfect for freelancers, businesses, and everyday people sending money across borders.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          {/* Mobile Layout - Enhanced with Animations */}
          <div className="md:hidden space-y-6">
            {/* Row 1: Large Feature Card */}
            <ScrollAnimation animationType="fade-up" delay={100}>
              <div className="mobile-card bg-off-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple to-vibrant-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-charcoal">Real-time Currency Conversion</h3>
                    <p className="text-slate-gray text-sm leading-relaxed mobile-text">
                      Get the best exchange rates with instant conversion between fiat and crypto currencies.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Row 2: Two Medium Cards */}
            <div className="grid grid-cols-2 gap-4">
              <ScrollAnimation animationType="fade-left" delay={200}>
                <div className="mobile-card bg-off-white p-4 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-aqua to-teal rounded-lg flex items-center justify-center mb-3">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2 text-charcoal">Fiat & Crypto</h3>
                  <p className="text-slate-gray text-xs leading-relaxed mobile-text">
                    Send USD, BTC, ETH and receive in local currency.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animationType="fade-right" delay={300}>
                <div className="mobile-card bg-off-white p-4 rounded-2xl shadow-sm">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple to-vibrant-purple rounded-lg flex items-center justify-center mb-3">
                    <Smartphone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2 text-charcoal">No Banks Needed</h3>
                  <p className="text-slate-gray text-xs leading-relaxed mobile-text">
                    Skip banking hassles with our secure platform.
                  </p>
                </div>
              </ScrollAnimation>
            </div>

            {/* Row 3: Three Small Cards */}
            <div className="grid grid-cols-3 gap-3">
              <ScrollAnimation animationType="fade-up" delay={500}>
                <div className="bg-off-white p-3 rounded-xl shadow-sm text-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-aqua to-teal rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xs font-semibold mb-1 text-charcoal">Secure</h3>
                  <p className="text-slate-gray text-xs mobile-text">Bank-grade <br /> security</p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animationType="fade-up" delay={700}>
                <div className="bg-off-white p-3 rounded-xl shadow-sm text-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple to-vibrant-purple rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xs font-semibold mb-1 text-charcoal">Easy</h3>
                  <p className="text-slate-gray text-xs mobile-text">Simple withdrawals</p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animationType="fade-up" delay={600}>
                <div className="bg-off-white p-3 rounded-xl shadow-sm text-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-aqua to-teal rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xs font-semibold mb-1 text-charcoal">For All</h3>
                  <p className="text-slate-gray text-xs mobile-text">Everyone can use</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Second CTA Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-r from-purple via-vibrant-purple to-purple relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-aqua rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-10 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation animationType="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-off-white mb-6">
              Be one of the first to experience the future of payments across Africa.
            </h2>
          </ScrollAnimation>
          
          <ScrollAnimation animationType="fade-up" delay={300}>
            <p className="text-xl text-off-white mb-12 leading-relaxed">
              Join thousands of forward-thinking individuals and businesses already on our waitlist.
            </p>
          </ScrollAnimation>

          {/* Email Signup Form */}
          <ScrollAnimation animationType="fade-up" delay={600}>
            <div className="max-w-md mx-auto">
              <form action="https://formsubmit.co/zipaybenew@gmail.com" method="POST" className="flex flex-col sm:flex-row gap-3">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                <input type="hidden" name="_subject" value="New ziPay Waitlist Signup - CTA Section!" />
                
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={email2}
                    onChange={(e) => setEmail2(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-aqua transition-all duration-300 hover:shadow-md focus:scale-105 bg-off-white text-charcoal"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mobile-button bg-charcoal text-off-white px-8 py-3 rounded-full hover:bg-aqua hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group transform hover:scale-105"
                >
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              
              <p className="text-off-white text-sm mt-4 mobile-text">
                We'll notify you when ziPay is live.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-purple text-off-white py-12 border-t border-vibrant-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Logo and Description */}
            <ScrollAnimation animationType="fade-right">
              <div>
                <div className="flex items-center mb-4">
                  <img 
                    src="/ziPay 1.png" 
                    alt="ziPay Logo" 
                    className="h-40 w-50 object-contain"
                  />
                </div>
                <p className="text-slate-gray text-sm mobile-text">
                  The future of cross-border payments for Africa and beyond.
                </p>
              </div>
            </ScrollAnimation>

            {/* Links */}
            <ScrollAnimation animationType="fade-up" delay={200}>
              <div className="text-center">
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <a href="#about" className="text-slate-gray hover:text-off-white transition-all duration-300 hover:scale-105">
                    About ziPay
                  </a>
                  <a href="#privacy" className="text-slate-gray hover:text-off-white transition-all duration-300 hover:scale-105">
                    Privacy Policy
                  </a>
                  <a href="#terms" className="text-slate-gray hover:text-off-white transition-all duration-300 hover:scale-105">
                    Terms of Use
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            {/* Social Media */}
            <ScrollAnimation animationType="fade-left" delay={400}>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="text-slate-gray hover:text-purple transition-all duration-300 hover:scale-110 transform">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-gray hover:text-purple transition-all duration-300 hover:scale-110 transform">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-slate-gray hover:text-purple transition-all duration-300 hover:scale-110 transform">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animationType="fade-up" delay={600}>
            <div className="border-t border-slate-gray/20 mt-8 pt-8 text-center">
              <p className="text-slate-gray text-sm mobile-text">
                Built by Benew Inc. © 2025. All rights reserved.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </footer>
    </div>
  );
}

export default App;