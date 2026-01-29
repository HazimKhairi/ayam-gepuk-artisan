'use client';

import { motion } from 'framer-motion';

const stats = [
    { value: '100%', label: 'Hand-Crushed', icon: '🥢' },
    { value: 'Daily', label: 'Freshly Made', icon: '🔥' },
    { value: '5-Star', label: 'Local Favorite', icon: '⭐' },
];

export default function StatsSection() {
    return (
        <section className="relative bg-charcoal py-24 px-6 md:px-12 lg:px-24 border-y border-gold/20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="text-center group"
                        >
                            {/* Icon */}
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="text-6xl md:text-7xl mb-4"
                            >
                                {stat.icon}
                            </motion.div>

                            {/* Value */}
                            <motion.h3
                                initial={{ scale: 0.5 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold gradient-gold mb-2"
                            >
                                {stat.value}
                            </motion.h3>

                            {/* Label */}
                            <p className="font-serif text-xl md:text-2xl text-cream/80">
                                {stat.label}
                            </p>

                            {/* Decorative Line */}
                            <motion.div
                                className="w-24 h-1 bg-gradient-to-r from-transparent via-sambal to-transparent mx-auto mt-4"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
