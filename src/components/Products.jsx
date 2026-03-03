import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Plus } from 'lucide-react';
import avocadoImg from '../assets/avocado.png';
import strawberriesImg from '../assets/strawberries.png';
import applesImg from '../assets/apples.png';
import carrotsImg from '../assets/carrots.png';

const products = [
    {
        id: 1,
        name: "Organic Avocado",
        price: 2.50,
        unit: "per piece",
        rating: 4.8,
        reviews: 124,
        image: avocadoImg,
        category: "Fruits",
        badge: "Bestseller"
    },
    {
        id: 2,
        name: "Fresh Strawberries",
        price: 4.99,
        unit: "250g",
        rating: 4.9,
        reviews: 89,
        image: strawberriesImg,
        category: "Berries",
        badge: "Sweet"
    },
    {
        id: 3,
        name: "Green Apples",
        price: 3.25,
        unit: "1kg",
        rating: 4.7,
        reviews: 215,
        image: applesImg,
        category: "Fruits",
        badge: "Organic"
    },
    {
        id: 4,
        name: "Fresh Carrots",
        price: 1.80,
        unit: "500g",
        rating: 4.6,
        reviews: 156,
        image: carrotsImg,
        category: "Vegetables",
        badge: "Fresh"
    }
];

const ProductCard = ({ product, onAddToCart }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        className="glass rounded-[2rem] p-6 group relative overflow-hidden flex flex-col"
    >
        {/* Badge */}
        {product.badge && (
            <div className="absolute top-4 left-4 z-10">
                <span className="bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                </span>
            </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-4 right-4 z-10 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Star className="text-brand-accent h-4 w-4 fill-brand-accent" />
        </button>

        {/* Image Container */}
        <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-4">
            <motion.img
                whileHover={{ scale: 1.1 }}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain mb-1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content */}
        <div className="flex-1">
            <div className="text-brand-primary text-xs font-bold mb-1 uppercase tracking-widest">{product.category}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 truncate">{product.name}</h3>
            
            <div className="flex items-center gap-2 mb-4">
                <div className="flex text-brand-accent">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                    ))}
                </div>
                <span className="text-slate-400 text-xs">({product.reviews})</span>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <span className="text-2xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                    <span className="text-slate-400 text-sm ml-1">/ {product.unit}</span>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onAddToCart(product)}
                    className="p-3 bg-brand-primary text-white rounded-2xl shadow-lg shadow-brand-primary/30 hover:bg-brand-primary/90 transition-all group/btn"
                >
                    <Plus className="group-hover/btn:rotate-90 transition-transform" />
                </motion.button>
            </div>
        </div>
    </motion.div>
);

const Products = ({ onAddToCart }) => {
    return (
        <section id="products" className="py-24 bg-mesh relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-brand-primary font-bold tracking-widest uppercase text-sm"
                        >
                            Our Catalog
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4"
                        >
                            Fresh from our <span className="text-gradient">Local Farms</span>
                        </motion.h2>
                        <p className="text-slate-600 text-lg">
                            We pick every item by hand to ensure only the highest quality produce reaches your kitchen.
                        </p>
                    </div>
                    
                    <div className="flex gap-4">
                        <button className="px-6 py-2 rounded-full font-bold text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white transition-all">
                            View All
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
