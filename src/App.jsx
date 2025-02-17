import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
