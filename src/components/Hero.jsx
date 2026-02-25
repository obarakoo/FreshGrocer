import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-mesh">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm">
                            <Star size={16} fill="currentColor" />
                            <span>Top Rated Grocery Delivery</span>
                        </div>

                        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                            Freshness <br />
                            <span className="text-gradient">Delivered Daily </span>
                            to Your Door
                        </h1>

                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                            Experience the joy of cooking with the highest quality organic
                            ingredients sourced directly from local sustainable farms.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl shadow-brand-primary/20"
                            >
                                Shop Fresh Now
                                <ArrowRight size={20} />
                            </motion.button>

                            <button className="flex items-center gap-4 text-slate-700 font-bold text-lg px-6 py-4 rounded-2xl hover:bg-white/50 transition-colors">
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
                                    <Play size={20} className="text-brand-primary fill-brand-primary ml-1" />
                                </div>
                                How it works
                            </button>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-slate-200">
                            <div>
                                <div className="text-3xl font-bold text-slate-900">50k+</div>
                                <div className="text-sm text-slate-500">Active Users</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200" />
                            <div>
                                <div className="text-3xl font-bold text-slate-900">100+</div>
                                <div className="text-sm text-slate-500">Local Farms</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-brand-primary/10 rounded-[3rem] -rotate-6 scale-95 transition-transform duration-1000 animate-pulse-slow" />
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="/images/grocery-image.png"
                                alt="Fresh Groceries"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-xl hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-orange-100 text-orange-600 p-3 rounded-2xl">
                                    🔥
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900 leading-none">Fast Delivery</div>
                                    <div className="text-xs text-slate-500 mt-1">Under 30 mins</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-xl hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-green-100 text-green-600 p-3 rounded-2xl">
                                    🥗
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900 leading-none">100% Organic</div>
                                    <div className="text-xs text-slate-500 mt-1">Farm fresh</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Background shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        </section>
    );
};

export default Hero;
