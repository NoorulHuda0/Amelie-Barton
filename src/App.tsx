import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-ink)] selection:bg-purple-100 selection:text-purple-900">
      {/* 1. Sticky Editorial Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectService} />

        {/* 4. About Section */}
        <About />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Testimonials Section (Clean omission if unprovided) */}
        <Testimonials />

        {/* 7. Contact Section */}
        <Contact initialService={selectedService} />

        {/* 8. FAQ Section */}
        <Faq />
      </main>

      {/* 9. Minimalist Calm Footer */}
      <Footer />
    </div>
  );
}
