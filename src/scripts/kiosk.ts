import QRCode from 'qrcode';
import { initPressFeedback, observeReveals, transitionRender } from './animate';
import type { TransitionType } from './animate';
import { createRotator } from './banner';
import type { Rotator } from './banner';
import { initAmbient, retintForTheme, setAmbientMode } from './ambient';
import { icons, kakaarIcons } from '../lib/icons';
import { VIEW_PATHS, viewForPath } from '../lib/routes';
import displayContent from '../data/display-content';
import {
  advanceQuiz,
  backToQuizLevels,
  closePyaraStoryline,
  closeTakhtStoryline,
  createInitialState,
  getActiveQuizQuestions,
  getQuizScore,
  isQuizComplete,
  navigate,
  resetForInactivity,
  restartQuiz,
  selectPyara,
  selectQuizLevel,
  selectTakht,
  setLanguage,
  setTheme,
  setTimelineFilter,
  startQuiz,
  stepPyaraChapter,
  stepTakhtChapter,
  submitQuizAnswer,
  wakeKiosk,
} from '../lib/kiosk-state';
import type { KioskState, TimelineFilter } from '../lib/kiosk-state';
import type {
  DisplayContent,
  HomeFeature,
  Language,
  LocalizedText,
  PanjPyaraProfile,
  QuizLevel,
  QuizQuestion,
  TakhtProfile,
  View,
} from '../types/display';

const content: DisplayContent = displayContent;

// Astro's configured base path (see astro.config.mjs — "/" for this
// Cloudflare deployment) prefixed onto content data's root-relative asset
// paths like "/assets/images/x.jpeg". Without this, every image 404s
// whenever base isn't "/" — reproduced and confirmed against a live server.
const BASE_URL = import.meta.env.BASE_URL;

function asset(path: string): string {
  return `${BASE_URL.replace(/\/$/, '')}${path}`;
}

document.documentElement.style.setProperty('--fresco-bg-url', `url('${asset('/assets/images/sikh-fresco-·-restoration-3-restored.png')}')`);

function requireElement(id: string): HTMLElement {
  const element = document.getElementById(id);

  if (!element) {
    throw new Error(`Missing required kiosk element: ${id}`);
  }

  return element;
}

const attractScreen = requireElement('attract-screen');
const mainShell = requireElement('main-shell');
const header = requireElement('app-header');
const viewContent = requireElement('view-content');
const bottomNav = requireElement('bottom-nav');
const viewAnnouncer = requireElement('view-announcer');

let state = createInitialState(content);

const ALL_VIEWS: View[] = ['home', 'pyare', 'takhts', 'quiz', 'learn', 'about', 'resources', 'leaflets', 'timeline'];
function isView(value: string | undefined | null): value is View {
  return value != null && (ALL_VIEWS as string[]).includes(value);
}

// Honor the manifest's home-screen app shortcuts (long-press the installed
// icon on Android/iOS to jump straight to Quiz or Learn Sikhi) by reading
// the ?shortcut= query param the OS launches the app with.
const shortcutTarget = new URLSearchParams(window.location.search).get('shortcut');
if (shortcutTarget === 'quiz' || shortcutTarget === 'learn') {
  state = navigate(wakeKiosk(state), shortcutTarget);
  window.history.replaceState(null, '', window.location.pathname);
} else {
  // Each routed page (see src/components/KioskShell.astro) sets
  // #app-root's data-initial-view to the section it server-rendered a
  // fallback for — boot straight into that section, same pattern as the
  // shortcut handling above, just generalized to every route.
  const initialView = document.getElementById('app-root')?.dataset.initialView;
  if (isView(initialView) && initialView !== 'home') {
    state = navigate(wakeKiosk(state), initialView);
  }
}
let inactivityTimer = 0;
let langMenuOpen = false;
let themeMenuOpen = false;
let openFaqIndex: number | null = null;
let hasCelebratedPerfect = false;
let resourceCarouselIndex = 0;
let resourceCarouselTimer = 0;
const qrDataUrls: Record<string, string> = {};

// Stable download link for the companion Android app (jsdosanj/gw-display-mobile).
// This is a GitHub Releases "rolling tag" URL — the mobile repo's CI
// republishes the latest-apk release's asset on every push to its main
// branch, so this URL never needs to change here even as new builds ship.
const MOBILE_APP_APK_URL = 'https://github.com/jsdosanj/gw-display-mobile/releases/download/latest-apk/legacy-of-the-khalsa.apk';

// Rotating crossfade banners (Phase 3) — the attract screen rotates
// unconditionally while asleep (any touch wakes the kiosk, which is itself
// the "pause"); the Home hero rotates only while its visible pause/play
// toggle allows it, per WCAG 2.2.2, with that choice persisted across
// re-renders since the DOM (and any live rotator instance) is rebuilt fresh
// every render() call.
let attractRotator: Rotator | null = null;
let homeRotator: Rotator | null = null;
let homeRotatorPaused = false;

// "Add to home screen" nudge — a personal phone visitor gets a native app
// icon and chrome-less standalone window; a gurdwara kiosk stays exactly as
// installed once. Dismissal is remembered per-browser so it only asks once.
const INSTALL_DISMISSED_KEY = 'khalsa-display-install-dismissed';
let deferredInstallPrompt: Event | null = null;

function isStandaloneDisplay(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  );
}

function isIosSafari(): boolean {
  const ua = window.navigator.userAgent;
  return /iPhone|iPad|iPod/.test(ua) && /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
}

function installBannerDismissed(): boolean {
  try {
    return window.localStorage.getItem(INSTALL_DISMISSED_KEY) === 'true';
  } catch {
    return false;
  }
}

function shouldShowInstallBanner(): boolean {
  if (isStandaloneDisplay() || installBannerDismissed()) {
    return false;
  }
  return deferredInstallPrompt !== null || isIosSafari();
}

const journeyViews: View[] = ['pyare', 'takhts', 'quiz', 'learn', 'about', 'resources', 'leaflets'];
const visitedViews = new Set<View>();

async function initQrCodes(): Promise<void> {
  for (const site of content.resources.sites) {
    try {
      qrDataUrls[site.id] = await QRCode.toDataURL(site.url, {
        width: 120,
        margin: 1,
        color: { dark: '#f7d989', light: '#050b14' },
      });
    } catch {
      qrDataUrls[site.id] = '';
    }
  }

  try {
    qrDataUrls['mobile-app'] = await QRCode.toDataURL(MOBILE_APP_APK_URL, {
      width: 120,
      margin: 1,
      color: { dark: '#f7d989', light: '#050b14' },
    });
  } catch {
    qrDataUrls['mobile-app'] = '';
  }

  if (state.awake && (state.view === 'resources' || state.view === 'leaflets' || state.view === 'about')) {
    renderView();
  }
}

void initQrCodes().then(() => {
  if (state.awake && (state.view === 'resources' || state.view === 'leaflets' || state.view === 'about')) {
    renderView();
  }
});

const viewIcons: Record<View, string> = {
  home: icons.home,
  pyare: icons.panjPyare,
  takhts: icons.panjTakht,
  quiz: icons.quiz,
  learn: icons.learn,
  about: icons.about,
  resources: icons.resources,
  leaflets: icons.leaflets,
  timeline: icons.timeline,
};

function text(value: LocalizedText, language = state.language): string {
  return value[language] ?? value.en;
}

