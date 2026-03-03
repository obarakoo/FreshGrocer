import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  return (
    <div className="min-h-screen">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <Features />
        <Products onAddToCart={addToCart} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
