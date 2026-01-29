import type { Metadata } from 'next';
import { Playfair_Display, Inter, Cinzel } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
    weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
});

const cinzel = Cinzel({
    subsets: ['latin'],
    variable: '--font-cinzel',
    display: 'swap',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Ayam Gepuk Artisan | Handcrafted Spicy Perfection',
    description: 'Experience the authentic taste of artisan-crafted Ayam Gepuk. Hand-crushed chicken with freshly ground sambal, made to order with traditional techniques.',
    keywords: 'ayam gepuk, artisan food, Indonesian cuisine, hand-crushed chicken, sambal, traditional cooking',
    authors: [{ name: 'Ayam Gepuk Artisan' }],
    openGraph: {
        title: 'Ayam Gepuk Artisan | Handcrafted Spicy Perfection',
        description: 'Experience the authentic taste of artisan-crafted Ayam Gepuk',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable} ${cinzel.variable}`}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
