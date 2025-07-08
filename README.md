# Lee Flannery - Personal Website

A modern personal website built with [Astro](https://astro.build), React, and Tailwind CSS.

## Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Library**: [React](https://reactjs.org/) - Component library
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Animations**: [GSAP](https://greensock.com/gsap/) - Professional animations
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icons
- **Linting**: [ESLint](https://eslint.org/) - Code linting
- **Formatting**: [Prettier](https://prettier.io/) - Code formatting

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd lee-flannery-dot-com-4
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Edit .env and add your Google Analytics Measurement ID
```

4. Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321` (or the next available port).

### Google Analytics Setup

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (starts with `G-`)
3. Add it to your `.env` file:
   ```
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Replace `G-XXXXXXXXXX` with your actual Measurement ID

### Shell Notes

- **macOS/Linux**: Commands shown use zsh/bash syntax
- **Windows**: You can use:
  - **Git Bash** (recommended) - comes with Git for Windows
  - **WSL** (Windows Subsystem for Linux) - full Linux environment
  - **PowerShell** - native Windows shell (commands work the same)
  - **zsh on Windows** - available via WSL or tools like Oh My Posh

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # React components
│   ├── HeroSection.tsx
│   ├── HeroSectionChalk.tsx
│   ├── HeroSectionRough.tsx
│   ├── ChalkDivider.tsx
│   ├── NavReact.tsx
│   ├── ScrollEffects.tsx
│   └── icons.tsx
├── layouts/            # Astro layouts
│   └── BaseLayout.astro
├── pages/              # Astro pages
│   └── index.astro
└── styles/             # Global styles
    └── global.css
```

## Components

- **HeroSection**: Main landing section with animated text
- **HeroSectionChalk**: Alternative hero with chalk-style design
- **HeroSectionRough**: Hero with rough notation effects (currently disabled)
- **ChalkDivider**: Visual divider component
- **NavReact**: Navigation component
- **ScrollEffects**: Scroll-triggered animations

## Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` branch
- **AWS S3**: Upload the `dist` folder

## About

This is the personal website of Lee Flannery - a solutions architect and full stack developer with 20+ years of experience building enterprise software.

## Contributing

This is a personal website, but if you spot any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
