import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const startCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen relative">
      <Navbar cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />
      
      {isCheckoutOpen ? (
        <Checkout 
          cart={cart} 
          onBack={() => setIsCheckoutOpen(false)} 
          onComplete={() => {
            setCart([]);
            setIsCheckoutOpen(false);
          }} 
        />
      ) : (
        <main>
          <Hero />
          <Features />
          <Products onAddToCart={addToCart} />
          <CTA />
        </main>
      )}

      {!isCheckoutOpen && <Footer />}

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        onCheckout={startCheckout}
      />
    </div>
  );
}

export default App;
