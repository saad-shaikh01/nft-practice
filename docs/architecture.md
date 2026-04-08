# Architecture

## Goal
This boilerplate is optimized for premium animated landing pages built on the Next.js App Router. The structure favors fast iteration, section-level reuse, and a clean separation between UI primitives, motion wrappers, and page-level composition.

## Structure
- `app/`: routing, metadata, and global composition entrypoints.
- `docs/`: architecture, style guidance, and active implementation tickets.
- `src/components/ui/`: reusable low-level layout and interface primitives.
- `src/components/sections/`: self-contained landing page sections such as Hero and Features.
- `src/components/animations/`: shared motion wrappers and animation helpers.
- `src/lib/`: utility helpers, constants, and shared content data.

## Composition Rules
- Pages compose sections; sections compose UI primitives and animation wrappers.
- Motion behavior should be abstracted into shared wrappers before creating section-specific animation code.
- Theme decisions should be driven by shared Tailwind tokens and CSS variables, not ad-hoc class values.