function classForLanguage(language = state.language): string {
  return language === 'pa' ? 'gurmukhi' : '';
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

const speechLangCodes: Record<Language, string> = {
  en: 'en-US',
  pa: 'pa-IN',
  hi: 'hi-IN',
  es: 'es-ES',
  ar: 'ar-SA',
};

const timelineCategoryLabels: Record<TimelineFilter, LocalizedText> = {
  all: { en: 'All', pa: 'ਸਾਰੇ' },
  guru: { en: 'Guru', pa: 'ਗੁਰੂ' },
  martyrdom: { en: 'Martyrdom', pa: 'ਸ਼ਹੀਦੀ' },
  battle: { en: 'Battle', pa: 'ਜੰਗ' },
  political: { en: 'Political', pa: 'ਰਾਜਨੀਤਿਕ' },
  scripture: { en: 'Scripture', pa: 'ਗ੍ਰੰਥ' },
  massacre: { en: 'Massacre', pa: 'ਘੱਲੂਘਾਰਾ' },
};

const timelineCategoryIcons: Partial<Record<TimelineFilter, string>> = {
  guru: icons.categoryGuru,
  martyrdom: icons.categoryMartyrdom,
  battle: icons.categoryBattle,
  political: icons.categoryPolitical,
  scripture: icons.categoryScripture,
};

function showTtsNotice(buttonEl: HTMLElement, message: string): void {
  buttonEl.parentElement?.querySelector('.tts-notice')?.remove();
  const notice = document.createElement('p');
  notice.className = 'tts-notice';
  notice.setAttribute('role', 'status');
  notice.textContent = message;
  buttonEl.insertAdjacentElement('afterend', notice);
  window.setTimeout(() => notice.remove(), 5000);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface TtsWordSpan {
  el: HTMLElement;
  start: number;
}

// Lazily wraps a paragraph's text into per-word spans the first time speech
// starts on it (cached via data-tts-wrapped so replays don't re-wrap), each
// tagged with its character offset in the original string so utterance
// 'boundary' events (which report a charIndex, not a word index) can be
// mapped back to the right span.
function wrapWordsForHighlight(paragraph: HTMLElement): TtsWordSpan[] {
  if (paragraph.dataset.ttsWrapped === 'true') {
    return Array.from(paragraph.querySelectorAll<HTMLElement>('.tts-word')).map((el) => ({
      el,
      start: Number(el.dataset.start ?? 0),
    }));
  }

  const original = paragraph.textContent ?? '';
  let html = '';
  let lastIndex = 0;
  const wordPattern = /\S+/g;
  let match: RegExpExecArray | null = wordPattern.exec(original);
  while (match !== null) {
    html += escapeHtml(original.slice(lastIndex, match.index));
    html += `<span class="tts-word" data-start="${match.index}">${escapeHtml(match[0])}</span>`;
    lastIndex = match.index + match[0].length;
    match = wordPattern.exec(original);
  }
  html += escapeHtml(original.slice(lastIndex));

  paragraph.innerHTML = html;
  paragraph.dataset.ttsWrapped = 'true';

  return Array.from(paragraph.querySelectorAll<HTMLElement>('.tts-word')).map((el) => ({
    el,
    start: Number(el.dataset.start ?? 0),
  }));
}

let activeTtsButton: HTMLElement | null = null;
let activeTtsWords: TtsWordSpan[] = [];
let ttsBoundaryFallbackTimer = 0;

function clearTtsWordHighlight(): void {
  activeTtsWords.forEach((word) => word.el.classList.remove('tts-word--active'));
}

function stopActiveTtsVisuals(): void {
  window.clearTimeout(ttsBoundaryFallbackTimer);
  if (activeTtsButton) {
    // Harmless if the button was detached by a re-render since — setting a
    // dataset property on a disconnected node is a silent no-op visually.
    activeTtsButton.dataset.speaking = 'false';
  }
  clearTtsWordHighlight();
  activeTtsButton = null;
  activeTtsWords = [];
}

function speakText(value: string, language: Language, buttonEl: HTMLElement): void {
  if (!('speechSynthesis' in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  stopActiveTtsVisuals();

  const voices = window.speechSynthesis.getVoices();
  const matchingVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith(language));

  // English works reliably everywhere; Punjabi voices are not installed on
  // most devices, so tell the visitor instead of speaking with the wrong
  // language's pronunciation rules.
  if (language === 'pa' && !matchingVoice) {
    showTtsNotice(buttonEl, text(content.ui.labels.ttsNoPunjabiVoice));
    return;
  }

  const utterance = new SpeechSynthesisUtterance(value);
  utterance.lang = speechLangCodes[language];
  if (matchingVoice) {
    utterance.voice = matchingVoice;
  }

  buttonEl.dataset.speaking = 'true';
  activeTtsButton = buttonEl;

  const blockId = buttonEl.dataset.ttsBlock;
  const sourceParagraph = blockId ? document.querySelector<HTMLElement>(`[data-tts-source="${blockId}"]`) : null;

  if (sourceParagraph) {
    activeTtsWords = wrapWordsForHighlight(sourceParagraph);

    // Boundary event support varies by platform/voice — if none fires
    // shortly after speech starts, silently fall back to equalizer-only
    // rather than leaving word spans permanently unhighlighted.
    let boundaryFired = false;
    ttsBoundaryFallbackTimer = window.setTimeout(() => {
      if (!boundaryFired) {
        activeTtsWords = [];
      }
    }, 1200);

    utterance.onboundary = (event) => {
      if (event.name && event.name !== 'word') {
        return;
      }
      boundaryFired = true;
      window.clearTimeout(ttsBoundaryFallbackTimer);
      clearTtsWordHighlight();
      let active: TtsWordSpan | null = null;
      for (const word of activeTtsWords) {
        if (word.start <= event.charIndex) {
          active = word;
        } else {
          break;
        }
      }
      active?.el.classList.add('tts-word--active');
    };
  }

  utterance.onend = () => {
    if (activeTtsButton === buttonEl) {
      stopActiveTtsVisuals();
    }
  };
  utterance.onerror = utterance.onend;

  window.speechSynthesis.speak(utterance);
}

function renderListenButton(payload: LocalizedText, blockId: string): string {
  const value = text(payload);
  const label = text(content.ui.labels.ttsListen);
  return `
    <button type="button" class="listen-btn" data-tts-text="${escapeAttr(value)}" data-tts-lang="${state.language}" data-tts-block="${blockId}" aria-label="${label}">
      <span class="listen-btn__icon" aria-hidden="true">${icons.speaker}</span>
      <span class="listen-btn__eq" aria-hidden="true"><span></span><span></span><span></span></span>
      <span class="${classForLanguage()}">${label}</span>
    </button>
  `;
}

function applyDocumentDirection(language: Language): void {
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
}

function applyDocumentTheme(current: KioskState): void {
  const palette = content.themes.find((theme) => theme.id === current.themeId)?.palette ?? 'default';
  if (palette === 'default') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.dataset.theme = palette;
  }
  // Starfield sprite color is baked at draw time (perf, see ambient.ts), so
  // it needs an explicit retint on theme change — everything else re-tints
  // automatically via the --color-gold-*/--color-accent-secondary variables.
  const gold300 = getComputedStyle(document.documentElement).getPropertyValue('--color-gold-300');
  retintForTheme(gold300);
}

const attractBannerImages = [
  '/assets/images/IMG_3198.jpeg',
  '/assets/images/IMG_3199.jpeg',
  '/assets/images/IMG_8284.jpeg',
  '/assets/images/sikh-fresco-·-restoration-3-restored.png',
];

const homeBannerImages = ['/assets/images/IMG_8284.jpeg', '/assets/images/IMG_3199.jpeg'];

function renderAttract(): void {
  attractScreen.innerHTML = `
    <div class="relative flex h-screen items-center justify-center overflow-hidden px-6 py-12">
      <div class="hero-rotator absolute inset-0" id="attract-rotator" style="--rotator-dwell:8000ms;">
        ${attractBannerImages
          .map(
            (src, index) => `
              <div class="hero-rotator__slide" data-rotator-slide data-active="${index === 0}" style="background-image:url('${asset(src)}');"></div>
            `,
          )
          .join('')}
      </div>
      <div class="absolute inset-0 bg-night-950/80"></div>
      <div class="attract-halo absolute h-[32rem] w-[32rem] rounded-full bg-gold-400/18 blur-3xl"></div>
      <div class="float-slow absolute left-[12%] top-[18%] h-32 w-32 rounded-full blur-3xl" style="background: color-mix(in srgb, var(--color-accent-secondary) 12%, transparent);"></div>
      <div class="float-delay absolute bottom-[18%] right-[10%] h-44 w-44 rounded-full bg-gold-300/10 blur-3xl"></div>
      <div class="soft-grid absolute inset-0 opacity-25"></div>
      <p class="ik-onkar-motif absolute left-1/2 top-[8%] -translate-x-1/2 text-7xl text-gold-300/90 md:text-8xl" aria-hidden="true">ੴ</p>
      <div class="glass-panel cinematic-fade relative z-10 flex w-full max-w-5xl flex-col gap-8 overflow-hidden px-8 py-10 md:px-14 md:py-14">
        <div class="flex items-center justify-between gap-6">
          <div>
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">${text(content.ui.attractEyebrow)}</p>
            <h1 class="title-gradient text-4xl font-semibold md:text-6xl ${classForLanguage()}">${text(content.ui.attractTitle)}</h1>
          </div>
          <div class="khanda-medallion hidden h-24 w-24 items-center justify-center rounded-full border border-gold-300/40 bg-gold-400/10 text-5xl text-gold-300 md:flex">
            <span class="khanda-medallion__sheen" aria-hidden="true"></span>
            <span class="khanda-medallion__glyph" aria-hidden="true">☬</span>
          </div>
        </div>
        <div class="grid gap-8 md:grid-cols-[1.4fr_0.9fr]">
          <div>
            <p class="max-w-3xl text-lg leading-8 text-cloud-200 md:text-2xl ${classForLanguage()}">${text(content.ui.attractSubtitle)}</p>
            <div class="mt-8 flex flex-wrap items-center gap-4 text-sm text-cloud-400">
              <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">${text(content.sections.pyare.title)}</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">${text(content.sections.takhts.title)}</span>
              <span class="rounded-full border border-white/10 bg-white/5 px-4 py-2">${text(content.sections.quiz.title)}</span>
            </div>
          </div>
          <div class="glass-panel flex flex-col justify-between gap-5 p-6">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">${text(content.ui.labels.collaborationWith)}</p>
              <p class="mt-4 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.home.collaborationBanner)}</p>
            </div>
            <button type="button" data-action="start" data-ripple class="cta-glow relative overflow-hidden rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-night-950 shadow-lg shadow-gold-400/20 transition active:scale-[0.98]">${text(content.ui.attractButton)}</button>
          </div>
        </div>
        <p class="text-sm uppercase tracking-[0.28em] text-cloud-400 ${classForLanguage()}">${text(content.ui.attractInstruction)}</p>
      </div>
      ${shouldShowInstallBanner() ? renderInstallBanner() : ''}
    </div>
  `;

  attractRotator?.destroy();
  attractRotator = null;
  const attractRotatorEl = document.getElementById('attract-rotator');
  if (attractRotatorEl) {
    attractRotator = createRotator({ container: attractRotatorEl, dwellMs: 8000 });
    // Only ever runs pre-wake — any touch wakes the kiosk, which swaps to
    // the main shell and stops this from rendering at all, so that touch is
    // itself the "pause" required by WCAG 2.2.2. No separate control needed.
    if (!state.awake) {
      attractRotator.start();
    }
  }
}

function renderInstallBanner(): string {
  const isIos = deferredInstallPrompt === null && isIosSafari();

  return `
    <div class="install-banner" role="status">
      <span class="${classForLanguage()}">${isIos ? text(content.ui.labels.installBannerIos) : text(content.ui.labels.installBannerAndroid)}</span>
      <div class="flex shrink-0 items-center gap-2">
        ${isIos ? '' : `<button type="button" data-action="install-app" data-ripple class="install-banner__cta relative overflow-hidden">${text(content.ui.labels.installAction)}</button>`}
        <button type="button" data-action="dismiss-install" aria-label="${text(content.ui.labels.dismissAction)}" class="install-banner__dismiss">✕</button>
      </div>
    </div>
  `;
}

function renderLanguageMenu(): string {
  return `
    <div class="relative" id="lang-dropdown-wrapper">
      <button
        type="button"
        data-action="toggle-lang-menu"
        class="lang-badge"
        aria-haspopup="menu"
        aria-expanded="${langMenuOpen}"
        aria-controls="lang-menu"
        aria-label="${text(content.ui.languageLabel)}"
      >
        <span class="sm:hidden">${state.language.toUpperCase()}</span><span class="hidden sm:inline">${content.ui.languages[state.language]}</span> ▾
      </button>
      <div class="lang-menu" id="lang-menu" role="menu" ${langMenuOpen ? '' : 'hidden'}>
          ${Object.entries(content.ui.languages)
          .map(
            ([code, label]) => `
              <button type="button" data-set-language="${code}" class="lang-option ${code === state.language ? 'active' : ''}">
                ${label}
              </button>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
}

function activeTheme() {
  return content.themes.find((theme) => theme.id === state.themeId) ?? content.themes[0];
}

function renderThemeMenu(): string {
  const current = activeTheme();

  return `
    <div class="relative" id="theme-dropdown-wrapper">
      <button
        type="button"
        data-action="toggle-theme-menu"
        class="lang-badge"
        aria-haspopup="menu"
        aria-expanded="${themeMenuOpen}"
        aria-controls="theme-menu"
        aria-label="${text(content.ui.themeLabel)}"
      >
        <span aria-hidden="true">${current?.icon ?? '☬'}</span><span class="hidden lg:inline">${current ? text(current.label) : ''}</span> ▾
      </button>
      <div class="lang-menu theme-menu" id="theme-menu" role="menu" ${themeMenuOpen ? '' : 'hidden'}>
        ${content.themes
          .map(
            (themeOption) => `
              <button type="button" data-set-theme="${themeOption.id}" class="lang-option ${classForLanguage()} ${themeOption.id === state.themeId ? 'active' : ''}">
                <span aria-hidden="true">${themeOption.icon}</span> ${text(themeOption.label)}
              </button>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderJourneyIndicator(): string {
  const total = journeyViews.length;
  const visited = journeyViews.filter((view) => visitedViews.has(view)).length;
  const label = text(content.ui.labels.journeyProgress);

  return `
    <div class="journey-indicator hidden lg:flex" role="status" aria-label="${label}: ${visited} / ${total}">
      <span class="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cloud-400 ${classForLanguage()}">${label}</span>
      <div class="journey-indicator__track">
        ${journeyViews
          .map((view) => `<span class="journey-indicator__dot" data-visited="${visitedViews.has(view)}"></span>`)
          .join('')}
      </div>
      <span class="text-xs font-semibold text-gold-300">${visited}/${total}</span>
    </div>
  `;
}

// A full-width slim strip standing in for the detailed dot-track on phones
// and small tablets, where the header row has no spare width to spend on a
// second widget — it sits below the row instead of competing inside it.
function renderJourneyProgressStrip(): string {
  const total = journeyViews.length;
  const visited = journeyViews.filter((view) => visitedViews.has(view)).length;
  const label = text(content.ui.labels.journeyProgress);
  const pct = total === 0 ? 0 : Math.round((visited / total) * 100);

  return `
    <div class="journey-progress-strip lg:hidden" role="status" aria-label="${label}: ${visited} / ${total}">
      <div class="journey-progress-strip__fill" style="width:${pct}%"></div>
    </div>
  `;
}

function renderHeader(): void {
  const copy = content.sections[state.view];

  header.innerHTML = `
    <div class="glass-header">
      <div class="flex min-h-20 items-center justify-between px-4 py-2 md:min-h-24 md:px-8 md:py-0">
        <div class="flex min-w-0 items-center gap-3 sm:gap-4">
          <a href="${VIEW_PATHS.home}" data-nav="home" aria-label="${text(content.ui.nav.home)}" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-300/30 bg-white/5 text-gold-300 transition active:scale-[0.98] sm:h-14 sm:w-14"><span class="nav-pill__icon">${icons.khanda}</span></a>
          <div class="min-w-0">
            <p class="hidden truncate text-xs font-semibold uppercase tracking-[0.22em] text-cloud-400 sm:block">${text(content.ui.experienceLabel)}</p>
            <h2 class="truncate text-lg font-semibold text-white sm:text-xl md:text-2xl ${classForLanguage()}">${text(copy.title)}</h2>
            <p class="hidden truncate text-xs text-cloud-400 sm:block md:text-sm ${classForLanguage()}">${text(copy.subtitle)}</p>
          </div>
        </div>
        <div class="flex shrink-0 items-center gap-2 sm:gap-3">
          ${renderJourneyIndicator()}
          ${renderThemeMenu()}
          ${renderLanguageMenu()}
          <button
            type="button"
            data-action="reset"
            aria-label="${text(content.ui.reset)}"
            class="flex items-center justify-center gap-2 rounded-full border border-white/10 p-3 text-cloud-200 transition active:scale-[0.98] md:px-4 md:py-3"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 1 2.6 6.3"/><path d="M3 8v5h5"/></svg>
            <span class="hidden text-sm font-semibold md:inline ${classForLanguage()}">${text(content.ui.reset)}</span>
          </button>
        </div>
      </div>
      ${state.themeId !== 'default' ? `<div class="event-theme-banner ${classForLanguage()}"><span aria-hidden="true">${activeTheme()?.icon ?? ''}</span> ${activeTheme() ? text(activeTheme()!.label) : ''}</div>` : ''}
      ${renderJourneyProgressStrip()}
    </div>
  `;
}

function renderNav(): void {
  const views: View[] = ['home', 'pyare', 'takhts', 'quiz', 'learn', 'about', 'resources', 'leaflets'];

  bottomNav.innerHTML = `
    <div class="nav-scroll glass-header flex min-h-20 gap-2 overflow-x-auto px-2 pt-2 md:grid md:min-h-24 md:grid-cols-8 md:gap-2 md:overflow-visible md:px-5 md:py-2">
      ${views
        .map(
          (view) => `
            <a
              href="${VIEW_PATHS[view]}"
              data-nav="${view}"
              data-ripple
              class="nav-pill min-w-[4.75rem] md:min-w-0"
              data-active="${state.view === view}"
              aria-current="${state.view === view ? 'page' : 'false'}"
            >
              <span class="nav-pill__icon" aria-hidden="true">${viewIcons[view]}</span>
              <span class="text-[0.65rem] font-semibold uppercase tracking-[0.14em] md:text-xs md:tracking-[0.18em] ${classForLanguage()}">${text(content.ui.nav[view])}</span>
            </a>
          `,
        )
        .join('')}
    </div>
  `;

  // On phones the row scrolls horizontally — bring the newly active tab into
  // view so navigating (e.g. via a home feature card) doesn't leave it
  // scrolled off-screen. No-op on the desktop grid layout (nothing to scroll).
  const navRow = bottomNav.querySelector<HTMLElement>('.nav-scroll');
  const activePill = bottomNav.querySelector<HTMLElement>('[data-active="true"]');
  if (navRow && activePill && navRow.scrollWidth > navRow.clientWidth) {
    activePill.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }
}

function renderFeatureCard(feature: HomeFeature): string {
  return `
    <button type="button" data-home-target="${feature.id}" data-ripple class="glass-panel relative h-full overflow-hidden p-6 text-left transition duration-200 hover:border-gold-300/30 active:scale-[0.99]">
      <div class="mb-5 flex items-center justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(feature.eyebrow)}</p>
          <h3 class="mt-3 text-2xl font-semibold text-white ${classForLanguage()}">${text(feature.title)}</h3>
        </div>
        <span class="feature-card__icon text-gold-300" aria-hidden="true">${feature.icon}</span>
      </div>
      <p class="text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(feature.description)}</p>
      <p class="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(feature.cta)}</p>
    </button>
  `;
}

function renderArtworkPanel(
  imagePath: string,
  title: string,
  eyebrow: string,
  imageAlt: string,
  variant: 'portrait' | 'full-photo' = 'portrait',
  vtName = '',
): string {
  // vtName gives this panel a stable view-transition-name so, when a Pyara/
  // Takht selection changes (transitionRender's 'selection' type), the API
  // automatically morphs the outgoing portrait into the incoming one instead
  // of a flat crossfade of the whole panel.
  const imageStyle = imagePath ? `--art-image:url('${asset(imagePath)}');` : '';
  const vtStyle = vtName ? `view-transition-name:${vtName};` : '';
  const imageRole = imagePath ? `role="img" aria-label="${imageAlt}"` : '';
  const variantClass = variant === 'full-photo' ? ' art-panel--full-photo' : '';

  return `
    <div class="art-panel${variantClass} mb-6" data-has-image="${String(Boolean(imagePath))}" style="${imageStyle}${vtStyle}" ${imageRole}>
      <div class="art-panel__glow"></div>
      <div class="relative z-10">
        <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">${eyebrow}</p>
        <h4 class="mt-3 text-2xl font-semibold text-white ${classForLanguage()}">${title}</h4>
      </div>
    </div>
  `;
}

function renderMapImage(imagePath: string): string {
  // Decorative illustrated India map backdrop. Purely visual — the real,
  // accessible location info is carried by each pin's aria-label and the
  // info badge overlay, so the image itself stays out of the a11y tree.
  return `<img class="geo-map__image" src="${asset(imagePath)}" alt="" loading="lazy" />`;
}

function renderPyareMap(selected: PanjPyaraProfile): string {
  // True only when this render reflects an actual selection change (not a
  // re-render for an unrelated reason like a language/theme switch) — gates
  // the one-shot pop/slide-in animations below so they don't replay every
  // time this map happens to redraw. lastRenderedPyaraId still holds the
  // *previous* selection at this point in the render cycle (render() only
  // updates it after this function returns).
  const justSelected = selected.id !== lastRenderedPyaraId;

  return `
    <div class="glass-panel geo-map-panel relative overflow-hidden map-expanded">
      ${renderMapImage('/assets/images/panj-pyare-map.jpg')}
      ${content.panjPyare
        .map(
          (pyara, index) => `
            <button
              type="button"
              class="pin-button"
              data-pyara="${pyara.id}"
              data-active="${pyara.id === selected.id}"
              data-just-selected="${justSelected && pyara.id === selected.id}"
              style="left:${pyara.mapPoint.x}; top:${pyara.mapPoint.y}; view-transition-name:pin-pyara-${pyara.id};"
              aria-label="${text(pyara.name)}"
            >
              ${index + 1}
            </button>
            <div
              class="pin-label"
              data-active="${pyara.id === selected.id}"
              data-just-selected="${justSelected && pyara.id === selected.id}"
              style="left:${pyara.mapPoint.x}; top:${pyara.mapPoint.y};"
            >
              <span class="${classForLanguage()}">${text(pyara.name).replace(/Bhai /g, '').replace(/ Ji$/, '')}</span>
            </div>
          `,
        )
        .join('')}
      <div class="map-info-badge${justSelected ? ' slide-up' : ''}">
        <p class="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.originMap)}</p>
        <p class="mt-0.5 text-sm font-semibold text-white ${classForLanguage()}">${text(selected.name)}</p>
        <p class="text-xs text-cloud-400 ${classForLanguage()}">${text(selected.from)}</p>
      </div>
    </div>
  `;
}

// Condensed teaser embedded on Home — the full, filterable 57-event
// timeline lives at its own route (renderTimelineView / the 'timeline'
// View), reachable via the link at the bottom.
function renderTimelineSection(): string {
  const preview = content.timeline.slice(0, 6);

  return `
    <section class="glass-panel p-7 md:p-10">
      <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(content.ui.labels.timelineTitle)}</h3>
      <div class="mt-6">
        ${preview
          .map(
            (event) => `
              <div class="timeline-node">
                <span class="timeline-year">${event.year}</span>
                <div class="pt-1">
                  <h4 class="text-base font-semibold text-white ${classForLanguage()}">${text(event.title)}</h4>
                  <p class="mt-2 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(event.description)}</p>
                </div>
              </div>
            `,
          )
          .join('')}
      </div>
      <a href="${VIEW_PATHS.timeline}" data-nav="timeline" data-ripple class="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 hover:text-gold-200 ${classForLanguage()}">
        ${text(content.sections.timeline.title)} →
      </a>
    </section>
  `;
}

function renderTimelineView(): string {
  const filters: TimelineFilter[] = ['all', 'guru', 'martyrdom', 'battle', 'political', 'scripture', 'massacre'];
  const events = state.timelineFilter === 'all' ? content.timeline : content.timeline.filter((event) => event.category === state.timelineFilter);

  return `
    <div class="grid gap-6">
      <p class="max-w-4xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.sections.timeline.subtitle)}</p>

      <div class="flex flex-wrap gap-2" role="group" aria-label="${text(content.ui.labels.timelineTitle)}">
        ${filters
          .map(
            (filter) => `
              <button
                type="button"
                data-timeline-filter="${filter}"
                data-ripple
                data-active="${state.timelineFilter === filter}"
                class="timeline-filter-chip ${classForLanguage()}"
              >
                ${timelineCategoryIcons[filter] ? `<span class="timeline-filter-chip__icon" aria-hidden="true">${timelineCategoryIcons[filter]}</span>` : ''}
                ${text(timelineCategoryLabels[filter])}
              </button>
            `,
          )
          .join('')}
      </div>

      <section class="glass-panel p-7 md:p-10">
        ${
          events.length === 0
            ? `<p class="text-sm text-cloud-400 ${classForLanguage()}">${text(content.ui.labels.timelineNoResults)}</p>`
            : `<div class="mt-2">
                ${events
                  .map(
                    (event) => `
                      <div class="timeline-node" data-reveal>
                        <span class="timeline-year">${event.year}</span>
                        <div class="pt-1">
                          <h4 class="text-base font-semibold text-white ${classForLanguage()}">${text(event.title)}</h4>
                          <p class="mt-2 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(event.description)}</p>
                        </div>
                      </div>
                    `,
                  )
                  .join('')}
              </div>`
        }
      </section>
      <p class="ai-badge ${classForLanguage()}">${text(content.ui.labels.aiContentNotice)}</p>
    </div>
  `;
}

function renderFaqSection(): string {
  return `
    <section class="glass-panel p-7 md:p-10">
      <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(content.ui.labels.faqTitle)}</h3>
      <div class="mt-6 grid gap-3">
        ${content.faq
          .map(
            (item, index) => `
              <div class="faq-item" data-open="${openFaqIndex === index}">
                <button type="button" data-faq-toggle="${index}" aria-expanded="${openFaqIndex === index}" aria-controls="faq-answer-${index}" class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                  <span class="text-base font-semibold text-white ${classForLanguage()}">${text(item.question)}</span>
                  <span class="text-gold-300" aria-hidden="true">${openFaqIndex === index ? '−' : '+'}</span>
                </button>
                ${
                  openFaqIndex === index
                    ? `<p id="faq-answer-${index}" class="px-5 pb-5 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(item.answer)}</p>`
                    : ''
                }
              </div>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderOnboarding(): string {
  return `
    <div class="grid min-h-[62vh] place-items-center">
      <div class="grid max-w-4xl gap-10 text-center slide-up">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">${text(content.ui.experienceLabel)}</p>
          <h2 class="title-gradient mt-4 text-4xl font-semibold md:text-5xl ${classForLanguage()}">${text(content.onboarding.welcomeTitle)}</h2>
          <p class="mt-4 text-lg text-cloud-200 ${classForLanguage()}">${text(content.onboarding.welcomeSubtitle)}</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-white ${classForLanguage()}">${text(content.onboarding.modeTitle)}</h3>
          <div class="mt-6 grid gap-5 sm:grid-cols-3">
            ${content.onboarding.modes
              .map(
                (mode) => `
                  <button type="button" data-onboarding-mode="${mode.id}" data-ripple class="onboarding-card">
                    <div class="onboarding-card__icon mb-4 text-gold-300" aria-hidden="true">${mode.icon}</div>
                    <h4 class="text-lg font-semibold text-white ${classForLanguage()}">${text(mode.title)}</h4>
                    <p class="mt-3 text-sm leading-6 text-cloud-300 ${classForLanguage()}">${text(mode.description)}</p>
                  </button>
                `,
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderHome(): string {
  if (!state.hasChosenMode) {
    return renderOnboarding();
  }

  return `
    <div class="grid gap-6">
      <div class="lang-badge slide-up w-full justify-center rounded-[22px] bg-gold-400/12 px-6 py-4 text-center text-sm md:text-base ${classForLanguage()}">
        ${text(content.home.collaborationBanner)}
      </div>

      <section class="glass-panel overflow-hidden p-7 md:p-10">
        <div class="soft-grid absolute inset-0 opacity-20"></div>
        <div class="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-gold-300">${text(content.sections.home.title)}</p>
            <h3 class="mt-4 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl ${classForLanguage()}">${text(content.home.heroTitle)}</h3>
            <p class="mt-6 max-w-3xl text-lg leading-8 text-cloud-200 ${classForLanguage()}">${text(content.home.heroDescription)}</p>
          </div>
          <div class="hero-rotator hero-rotator--hero hidden md:block w-56" id="home-hero-rotator" data-paused="${homeRotatorPaused}" style="--rotator-dwell:10000ms;aspect-ratio:4/3;">
            ${homeBannerImages
              .map(
                (src, index) => `
                  <div class="hero-rotator__slide" data-rotator-slide data-active="${index === 0}" style="background-image:url('${asset(src)}');"></div>
                `,
              )
              .join('')}
            <div class="hero-rotator__bars">
              ${homeBannerImages
                .map(
                  (_src, index) => `
                    <button
                      type="button"
                      data-rotator-dot
                      data-action="hero-dot"
                      data-index="${index}"
                      data-active="${index === 0}"
                      class="rotator-bar"
                      aria-label="${text(content.ui.labels.heroSlide)} ${index + 1}"
                    ><span class="rotator-bar__fill"></span></button>
                  `,
                )
                .join('')}
            </div>
            <button
              type="button"
              data-action="toggle-hero-rotation"
              data-ripple
              class="hero-rotator__toggle"
              aria-label="${text(homeRotatorPaused ? content.ui.labels.resumeRotation : content.ui.labels.pauseRotation)}"
            >${homeRotatorPaused ? '▶' : '❙❙'}</button>
          </div>
        </div>
      </section>

      <section class="glass-panel p-7 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(content.home.differentiationTitle)}</h3>
        <p class="mt-3 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.home.differentiationDescription)}</p>
        <div class="mt-6 grid gap-6 md:grid-cols-2">
          ${content.home.differentiationCards
            .map(
              (card) => `
                <button type="button" data-home-target="${card.id}" data-ripple class="art-panel text-left transition duration-200 hover:border-gold-300/40 active:scale-[0.99]" data-has-image="true" style="--art-image:url('${asset(card.imagePath)}');">
                  <div class="art-panel__glow"></div>
                  <div class="relative z-10">
                    <h4 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(card.title)}</h4>
                    <p class="mt-3 max-w-md text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(card.description)}</p>
                  </div>
                </button>
              `,
            )
            .join('')}
        </div>
      </section>

      ${renderTimelineSection()}

      <section class="grid gap-6 lg:grid-cols-3">
        ${content.home.featureCards.map(renderFeatureCard).join('')}
      </section>
    </div>
  `;
}


// Full-bleed, one-chapter-at-a-time reader — replaces the map when a pin or
// gallery thumbnail is tapped. The backdrop shares its view-transition-name
// with the map pin (see renderPyareMap), so the browser morphs the tapped
// pin into this reader automatically; stepping chapters keeps the same name
// so the backdrop image crossfades in place rather than the whole panel
// swapping.
function renderPyareStoryline(selected: PanjPyaraProfile): string {
  const chapters = selected.chapters ?? [];
  const chapterIndex = Math.min(state.pyaraChapterIndex, Math.max(chapters.length - 1, 0));
  const chapter = chapters[chapterIndex];

  if (!chapter) {
    return renderPyareMap(selected);
  }

  const pyareIndex = Math.max(content.panjPyare.findIndex((item) => item.id === selected.id), 0);
  const nextPyara = content.panjPyare[pyareIndex + 1];
  const isFirstChapter = chapterIndex === 0;
  const isLastChapter = chapterIndex === chapters.length - 1;
  const imagePath = chapter.imagePath ?? selected.imagePath;

  const dots = chapters
    .map((_, index) => `<span class="chapter-dot" data-filled="${index <= chapterIndex}"></span>`)
    .join('');

  const nextControl = !isLastChapter
    ? `<button type="button" data-action="pyara-chapter-step" data-step="1" data-ripple class="storyline-reader__nav-btn" aria-label="${text(content.ui.labels.nextChapter)}"><span aria-hidden="true">→</span></button>`
    : nextPyara
      ? `<button type="button" data-pyara="${nextPyara.id}" data-ripple class="storyline-reader__next-person ${classForLanguage()}">${text(content.ui.labels.nextChapter)}: ${text(nextPyara.name)} →</button>`
      : `<button type="button" data-action="close-pyara-storyline" data-ripple class="storyline-reader__next-person ${classForLanguage()}">${text(content.ui.labels.selectOnMap)}</button>`;

  return `
    <div class="storyline-reader glass-panel" data-reveal>
      <div class="storyline-reader__backdrop" data-has-image="${String(Boolean(imagePath))}" style="--art-image:url('${asset(imagePath)}');view-transition-name:pin-pyara-${selected.id};"></div>
      <div class="storyline-reader__scrim"></div>
      <div class="storyline-reader__chrome">
        <button type="button" data-action="close-pyara-storyline" data-ripple class="storyline-reader__close ${classForLanguage()}" aria-label="${text(content.ui.labels.backButton)}">
          <span aria-hidden="true">←</span> ${text(content.ui.labels.backButton)}
        </button>
        <div class="storyline-reader__dots" role="status" aria-label="${text(content.ui.labels.chapterLabel)} ${chapterIndex + 1} / ${chapters.length}">${dots}</div>
      </div>
      <div class="storyline-reader__body">
        <p class="storyline-reader__eyebrow ${classForLanguage()}">${text(selected.name)} <span class="pronun-tip" title="${text(selected.name, 'en')}">${icons.speaker}</span></p>
        <p class="storyline-reader__kicker ${classForLanguage()}">${text(chapter.kicker)}</p>
        <h3 class="storyline-reader__title title-gradient ${classForLanguage()}">${text(chapter.title)}</h3>
        <p class="storyline-reader__text ${classForLanguage()}">${text(chapter.body)}</p>
      </div>
      <div class="storyline-reader__nav">
        <button
          type="button"
          data-action="pyara-chapter-step"
          data-step="-1"
          data-ripple
          class="storyline-reader__nav-btn"
          ${isFirstChapter ? 'disabled aria-disabled="true"' : ''}
          aria-label="${text(content.ui.labels.previousChapter)}"
        ><span aria-hidden="true">←</span></button>
        ${nextControl}
      </div>
    </div>
  `;
}

function renderPyare(): string {
  const selected = content.panjPyare.find((item) => item.id === state.selectedPyaraId) ?? content.panjPyare[0];

  if (state.pyareStorylineOpen) {
    return renderPyareStoryline(selected);
  }

  return `
    <div class="grid gap-6">
      <p class="max-w-4xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.ui.labels.pyareIntro)}</p>

      ${renderPyareMap(selected)}

      <p class="map-tap-prompt ${classForLanguage()}" data-reveal>${text(content.ui.labels.selectOnMap)}</p>

      <div class="pyare-gallery" data-reveal-group>
        ${content.panjPyare
          .map(
            (item, index) => `
              <button type="button" data-pyara="${item.id}" data-ripple class="pyare-gallery__item" data-active="${item.id === selected.id}" aria-label="${text(item.name)}" data-reveal>
                <span class="pyare-gallery__frame">
                  <img src="${asset(item.imagePath)}" alt="Commemorative portrait of ${text(item.name, 'en')}" class="pyare-gallery__img" loading="lazy" decoding="async" />
                </span>
                <span class="pyare-gallery__number">${index + 1}</span>
                <span class="pyare-gallery__name ${classForLanguage()}">${text(item.name).replace(/Bhai /g, '').replace(/ Ji$/, '')}</span>
              </button>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderTakhtMap(selected: TakhtProfile): string {
  const justSelected = selected.id !== lastRenderedTakhtId;

  return `
    <div class="glass-panel geo-map-panel relative overflow-hidden map-expanded">
      ${renderMapImage('/assets/images/five-takht-map.jpg')}
      ${content.takhts
        .map(
          (takht, index) => `
            <button
              type="button"
              class="pin-button"
              data-takht="${takht.id}"
              data-active="${takht.id === selected.id}"
              data-just-selected="${justSelected && takht.id === selected.id}"
              style="left:${takht.mapPoint.x}; top:${takht.mapPoint.y}; view-transition-name:pin-takht-${takht.id};"
              aria-label="${text(takht.name)}"
            >
              ${takht.id === selected.id ? '☬' : index + 1}
            </button>
            <div
              class="pin-label"
              data-active="${takht.id === selected.id}"
              data-just-selected="${justSelected && takht.id === selected.id}"
              style="left:${takht.mapPoint.x}; top:${takht.mapPoint.y};"
            >
              <span class="${classForLanguage()}">${text(takht.name).replace(/Takht Sri |Sri |Takht /g, '').replace(/ Sahib$/, '')}</span>
            </div>
          `,
        )
        .join('')}
      <div class="map-info-badge${justSelected ? ' slide-up' : ''}">
        <p class="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.sacredGeography)}</p>
        <p class="mt-0.5 text-sm font-semibold text-white ${classForLanguage()}">${text(selected.name)}</p>
        <p class="text-xs text-cloud-400 ${classForLanguage()}">${text(selected.location)}</p>
      </div>
    </div>
  `;
}

function renderTakhtStoryline(selected: TakhtProfile): string {
  const chapters = selected.chapters ?? [];
  const chapterIndex = Math.min(state.takhtChapterIndex, Math.max(chapters.length - 1, 0));
  const chapter = chapters[chapterIndex];

  if (!chapter) {
    return renderTakhtMap(selected);
  }

  const takhtIndex = Math.max(content.takhts.findIndex((item) => item.id === selected.id), 0);
  const nextTakht = content.takhts[takhtIndex + 1];
  const isFirstChapter = chapterIndex === 0;
  const isLastChapter = chapterIndex === chapters.length - 1;
  const imagePath = chapter.imagePath ?? selected.imagePath;

  const dots = chapters
    .map((_, index) => `<span class="chapter-dot" data-filled="${index <= chapterIndex}"></span>`)
    .join('');

  const nextControl = !isLastChapter
    ? `<button type="button" data-action="takht-chapter-step" data-step="1" data-ripple class="storyline-reader__nav-btn" aria-label="${text(content.ui.labels.nextChapter)}"><span aria-hidden="true">→</span></button>`
    : nextTakht
      ? `<button type="button" data-takht="${nextTakht.id}" data-ripple class="storyline-reader__next-person ${classForLanguage()}">${text(content.ui.labels.nextChapter)}: ${text(nextTakht.name)} →</button>`
      : `<button type="button" data-action="close-takht-storyline" data-ripple class="storyline-reader__next-person ${classForLanguage()}">${text(content.ui.labels.selectOnMap)}</button>`;

  return `
    <div class="storyline-reader glass-panel" data-reveal>
      <div class="storyline-reader__backdrop" data-has-image="${String(Boolean(imagePath))}" style="--art-image:url('${asset(imagePath)}');view-transition-name:pin-takht-${selected.id};"></div>
      <div class="storyline-reader__scrim"></div>
      <div class="storyline-reader__chrome">
        <button type="button" data-action="close-takht-storyline" data-ripple class="storyline-reader__close ${classForLanguage()}" aria-label="${text(content.ui.labels.backButton)}">
          <span aria-hidden="true">←</span> ${text(content.ui.labels.backButton)}
        </button>
        <div class="storyline-reader__dots" role="status" aria-label="${text(content.ui.labels.chapterLabel)} ${chapterIndex + 1} / ${chapters.length}">${dots}</div>
      </div>
      <div class="storyline-reader__body">
        <p class="storyline-reader__eyebrow ${classForLanguage()}">${text(selected.name)} <span class="pronun-tip" title="${text(selected.name, 'en')}">${icons.speaker}</span></p>
        <p class="storyline-reader__kicker ${classForLanguage()}">${text(chapter.kicker)}</p>
        <h3 class="storyline-reader__title title-gradient ${classForLanguage()}">${text(chapter.title)}</h3>
        <p class="storyline-reader__text ${classForLanguage()}">${text(chapter.body)}</p>
      </div>
      <div class="storyline-reader__nav">
        <button
          type="button"
          data-action="takht-chapter-step"
          data-step="-1"
          data-ripple
          class="storyline-reader__nav-btn"
          ${isFirstChapter ? 'disabled aria-disabled="true"' : ''}
          aria-label="${text(content.ui.labels.previousChapter)}"
        ><span aria-hidden="true">←</span></button>
        ${nextControl}
      </div>
    </div>
  `;
}

function renderTakhts(): string {
  const selected = content.takhts.find((item) => item.id === state.selectedTakhtId) ?? content.takhts[0];

  if (state.takhtStorylineOpen) {
    return renderTakhtStoryline(selected);
  }

  return `
    <div class="grid gap-6">
      <p class="max-w-4xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.ui.labels.takhtsIntro)}</p>

      ${renderTakhtMap(selected)}

      <p class="map-tap-prompt ${classForLanguage()}" data-reveal>${text(content.ui.labels.selectOnMap)}</p>

      <div class="silhouette-strip">
        ${content.takhts
          .map(
            (takht, index) => `
              <button type="button" data-takht="${takht.id}" data-ripple class="silhouette-avatar" data-active="${takht.id === selected.id}" aria-label="${text(takht.name)}">
                <img src="${asset(takht.silhouettePath ?? '/assets/images/gurdwara-silhouette.svg')}" alt="${text(takht.name)}" class="silhouette-avatar__img" />
                <span class="silhouette-avatar__number">${index + 1}</span>
                <span class="silhouette-avatar__name ${classForLanguage()}">${text(takht.name).replace(/Takht Sri |Sri |Takht /g, '').replace(/ Sahib$/, '')}</span>
              </button>
            `,
          )
          .join('')}
      </div>
    </div>
  `;
}

function renderLearn(): string {
  const learn = content.learnSikhi;

  return `
    <div class="grid gap-6">
      <section class="glass-panel p-8 md:p-10">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-3xl font-semibold text-white ${classForLanguage()}">${text(learn.title)}</h2>
          ${renderListenButton(learn.intro, 'learn-intro')}
        </div>
        <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}" data-tts-source="learn-intro">${text(learn.intro)}</p>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.gurdwaraRoomsTitle)}</h3>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          ${learn.gurdwaraRooms
            .map(
              (room) => `
                <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <h4 class="text-lg font-semibold text-white ${classForLanguage()}">${text(room.name)}</h4>
                  <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(room.description)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.etiquetteTitle)}</h3>
        <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          ${learn.etiquette
            .map(
              (item) => `
                <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <h4 class="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300 ${classForLanguage()}">${text(item.title)}</h4>
                  <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(item.description)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        ${renderArtworkPanel('/assets/images/IMG_8284.jpeg', text(learn.guruLineageTitle), text(content.sections.learn.title), 'Traditional painting depicting the Ten Sikh Gurus seated together')}
        <p class="mt-3 max-w-3xl text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.guruLineageIntro)}</p>
        <div class="guru-lineage mt-8">
          ${learn.gurus
            .map(
              (guru) => `
                <div class="guru-lineage__node">
                  <div class="guru-lineage__connector" aria-hidden="true"></div>
                  <div class="guru-lineage__medallion" data-eternal="${Boolean(guru.eternal)}">
                    <span aria-hidden="true">${guru.eternal ? 'ੴ' : guru.order}</span>
                  </div>
                  <div class="guru-lineage__card">
                    <p class="text-base font-semibold text-white ${classForLanguage()}">${text(guru.name)}</p>
                    <p class="mt-1 text-xs uppercase tracking-[0.14em] text-cloud-400">${guru.years}</p>
                    <p class="guru-lineage__relation ${classForLanguage()}">${text(guru.relation)}</p>
                  </div>
                </div>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.gurusTitle)}</h3>
        <div class="mt-6 grid gap-5">
          ${learn.gurus
            .map(
              (guru) => `
                <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-6">
                  <div class="flex gap-4">
                    <span class="shrink-0 flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/30 bg-gold-400/10 text-sm font-semibold text-gold-300" aria-hidden="true">${guru.eternal ? 'ੴ' : guru.order}</span>
                    <div class="min-w-0">
                      <h4 class="text-base font-semibold text-white ${classForLanguage()}">${text(guru.name)} <span class="font-normal text-cloud-400">— ${guru.years}</span></h4>
                      ${guru.epithet ? `<p class="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300 ${classForLanguage()}">${text(guru.epithet)}</p>` : ''}
                      <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(guru.fullSummary ?? guru.summary)}</p>
                      ${
                        guru.aheadOfTimeFact
                          ? `<div class="mt-4 rounded-2xl border border-gold-300/20 bg-gold-400/6 p-4">
                               <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 ${classForLanguage()}">✦ ${text(content.ui.labels.funFact)}</p>
                               <p class="mt-2 text-sm leading-6 text-cloud-200 ${classForLanguage()}">${text(guru.aheadOfTimeFact)}</p>
                             </div>`
                          : ''
                      }
                      ${
                        guru.storiesUrl
                          ? `<a href="${guru.storiesUrl}" target="_blank" rel="noopener" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 hover:text-sky-200 ${classForLanguage()}" aria-label="Read more stories about ${text(guru.name, 'en')} on sikhi.io">${text(content.ui.labels.learnMore)}</a>`
                          : ''
                      }
                    </div>
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
        <p class="ai-badge mt-6 ${classForLanguage()}">${text(content.ui.labels.aiContentNotice)}</p>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.sahibzaadeTitle)}</h3>
        <div class="mt-6 grid gap-4 md:grid-cols-2">
          ${learn.sahibzaade
            .map(
              (child) => `
                <article class="rounded-[24px] border border-rose-300/15 bg-rose-400/5 p-5">
                  <h4 class="text-base font-semibold text-white ${classForLanguage()}">${text(child.name)} <span class="font-normal text-cloud-400">— ${child.years}</span></h4>
                  <p class="mt-2 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(child.summary)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.kakaarsTitle)}</h3>
        <p class="mt-3 max-w-3xl text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.kakaarsIntro)}</p>
        <div class="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          ${learn.kakaars
            .map(
              (kakaar, index) => `
                <article class="kakaar-card">
                  <div class="kakaar-card__icon" aria-hidden="true">${kakaarIcons[index] ?? ''}</div>
                  <p class="gurmukhi mt-4 text-3xl font-semibold text-gold-300">${text(kakaar.name)}</p>
                  <p class="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-cloud-400">${text(kakaar.meaning)}</p>
                  <p class="mt-3 text-sm leading-6 text-cloud-200 ${classForLanguage()}">${text(kakaar.description)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.introTitle)}</h3>
          ${renderListenButton(learn.whatIsSikhi, 'learn-what-is-sikhi')}
        </div>
        <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}" data-tts-source="learn-what-is-sikhi">${text(learn.whatIsSikhi)}</p>
        <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.founding)}</p>
        <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.sevaSimran)}</p>
        <h4 class="mt-8 text-lg font-semibold text-white ${classForLanguage()}">${text(learn.pillarsTitle)}</h4>
        <div class="mt-4 grid gap-4 md:grid-cols-3">
          ${learn.pillars
            .map(
              (pillar) => `
                <article class="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                  <p class="gurmukhi text-xl font-semibold text-gold-300">${text(pillar.term)}</p>
                  <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(pillar.description)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="glass-panel p-8 md:p-10">
        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(learn.gurbaniTitle)}</h3>
        <p class="mt-4 max-w-3xl text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(learn.gurbaniIntro)}</p>
        <div class="mt-6 grid gap-5">
          ${learn.shabads
            .map(
              (shabad) => `
                <article class="rounded-[24px] border border-gold-300/20 bg-gold-400/5 p-6">
                  <div class="flex flex-wrap items-start justify-between gap-3">
                    <p class="gurmukhi text-2xl leading-relaxed text-white">${shabad.gurmukhi}</p>
                    ${renderListenButton(shabad.translation, `shabad-${shabad.ang}`)}
                  </div>
                  <p class="mt-4 text-sm leading-7 text-cloud-200 ${classForLanguage()}" data-tts-source="shabad-${shabad.ang}">${text(shabad.translation)}</p>
                  <div class="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
                    <span>Ang ${shabad.ang}</span>
                    <span>·</span>
                    <span>${shabad.raag}</span>
                    <span>·</span>
                    <span class="${classForLanguage()}">${text(shabad.author)}</span>
                  </div>
                  <p class="mt-4 text-sm italic leading-6 text-cloud-300 ${classForLanguage()}">${text(shabad.verificationNote)}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>
    </div>
  `;
}

function renderAbout(): string {
  return `
    <div class="grid gap-6">
      <section class="glass-panel p-8 md:p-10">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-3xl font-semibold text-white ${classForLanguage()}">${text(content.about.title)}</h2>
          ${renderListenButton(content.about.partnerships, 'about-partnerships')}
        </div>
        <div class="mt-6 rounded-[24px] border border-gold-300/25 bg-gold-400/8 p-6">
          <p class="text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(content.about.collaboration)}</p>
          <p class="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.about.contributorsLabel)}</p>
          <div class="mt-3 flex flex-wrap gap-2">
            ${content.about.contributors
              .map((name) => `<span class="rounded-full border border-gold-300/25 bg-white/[0.04] px-3 py-1.5 text-sm text-cloud-200">${name}</span>`)
              .join('')}
          </div>
        </div>
        <p class="mt-6 text-base leading-7 text-cloud-200 ${classForLanguage()}" data-tts-source="about-partnerships">${text(content.about.partnerships)}</p>
        <p class="mt-4 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.about.futureUpdates)}</p>
      </section>

      <section class="glass-panel flex flex-wrap items-center justify-between gap-6 p-8 md:p-10">
        <div class="max-w-xl">
          <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(content.about.mobileApp.title)}</h3>
          <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(content.about.mobileApp.description)}</p>
          <a href="${MOBILE_APP_APK_URL}" data-ripple class="cta-glow relative mt-5 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-night-950 transition active:scale-[0.98] ${classForLanguage()}">${text(content.about.mobileApp.cta)}</a>
        </div>
        <div class="qr-badge">
          ${qrDataUrls['mobile-app'] ? `<img src="${qrDataUrls['mobile-app']}" alt="QR code to download the Android app" class="qr-badge__img" width="80" height="80" />` : ''}
          <p class="qr-badge__hint">${text(content.ui.labels.scanToVisit)}</p>
        </div>
      </section>

      <section class="grid gap-6 md:grid-cols-3">
        ${content.about.principles
          .map(
            (principle) => `
              <article class="glass-panel p-6">
                <h4 class="text-lg font-semibold text-white ${classForLanguage()}">${text(principle.title)}</h4>
                <p class="mt-3 text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(principle.description)}</p>
              </article>
            `,
          )
          .join('')}
      </section>

      ${renderFaqSection()}
    </div>
  `;
}

function renderResources(): string {
  const sites = content.resources.sites;
  const resourceBanners: Record<string, string> = {
    'sikhi-io': '/assets/images/sikhi-io-beliefs-banner-new-4.webp',
    'sikhiuni': '/assets/images/sikhi-io-gurbani-banner.webp',
    'gursevak': '/assets/images/sikhi-io-gallery-banner.webp',
    'basicsofsikhi': '/assets/images/sikhi-io-sangat-banner.webp',
  };
  if (sites.length === 0) {
    return `<div class="glass-panel p-8 text-center"><p class="text-cloud-200">${text(content.resources.intro)}</p></div>`;
  }

  // Separate sites into live-preview capable (sikhi.io, sikhiuni) and regular
  const liveSites = sites.filter((s) => s.id === 'sikhi-io' || s.id === 'sikhiuni');
  const slideWidth = 100 / liveSites.length;

  return `
    <div class="grid gap-6">
      <section class="glass-panel p-8 md:p-10">
        <h2 class="text-3xl font-semibold text-white ${classForLanguage()}">${text(content.resources.title)}</h2>
        <p class="mt-4 max-w-3xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.resources.intro)}</p>
      </section>

      <section class="glass-panel relative overflow-hidden p-0" style="min-height:28rem;">
        <div class="resource-live-header">
          <span class="resource-live-dot"></span>
          <span class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">${text(content.ui.labels.livePreviews)}</span>
        </div>
        <div
          id="resource-carousel-track"
          class="flex transition-transform duration-700 ease-out"
          style="width:${liveSites.length * 100}%; height:28rem; transform:translateX(-${slideWidth * resourceCarouselIndex}%);"
        >
          ${liveSites
            .map(
              (site) => `
                <div class="relative" style="width:${slideWidth}%; height:28rem;">
                  <iframe
                    src="${site.url}"
                    class="resource-iframe"
                    loading="lazy"
                    sandbox="allow-scripts"
                    title="${site.title}"
                    data-iframe-slot="${site.id}"
                  ></iframe>
                  <div class="resource-fallback-panel" data-fallback-slot="${site.id}" hidden ${resourceBanners[site.id] ? `style="--art-image:url('${asset(resourceBanners[site.id])}');"` : ''}>
                    <div class="resource-fallback-panel__glow"></div>
                    <div class="relative z-10 flex h-full flex-col items-start justify-end p-6 md:p-8">
                      <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(site.previewTitle)}</h3>
                      <p class="mt-2 max-w-xl text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(site.previewDescription)}</p>
                      <p class="mt-3 inline-flex items-center rounded-full border border-white/15 bg-night-950/85 px-3 py-1.5 text-xs uppercase tracking-[0.14em] text-cloud-200 backdrop-blur-sm ${classForLanguage()}">${text(content.ui.labels.embedUnavailable)}</p>
                      <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="mt-4 inline-flex items-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-night-950 transition active:scale-[0.98] ${classForLanguage()}">${text(content.ui.labels.openInBrowser)}</a>
                    </div>
                  </div>
                  <div class="resource-card__overlay p-6 md:p-8" data-overlay-slot="${site.id}">
                    <div class="flex items-end justify-between gap-6 w-full">
                      <div>
                        <h3 class="text-2xl font-semibold text-white ${classForLanguage()}">${text(site.previewTitle)}</h3>
                        <p class="mt-2 max-w-xl text-sm leading-7 text-cloud-200 ${classForLanguage()}">${text(site.previewDescription)}</p>
                        <a href="${site.url}" target="_blank" rel="noopener noreferrer" data-ripple class="cta-glow relative mt-4 inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold-400 px-5 py-3 text-sm font-semibold text-night-950 transition active:scale-[0.98] ${classForLanguage()}">${text(content.ui.labels.visitSite)}</a>
                      </div>
                      <div class="qr-badge">
                        ${qrDataUrls[site.id] ? `<img src="${qrDataUrls[site.id]}" alt="QR code for ${site.title}" class="qr-badge__img" width="80" height="80" />` : ''}
                        <p class="qr-badge__hint">${text(content.ui.labels.scanToVisit)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              `,
            )
            .join('')}
        </div>
        <div class="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2" id="resource-carousel-dots">
          ${liveSites
            .map(
              (site, index) => `
                <button type="button" data-carousel-dot="${index}" aria-label="${text(content.ui.labels.livePreviews)}: ${site.title}" aria-current="${index === resourceCarouselIndex}" class="flex h-11 w-11 items-center justify-center">
                  <span class="h-2 w-2 rounded-full transition ${index === resourceCarouselIndex ? 'bg-gold-400' : 'bg-white/30'}"></span>
                </button>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        ${sites
          .map(
            (site) => `
              <article class="resource-card">
                ${resourceBanners[site.id] ? `<img src="${asset(resourceBanners[site.id])}" alt="${site.title} banner" class="w-full object-cover" style="height:6rem;border-radius:28px 28px 0 0;" loading="lazy" decoding="async" />` : ''}
                <div class="resource-card__qr">
                  ${qrDataUrls[site.id] ? `<img src="${qrDataUrls[site.id]}" alt="QR code for ${site.title}" class="resource-card__qr-img" width="80" height="80" />` : '<div class="resource-card__qr-placeholder">QR</div>'}
                </div>
                <div class="p-5">
                  <h4 class="text-base font-semibold text-white ${classForLanguage()}">${text(site.previewTitle)}</h4>
                  <p class="mt-1.5 text-sm leading-6 text-cloud-300 ${classForLanguage()}">${text(site.details)}</p>
                  <div class="mt-4 flex items-center gap-3">
                    <a href="${site.url}" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-gold-300 ${classForLanguage()}">${text(content.ui.labels.openInBrowser)} →</a>
                    <span class="text-xs text-cloud-500">${site.url.replace(/^https?:\/\//, '')}</span>
                  </div>
                </div>
              </article>
            `,
          )
          .join('')}
      </section>
    </div>
  `;
}

function renderLeaflets(): string {
  const leafletQr = qrDataUrls['basicsofsikhi'] ?? '';
  return `
    <div class="glass-panel p-10 text-center">
      <h2 class="text-3xl font-semibold text-white ${classForLanguage()}">${text(content.leaflets.title)}</h2>
      <p class="intro mx-auto mt-4 max-w-2xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.leaflets.intro)}</p>
      <div class="leaflet-hero my-8 overflow-hidden rounded-[20px]">
        <img src="${asset('/assets/images/sikh-fresco-·-restoration-3-restored.png')}" alt="Restored Sikh fresco artwork" class="mx-auto max-h-48 w-full object-cover object-top" decoding="async" />
      </div>
      <p class="text-base text-cloud-200 ${classForLanguage()}">${text(content.ui.labels.leafletsHelper)}</p>
      <a href="${content.leaflets.hubUrl}" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-night-950 transition active:scale-[0.98] ${classForLanguage()}">${text(content.leaflets.cta)}</a>
      <p class="mt-4 text-sm text-cloud-400">basicsofsikhi.com/resources</p>
      <div class="mx-auto mt-8 flex flex-col items-center gap-2">
        ${leafletQr ? `<img src="${leafletQr}" alt="QR code for basicsofsikhi.com/resources" class="leaflet-qr" width="128" height="128" />` : '<div class="mx-auto flex h-32 w-32 items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/[0.03] text-xs uppercase tracking-[0.18em] text-cloud-400">QR Code</div>'}
      </div>
      <p class="mt-3 text-xs text-cloud-400">Scan the QR code or visit basicsofsikhi.com/resources</p>
    </div>
  `;
}

function quizState(question: QuizQuestion, optionIndex: number): 'default' | 'selected' | 'correct' | 'incorrect' {
  if (state.revealedAnswer === null) {
    return 'default';
  }

  if (optionIndex === question.correctIndex) {
    return 'correct';
  }

  if (optionIndex === state.revealedAnswer) {
    return 'incorrect';
  }

  return 'default';
}

function currentQuizTotal(): number {
  return Math.min(state.quizCount, state.quizQuestionOrder.length);
}

const quizLevelIcons: Record<QuizLevel, string> = {
  beginner: '🌱',
  intermediate: '🪔',
  advanced: '🗡️',
};

function renderProgressRing(fraction: number, centerLabel: string): string {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(1, fraction));
  const offset = circumference * (1 - clamped);

  return `
    <div class="quiz-ring" role="img" aria-label="${centerLabel}">
      <svg viewBox="0 0 120 120" width="88" height="88" aria-hidden="true">
        <circle class="quiz-ring__track" cx="60" cy="60" r="${radius}" />
        <circle
          class="quiz-ring__progress"
          cx="60" cy="60" r="${radius}"
          style="stroke-dasharray:${circumference};stroke-dashoffset:${offset};"
        />
      </svg>
      <span class="quiz-ring__label" aria-hidden="true">${centerLabel}</span>
    </div>
  `;
}

function renderQuizLevelSelect(): string {
  const levels: QuizLevel[] = ['beginner', 'intermediate', 'advanced'];

  return `
    <article class="glass-panel p-8 text-center md:p-12">
      <p class="quiz-step-label ${classForLanguage()}">${text(content.ui.labels.chooseLevelStep)}</p>
      <h3 class="mt-3 text-3xl font-semibold text-white md:text-4xl ${classForLanguage()}">${text(content.ui.labels.chooseLevelTitle)}</h3>
      <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(content.quiz.intro)}</p>
      <div class="mt-10 grid gap-5 md:grid-cols-3">
        ${levels
          .map((level) => {
            const meta = content.quiz.levelMeta[level];
            return `
              <button type="button" class="quiz-level-card" data-quiz-level="${level}">
                <span class="quiz-level-card__icon" aria-hidden="true">${quizLevelIcons[level]}</span>
                <span class="quiz-level-card__title ${classForLanguage()}">${text(meta.title)}</span>
                <span class="quiz-level-card__desc ${classForLanguage()}">${text(meta.description)}</span>
              </button>
            `;
          })
          .join('')}
      </div>
    </article>
  `;
}

function renderQuizCountSelect(): string {
  const level = state.quizLevel;
  const meta = level ? content.quiz.levelMeta[level] : null;

  return `
    <article class="glass-panel p-8 text-center md:p-12">
      <button type="button" data-action="quiz-back-to-levels" class="quiz-back-btn ${classForLanguage()}">
        <span aria-hidden="true">←</span> ${text(content.ui.labels.backButton)}
      </button>
      <p class="quiz-step-label mt-4 ${classForLanguage()}">${text(content.ui.labels.chooseCountStep)}</p>
      <h3 class="mt-3 text-3xl font-semibold text-white md:text-4xl ${classForLanguage()}">${text(content.ui.labels.chooseCountTitle)}</h3>
      ${meta ? `<p class="mt-4 text-base text-gold-300 ${classForLanguage()}">${quizLevelIcons[level as QuizLevel]} ${text(meta.title)}</p>` : ''}
      <div class="mx-auto mt-10 grid max-w-xl gap-5 sm:grid-cols-2">
        ${content.quiz.countOptions
          .map(
            (option) => `
              <button type="button" class="quiz-count-card" data-quiz-count="${option.count}">
                <span class="quiz-count-card__number">${option.count}</span>
                <span class="quiz-count-card__label ${classForLanguage()}">${text(option.label)}</span>
              </button>
            `,
          )
          .join('')}
      </div>
    </article>
  `;
}

function renderQuizQuestion(question: QuizQuestion): string {
  const total = currentQuizTotal();
  const fraction = (state.quizIndex + 1) / total;

  return `
    <article class="glass-panel p-8 md:p-10">
      <div class="mb-6 flex flex-wrap items-center justify-between gap-5">
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.quizProgress)} ${state.quizIndex + 1} / ${total}</p>
          ${state.quizLevel ? `<p class="mt-1 text-sm text-cloud-400 ${classForLanguage()}">${quizLevelIcons[state.quizLevel]} ${text(content.quiz.levelMeta[state.quizLevel].title)}</p>` : ''}
        </div>
        ${renderProgressRing(fraction, `${state.quizIndex + 1}/${total}`)}
      </div>
      <h3 class="text-3xl font-semibold text-white ${classForLanguage()}">${text(question.prompt)}</h3>
      <div class="mt-8 grid gap-4">
        ${question.options
          .map(
            (option, index) => `
              <button
                type="button"
                class="option-card"
                data-quiz-answer="${index}"
                data-state="${quizState(question, index)}"
                ${state.revealedAnswer !== null ? 'disabled' : ''}
              >
                <div class="flex items-start gap-4">
                  <span class="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-current/15 text-sm font-semibold">${String.fromCharCode(65 + index)}</span>
                  <span class="text-lg leading-7 ${classForLanguage()}">${text(option)}</span>
                </div>
              </button>
            `,
          )
          .join('')}
      </div>
      ${state.revealedAnswer === null
        ? ''
        : `
          <div class="mt-8 rounded-[24px] border border-gold-300/20 bg-gold-400/10 p-5">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-gold-300 ${classForLanguage()}">${text(content.ui.labels.correctAnswer)}</p>
            <p class="mt-3 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(question.insight)}</p>
          </div>
          <button type="button" data-action="next-question" class="mt-6 rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-night-950 transition active:scale-[0.98]">${text(content.ui.labels.nextQuestion)}</button>
        `}
    </article>
  `;
}

function renderRecapCard(): string {
  const questions = getActiveQuizQuestions(state, content);
  const topics = state.quizQuestionOrder
    .map((questionIndex) => questions[questionIndex])
    .filter((question): question is QuizQuestion => Boolean(question));

  return `
    <div class="recap-card mt-6 text-left">
      <p class="text-center text-xs font-semibold uppercase tracking-[0.24em] text-gold-300">${text(content.ui.labels.recapTitle)}</p>
      <ul class="mt-5 grid gap-3">
        ${topics
          .map(
            (question) => `
              <li class="rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-cloud-200 ${classForLanguage()}">${text(question.prompt)}</li>
            `,
          )
          .join('')}
      </ul>
    </div>
  `;
}

type ScoreTier = 'perfect' | 'excellent' | 'good' | 'try-again';

function scoreTier(score: number, total: number): ScoreTier {
  if (total === 0) {
    return 'try-again';
  }
  const ratio = score / total;
  if (score === total) {
    return 'perfect';
  }
  if (ratio >= 0.8) {
    return 'excellent';
  }
  if (ratio >= 0.5) {
    return 'good';
  }
  return 'try-again';
}

const scoreTierMessage: Record<ScoreTier, LocalizedText> = {
  perfect: content.ui.labels.perfectScore,
  excellent: content.ui.labels.excellentScore,
  good: content.ui.labels.goodScore,
  'try-again': content.ui.labels.tryAgainScore,
};

function renderQuizResults(): string {
  const score = getQuizScore(state, content);
  const total = currentQuizTotal();
  const tier = scoreTier(score, total);

  return `
    <article class="glass-panel p-8 text-center md:p-12">
      <p class="text-sm font-semibold uppercase tracking-[0.24em] text-gold-300 ${classForLanguage()}">${text(content.sections.quiz.title)}</p>
      <div class="mx-auto mt-6 flex justify-center">
        ${renderProgressRing(total === 0 ? 0 : score / total, `${score}/${total}`)}
      </div>
      <p class="mt-4 text-xl text-cloud-200 ${classForLanguage()}">${text(content.ui.labels.yourScore)}</p>
      <p class="mt-6 text-base leading-7 text-cloud-200 ${classForLanguage()}">${text(scoreTierMessage[tier])}</p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button type="button" data-action="restart-quiz" class="rounded-full bg-gold-400 px-6 py-4 text-base font-semibold text-night-950 transition active:scale-[0.98] ${classForLanguage()}">${text(content.ui.labels.tryAgainButton)}</button>
        <button type="button" data-action="change-level" class="rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-base font-semibold text-cloud-200 transition active:scale-[0.98] ${classForLanguage()}">${text(content.ui.labels.changeLevel)}</button>
      </div>
      ${renderRecapCard()}
    </article>
  `;
}

function clearResourceCarouselTimer(): void {
  window.clearInterval(resourceCarouselTimer);
  resourceCarouselTimer = 0;
}

function updateResourceCarousel(): void {
  const track = document.getElementById('resource-carousel-track');
  const liveSiteCount = content.resources.sites.filter((s) => s.id === 'sikhi-io' || s.id === 'sikhiuni').length;
  if (track) {
    track.style.transform = `translateX(-${(100 / liveSiteCount) * resourceCarouselIndex}%)`;
  }

  const dots = document.querySelectorAll<HTMLElement>('[data-carousel-dot]');
  dots.forEach((dot) => {
    const isActive = Number(dot.dataset.carouselDot) === resourceCarouselIndex;
    dot.setAttribute('aria-current', String(isActive));
    const dotMarker = dot.querySelector('span');
    dotMarker?.classList.toggle('bg-gold-400', isActive);
    dotMarker?.classList.toggle('bg-white/30', !isActive);
  });
}

function activateResourceFallback(siteId: string): void {
  const iframe = document.querySelector<HTMLIFrameElement>(`[data-iframe-slot="${siteId}"]`);
  const overlay = document.querySelector<HTMLElement>(`[data-overlay-slot="${siteId}"]`);
  const fallback = document.querySelector<HTMLElement>(`[data-fallback-slot="${siteId}"]`);
  if (iframe) {
    iframe.style.display = 'none';
  }
  if (overlay) {
    overlay.style.display = 'none';
  }
  if (fallback) {
    fallback.hidden = false;
  }
}

function setupIframeFallbacks(): void {
  const iframes = document.querySelectorAll<HTMLIFrameElement>('[data-iframe-slot]');

  iframes.forEach((iframe) => {
    const siteId = iframe.dataset.iframeSlot;
    const url = iframe.src;
    if (!siteId || !url) {
      return;
    }

    // A cross-origin iframe's "load" event fires whether the embed actually
    // rendered or the browser committed an internal error page in its place —
    // both throw the same SecurityError on contentWindow.location access, so
    // that alone can't tell success from failure. What a plain network-level
    // failure (DNS, connection refused/reset — the case this sandbox hits
    // against every external host) *can* tell us is whether the request ever
    // reached the server at all, via a no-cors fetch racing a short timeout.
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 4000);

    fetch(url, { mode: 'no-cors', signal: controller.signal })
      .catch(() => {
        activateResourceFallback(siteId);
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
      });

    iframe.addEventListener('error', () => {
      activateResourceFallback(siteId);
    });
  });
}

function setupResourceCarousel(): void {
  clearResourceCarouselTimer();
  const liveSiteCount = content.resources.sites.filter((s) => s.id === 'sikhi-io' || s.id === 'sikhiuni').length;
  if (liveSiteCount <= 1) {
    return;
  }
  resourceCarouselTimer = window.setInterval(() => {
    resourceCarouselIndex = (resourceCarouselIndex + 1) % liveSiteCount;
    updateResourceCarousel();
  }, 5000);
}

function setupHomeRotator(): void {
  homeRotator?.destroy();
  homeRotator = null;
  const rotatorEl = document.getElementById('home-hero-rotator');
  if (!rotatorEl) {
    return;
  }
  homeRotator = createRotator({ container: rotatorEl, dwellMs: 10000 });
  if (homeRotatorPaused) {
    homeRotator.pause();
  } else {
    homeRotator.start();
  }
}

function launchConfetti(): void {
  const colors = ['#e4bb5e', '#f8fafc', '#f97316', '#60a5fa'];

  for (let i = 0; i < 80; i += 1) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)] ?? '#e4bb5e';
    particle.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
    particle.style.animationDelay = `${Math.random() * 0.4}s`;
    document.body.appendChild(particle);

    window.setTimeout(() => {
      particle.remove();
    }, 4000);
  }
}

