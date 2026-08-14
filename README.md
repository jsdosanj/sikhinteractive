# Legacy of the Khalsa (gw-display)

A premium, bilingual (English/Punjabi), touch-first Astro + Tailwind + TypeScript experience exploring the Panj Pyare, the Panj Takht, the Ten Gurus, and Sikh history — deployed as a web app (Cloudflare Workers), an installable PWA, and an offline Android app.

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run validate`
- `npm run deploy` — build and deploy to Cloudflare Workers

## Structure

- `src/pages/` — one real Astro route per section (`/`, `/panj-pyare`, `/panj-takht`, `/learn-sikhi`, `/timeline`, `/quiz`, `/about`, `/resources`, `/leaflets`), each server-rendering real semantic content for crawlers/no-JS/screen readers before kiosk.ts hydrates it
- `src/components/KioskShell.astro` — the shared kiosk shell (ambient background, mount points, SSR fallback slot) every route wraps
- `src/scripts/kiosk.ts` — touch-first kiosk interactions and rendering; owns all client-side view logic
- `src/lib/routes.ts` — the View ↔ URL map used by the client-side router (pushState navigation + popstate)
- `src/lib/icons.ts` — the site's line-art SVG icon set
- `src/data/display-content.ts` — typed bilingual content and review metadata
- `src/data/prompt-manifest.ts` — typed master prompt manifest for Panj Pyare and Panj Takht artwork generation
- `src/lib/kiosk-state.ts` — kiosk state helpers with tests
- `src/styles/global.css` — Tailwind theme and premium display styling
- `docs/image-generation-handoff.md` — production handoff for image generation and naming

## Content workflow

New historical content (Guru summaries, storyline chapters, the curated timeline) is AI-drafted from verified sources and labeled as pending scholar review — the app surfaces this via an in-app notice — so summaries aren't presented as authoritative until a human review board approves them.

## Android app

The same experience is also packaged as an offline-first Android app via [Capacitor](https://capacitorjs.com) (`capacitor.config.ts`, `android/`) — `webDir` points directly at `dist/client`, the same static output Cloudflare Workers serves, so the packaged app is fully self-contained; no network connection is needed once installed.

`.github/workflows/android-build.yml` builds a debug-signed APK on every push to `main` and publishes it to a rolling `latest-apk` GitHub Release, so the in-app download link (`about.mobileApp` / `MOBILE_APP_APK_URL` in `kiosk.ts`) never needs to change between builds. It's debug-signed (Android's auto-generated keystore, zero setup) rather than release-signed — upgrading to a persistent release keystore is a one-time step for a maintainer with a local JDK (`keytool`), stored as `ANDROID_KEYSTORE_BASE64` / `ANDROID_KEYSTORE_PASSWORD` / `ANDROID_KEY_ALIAS` / `ANDROID_KEY_PASSWORD` repo secrets, not yet configured.

To build locally (requires Android Studio / the Android SDK + a JDK):

```sh
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug
```
