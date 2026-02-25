import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, Tag, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -10 }}
        className="group p-10 glass rounded-[2.5rem] relative overflow-hidden"
    >
        <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
            <Icon size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-8">
            {description}
        </p>
        <a href="#" className="inline-flex items-center gap-2 font-bold text-brand-primary group-hover:gap-4 transition-all">
            Learn More <ArrowRight size={18} />
        </a>

        {/* Decorative background circle */}
        <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-current`} />
    </motion.div>
);

const Features = () => {
    const features = [
        {
            icon: Clock,
            title: "Fast Delivery",
            description: "Our dedicated fleet ensures your groceries reach your doorstep in under 30 minutes, keeping everything fresh.",
            delay: 0.1,
            color: "bg-emerald-100 text-emerald-600"
        },
        {
            icon: ShieldCheck,
            title: "Organic Only",
            description: "We partner exclusively with certified organic farms to bring you produce that is free from pesticides and GMOs.",
            delay: 0.2,
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: Tag,
            title: "Fair Pricing",
            description: "By cutting out the middleman, we offer farm-fresh quality at prices that beat your local supermarket every time.",
            delay: 0.3,
            color: "bg-amber-100 text-amber-600"
        }
    ];

    return (
        <section className="py-32 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-brand-primary font-bold tracking-widest uppercase text-sm"
                    >
                        Our Mission
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
                    >
                        Why Choose <span className="text-gradient">FreshGrocer?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600"
                    >
                        We're revolutionizing the way you shop for groceries, one fresh delivery at a time.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
