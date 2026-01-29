'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

export default function PhilosophySection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    useEffect(() => {
        if (isInView && titleRef.current) {
            const chars = titleRef.current.querySelectorAll('.char');
            gsap.fromTo(
                chars,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: 'power3.out',
                }
            );
        }
    }, [isInView]);

    const splitText = (text: string) => {
        return text.split('').map((char, index) => (
            <span key={index} className="char inline-block">
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-charcoal py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
        >
            {/* Parallax Ingredients Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <motion.div
                    className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48"
                    style={{ y: 0 }}
                    animate={{ y: isInView ? [0, -30, 0] : 0 }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="w-full h-full rounded-full bg-sambal blur-3xl" />
                </motion.div>

                <motion.div
                    className="absolute top-1/3 right-20 w-40 h-40 md:w-56 md:h-56"
                    style={{ y: 0 }}
                    animate={{ y: isInView ? [0, 40, 0] : 0 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                    <div className="w-full h-full rounded-full bg-gold blur-3xl" />
                </motion.div>

                <motion.div
                    className="absolute bottom-32 left-1/4 w-36 h-36 md:w-52 md:h-52"
                    style={{ y: 0 }}
                    animate={{ y: isInView ? [0, -20, 0] : 0 }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                >
                    <div className="w-full h-full rounded-full bg-sambal-dark blur-3xl" />
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Title with Character Animation */}
                <h2
                    ref={titleRef}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-gold mb-16 overflow-hidden"
                >
                    {splitText('Artisan Philosophy')}
                </h2>

                {/* Story Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="space-y-8"
                >
                    <p className="font-serif text-xl md:text-2xl lg:text-3xl text-cream leading-relaxed">
                        At <span className="gradient-gold font-bold">Ayam Gepuk Artisan</span>, we believe that true flavor comes from
                        dedication to craft. Every dish tells a story of tradition, passion, and uncompromising quality.
                    </p>

                    <p className="font-sans text-lg md:text-xl text-cream/90 leading-relaxed">
                        Our signature process begins with <span className="text-gold font-semibold">free-range chicken</span>,
                        marinated in a secret blend of Indonesian spices for 24 hours. Each piece is fried to golden perfection,
                        then hand-crushed using traditional stone pestles—a technique passed down through generations.
                    </p>

                    <div className="bg-charcoal-light border-l-4 border-sambal p-6 md:p-8 rounded-r-lg">
                        <h3 className="font-display text-2xl md:text-3xl text-sambal mb-4">
                            Ulek Dadakan: Freshly Ground Sambal
                        </h3>
                        <p className="font-sans text-base md:text-lg text-cream/80 leading-relaxed">
                            Unlike mass-produced alternatives, our sambal is ground fresh for every single order.
                            We use a traditional <span className="italic">ulek</span> (stone mortar and pestle) to crush
                            fresh bird's eye chilies, garlic cloves, shallots, and sea salt. This labor-intensive method
                            releases essential oils and creates a texture that machines simply cannot replicate.
                        </p>
                    </div>

                    <p className="font-sans text-lg md:text-xl text-cream/90 leading-relaxed">
                        The result? A harmonious blend of <span className="text-sambal font-semibold">fiery heat</span>,
                        <span className="text-gold font-semibold"> aromatic depth</span>, and
                        <span className="text-cream font-semibold"> savory richness</span> that dances on your palate.
                        Each bite is a testament to the artisan's touch—imperfect, authentic, and unforgettable.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="pt-8 border-t border-cream/20"
                    >
                        <blockquote className="font-serif text-2xl md:text-3xl italic text-gold text-center">
                            "Craftsmanship you can taste. Tradition you can feel."
                        </blockquote>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
