import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Apple, Smartphone } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="relative overflow-hidden bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center">
                    {/* Background Decorative patterns */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-[100px] -ml-32 -mb-32" />

                    <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                            Ready to Taste the <span className="text-brand-primary">Freshness?</span>
                        </h2>
                        <p className="text-xl text-slate-400">
                            Join 50,000+ happy customers who get their daily dose of health
                            delivered right to their kitchen. No more middleman, just pure nature.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl shadow-brand-primary/20"
                            >
                                Get Started Now
                                <ArrowRight size={20} />
                            </motion.button>

                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors border border-white/10 group">
                                    <Apple size={20} className="group-hover:text-brand-primary transition-colors" />
                                    <div className="text-left">
                                        <div className="text-[10px] leading-none text-slate-400">Download on</div>
                                        <div className="text-sm font-bold leading-tight">App Store</div>
                                    </div>
                                </button>
                                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors border border-white/10 group">
                                    <Smartphone size={20} className="group-hover:text-brand-primary transition-colors" />
                                    <div className="text-left">
                                        <div className="text-[10px] leading-none text-slate-400">Get it on</div>
                                        <div className="text-sm font-bold leading-tight">Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="pt-12 flex items-center justify-center gap-4 text-slate-500 text-sm">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden`}>
                                        <img src={`https://i.pravatar.cc/40?u=${i}`} alt="User" />
                                    </div>
                                ))}
                            </div>
                            <span>Trusted by +50k happy foodies</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