function renderView(): void {
  // A re-render replaces whatever paragraph/button an in-flight utterance is
  // tied to — without this, speech can keep talking over a UI that no longer
  // shows what's being read (e.g. navigating away mid-speech).
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  stopActiveTtsVisuals();

  if (state.view !== 'resources') {
    clearResourceCarouselTimer();
  }
  if (state.view !== 'home') {
    homeRotator?.destroy();
    homeRotator = null;
  }

  if (!state.awake) {
    viewContent.innerHTML = '';
    return;
  }

  switch (state.view) {
    case 'home':
      viewContent.innerHTML = renderHome();
      setupHomeRotator();
      break;
    case 'pyare':
      viewContent.innerHTML = renderPyare();
      break;
    case 'takhts':
      viewContent.innerHTML = renderTakhts();
      break;
    case 'learn':
      viewContent.innerHTML = renderLearn();
      break;
    case 'about':
      viewContent.innerHTML = renderAbout();
      break;
    case 'resources':
      viewContent.innerHTML = renderResources();
      setupResourceCarousel();
      setupIframeFallbacks();
      break;
    case 'leaflets':
      viewContent.innerHTML = renderLeaflets();
      break;
    case 'timeline':
      viewContent.innerHTML = renderTimelineView();
      break;
    case 'quiz': {
      if (state.quizPhase === 'level') {
        viewContent.innerHTML = renderQuizLevelSelect();
        break;
      }
      if (state.quizPhase === 'count') {
        viewContent.innerHTML = renderQuizCountSelect();
        break;
      }
      if (isQuizComplete(state)) {
        viewContent.innerHTML = renderQuizResults();
        if (getQuizScore(state, content) === currentQuizTotal() && !hasCelebratedPerfect) {
          hasCelebratedPerfect = true;
          launchConfetti();
        }
      } else {
        const questions = getActiveQuizQuestions(state, content);
        const questionIndex = state.quizQuestionOrder[state.quizIndex];
        const question = questionIndex === undefined ? undefined : questions[questionIndex];
        if (!question) {
          viewContent.innerHTML = renderQuizResults();
          break;
        }
        viewContent.innerHTML = renderQuizQuestion(question);
      }
      break;
    }
  }

  observeReveals(viewContent);
}

