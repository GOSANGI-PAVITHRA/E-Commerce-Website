# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).



If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# E-Commerce-Website
Shoppy is a comprehensive, feature-rich e-commerce front-end application built using React and React Router. This project is designed to demonstrate a complete and professional online retail experience, from product browsing to checkout. Home page  features a large, responsive image carousel/slider and dedicated promotional banner sections for quick access to key categories (e.g., Fashion, Home Goods, Media). Shopping cart utilizes React State Management (useState) to handle adding, removing, and clearing products. The logic correctly tracks and updates item quantities and calculates order totals.

# Project Structure
src/
├── Front/
│   ├── auth/           // Login and Signup components
│   ├── cart/           // Cart.jsx, CartItem.jsx (Cart logic & components)
│   ├── checkout/       // Checkout form and logic
│   ├── Footer/         // Footer component and styles
│   ├── Header/         // Header component and styles
│   ├── Home/           // Homepage and Carousel logic
│   ├── Products/       // Product listing page
│   └── Papp.jsx        // Main application entry and routing layout
└── back/
    └── Data/           // Static product data source (Data.js)

# install
npm install

# start the application
npm run dev 

