import React from 'react';
import { Navbar, Footer, Features, CallToAction, Hero } from '../components'; 

const HomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default HomeScreen;