function scheduleInactivityReset(): void {
  window.clearTimeout(inactivityTimer);
  inactivityTimer = window.setTimeout(() => {
    state = resetForInactivity(content);
    hasCelebratedPerfect = false;
    openFaqIndex = null;
    langMenuOpen = false;
    resourceCarouselIndex = 0;
    visitedViews.clear();
    applyDocumentDirection(state.language);
    render();
  }, content.settings.timeoutSeconds * 1000);
}

let lastAnnouncedView: View | null = null;
let lastRenderedPyaraId: number | null = null;
let lastRenderedTakhtId: string | null = null;
let lastPyareStorylineOpen = false;
let lastTakhtStorylineOpen = false;
let lastPyaraChapterIndex = 0;
let lastTakhtChapterIndex = 0;

// Aggregate-only multi-kiosk analytics: a random, non-identifying token
// generated once per device (never tied to a visitor) lets a gurdwara with
// several kiosks compare traffic across them via /api/analytics-summary.
// Sends are best-effort — analytics/api/analytics.ts responds 204 even
// with no KV binding provisioned, and any network failure here is silently
// swallowed since this must never affect the visitor experience.
const ANALYTICS_KIOSK_ID_KEY = 'khalsa-display-kiosk-id';

function getKioskAnalyticsId(): string {
  try {
    const existing = window.localStorage.getItem(ANALYTICS_KIOSK_ID_KEY);
    if (existing) {
      return existing;
    }
    const generated = crypto.randomUUID();
    window.localStorage.setItem(ANALYTICS_KIOSK_ID_KEY, generated);
    return generated;
  } catch {
    return 'unknown';
  }
}

