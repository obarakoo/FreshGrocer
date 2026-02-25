import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-brand-primary p-2 rounded-xl text-white">
                                <Leaf size={24} />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-slate-900">
                                Fresh<span className="text-brand-primary">Grocer</span>
                            </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                            Sustainable, organic, and always fresh. We're dedicated to bringing
                            the best of nature right to your table, supporting local farms
                            and healthy lifestyles.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-primary hover:border-brand-primary transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 underline decoration-brand-primary decoration-4 underline-offset-8">Quick Links</h3>
                        <ul className="space-y-4 text-slate-600 font-medium">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">How it works</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Explore Markets</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Organic Standard</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Success Stories</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 underline decoration-brand-primary decoration-4 underline-offset-8">Support</h3>
                        <ul className="space-y-4 text-slate-600 font-medium">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Shipping Policy</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Refund Policy</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Sustainability</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-6 underline decoration-brand-primary decoration-4 underline-offset-8">Get in Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="bg-white p-2 rounded-lg border border-slate-200">
                                    <MapPin size={18} className="text-brand-primary" />
                                </div>
                                <span>Antipolo City, PH</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="bg-white p-2 rounded-lg border border-slate-200">
                                    <Phone size={18} className="text-brand-primary" />
                                </div>
                                <span>+63 910 543 9194</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="bg-white p-2 rounded-lg border border-slate-200">
                                    <Mail size={18} className="text-brand-primary" />
                                </div>
                                <span>hello@freshgrocer.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
                    <p>© 2024 FreshGrocer. Built with passion for a healthier planet.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
