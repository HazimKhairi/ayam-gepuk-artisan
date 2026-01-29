'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'HOME', href: '#home' },
        { label: 'OUR CRAFT', href: '#philosophy' },
        { label: 'MENU', href: '#menu' },
        { label: 'CONTACT', href: '#contact' },
    ];

    const handleNavClick = (href: string) => {
        setIsOpen(false);
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 lg:px-24 py-6"
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer"
                        onClick={() => handleNavClick('#home')}
                    >
                        <h1 className="font-display text-2xl md:text-3xl font-bold gradient-gold">
                            AYAM GEPUK
                        </h1>
                        <p className="font-serif text-xs md:text-sm text-cream/60 italic">
                            Artisan
                        </p>
                    </motion.div>

                    {/* Hamburger Menu Button */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="relative w-10 h-10 md:w-12 md:h-12 flex flex-col items-center justify-center gap-1.5 group"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-8 h-0.5 bg-gold group-hover:bg-cream transition-colors"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-8 h-0.5 bg-gold group-hover:bg-cream transition-colors"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="w-8 h-0.5 bg-gold group-hover:bg-cream transition-colors"
                        />
                    </motion.button>
                </div>
            </motion.nav>

            {/* Full-Screen Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-xl flex items-center justify-center"
                    >
                        {/* Close Button */}
                        <motion.button
                            onClick={() => setIsOpen(false)}
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute top-6 right-6 md:top-12 md:right-12 lg:right-24 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
                            aria-label="Close menu"
                        >
                            <svg
                                className="w-8 h-8 md:w-10 md:h-10 text-gold"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </motion.button>

                        {/* Menu Items */}
                        <nav className="flex flex-col items-center gap-8 md:gap-12">
                            {menuItems.map((item, index) => (
                                <motion.button
                                    key={item.label}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.1, x: 20 }}
                                    onClick={() => handleNavClick(item.href)}
                                    className="group relative"
                                >
                                    <span className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream group-hover:text-gold transition-colors duration-300">
                                        {item.label}
                                    </span>

                                    {/* Underline Effect */}
                                    <motion.div
                                        className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-gold to-sambal"
                                        initial={{ width: 0 }}
                                        whileHover={{ width: '100%' }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </motion.button>
                            ))}
                        </nav>

                        {/* Decorative Elements */}
                        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center">
                            <p className="font-serif text-lg md:text-xl text-cream/50 italic">
                                Handcrafted with passion
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
