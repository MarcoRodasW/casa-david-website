---
trigger: always_on
---

## Project Overview
This is an Astro-based website using Preact for interactive components and TailwindCSS v4 for styling. The project uses Bun as the package manager and follows a component-based architecture with `.astro` files for static content and `.tsx` files for interactive components.
This Website is for Casa de David church on Puerto Cortes, Honduras.


## General Rules

- Always use context7 when I need code generation, setup or configuration steps, or
library/API documentation. This means you should automatically use the Context7 MCP
tools to resolve library id and get library docs without me having to explicitly ask.
- Always look in `global.css` file for color variables and use them instead of hardcoding colors (create new color variables if needed)
- Always enforce good quality code and best practices

## Tech Stack
- **Framework**: Astro 5.13.9
- **UI Library**: Preact 10.27.2 with @astrojs/preact integration
- **Styling**: TailwindCSS 4.1.13 (via @tailwindcss/vite)
- **Package Manager**: Bun
- **TypeScript**: Strict mode enabled
- **Fonts**: Google Fonts (Inter) via Astro's experimental font provider

## Code Style & Formatting

### General Rules
- Use **Prettier** for all formatting with the following plugins:
  - `prettier-plugin-astro`
  - `prettier-plugin-tailwindcss`
- Print width: **60 characters** for both `.astro` and `.tsx` files
- Always run Prettier before committing code

### File Organization
```
src/
├── components/     # Reusable UI components (.astro and .tsx)
├── layouts/        # Page layouts (.astro)
├── lib/            # Shared utilities and types
└── pages/          # Route pages (.astro)
public/
└── assets/         # Static assets (images, etc.)
```

## Component Guidelines

### Astro Components (.astro)
- Use for **static content** and page layouts
- Prefer Astro components when no client-side interactivity is needed
- Keep components focused and single-responsibility
- Use TypeScript for props interfaces
- Example structure:
  ```astro
  ---
  interface Props {
    title: string;
  }
  const { title } = Astro.props;
  ---
  <div>{title}</div>
  ```

### Preact Components (.tsx)
- Use for **interactive components** requiring state or effects
- Import hooks from `preact/hooks` (not `react`)
- Use `class` attribute instead of `className` (Preact convention)
- Always export as default: `export default function ComponentName()`
- Keep components in `src/components/` directory
- Example structure:
  ```tsx
  import { useState, useEffect } from "preact/hooks";
  
  export default function Component() {
    const [state, setState] = useState(false);
    return <div class="...">Content</div>;
  }
  ```

### Component Naming
- Use **PascalCase** for component files: `Navigation.tsx`, `Hero.astro`
- Use **descriptive names** that reflect the component's purpose
- Suffix interactive components with their type when ambiguous

## TypeScript Guidelines

### Configuration
- Extend `astro/tsconfigs/strict` for strict type checking
- JSX configuration:
  - `jsx: "react-jsx"`
  - `jsxImportSource: "preact"`

### Type Definitions
- Store shared types in `src/lib/types.ts`
- Use interfaces for props and data structures
- Export types that are used across multiple components
- Example:
  ```typescript
  export interface NavigationItem {
    name: string;
    href: string;
    show: boolean;
  }
  ```

## Styling Guidelines

### TailwindCSS v4
- Use **utility-first** approach
- Leverage TailwindCSS v4 features via `@tailwindcss/vite` plugin
- Use **template literals** for dynamic classes
- Use TailwindCSS theme variables for consistent styling
- Group related utilities together
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Use state variants: `hover:`, `focus:`, `active:`

### Dynamic Classes
- Use template literals for conditional styling:
  ```tsx
  class={`base-classes ${condition ? "true-classes" : "false-classes"}`}
  ```
- Keep class strings readable (break into multiple lines if needed)

### Color Scheme
- Use semantic color names when possible
- Maintain consistency with the church branding
- Use opacity modifiers for overlays: `bg-black/30`

### Transitions
- Use `transition-all duration-300` for smooth animations
- Apply transitions consistently across similar components
- Consider performance for frequently changing states

