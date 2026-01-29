# Ayam Gepuk Artisan

A premium, Awwwards-level scrollytelling landing page showcasing artisan-crafted Indonesian cuisine.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- **Scroll-linked Canvas Animation**: 240-frame sequence showing the artisan gepuk process
- **Smooth Scrolling**: Lenis integration for butter-smooth luxury scrolling
- **Text Reveal Animations**: GSAP-powered character-by-character reveals
- **Cursor-Following Menu**: Interactive menu with spring-physics cursor tracking
- **Glassmorphism UI**: Modern glass effects with backdrop blur
- **Full-Screen Navigation**: Elegant overlay menu with massive typography
- **WhatsApp Integration**: Floating CTA button for direct orders

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion & GSAP
- **Smooth Scroll**: Lenis
- **Typography**: Playfair Display, Cinzel, Inter

## Customization

### WhatsApp Number
Update the phone number in `components/StickyWA.tsx`:
```typescript
const phoneNumber = '60123456789'; // Your number here
```

### Menu Items
Edit menu items in `components/MenuSection.tsx`

### Contact Information
Update contact details in `app/page.tsx` (contact section)

## Production Build

```bash
npm run build
npm start
```

## License

© 2026 Ayam Gepuk Artisan