function sendAnalyticsPing(view: View, event: 'view' | 'heartbeat'): void {
  const payload = JSON.stringify({ kioskId: getKioskAnalyticsId(), view, event });
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(asset('/api/analytics'), new Blob([payload], { type: 'application/json' }));
    } else {
      fetch(asset('/api/analytics'), { method: 'POST', body: payload, keepalive: true }).catch(() => {});
    }
  } catch {
    // Analytics must never break the display — swallow any failure.
  }
}

function render(): void {
  const viewChanging = state.awake && state.view !== lastAnnouncedView;
  // Covers a pin/thumbnail expanding into the storyline reader, the reader
  // collapsing back to the map, stepping between chapters, and stepping to
  // a different person/takht — all driven through the same named
  // view-transition elements (pin-pyara-${id} / pin-takht-${id}) so the
  // browser morphs between whichever of these actually changed.
  const pyareChanging =
    state.selectedPyaraId !== lastRenderedPyaraId ||
    state.pyareStorylineOpen !== lastPyareStorylineOpen ||
    state.pyaraChapterIndex !== lastPyaraChapterIndex;
  const takhtChanging =
    state.selectedTakhtId !== lastRenderedTakhtId ||
    state.takhtStorylineOpen !== lastTakhtStorylineOpen ||
    state.takhtChapterIndex !== lastTakhtChapterIndex;
  const selectionChanging = !viewChanging && state.awake && (pyareChanging || takhtChanging);
  const transitionType: TransitionType = viewChanging ? 'view' : selectionChanging ? 'chapter' : 'none';

  const usedViewTransitionApi = transitionRender(() => {
    if (state.awake && journeyViews.includes(state.view)) {
      visitedViews.add(state.view);
    }

    renderAttract();
    renderHeader();
    renderNav();
    renderView();

    if (state.awake) {
      attractScreen.classList.add('hidden');
      mainShell.classList.remove('hidden');
      mainShell.classList.add('flex');
    } else {
      attractScreen.classList.remove('hidden');
      mainShell.classList.add('hidden');
      mainShell.classList.remove('flex');
    }
    setAmbientMode(state.awake ? 'active' : 'attract');

    if (viewChanging) {
      lastAnnouncedView = state.view;
      viewAnnouncer.textContent = text(content.sections[state.view].title);
      viewContent.focus({ preventScroll: true });
      viewContent.scrollTop = 0;
      sendAnalyticsPing(state.view, 'view');
    }
  }, transitionType);

  lastRenderedPyaraId = state.selectedPyaraId;
  lastRenderedTakhtId = state.selectedTakhtId;
  lastPyareStorylineOpen = state.pyareStorylineOpen;
  lastTakhtStorylineOpen = state.takhtStorylineOpen;
  lastPyaraChapterIndex = state.pyaraChapterIndex;
  lastTakhtChapterIndex = state.takhtChapterIndex;

  // Legacy fallback: only replay the CSS class-toggle animation when the
  // native View Transition API didn't actually run (unsupported browser or
  // reduced motion) — running both would double-animate the same swap.
  // Reduced-motion users still get the class added, same as before; the
  // global media query collapses its duration to ~0.
  if (viewChanging && !usedViewTransitionApi) {
    viewContent.classList.remove('view-transition-in');
    void viewContent.offsetWidth;
    viewContent.classList.add('view-transition-in');
  }
}

