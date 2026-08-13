// Single source of truth for the site's line-art icon language — minimal
//24x24 SVGs (stroke="currentColor", no fill except small accent dots),
// matching the visual spec first established for the Panj Kakaar medallions
// below. Consumed both by kiosk.ts (interpolated into innerHTML templates)
// and by display-content.ts (assigned as `icon` field values), so every
// icon exists in exactly one place.

export const icons = {
  // Khanda — a double-edged blade inside the chakkar, flanked by two
  // crossed kirpans. Used for "Start Here" and the default theme.
  khanda:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="6.4"/><path d="M12 2c1.7 3.9 1.7 14.1 0 18-1.7-3.9-1.7-14.1 0-18z"/><path d="M5.2 18.6 13.6 5.4M4 17.3l2.5 2.6"/><path d="M18.8 18.6 10.4 5.4M20 17.3l-2.5 2.6"/></svg>',

  // Panj Pyare — an iron bowl (bata) with a khanda stirring into it,
  // referencing the Amrit Sanchar these five are remembered for, rather
  // than a generic pair of crossed swords.
  panjPyare:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 11.5c0 4.4 3.4 7.5 7.5 7.5s7.5-3.1 7.5-7.5"/><ellipse cx="12" cy="11.3" rx="7.5" ry="2.3"/><path d="M8 4.5 15 17"/><path d="M7 3.3l2 2.4M16 3.3l-2 2.4"/></svg>',

  // Panj Takht — a raised dais beneath a canopy (the literal meaning of
  // "takht"), deliberately with no dome or minaret. Replaces the mosque
  // emoji previously used for this concept in three places.
  panjTakht:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8 12 3 20 8"/><path d="M5.5 8v3M18.5 8v3"/><path d="M3 11h18"/><rect x="7" y="15" width="10" height="3" rx="0.6"/><path d="M4.5 21h15M5.5 18h13"/></svg>',

  // Home — a Nishan Sahib pennant on its pole.
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v18"/><path d="M6 4.5 17 8 6 11.5z"/><path d="M3.5 21h9"/></svg>',

  // Quiz — a question mark in a circular badge.
  quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.2 9.5a2.8 2.8 0 1 1 3.9 2.5c-.9.5-1.3 1-1.3 2.1"/><circle cx="12" cy="17.2" r="1" fill="currentColor" stroke="none"/></svg>',

  // Learn Sikhi — an open book.
  learn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5.5c-1.8-1.3-4-2-6.5-2v13c2.5 0 4.7.7 6.5 2 1.8-1.3 4-2 6.5-2v-13c-2.5 0-4.7.7-6.5 2z"/><path d="M12 5.5v13"/></svg>',

  // About — an info badge.
  about: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><circle cx="12" cy="7.6" r="1" fill="currentColor" stroke="none"/></svg>',

  // Resources — a globe with meridian lines.
  resources:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 2.8 15.4 0 18-2.8-2.6-2.8-15.4 0-18z"/></svg>',

  // Leaflets — a folded-corner document with text lines.
  leaflets:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v3h3"/><path d="M9 12h6M9 15.5h6M9 8.5h3"/></svg>',

  // Timeline — a clock face.
  timeline:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v5l3.5 2"/></svg>',

  // Speaker — replaces the raw 🔊 glyph on listen buttons and the
  // pronunciation-tip marker next to profile names.
  speaker:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9.5v5h3.5L13 19V5L7.5 9.5z"/><path d="M16.5 9a4.2 4.2 0 0 1 0 6M19 6.5a8 8 0 0 1 0 11"/></svg>',

  // Timeline category glyphs.
  categoryGuru:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17 6 8l4 4 2-6 2 6 4-4 2 9z"/><path d="M4 17h16"/></svg>',
  categoryMartyrdom:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2 3 3.2 5 3.2 7.5a3.2 3.2 0 1 1-6.4 0C8.8 8 10 6 12 3z"/><path d="M6 20h12"/></svg>',
  categoryBattle:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 18 6M6 22l-2-2 2-2M20 4l2 2-2 2"/><path d="M20 20 6 6M18 22l2-2-2-2M4 4 2 6l2 2"/></svg>',
  categoryPolitical:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4a2 2 0 0 0 0 4h13v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4z"/><path d="M17 8v10"/><path d="M8 11h6M8 14h6"/></svg>',
  categoryScripture:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v16H6.5A2.5 2.5 0 0 0 4 21z"/><path d="M4 5.5v15.5"/><path d="M9 3v7l2.5-1.8L14 10V3"/></svg>',
} as const;

// Minimal line-art medallion icons for the Panj Kakaar, in the fixed
// Kesh/Kangha/Kara/Kachhera/Kirpan order the content array is authored in.
// Abstract symbolism (a topknot, a comb's teeth, a bangle, a waistband, a
// blade) rather than literal photography — matches the icon language above
// and stays respectful of the articles' sanctity.
export const kakaarIcons: string[] = [
  // Kesh — the rishi/joora hair-knot: a coiled bun above the gathered hair
  // beneath it, the standard abstract shorthand for uncut, gathered hair.
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.5" r="4.5"/><path d="M12 6.3a2.4 2.4 0 0 1 1.8 3.9"/><path d="M7.5 20c.6-3 2.2-4.7 4.5-4.7s3.9 1.7 4.5 4.7"/></svg>',
  // Kangha — a wooden comb: rounded spine with five teeth.
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 5.2c0-.9.8-1.7 1.7-1.7h11.6c.9 0 1.7.8 1.7 1.7v3H4.5v-3z"/><path d="M6.2 8.2v10.6M9.1 8.2v10.6M12 8.2v10.6M14.9 8.2v10.6M17.8 8.2v10.6"/></svg>',
  // Kara — a single plain iron bangle with a subtle metallic highlight arc.
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="7.5"/><path d="M6.8 8a7.4 7.4 0 0 1 3.3-2.4" stroke-width="1.1" opacity="0.55"/></svg>',
  // Kachhera — a symmetric drawstring undergarment silhouette with a waistband.
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5h14v3.5c0 1-.3 2-.8 2.9L15.8 17.5h-2.2l-1.1-6-1.1 6H9.3L6.8 11.4c-.5-.9-.8-1.9-.8-2.9V5z"/><path d="M5 8.3h14"/></svg>',
  // Kirpan — a slightly curved single-edged blade with crossguard and hilt.
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.4 3c1.1 4.2.9 9-1.4 13.2"/><path d="M9.3 6.3h4.4"/><path d="M10.4 16.2h2.3l-.6 3.8h-1.1z"/></svg>',
];
