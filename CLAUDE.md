# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Remix-based Medicare insurance website for Arizona residents. The site provides information about Medicare Advantage, Medicare Supplement, and Part D prescription plans, with SEO optimization for local Arizona searches.

## Development Commands

### Essential Commands
```bash
npm run dev          # Start development server (typically runs on port 5179)
npm run build        # Create production build
npm run start        # Run production server
npm run lint         # Run ESLint checks
```

### Common Development Tasks
```bash
npm install          # Install dependencies after cloning or pulling changes
npm run build && npm run start  # Test production build locally
```

## Architecture Overview

### Framework Stack
- **Remix** (React Router v7) - Full-stack React framework with SSR
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - No TypeScript, pure JavaScript/JSX

### Project Structure
The application follows Remix conventions:
- `app/root.jsx` - Root layout with SEO meta tags, structured data, and HTML shell
- `app/routes/` - File-based routing where each file becomes a route
- `app/entry.client.jsx` - Client-side hydration entry point
- `app/entry.server.jsx` - Server-side rendering with bot detection
- `public/` - Static assets served directly

### Key Architectural Decisions

1. **SEO-First Design**: The root layout includes comprehensive meta tags, Open Graph data, Schema.org structured data for medical business, and geographic targeting for Arizona.

2. **Route Structure**: Currently single-page application with planned expansion to:
   - `/medicare-advantage`
   - `/medicare-supplement`
   - `/part-d`
   - `/[city]-medicare` (city-specific pages)

3. **Styling Approach**: Tailwind CSS with custom configuration, using Inter font family. Dark mode support is configured but not actively used.

4. **Server-Side Rendering**: Bot detection using `isbot` library to optimize SSR for search engines vs regular users.

## Important Configuration Files

- `vite.config.js` - Remix Vite plugin with future flags enabled (v3_singleFetch, v3_lazyRouteDiscovery, etc.)
- `tailwind.config.js` - Content paths and custom font configuration
- `.eslintrc.cjs` - React and accessibility linting rules

## Development Notes

- The app runs as a standard Remix application with file-based routing
- All routes export a `meta` function for page-specific SEO
- The sitemap is dynamically generated at `/sitemap.xml`
- Contact forms are UI-only (no backend integration yet)
- The site targets all 15 Arizona counties with localized content

## Testing
No testing framework is currently configured. When adding tests, consider installing Vitest or Jest with React Testing Library for component testing.

## Deployment
The production build creates server and client bundles in the `/build` directory. The app can be deployed to any Node.js hosting platform that supports Remix applications.