## State Management

### Component State
- Use `useState` from `preact/hooks` for local state
- Keep state as close to where it's used as possible
- Avoid prop drilling; consider context for deeply nested state

### Side Effects
- Use `useEffect` from `preact/hooks` for side effects
- Always clean up event listeners and subscriptions
- Example:
  ```tsx
  useEffect(() => {
    const handler = () => { /* ... */ };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  ```

## Asset Management

### Images
- Store images in `public/assets/`
- Use descriptive filenames: `church_logo.jpg`, `church_hero_image.jpg`
- Reference with absolute paths: `/assets/image.jpg`
- Always include `alt` attributes for accessibility
- Use appropriate image formats (JPG for photos, PNG for graphics, SVG for icons)

### Optimization
- Optimize images before adding to the project
- Consider using Astro's image optimization features for production

## Performance Best Practices

### Component Loading
- Use `client:load` directive sparingly for Preact components
- Prefer `client:visible` for below-the-fold interactive components
- Use `client:idle` for non-critical interactive components
- Default to no client directive (static rendering) when possible

### Bundle Size
- Import only what you need from libraries
- Avoid large dependencies when smaller alternatives exist
- Use code splitting for large features

## Accessibility

### Semantic HTML
- Use proper HTML5 semantic elements: `<nav>`, `<header>`, `<main>`, `<footer>`
- Use heading hierarchy correctly: `<h1>` → `<h2>` → `<h3>`
- Use `<button>` for actions, `<a>` for navigation

### ARIA & Alt Text
- Always provide `alt` text for images
- Use ARIA labels when semantic HTML isn't sufficient
- Ensure keyboard navigation works for all interactive elements

### Focus States
- Always style `:focus` states for interactive elements
- Use `focus-visible:` for better UX
- Test keyboard navigation regularly

## Git & Version Control

### Commit Messages
- Use conventional commits format:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `style:` for formatting changes
  - `refactor:` for code refactoring
  - `docs:` for documentation
  - `chore:` for maintenance tasks

### Branches
- Use descriptive branch names: `feature/navigation`, `fix/hero-image`
- Keep branches focused on single features or fixes

## Development Workflow

### Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run preview` - Preview production build

### Before Committing
1. Run Prettier to format code
2. Check for TypeScript errors
3. Test in development mode
4. Verify responsive design on different screen sizes
5. Check browser console for errors

## Testing & Quality Assurance

### Manual Testing
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test responsive design at various breakpoints
- Verify all navigation links work correctly
- Check image loading and alt text
- Test interactive components (scroll effects, etc.)

### Performance
- Check Lighthouse scores regularly
- Optimize images and assets
- Monitor bundle size
- Test on slower network connections

## Content Guidelines

### Church-Specific Considerations
- Maintain a welcoming and inclusive tone
- Ensure content is family-friendly
- Use clear, accessible language
- Prioritize important information (service times, location, contact)
- Keep navigation simple and intuitive

### SEO
- Use descriptive page titles
- Include meta descriptions
- Use proper heading hierarchy
- Optimize images with descriptive filenames and alt text

## Common Patterns

### Navigation Component
- Fixed positioning with scroll-based styling changes
- Smooth transitions between states
- Responsive design with mobile considerations
- Logo linking to home section

### Hero Sections
- Full-width background images
- Overlay text with good contrast
- Call-to-action buttons prominently displayed
- Responsive typography

### Section Layouts
- Consistent spacing using Tailwind utilities
- Container classes for max-width and centering
- Padding for mobile responsiveness

## Troubleshooting

### Common Issues
- **Preact hooks not working**: Ensure imports are from `preact/hooks`, not `react`
- **Styles not applying**: Check TailwindCSS v4 configuration in `astro.config.mjs`
- **TypeScript errors**: Verify `jsxImportSource` is set to `preact` in `tsconfig.json`
- **Component not interactive**: Add appropriate `client:*` directive to Preact components in Astro files
