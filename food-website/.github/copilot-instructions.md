# AI Agent Instructions for Food Website Project

## Project Overview
This is a React + TypeScript project built with Vite, focusing on a food-related website. The project uses modern tooling and practices including:
- React 19.x with TypeScript
- Vite 7.x for build tooling
- TailwindCSS 4.x for styling
- Framer Motion for animations

## Architecture & Structure
- `/src`: Main application source code
  - `App.tsx`: Root component
  - `main.tsx`: Application entry point
  - `assets/`: Static assets

## Development Workflow

### Getting Started
1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

### Available Scripts
- `npm run dev`: Start development server with HMR
- `npm run build`: Build for production (runs TypeScript build first)
- `npm run lint`: Run ESLint checks
- `npm run preview`: Preview production build locally

## TypeScript Configuration
The project uses a split TypeScript configuration:
- `tsconfig.json`: Root config with project references
- `tsconfig.app.json`: Application-specific settings
- `tsconfig.node.json`: Node.js environment settings

## ESLint & Code Quality
- Type-aware ESLint rules are used for enhanced code quality
- Configured for strict type checking and React-specific rules
- See `eslint.config.js` for detailed linting configuration

## Styling Patterns
- TailwindCSS is used for styling
- CSS modules can be used for component-specific styles
- Animations should use Framer Motion for consistency

## Performance Considerations
- React Compiler is not enabled by default due to performance impact
- Use dynamic imports for code splitting where appropriate
- Leverage Vite's built-in optimizations

## Important Notes
- Keep node_modules up to date as the project uses bleeding-edge versions
- Mind TypeScript strict mode when making changes
- Use Vite's HMR capabilities for faster development