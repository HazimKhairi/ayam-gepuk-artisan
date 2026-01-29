'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { getFrameIndex } from '@/lib/utils';

const TOTAL_FRAMES = 240;

export default function ArtisanSequence() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    // Text overlay opacity animations based on scroll
    const text1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const text2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const text3Opacity = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
    const text4Opacity = useTransform(scrollYProgress, [0.85, 0.92, 1], [0, 1, 1]);

    // Lazy load images - preload first batch, then load rest progressively
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        const PRELOAD_BATCH = 10; // Only preload first 10 frames
        let preloadedCount = 0;
        let totalLoadedCount = 0;

        // Initialize all image objects
        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            loadedImages.push(img);
        }

        setImages(loadedImages);

        // Preload first batch for immediate display
        for (let i = 1; i <= Math.min(PRELOAD_BATCH, TOTAL_FRAMES); i++) {
            const img = loadedImages[i - 1];
            const frameNumber = String(i).padStart(3, '0');
            img.src = `/sequence/ezgif-frame-${frameNumber}.png`;

            img.onload = () => {
                preloadedCount++;
                totalLoadedCount++;
                setLoadingProgress(Math.round((totalLoadedCount / TOTAL_FRAMES) * 100));

                if (preloadedCount === PRELOAD_BATCH) {
                    setImagesLoaded(true);
                    // Start loading remaining frames in background
                    loadRemainingFrames();
                }
            };
        }

        // Load remaining frames progressively in background
        function loadRemainingFrames() {
            const BATCH_SIZE = 20; // Load 20 frames at a time
            let currentBatch = PRELOAD_BATCH + 1;

            function loadNextBatch() {
                const batchEnd = Math.min(currentBatch + BATCH_SIZE, TOTAL_FRAMES);

                for (let i = currentBatch; i <= batchEnd; i++) {
                    const img = loadedImages[i - 1];
                    const frameNumber = String(i).padStart(3, '0');
                    img.src = `/sequence/ezgif-frame-${frameNumber}.png`;

                    img.onload = () => {
                        totalLoadedCount++;
                        setLoadingProgress(Math.round((totalLoadedCount / TOTAL_FRAMES) * 100));
                    };
                }

                currentBatch = batchEnd + 1;

                // Continue loading next batch after a delay
                if (currentBatch <= TOTAL_FRAMES) {
                    setTimeout(loadNextBatch, 500);
                }
            }

            loadNextBatch();
        }
    }, []);

    // Render canvas based on scroll
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const render = () => {
            const scrollProgress = scrollYProgress.get();
            const frameIndex = getFrameIndex(scrollProgress, TOTAL_FRAMES);
            const img = images[frameIndex];

            if (img && img.complete) {
                // Set canvas size to match window
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                // Calculate scaling to cover canvas while maintaining aspect ratio
                const scale = Math.max(
                    canvas.width / img.width,
                    canvas.height / img.height
                );

                const x = (canvas.width - img.width * scale) / 2;
                const y = (canvas.height - img.height * scale) / 2;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
        };

        const unsubscribe = scrollYProgress.on('change', render);
        render(); // Initial render

        // Handle resize
        const handleResize = () => render();
        window.addEventListener('resize', handleResize);

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [imagesLoaded, images, scrollYProgress]);

    return (
        <div ref={containerRef} className="relative h-[400vh]">
            {/* Sticky Canvas Container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Canvas */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ backgroundColor: '#121212' }}
                />

                {/* Loading State */}
                {!imagesLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal">
                        <div className="text-center">
                            <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                            <p className="text-cream font-serif text-xl mb-2">Loading Artisan Experience...</p>
                            <p className="text-cream/60 font-sans text-sm">{loadingProgress}%</p>
                        </div>
                    </div>
                )}

                {/* Text Overlays */}
                {imagesLoaded && (
                    <>
                        {/* Text 1: Hero Title (0% scroll) */}
                        <motion.div
                            style={{ opacity: text1Opacity }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
                        >
                            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold gradient-gold mb-4 tracking-wider">
                                AYAM GEPUK
                            </h1>
                            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6">
                                ARTISAN
                            </h2>
                            <p className="font-serif text-xl md:text-2xl text-cream/80 italic max-w-2xl">
                                Handcrafted Spicy Perfection
                            </p>
                        </motion.div>

                        {/* Text 2: Process (30% scroll) */}
                        <motion.div
                            style={{ opacity: text2Opacity }}
                            className="absolute top-1/2 left-8 md:left-16 lg:left-24 -translate-y-1/2 pointer-events-none"
                        >
                            <h3 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-gold mb-2">
                                Golden Fried.
                            </h3>
                            <h3 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream">
                                Stone Crushed.
                            </h3>
                        </motion.div>

                        {/* Text 3: Sambal (60% scroll) */}
                        <motion.div
                            style={{ opacity: text3Opacity }}
                            className="absolute top-1/2 right-8 md:right-16 lg:right-24 -translate-y-1/2 text-right pointer-events-none"
                        >
                            <h3 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-sambal mb-2">
                                The Authentic
                            </h3>
                            <h3 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-cream">
                                Sambal Blend.
                            </h3>
                        </motion.div>

                        {/* Text 4: CTA (90% scroll) */}
                        <motion.div
                            style={{ opacity: text4Opacity }}
                            className="absolute inset-0 flex items-center justify-center text-center px-4 pointer-events-none"
                        >
                            <h3 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold gradient-gold">
                                Taste the Craftsmanship.
                            </h3>
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    );
}
