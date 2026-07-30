# Portfolio Website - Sapeksh Vishwakarma

A modern, fully responsive portfolio website showcasing skills, projects, education, and experience as a Software Engineer.

The site lives entirely in [frontend/](frontend/) — see [frontend/setup.md](frontend/setup.md) for setup instructions.

## Tech Stack

- **React 19** + **Vite** - App framework and build tooling
- **React Router** - Client-side routing
- **Tailwind CSS** + **shadcn/ui** - Styling and UI components
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

Then open `http://localhost:5173`.

## Project Structure

```
frontend/
├── src/
│   ├── components/   # Shared UI (navigation, theme toggle, shadcn primitives)
│   ├── content/       # Centralized site copy and data
│   ├── pages/         # Route-level pages (Home, About, Skills, Education, Experience, Projects, Contact)
│   └── App.jsx        # Router + theme provider setup
├── public/            # Static assets (images, resume PDF)
└── vercel.json         # Deployment config
```

## Deployment

Deployed on Vercel — see [frontend/vercel.json](frontend/vercel.json). Set the project's Root Directory to `frontend`.

## Links

- [GitHub](https://github.com/sapeksh123/)
- [LinkedIn](https://www.linkedin.com/in/sa-12v)

## License

This project is open source and available under the MIT License.
