# DIGIGO E-SOFT Website

Marketing website for DIGIGO E-SOFT Electro Hydro Enhancer. Built with Next.js App Router, TailwindCSS, and shadcn/ui. Includes lead capture via Firebase Firestore, chatbot, and a video hero banner.

## Features
- Full marketing site with structured homepage content
- Applications, Projects, Government Projects, Clients, Impact & Savings
- Lead capture API at /api/lead (Firestore)
- Video banner (YouTube embed) on homepage
- Responsive, neon-industrial visual theme

## Stack
- Next.js App Router (TypeScript)
- TailwindCSS 3.4
- shadcn/ui (Radix primitives)
- Firebase Firestore for lead capture

## Local Development
Windows (PowerShell):
```bash
npm.cmd install
npm.cmd run dev -- --hostname 127.0.0.1 --port 3000
```

Other shells:
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment
Create .env.local from .env.example and add Firebase keys:
```bash
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
LEADS_ENABLED=false
NEXT_PUBLIC_LEADS_ENABLED=false
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Lead capture is stored in Firestore collection: leads
Endpoint: /api/lead

## Scripts
```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Docker
```bash
docker compose up --build
```

Notes:
- Uses .env.local if present
- Requires Docker Desktop to be running

## Content and Routes
Key pages:
- / (Homepage)
- /technology
- /applications
- /applications/agriculture
- /applications/residential
- /applications/commercial
- /applications/industrial
- /applications/hospitals
- /projects
- /government-projects
- /clients
- /impact
- /impact-savings
- /faq
- /contact
- /get-quote
- /privacy-policy
- /terms-of-service
- /sitemap

## Video Banner
Video hero is defined in:
- app/page.tsx

Current embed:
```txt
https://www.youtube-nocookie.com/embed/7ti-za3dlao
```

To replace with another YouTube video, change the video id and keep the loop params:
```txt
?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0&modestbranding=1&rel=0
```

To use a local MP4 instead:
1) Place video at public/hero.mp4
2) Replace the iframe with a <video> tag and set src="/hero.mp4"

## Structure
- app/            Next.js routes and layout
- components/     UI components and forms
- content/        MDX knowledge content
- lib/            Firebase and helpers
- public/         Static assets

## Deploy (Hostinger Business via Git)
Prerequisites:
- Hostinger Business plan with Node.js Web Apps enabled
- GitHub repository connected in Hostinger hPanel
- Node.js version set to 20.x in Hostinger

Build and run configuration in Hostinger:
- Install command: `npm install`
- Build command: `npm run build`
- Start command: `npm run start`

Environment variables to set in Hostinger:
- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`
- `LEADS_ENABLED=true`
- `NEXT_PUBLIC_LEADS_ENABLED=true`
- `NEXT_PUBLIC_SITE_URL=https://your-domain.com`

Git-based release flow:
1. Push changes to your GitHub branch.
2. Trigger redeploy from Hostinger hPanel for that branch.
3. Verify `/`, `/contact`, `/pricing`, and a lead form submission.

## Notes
- Analytics placeholder script lives in app/layout.tsx
- Replace placeholder PDFs in public/ if needed
