# Copilot Instructions for Next.js Dashboard Codebase

## Project Overview

- This is a Next.js 15+ App Router project using TypeScript, TailwindCSS, and NextAuth for authentication.
- The app is structured around the `/app` directory, with feature modules in subfolders (e.g., `dashboard`, `ui`, `lib`).
- Data is seeded and managed via Postgres, with seed logic in `app/seed/route.ts` and placeholder data in `app/lib/placeholder-data.ts`.

## Key Architectural Patterns

- **App Router:** Pages and layouts are defined in `app/`, using file-based routing. Server Components are default; use `"use client"` for Client Components.
- **UI Components:** Shared UI lives in `app/ui/` (e.g., `button.tsx`, `search.tsx`, `dashboard/cards.tsx`).
- **Data Layer:** Data fetching and utility logic is in `app/lib/` (e.g., `data.ts`, `utils.ts`).
- **Authentication:** Configured via `auth.config.ts` and integrated in `middleware.ts` (rename `proxy.ts` to `middleware.ts` for NextAuth to work).
- **Styling:** TailwindCSS is configured in `tailwind.config.ts` and used throughout UI components.

## Developer Workflows

- **Start Dev Server:** `pnpm dev`
- **Format Code:** `pnpm format` (uses Prettier, with Tailwind plugin)
- **Lint Code:** `pnpm lint` (requires ESLint v9+ flat config in `eslint.config.js` or `eslint.config.ts`)
- **Seed Database:** Visit `/seed` route to initialize Postgres tables and data.
- **Authentication:** Unauthenticated users are redirected to `/login` when accessing `/dashboard` (requires correct middleware setup).

## Project-Specific Conventions

- **File Naming:** Use `middleware.ts` for authentication logic; do not use `proxy.ts`.
- **Routing:** Use file-based routing in `app/`; avoid legacy `pages/` directory.
- **Component Structure:** Prefer colocating feature-specific components (e.g., `app/ui/invoices/` for invoice UI).
- **Environment Variables:** Store secrets in `.env` or `.env.local` (e.g., `POSTGRES_URL`).
- **TypeScript:** All logic and components use TypeScript; types are defined in `app/lib/definitions.ts`.

## Integration Points

- **Postgres:** Connection via `postgres` package; URL from env.
- **NextAuth:** Config in `auth.config.ts`, used in middleware for route protection.
- **TailwindCSS:** Used for all styling; Prettier plugin auto-sorts classes.

## Examples

- **Protecting Routes:** See `auth.config.ts` and `middleware.ts` for redirect logic.
- **Data Fetching:** See `app/lib/data.ts` for invoice/customer queries.
- **UI Patterns:** See `app/ui/dashboard/cards.tsx` and `app/ui/invoices/table.tsx` for component structure.

---

If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.
