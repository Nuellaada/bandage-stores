Bandage Stores
A responsive e-commerce landing page built with React, TypeScript, and Redux Toolkit Query, featuring a live product grid fetched from the DummyJSON API.

Project Overview
This project is a landing page for a fictional e-commerce brand ("Bandage"), built to match a provided Figma design across mobile, tablet, and desktop breakpoints. It includes a hero section, a bestseller product grid populated from a live API with pagination ("Load More"), a services section, featured blog posts, a testimonial section, a call-to-action banner, and a footer.

The bestseller product grid is powered by Redux Toolkit Query, which handles fetching, loading states, error states, and caching against the DummyJSON Products API.

Tech Stack
React + Vite + TypeScript
Vanilla CSS (no CSS framework)
Redux Toolkit
Redux Toolkit Query (RTK Query)

Deployment
This project is deployed on Netlify.

Live URL: (https://bandage-stores.netlify.app)

Assumptions & Implementation Notes
Product data is sourced from the public DummyJSON API, which does not include a pre-calculated discount price — the discounted price shown on each product card is calculated client-side from the API's price and discountPercentage fields.

Project Structure
src/
├── app/              # Redux store setup and typed hooks
├── features/         # RTK Query API slices
├── components/        # Reusable UI components, one per section
├── pages/             # Page-level composition (LandingPage)
├── types/             # Shared TypeScript types
└── styles/            # Global stylesheet and CSS variables