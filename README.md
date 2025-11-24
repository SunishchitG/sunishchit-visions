# Personal Portfolio

This repository hosts a Vite + React + TypeScript portfolio for showcasing experience, projects, and contact details. The UI is powered by Tailwind CSS and shadcn/ui components for a consistent, accessible design.

## Tech Stack

- React 18 with SWC tooling
- TypeScript
- Vite
- Tailwind CSS & tailwind-merge
- shadcn/ui + Radix primitives

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Open the printed local URL (default http://localhost:5173/) to view the site.

## Available Scripts

- `npm run dev` – start a hot-reloading development server.
- `npm run build` – create an optimized production build in `dist/`.
- `npm run preview` – serve the build locally to verify before deploying.
- `npm run lint` – run ESLint with the shared config.

## Building & Deployment

Run `npm run build` and deploy the generated `dist/` folder to your hosting provider (e.g., Netlify, Vercel, GitHub Pages, or any static hosting). For container-based or custom setups, serve the `dist/` directory with your preferred web server.

## Customization Tips

- Update the content inside `src/components` and `src/pages` to reflect new projects or experience.
- Global styles and theme tweaks live in `src/index.css` and `src/App.css`.
- Shared utilities can be added to `src/lib/`.

Feel free to adapt the structure to your workflow—this project is now decoupled from any external tooling overlays.
