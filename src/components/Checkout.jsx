import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';

const Checkout = ({ cart, onBack, onComplete }) => {
  const [step, setStep] = useState(1);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleComplete = () => {
    setStep(3);
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  if (step === 3) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-slate-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-md mx-4 text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check size={40} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Order Confirmed!</h2>
          <p className="text-slate-600 mb-6">Your fresh groceries will be delivered within 2 hours.</p>
          <div className="text-brand-primary font-bold">Redirecting to home...</div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-brand-primary transition-colors mb-6 font-medium"
          >
            <ArrowLeft size={16} /> Back to Shopping
          </button>
          
          <div className="glass p-6 md:p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {step === 1 ? 'Delivery Details' : 'Payment Method'}
            </h2>

            {step === 1 ? (
              <form onSubmit={handleNext} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 mb-1 text-sm font-medium">First Name</label>
                    <input required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-brand-primary" type="text" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1 text-sm font-medium">Last Name</label>
                    <input required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-brand-primary" type="text" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-600 mb-1 text-sm font-medium">Address</label>
                  <input required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-brand-primary" type="text" placeholder="123 Fresh Lane" />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1 text-sm font-medium">City</label>
                  <input required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-brand-primary" type="text" placeholder="New York" />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg mt-6 hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
                >
                  Continue to Payment
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="border-2 border-brand-primary rounded-xl p-4 flex items-center justify-between cursor-pointer bg-brand-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-4 border-brand-primary bg-white flex items-center justify-center">
                    </div>
                    <span className="font-bold text-brand-primary">Credit Card</span>
                  </div>
                  <span className="text-sm font-medium text-brand-primary">Visa / MC</span>
                </div>
                
                <div>
                  <label className="block text-slate-600 mb-1 text-sm font-medium">Card Number</label>
                  <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-brand-primary" type="text" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-600 mb-1 text-sm font-medium">Expiry</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-brand-primary" type="text" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-slate-600 mb-1 text-sm font-medium">CVC</label>
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-brand-primary" type="text" placeholder="123" />
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/3 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleComplete}
                    className="w-2/3 bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
                  >
                    Pay ${total.toFixed(2)}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-80">
          <div className="glass p-6 rounded-2xl sticky top-28">
            <h3 className="font-bold text-lg text-slate-900 mb-4">Order Summary</h3>
            <div className="space-y-4 mb-6">
              {cart.map(item => (
                <div key={item.id} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-slate-50 rounded-lg" />
                  <div className="flex-1 text-sm">
                    <h4 className="font-bold text-slate-900 truncate">{item.name}</h4>
                    <p className="text-slate-500">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-brand-primary">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-200 pt-4 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between mt-4 pt-4 border-t border-slate-200 font-black text-lg text-slate-900">
                <span>Total</span>
                <span>${(total + 5).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
