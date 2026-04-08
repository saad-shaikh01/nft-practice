# Agent Guidelines

## Hard Rules

### Performance
- Use the Next.js `Image` component for all raster imagery.
- Dynamically import heavy 3D, WebGL, or Lottie assets.
- Use optimized fonts through `next/font`.

### Animations
- Use Framer Motion as the primary animation engine.
- Default to `easeOut` transitions unless a ticket explicitly defines another easing curve.

### Clean Code
- Use functional components only.
- Keep TypeScript `strict` mode enabled.
- Do not use inline styles. Use Tailwind utility classes only.

### Scalability
- Every landing page section must live in its own component under `src/components/sections`.
