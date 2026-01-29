'use client';

import { useEffect } from 'react';
import ArtisanSequence from '@/components/ArtisanSequence';
import PhilosophySection from '@/components/PhilosophySection';
import MenuSection from '@/components/MenuSection';
import StatsSection from '@/components/StatsSection';
import Navigation from '@/components/Navigation';
import StickyWA from '@/components/StickyWA';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Home() {
    // Initialize smooth scrolling
    useSmoothScroll();

    return (
        <main className="relative bg-charcoal">
            {/* Navigation */}
            <Navigation />

            {/* Hero Scroll Sequence */}
            <section id="home">
                <ArtisanSequence />
            </section>

            {/* Content Sections - Offset to overlap with sequence */}
            <div className="relative z-10 -mt-[100vh]">
                {/* Philosophy / About Section */}
                <section id="philosophy">
                    <PhilosophySection />
                </section>

                {/* Stats Section */}
                <StatsSection />

                {/* Menu Section */}
                <section id="menu">
                    <MenuSection />
                </section>

                {/* Contact / Footer Section */}
                <section id="contact" className="relative bg-charcoal-light py-24 px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold gradient-gold mb-8">
                            Visit Us
                        </h2>

                        <div className="space-y-6 mb-12">
                            <p className="font-sans text-lg md:text-xl text-cream/80">
                                <span className="font-semibold text-gold">Location:</span><br />
                                Jalan Artisan Kuliner No. 88<br />
                                Kuala Lumpur, Malaysia
                            </p>

                            <p className="font-sans text-lg md:text-xl text-cream/80">
                                <span className="font-semibold text-gold">Hours:</span><br />
                                Tuesday - Sunday: 11:00 AM - 9:00 PM<br />
                                Monday: Closed (Preparing fresh ingredients)
                            </p>

                            <p className="font-sans text-lg md:text-xl text-cream/80">
                                <span className="font-semibold text-gold">Contact:</span><br />
                                +60 12 345 6789<br />
                                hello@ayamgepukartisan.com
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center gap-6 mb-12">
                            <a
                                href="#"
                                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-gold transition-colors"
                                aria-label="Instagram"
                            >
                                <span className="text-2xl">📷</span>
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-gold transition-colors"
                                aria-label="Facebook"
                            >
                                <span className="text-2xl">📘</span>
                            </a>
                            <a
                                href="#"
                                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:border-gold transition-colors"
                                aria-label="TikTok"
                            >
                                <span className="text-2xl">🎵</span>
                            </a>
                        </div>

                        {/* Footer */}
                        <div className="pt-12 border-t border-cream/10">
                            <p className="font-serif text-sm md:text-base text-cream/50 italic mb-2">
                                Crafted with passion, served with pride
                            </p>
                            <p className="font-sans text-xs text-cream/30">
                                © 2026 Ayam Gepuk Artisan. All rights reserved.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Sticky WhatsApp Button */}
            <StickyWA />
        </main>
    );
}
