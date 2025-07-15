# Falco Robotics Landing Page

This is a responsive React + Tailwind CSS landing page for Falco Robotics.

## Features
- Hero section with background image, overlay, title, subtext, and CTA button
- Video showcase section
- Featured products with images and quote buttons
- About/Why Us section
- Footer with address, contact, and social icons
- Mobile responsive and smooth scroll navigation

## Directory Structure
```
falco-robotics/
├── public/
│   ├── drone-hero.jpg         // Hero image (replace with your own)
│   ├── product1.jpg           // Product images (replace with your own)
│   ├── product2.jpg
│   ├── product3.jpg
│   └── showcase.mp4           // Showcase video (replace with your own)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── VideoShowcase.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── AboutSection.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── index.css
├── tailwind.config.js
├── package.json
└── README.md
```

## Customization
- **Images & Video:** Replace the placeholder files in `public/` with your real assets, keeping the same filenames, or update the `src` attributes in the components.
- **Contact Info:** Update address, phone, and emails in `src/components/Footer.jsx`.
- **Products:** Edit product names and images in `src/components/FeaturedProducts.jsx`.

## Running the Project
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy
You can deploy this app using Vercel, Netlify, or any static hosting provider.

## Tech Stack
- React
- Tailwind CSS
- React Icons

---
For any issues, contact: order@falcodrones.com 