function handleUserWake(): void {
  const wasAwake = state.awake;
  state = wakeKiosk(state);
  if (!wasAwake) {
    render();
  }
  scheduleInactivityReset();
}

document.addEventListener('pointerdown', () => {
  handleUserWake();
});

document.addEventListener('keydown', (event) => {
  // Tab is pure focus navigation, not an "I want to engage" gesture — waking
  // (and re-rendering) on it would yank a keyboard user's focus mid-navigation
  // before they ever reach the visible "Begin Experience" button.
  if (event.key === 'Tab') {
    return;
  }
  handleUserWake();
});

// Reading a long passage or scrolling through a panel is real engagement
// too — without this, a visitor who stops tapping to read would silently
// get bounced back to the attract screen mid-article, which reads as a
// "random" reset. Only resets the idle countdown (no wake/re-render) since
// scrolling can happen at any scroll depth without implying "wake me up".
let scrollActivityThrottle = 0;
function handleScrollActivity(): void {
  if (!state.awake) {
    return;
  }
  window.clearTimeout(scrollActivityThrottle);
  scrollActivityThrottle = window.setTimeout(() => {
    scheduleInactivityReset();
  }, 500);
}

document.addEventListener('scroll', handleScrollActivity, { capture: true, passive: true });
document.addEventListener('touchmove', handleScrollActivity, { passive: true });

