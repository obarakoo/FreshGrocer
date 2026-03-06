import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Plus, Info, X } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, nutrition }) => {
    const [showNutrition, setShowNutrition] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass rounded-[2rem] p-6 group relative overflow-hidden flex flex-col h-full bg-white"
        >
            {/* Badge */}
            {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                    <span className="bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {product.badge}
                    </span>
                </div>
            )}

            {/* Nutrition Info Toggle */}
            {nutrition && (
                <button 
                  onClick={() => setShowNutrition(!showNutrition)}
                  className="absolute top-4 right-4 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors text-slate-600"
                >
                  <Info size={16} />
                </button>
            )}

            {/* Image Container */}
            <div className="relative h-48 mb-6 rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                <AnimatePresence>
                  {showNutrition && nutrition ? (
                    <motion.div 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-brand-primary/95 text-white p-4 flex flex-col justify-center z-20 rounded-2xl"
                    >
                      <h4 className="font-bold mb-2">Nutrition (per 100g)</h4>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between"><span>Calories:</span> <span>{nutrition.calories}</span></div>
                        <div className="flex justify-between"><span>Fat:</span> <span>{nutrition.fat}g</span></div>
                        <div className="flex justify-between"><span>Sugar:</span> <span>{nutrition.sugar}g</span></div>
                        <div className="flex justify-between"><span>Carbs:</span> <span>{nutrition.carbohydrates}g</span></div>
                        <div className="flex justify-between"><span>Protein:</span> <span>{nutrition.protein}g</span></div>
                      </div>
                      <button 
                        onClick={() => setShowNutrition(false)}
                        className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full"
                      >
                        <X size={14} />
                      </button>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mb-1 drop-shadow-lg"
                />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
                <div className="text-brand-primary text-xs font-bold mb-1 uppercase tracking-widest">{product.category}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 truncate" title={product.name}>{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-brand-accent">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                        ))}
                    </div>
                    <span className="text-slate-400 text-xs">({product.reviews})</span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                        <span className="text-slate-400 text-sm ml-1">/{product.unit}</span>
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
};

const Products = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [fruitsNutrition, setFruitsNutrition] = useState({});
    const [activeCategory, setActiveCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Groceries from DummyJSON
                const res = await fetch('https://dummyjson.com/products/category/groceries');
                const data = await res.json();
                
                const mappedProducts = data.products.map(p => ({
                    id: p.id,
                    name: p.title,
                    price: p.price,
                    unit: 'pc',
                    rating: p.rating,
                    reviews: p.reviews?.length || Math.floor(Math.random() * 100),
                    image: p.thumbnail,
                    category: p.tags[0] || 'groceries',
                    badge: p.stock < 15 ? 'Low Stock' : (p.rating > 4.5 ? 'Bestseller' : null)
                }));
                setProducts(mappedProducts);

                // Fetch Fruit Nutrition from Fruityvice (using a common public proxy if needed, but trying allOrigins)
                try {
                  const fruitRes = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.fruityvice.com/api/fruit/all'));
                  const fruitData = await fruitRes.json();
                  const parsed = JSON.parse(fruitData.contents);
                  const nutritionMap = {};
                  parsed.forEach(fruit => {
                      nutritionMap[fruit.name.toLowerCase()] = fruit.nutritions;
                  });
                  setFruitsNutrition(nutritionMap);
                } catch (e) {
                  console.error("Fruityvice fetch error", e);
                }

                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Get unique categories for filter tabs
    const categories = ['All', ...new Set(products.map(p => p.category.toLowerCase()))];

    const filteredProducts = activeCategory === 'All' 
        ? products 
        : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

    return (
        <section id="products" className="py-24 bg-mesh relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
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
                </div>

                {/* Categories Filter */}
                <div className="flex overflow-x-auto gap-3 mb-10 pb-4 scrollbar-hide">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full font-bold whitespace-nowrap transition-all capitalize ${
                                activeCategory.toLowerCase() === cat.toLowerCase()
                                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-primary hover:text-brand-primary'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin" />
                    </div>
                ) : (
                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <AnimatePresence>
                            {filteredProducts.map(product => {
                                // check if we have nutrition data matching product name
                                // dummyjson has 'Apple', 'Kiwi', 'Lemon' etc.
                                const nameToMatch = product.name.split(' ')[0].toLowerCase();
                                const nutrition = fruitsNutrition[nameToMatch] || fruitsNutrition[product.name.toLowerCase()];

                                return (
                                    <ProductCard 
                                        key={product.id} 
                                        product={product} 
                                        onAddToCart={onAddToCart}
                                        nutrition={nutrition}
                                    />
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Products;
