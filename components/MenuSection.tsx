'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MenuItem {
    name: string;
    description: string;
    price: string;
    image: string;
}

const menuItems: MenuItem[] = [
    {
        name: 'Signature Gepuk Set',
        description: 'Free-range chicken, tempeh, artisan sambal, steamed rice',
        price: 'RM 18',
        image: '/menu/signature.jpg',
    },
    {
        name: 'Artisan Sambal Trio',
        description: 'Three variations of hand-ground sambal with crispy chicken',
        price: 'RM 22',
        image: '/menu/trio.jpg',
    },
    {
        name: 'Traditional Gepuk with Tempeh',
        description: 'Stone-crushed chicken, fermented soy tempeh, sambal matah',
        price: 'RM 16',
        image: '/menu/tempeh.jpg',
    },
    {
        name: 'Premium Gepuk Platter',
        description: 'Double portion, extra sambal, pickled vegetables, soup',
        price: 'RM 28',
        image: '/menu/platter.jpg',
    },
    {
        name: 'Spicy Gepuk Challenge',
        description: 'Extra hot sambal blend, not for the faint of heart',
        price: 'RM 20',
        image: '/menu/spicy.jpg',
    },
    {
        name: 'Artisan Combo for Two',
        description: 'Two gepuk sets, shared sides, traditional dessert',
        price: 'RM 35',
        image: '/menu/combo.jpg',
    },
];

export default function MenuSection() {
    const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
    };

    return (
        <section
            className="relative min-h-screen bg-charcoal-light py-32 px-6 md:px-12 lg:px-24"
            onMouseMove={handleMouseMove}
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold gradient-gold mb-4">
                        Our Menu
                    </h2>
                    <p className="font-serif text-xl md:text-2xl text-cream/70 italic">
                        Handcrafted dishes, made to order
                    </p>
                </motion.div>

                {/* Menu List */}
                <div className="space-y-1">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredItem(item)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className="group relative border-b border-cream/10 hover:border-gold/50 transition-all duration-300 cursor-pointer py-6 md:py-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                                {/* Dish Name */}
                                <div className="md:col-span-4">
                                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-cream group-hover:text-gold transition-colors duration-300">
                                        {item.name}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="md:col-span-6">
                                    <p className="font-sans text-sm md:text-base lg:text-lg text-cream/60 group-hover:text-cream/80 transition-colors duration-300">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Price */}
                                <div className="md:col-span-2 text-left md:text-right">
                                    <span className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-gold">
                                        {item.price}
                                    </span>
                                </div>
                            </div>

                            {/* Hover Line Effect */}
                            <motion.div
                                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold via-sambal to-gold"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.4 }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16 text-center font-sans text-sm md:text-base text-cream/50 italic"
                >
                    All dishes are prepared fresh to order. Please allow 15-20 minutes for preparation.
                </motion.p>
            </div>

            {/* Cursor Following Image */}
            {hoveredItem && (
                <motion.div
                    className="menu-image-cursor fixed w-64 h-64 hidden lg:block"
                    style={{
                        left: cursorXSpring,
                        top: cursorYSpring,
                        x: '-50%',
                        y: '-50%',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.9 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-gold shadow-2xl">
                        {/* Placeholder gradient since we don't have actual images */}
                        <div className="w-full h-full bg-gradient-to-br from-gold via-sambal to-gold-dark flex items-center justify-center">
                            <span className="font-display text-white text-lg text-center px-4">
                                {hoveredItem.name}
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
}
