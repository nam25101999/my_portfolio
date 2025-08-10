React + Vite Template
This template provides a minimal setup to get React working in Vite with fast Hot Module Replacement (HMR) and some basic ESLint rules.

Features
Fast React development with Vite’s lightning-fast bundler

Hot Module Replacement (HMR) for instant updates without full page reloads

ESLint integrated with recommended rules for React projects

Official React Plugins for Vite
Currently, there are two official plugins you can choose from for React support with fast refresh:

@vitejs/plugin-react — uses Babel under the hood to enable Fast Refresh.

@vitejs/plugin-react-swc — uses SWC (a super-fast compiler written in Rust) for Fast Refresh.

You can select the plugin based on your preference for build speed and compatibility.

ESLint Configuration
For production-level applications, we recommend extending the ESLint setup with TypeScript and type-aware linting rules for better code quality and maintainability.

If you plan to use TypeScript, check out the React + TypeScript template, which integrates TypeScript along with typescript-eslint for enhanced linting support.
