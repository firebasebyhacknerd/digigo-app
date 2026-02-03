# DIGIGO Technology Website (Next.js + Tailwind + shadcn/ui)

## Stack
- Next.js App Router (TypeScript)
- TailwindCSS 3.4
- shadcn/ui primitives (Radix)
- Firebase Firestore for lead capture
- MDX-ready content loader (simple TS content list)

## Getting Started
`ash
npm install
npm run dev
`
Site runs on http://localhost:3000.

## Environment
Create .env.local from .env.example:
`
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
`
Create a Firestore database (production mode), then set security rules as appropriate. Leads are stored in collection leads via /api/lead.

## Build
`ash
npm run build
npm run start
`

## Deploy to Firebase Hosting
1) Install Firebase CLI: 
pm install -g firebase-tools
2) irebase login
3) irebase init hosting (use dist not needed; select pp/SSR -> choose Next.js)
4) Ensure .env.production contains Firebase keys.
5) 
pm run build
6) irebase deploy --only hosting

## Structure
- pp/ pages (home, technology, applications, pricing, case-studies, about, contact, knowledge, privacy, terms)
- components/ reusable UI and forms
- content/knowledge/ article stubs
- lib/firebase.ts Firestore init
- pp/api/lead/route.ts lead capture endpoint with basic rate-limit placeholder

## Notes
- GA/GTM placeholder script in pp/layout.tsx.
- Downloadable PDFs are placeholders in public/ (replace with real documents).
- Styling uses dark industrial theme with neon accents.
