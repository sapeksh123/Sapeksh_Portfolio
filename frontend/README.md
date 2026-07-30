# Sapeksh Vishwakarma — Portfolio (Frontend)

React 19 + Vite single-page portfolio app. See [setup.md](setup.md) for detailed setup steps.

## Scripts

```bash
npm install     # install dependencies
npm run dev     # start dev server (http://localhost:5173)
npm run build   # production build to dist/
npm run preview # preview the production build locally
npm run lint    # run ESLint
```

## Stack

- React 19 + React Router
- Vite
- Tailwind CSS + shadcn/ui (Radix primitives)
- Framer Motion
- Lucide React icons

## Structure

- `src/content/index.js` — all site copy/data (edit here to update text, links, projects, etc.)
- `src/pages/` — one component per route
- `src/components/` — navigation, theme provider/toggle, shared UI primitives