document.addEventListener('click', (event) => {
  const target = event.target instanceof HTMLElement ? event.target : null;
  if (!target) {
    return;
  }

  const startButton = target.closest<HTMLElement>('[data-action="start"]');
  if (startButton) {
    state = wakeKiosk(state);
    render();
    scheduleInactivityReset();
    return;
  }

  const onboardingTarget = target.closest<HTMLElement>('[data-onboarding-mode]');
  if (onboardingTarget?.dataset.onboardingMode) {
    const mode = onboardingTarget.dataset.onboardingMode;
    state = navigate(state, mode === 'start-here' ? 'home' : (mode as View));
    render();
    scheduleInactivityReset();
    return;
  }

  const navTarget = target.closest<HTMLElement>('[data-nav]');
  if (navTarget?.dataset.nav) {
    event.preventDefault();
    const view = navTarget.dataset.nav as View;
    state = navigate(state, view);
    render();
    window.history.pushState(null, '', VIEW_PATHS[view]);
    scheduleInactivityReset();
    return;
  }

  const homeTarget = target.closest<HTMLElement>('[data-home-target]');
  if (homeTarget?.dataset.homeTarget) {
    state = navigate(state, homeTarget.dataset.homeTarget as View);
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="toggle-lang-menu"]')) {
    langMenuOpen = !langMenuOpen;
    themeMenuOpen = false;
    renderHeader();
    scheduleInactivityReset();
    return;
  }

  const languageTarget = target.closest<HTMLElement>('[data-set-language]');
  if (languageTarget?.dataset.setLanguage) {
    state = setLanguage(state, languageTarget.dataset.setLanguage as Language);
    langMenuOpen = false;
    applyDocumentDirection(state.language);
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="toggle-hero-rotation"]')) {
    homeRotatorPaused = !homeRotatorPaused;
    render();
    scheduleInactivityReset();
    return;
  }

  const heroDotTarget = target.closest<HTMLElement>('[data-action="hero-dot"]');
  if (heroDotTarget?.dataset.index !== undefined) {
    homeRotator?.goTo(Number(heroDotTarget.dataset.index));
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="toggle-theme-menu"]')) {
    themeMenuOpen = !themeMenuOpen;
    langMenuOpen = false;
    renderHeader();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="install-app"]')) {
    const promptEvent = deferredInstallPrompt as (Event & { prompt: () => Promise<void> }) | null;
    if (promptEvent) {
      promptEvent.prompt();
      deferredInstallPrompt = null;
    }
    renderAttract();
    return;
  }

  if (target.closest('[data-action="dismiss-install"]')) {
    try {
      window.localStorage.setItem(INSTALL_DISMISSED_KEY, 'true');
    } catch {
      // Ignore storage failures — the banner simply may reappear next visit.
    }
    renderAttract();
    return;
  }

  const themeTarget = target.closest<HTMLElement>('[data-set-theme]');
  if (themeTarget?.dataset.setTheme) {
    state = setTheme(state, themeTarget.dataset.setTheme);
    themeMenuOpen = false;
    applyDocumentTheme(state);
    render();
    scheduleInactivityReset();
    return;
  }

  const timelineFilterTarget = target.closest<HTMLElement>('[data-timeline-filter]');
  if (timelineFilterTarget?.dataset.timelineFilter) {
    state = setTimelineFilter(state, timelineFilterTarget.dataset.timelineFilter as TimelineFilter);
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="reset"]')) {
    state = resetForInactivity(content);
    hasCelebratedPerfect = false;
    openFaqIndex = null;
    langMenuOpen = false;
    themeMenuOpen = false;
    resourceCarouselIndex = 0;
    visitedViews.clear();
    applyDocumentTheme(state);
    applyDocumentDirection(state.language);
    render();
    return;
  }

  const pyaraTarget = target.closest<HTMLElement>('[data-pyara]');
  if (pyaraTarget?.dataset.pyara) {
    state = selectPyara(state, Number(pyaraTarget.dataset.pyara));
    render();
    scheduleInactivityReset();
    return;
  }

  const takhtTarget = target.closest<HTMLElement>('[data-takht]');
  if (takhtTarget?.dataset.takht) {
    state = selectTakht(state, takhtTarget.dataset.takht);
    render();
    scheduleInactivityReset();
    return;
  }

  const pyaraChapterStepTarget = target.closest<HTMLElement>('[data-action="pyara-chapter-step"]');
  if (pyaraChapterStepTarget) {
    state = stepPyaraChapter(state, content, Number(pyaraChapterStepTarget.dataset.step ?? 0));
    render();
    scheduleInactivityReset();
    return;
  }

  const takhtChapterStepTarget = target.closest<HTMLElement>('[data-action="takht-chapter-step"]');
  if (takhtChapterStepTarget) {
    state = stepTakhtChapter(state, content, Number(takhtChapterStepTarget.dataset.step ?? 0));
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="close-pyara-storyline"]')) {
    state = closePyaraStoryline(state);
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="close-takht-storyline"]')) {
    state = closeTakhtStoryline(state);
    render();
    scheduleInactivityReset();
    return;
  }

  const faqTarget = target.closest<HTMLElement>('[data-faq-toggle]');
  if (faqTarget?.dataset.faqToggle !== undefined) {
    const index = Number(faqTarget.dataset.faqToggle);
    openFaqIndex = openFaqIndex === index ? null : index;
    render();
    scheduleInactivityReset();
    return;
  }

  const ttsTarget = target.closest<HTMLElement>('[data-tts-text]');
  if (ttsTarget?.dataset.ttsText) {
    speakText(ttsTarget.dataset.ttsText, (ttsTarget.dataset.ttsLang as Language | undefined) ?? state.language, ttsTarget);
    scheduleInactivityReset();
    return;
  }

  const carouselDotTarget = target.closest<HTMLElement>('[data-carousel-dot]');
  if (carouselDotTarget?.dataset.carouselDot !== undefined) {
    resourceCarouselIndex = Number(carouselDotTarget.dataset.carouselDot);
    updateResourceCarousel();
    setupResourceCarousel();
    scheduleInactivityReset();
    return;
  }

  const levelTarget = target.closest<HTMLElement>('[data-quiz-level]');
  if (levelTarget?.dataset.quizLevel) {
    state = selectQuizLevel(state, levelTarget.dataset.quizLevel as QuizLevel);
    render();
    scheduleInactivityReset();
    return;
  }

  const countTarget = target.closest<HTMLElement>('[data-quiz-count]');
  if (countTarget?.dataset.quizCount) {
    state = startQuiz(state, content, Number(countTarget.dataset.quizCount));
    hasCelebratedPerfect = false;
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="quiz-back-to-levels"]')) {
    state = backToQuizLevels(state);
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="change-level"]')) {
    state = backToQuizLevels(state);
    render();
    scheduleInactivityReset();
    return;
  }

  const answerTarget = target.closest<HTMLElement>('[data-quiz-answer]');
  if (answerTarget?.dataset.quizAnswer) {
    state = submitQuizAnswer(state, Number(answerTarget.dataset.quizAnswer));
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="next-question"]')) {
    state = advanceQuiz(state);
    render();
    scheduleInactivityReset();
    return;
  }

  if (target.closest('[data-action="restart-quiz"]')) {
    state = restartQuiz(state, content);
    hasCelebratedPerfect = false;
    render();
    scheduleInactivityReset();
  }
});

