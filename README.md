# Choi Seokhee (Samuel_Choi_Work) - Cinematic Portfolio

## Project Overview
A highly cinematic, dark-themed personal portfolio website built for a VFX Artist & Unreal Engine Cinematic Director. The project emphasizes atmospheric lighting, smooth animations, and premium visual aesthetics suitable for a top-tier visual artist.

## Tech Stack
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS + Custom CSS (`index.css`)
- **Animation**: Framer Motion
- **Icons**: Lucide React, react-icons
- **Deployment**: Cloudflare Pages (GitHub Actions auto-deployment via `main` branch)

## Key Features & Implementations
1. **Custom Lumen Cursor (`CustomCursor.jsx`)**
   - Removed standard trailing logic to match a subtle "Lumen GI" lighting effect.
   - pure CSS `radial-gradient` glow tracking the mouse.
   - Hover state expands the ring and intensifies the amber glow.
2. **Global Film Grain (`index.css`)**
   - SVG noise filter applied via `body::after` (`mix-blend-mode: overlay`, `opacity: 0.04`).
3. **Hero Section (`Hero.jsx`)**
   - Letterbox cinematic bars (8vh height, top and bottom).
   - Identity text ("SEOKHEE CHOI") with extreme literal spacing `tracking-[0.5em]`.
   - Floating Particles (`BackgroundParticles.jsx` added site-wide).
4. **Portfolio Section (`Portfolio.jsx` & `Works.jsx`)**
   - Video grids utilizing YouTube and ArtStation embeds (iframes).
   - Implemented cinematic numbering (01, 02...) over thumbnails (`opacity: 0.04` default, visible on hover).
   - 3-column masonry/grid layouts on large screens.
   - `AnimatePresence` used for smooth category filtering in the "Works" page.
5. **About & Contact (`AboutContact.jsx`)**
   - "Director's Cut" quotes with stylized left-border decorations.
   - Animated `.cinematic-divider` lines separating sections.
   - Glassmorphism contact cards (LinkedIn, ArtStation, Email) with dynamic hover colors.

## Data Structure
- `src/data/videos.js`: Contains an array of 50+ video objects.
  - Categories: Cinematic Trailer, In-game Cinematic, Combat & Action Sequence, Skill Presentation, Game Promo, Commercial / CF, Editing / VFX, VFX / Technical Art.
  - Contains YouTube embeds and native ArtStation video embeds.

## How to Work on this Project (AI Instructions)
- **Aesthetic Guidelines**: 
  - Strictly adhere to dark-mode (`#050505` background). 
  - Use `accent` (`#d97706` Amber) and `secondary-accent` (`#3b82f6` Blue) sparingly for glows and interactive hover states.
  - Maintain the "Cinematic" theme: high contrast, slow buttery transitions, subtle ambient glows, and minimal UI clutter.
- **Workflow**:
  - Run `npm run dev` for local dev.
  - Run `npm run build` to compile.
  - Commit to the `main` branch on GitHub (`origin`). Cloudflare Pages will automatically trigger a deployment.
- **Current Unresolved/Pending Tasks**:
  - 10 older videos from the original Wix site still need to be uploaded to YouTube as "Unlisted" and their embed links added to the bottom of `videos.js`.

**Version**: v2.1 (Cinematic Update + VFX Integrations)
