import type { CapacitorConfig } from '@capacitor/cli';

// Points directly at the Cloudflare adapter's static client output —
// kiosk.ts already renders the entire UI client-side, so `dist/client`
// (the same folder Wrangler serves as static assets) is already a
// complete, self-contained site with nothing server-rendered that the
// packaged app needs at runtime. The two live analytics API routes
// (src/pages/api/*) aren't part of this folder; calls to them are
// already defensive/best-effort (see sendAnalyticsPing in kiosk.ts) and
// simply no-op when offline.
const config: CapacitorConfig = {
  appId: 'io.sikhinteractive.legacyofthekhalsa',
  appName: 'Legacy of the Khalsa',
  webDir: 'dist/client',
  android: {
    allowMixedContent: false,
  },
};

export default config;