// Arrow-key chapter navigation while a storyline reader is open — the
// prev/next buttons already cover click/tap/switch access; this adds the
// keyboard-only path so the reader is fully operable without a pointer.
document.addEventListener('keydown', (event) => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
    return;
  }
  const delta = event.key === 'ArrowRight' ? 1 : -1;

  if (state.pyareStorylineOpen && state.view === 'pyare') {
    event.preventDefault();
    state = stepPyaraChapter(state, content, delta);
    render();
    scheduleInactivityReset();
    return;
  }

  if (state.takhtStorylineOpen && state.view === 'takhts') {
    event.preventDefault();
    state = stepTakhtChapter(state, content, delta);
    render();
    scheduleInactivityReset();
  }
});

// Swipe-left/right to advance chapters within an open storyline reader —
// touch-first hardware (kiosk + phone) rarely has a keyboard, so this is
// the primary gesture; the prev/next buttons remain the pointer/keyboard
// fallback for everyone else. A horizontal swipe past the threshold steps
// one chapter; anything shorter (a tap, a vertical scroll) is ignored.
const SWIPE_THRESHOLD_PX = 48;
let swipeStartX: number | null = null;
let swipeStartY: number | null = null;

document.addEventListener(
  'pointerdown',
  (event) => {
    const withinReader = event.target instanceof Element && event.target.closest('.storyline-reader__body, .storyline-reader__backdrop');
    if (!withinReader) {
      swipeStartX = null;
      swipeStartY = null;
      return;
    }
    swipeStartX = event.clientX;
    swipeStartY = event.clientY;
  },
  { passive: true },
);

document.addEventListener(
  'pointerup',
  (event) => {
    if (swipeStartX === null || swipeStartY === null) {
      return;
    }
    const dx = event.clientX - swipeStartX;
    const dy = event.clientY - swipeStartY;
    swipeStartX = null;
    swipeStartY = null;

    if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) < Math.abs(dy)) {
      return;
    }
    const delta = dx < 0 ? 1 : -1;

    if (state.pyareStorylineOpen && state.view === 'pyare') {
      state = stepPyaraChapter(state, content, delta);
      render();
      scheduleInactivityReset();
      return;
    }

    if (state.takhtStorylineOpen && state.view === 'takhts') {
      state = stepTakhtChapter(state, content, delta);
      render();
      scheduleInactivityReset();
    }
  },
  { passive: true },
);

// Browser back/forward — the pushState side of navigation lives in the
// data-nav click handler above; this is the reverse direction. Unknown
// paths (shouldn't happen for same-origin nav, but a pasted/edited URL
// could produce one) are ignored rather than crashing the router.
window.addEventListener('popstate', () => {
  const view = viewForPath(window.location.pathname);
  if (view) {
    state = navigate(wakeKiosk(state), view);
    render();
    scheduleInactivityReset();
  }
});

initPressFeedback();
initAmbient();
applyDocumentDirection(state.language);
applyDocumentTheme(state);
render();

if ('serviceWorker' in navigator) {
  // Offline resilience is a progressive enhancement — a kiosk that loses
  // venue wifi mid-visit should keep working, not go blank. Registration
  // failure (e.g. a local file preview with no HTTPS origin) is silently
  // ignored rather than surfaced, since the site works fine without it.
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(asset('/sw.js')).catch(() => {});
  });
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (!state.awake) {
    renderAttract();
  }
});

window.addEventListener('appinstalled', () => {
  deferredInstallPrompt = null;
  try {
    window.localStorage.setItem(INSTALL_DISMISSED_KEY, 'true');
  } catch {
    // Ignore storage failures (private browsing, quota) — worst case the
    // banner logic re-evaluates next render and finds nothing to install.
  }
});
