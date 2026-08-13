import type { DisplayContent } from '../types/display';
import { icons } from '../lib/icons';

const displayContent: DisplayContent = {
  settings: {
    timeoutSeconds: 120,
  },
  sections: {
    home: {
      title: { en: 'Legacy of the Khalsa', pa: 'ਖ਼ਾਲਸੇ ਦੀ ਵਿਰਾਸਤ' },
      subtitle: { en: 'Five centuries of faith, courage, and sacrifice — brought to life for every visitor', pa: 'ਪੰਜ ਸਦੀਆਂ ਦੀ ਸ਼ਰਧਾ, ਹਿੰਮਤ ਅਤੇ ਕੁਰਬਾਨੀ — ਹਰ ਸੈਲਾਨੀ ਲਈ ਸਾਕਾਰ' },
    },
    pyare: {
      title: { en: 'Panj Pyare', pa: 'ਪੰਜ ਪਿਆਰੇ' },
      subtitle: { en: 'Five lives that modeled devotion, courage, and collective identity', pa: 'ਪੰਜ ਜੀਵਨ ਜਿਨ੍ਹਾਂ ਨੇ ਭਗਤੀ, ਹਿੰਮਤ ਅਤੇ ਸਾਂਝੀ ਪਹਿਚਾਣ ਨੂੰ ਰੂਪ ਦਿੱਤਾ' },
    },
    takhts: {
      title: { en: 'Panj Takht', pa: 'ਪੰਜ ਤਖ਼ਤ' },
      subtitle: { en: 'Sacred geography and institutional authority across the Sikh world', pa: 'ਸਿੱਖ ਜਗਤ ਵਿੱਚ ਪਵਿੱਤਰ ਭੂਗੋਲ ਅਤੇ ਸੰਸਥਾਗਤ ਅਧਿਕਾਰ' },
    },
    quiz: {
      title: { en: 'Interactive Quiz', pa: 'ਇੰਟਰਐਕਟਿਵ ਕਵਿਜ਼' },
      subtitle: { en: 'Three levels to test and deepen what you know, from a first visit to a lifetime in the sangat', pa: 'ਪਹਿਲੀ ਫੇਰੀ ਤੋਂ ਲੈ ਕੇ ਸੰਗਤ ਵਿੱਚ ਸਾਰੀ ਉਮਰ ਤੱਕ, ਆਪਣੇ ਗਿਆਨ ਨੂੰ ਪਰਖਣ ਅਤੇ ਗਹਿਰਾ ਕਰਨ ਲਈ ਤਿੰਨ ਪੱਧਰ' },
    },
    learn: {
      title: { en: 'Learn About Sikhi', pa: 'ਸਿੱਖੀ ਬਾਰੇ ਜਾਣੋ' },
      subtitle: { en: 'Gurdwara etiquette, the Gurus, the Kakaars, and sacred Gurbani', pa: 'ਗੁਰਦੁਆਰਾ ਮਰਯਾਦਾ, ਗੁਰੂ ਸਾਹਿਬਾਨ, ਕਕਾਰ ਅਤੇ ਪਵਿੱਤਰ ਗੁਰਬਾਣੀ' },
    },
    about: {
      title: { en: 'About This Display', pa: 'ਇਸ ਪ੍ਰਦਰਸ਼ਨੀ ਬਾਰੇ' },
      subtitle: { en: 'How this experience was built, who we are proud to stand alongside, and where it goes next', pa: 'ਇਹ ਅਨੁਭਵ ਕਿਵੇਂ ਬਣਾਇਆ ਗਿਆ, ਅਸੀਂ ਕਿਸ ਦੇ ਨਾਲ ਖੜ੍ਹੇ ਹੋਣ ਤੇ ਮਾਣ ਮਹਿਸੂਸ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਅੱਗੇ ਇਹ ਕਿੱਥੇ ਜਾਵੇਗਾ' },
    },
    resources: {
      title: { en: 'Resources', pa: 'ਸਰੋਤ' },
      subtitle: { en: 'Trusted Sikh learning platforms and partner sites', pa: 'ਭਰੋਸੇਯੋਗ ਸਿੱਖ ਸਿਖਲਾਈ ਪਲੇਟਫਾਰਮ ਅਤੇ ਭਾਗੀਦਾਰ ਸਾਈਟਾਂ' },
    },
    leaflets: {
      title: { en: 'Leaflets', pa: 'ਲੀਫਲੈਟ' },
      subtitle: { en: 'Download and continue learning beyond this display', pa: 'ਡਾਊਨਲੋਡ ਕਰੋ ਅਤੇ ਇਸ ਪ੍ਰਦਰਸ਼ਨੀ ਤੋਂ ਬਾਅਦ ਵੀ ਸਿੱਖਣਾ ਜਾਰੀ ਰੱਖੋ' },
    },
    timeline: {
      title: { en: 'Sikh History Timeline', pa: 'ਸਿੱਖ ਇਤਿਹਾਸ ਦੀ ਸਮਾਂਰੇਖਾ' },
      subtitle: { en: 'From Guru Nanak Dev Ji to the Sikh Empire — the events that shaped the Panth', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਤੋਂ ਲੈ ਕੇ ਸਿੱਖ ਸਾਮਰਾਜ ਤੱਕ — ਉਹ ਘਟਨਾਵਾਂ ਜਿਨ੍ਹਾਂ ਨੇ ਪੰਥ ਨੂੰ ਰੂਪ ਦਿੱਤਾ' },
    },
  },
  ui: {
    experienceLabel: { en: 'Premium Interactive Display', pa: 'ਪ੍ਰੀਮੀਅਮ ਇੰਟਰਐਕਟਿਵ ਪ੍ਰਦਰਸ਼ਨੀ' },
    attractEyebrow: { en: 'Immersive Interactive Experience', pa: 'ਡੁੱਬਕੀਵਾਂ ਇੰਟਰਐਕਟਿਵ ਅਨੁਭਵ' },
    attractTitle: { en: 'Panj Pyare & Panj Takht', pa: 'ਪੰਜ ਪਿਆਰੇ ਅਤੇ ਪੰਜ ਤਖ਼ਤ', hi: 'पंज प्यारे और पंज तख्त', es: 'Los Cinco Amados y los Cinco Tronos', ar: 'خمسة المحبوبين وخمسة العروش' },
    attractSubtitle: { en: 'A ceremonial digital doorway into memory, identity, and Sikh institutional history.', pa: 'ਸਮ੍ਰਿਤੀ, ਪਹਿਚਾਣ ਅਤੇ ਸਿੱਖ ਸੰਸਥਾਗਤ ਇਤਿਹਾਸ ਵੱਲ ਇਕ ਰਸਮੀ ਡਿਜ਼ਿਟਲ ਦਰਵਾਜ਼ਾ।', hi: 'स्मृति, पहचान और सिख संस्थागत इतिहास की ओर एक औपचारिक डिजिटल द्वार।', es: 'Una puerta digital ceremonial hacia la memoria, la identidad y la historia institucional sij.', ar: 'بوابة رقمية احتفالية إلى الذاكرة والهوية والتاريخ المؤسسي السيخي.' },
    attractInstruction: { en: 'Touch anywhere to begin the guided display.', pa: 'ਮਾਰਗਦਰਸ਼ਿਤ ਪ੍ਰਦਰਸ਼ਨੀ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਕਿਤੇ ਵੀ ਛੂਹੋ।', hi: 'निर्देशित प्रदर्शन शुरू करने के लिए कहीं भी स्पर्श करें।', es: 'Toca en cualquier lugar para comenzar la presentación guiada.', ar: 'المس في أي مكان لبدء العرض الموجّه.' },
    attractButton: { en: 'Begin Experience', pa: 'ਅਨੁਭਵ ਸ਼ੁਰੂ ਕਰੋ', hi: 'अनुभव शुरू करें', es: 'Comenzar experiencia', ar: 'ابدأ التجربة' },
    nav: {
      home: { en: 'Home', pa: 'ਮੁੱਖ', hi: 'होम', es: 'Inicio', ar: 'الرئيسية' },
      pyare: { en: '5 Pyare', pa: '੫ ਪਿਆਰੇ', hi: '5 प्यारे', es: '5 Amados', ar: '٥ محبوبين' },
      takhts: { en: '5 Takht', pa: '੫ ਤਖ਼ਤ', hi: '5 तख्त', es: '5 Tronos', ar: '٥ عروش' },
      quiz: { en: 'Quiz', pa: 'ਕਵਿਜ਼', hi: 'प्रश्नोत्तरी', es: 'Cuestionario', ar: 'اختبار' },
      learn: { en: 'Learn Sikhi', pa: 'ਸਿੱਖੀ ਸਿੱਖੋ', hi: 'सिखी सीखें', es: 'Aprende Sikhi', ar: 'تعلّم السيخية' },
      about: { en: 'About', pa: 'ਬਾਰੇ', hi: 'परिचय', es: 'Acerca de', ar: 'حول' },
      resources: { en: 'Resources', pa: 'ਸਰੋਤ', hi: 'संसाधन', es: 'Recursos', ar: 'موارد' },
      leaflets: { en: 'Leaflets', pa: 'ਲੀਫਲੈਟ', hi: 'पत्रक', es: 'Folletos', ar: 'نشرات' },
      timeline: { en: 'Timeline', pa: 'ਸਮਾਂਰੇਖਾ', hi: 'समयरेखा', es: 'Cronología', ar: 'الجدول الزمني' },
    },
    languageLabel: {
      en: 'Language',
      pa: 'ਭਾਸ਼ਾ',
    },
    languages: {
      en: 'English',
      pa: 'ਪੰਜਾਬੀ',
      hi: 'हिन्दी',
      es: 'Español',
      ar: 'العربية',
    },
    reset: { en: 'Reset display', pa: 'ਪ੍ਰਦਰਸ਼ਨੀ ਰੀਸੈੱਟ ਕਰੋ' },
    themeLabel: { en: 'Occasion theme', pa: 'ਮੌਕੇ ਦਾ ਥੀਮ' },
    labels: {
      birthName: { en: 'Birth name', pa: 'ਜਨਮ ਨਾਮ' },
      birthDeath: { en: 'Birth & shaheedi', pa: 'ਜਨਮ ਅਤੇ ਸ਼ਹੀਦੀ' },
      previousOccupation: { en: 'Prior occupation', pa: 'ਪਹਿਲਾ ਕਿੱਤਾ' },
      fromRegion: { en: 'From region', pa: 'ਇਲਾਕਾ' },
      representing: { en: 'Representing', pa: 'ਪ੍ਰਤੀਨਿਧਤਾ' },
      significance: { en: 'Significance', pa: 'ਮਹੱਤਵ' },
      establishedBy: { en: 'Established by', pa: 'ਸਥਾਪਨਾ' },
      sacredGeography: { en: 'Sacred geography', pa: 'ਪਵਿੱਤਰ ਭੂਗੋਲ' },
      originMap: { en: 'Origins across South Asia', pa: 'ਦੱਖਣੀ ਏਸ਼ੀਆ ਵਿੱਚ ਮੂਲ ਸਥਾਨ' },
      storylineJourney: { en: 'Storyline journey', pa: 'ਕਥਾ ਯਾਤਰਾ' },
      quizProgress: { en: 'Question', pa: 'ਪ੍ਰਸ਼ਨ' },
      nextQuestion: { en: 'Next question', pa: 'ਅਗਲਾ ਪ੍ਰਸ਼ਨ' },
      restartQuiz: { en: 'Play again', pa: 'ਮੁੜ ਖੇਡੋ' },
      yourScore: { en: 'Your score', pa: 'ਤੁਹਾਡਾ ਸਕੋਰ' },
      perfectScore: { en: 'Perfect score — beautifully done.', pa: 'ਪੂਰਾ ਸਕੋਰ — ਬਹੁਤ ਸੁੰਦਰ।' },
      excellentScore: { en: 'Excellent recall — you know this well.', pa: 'ਸ਼ਾਨਦਾਰ ਯਾਦਦਾਸ਼ਤ — ਤੁਸੀਂ ਇਹ ਚੰਗੀ ਤਰ੍ਹਾਂ ਜਾਣਦੇ ਹੋ।' },
      goodScore: { en: 'Good progress — a few more rounds will sharpen it further.', pa: 'ਚੰਗੀ ਪ੍ਰਗਤੀ — ਕੁਝ ਹੋਰ ਰਾਊਂਡ ਇਸ ਨੂੰ ਹੋਰ ਨਿਖਾਰਨਗੇ।' },
      tryAgainScore: { en: 'Keep exploring — try again to build your confidence.', pa: 'ਖੋਜ ਜਾਰੀ ਰੱਖੋ — ਆਪਣਾ ਭਰੋਸਾ ਵਧਾਉਣ ਲਈ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।' },
      replayPrompt: { en: 'Continue exploring and try again to deepen retention.', pa: 'ਹੋਰ ਖੋਜ ਕਰੋ ਅਤੇ ਯਾਦਗਾਰੀ ਵਧਾਉਣ ਲਈ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।' },
      chooseLevelTitle: { en: 'Choose your level', pa: 'ਆਪਣਾ ਪੱਧਰ ਚੁਣੋ' },
      chooseLevelStep: { en: 'Step 1 of 2', pa: 'ਪੜਾਅ 1 ਵਿੱਚੋਂ 2' },
      chooseCountTitle: { en: 'Choose round length', pa: 'ਰਾਊਂਡ ਦੀ ਲੰਬਾਈ ਚੁਣੋ' },
      chooseCountStep: { en: 'Step 2 of 2', pa: 'ਪੜਾਅ 2 ਵਿੱਚੋਂ 2' },
      backButton: { en: 'Back', pa: 'ਪਿੱਛੇ' },
      changeLevel: { en: 'Change level', pa: 'ਪੱਧਰ ਬਦਲੋ' },
      tryAgainButton: { en: 'Try again', pa: 'ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ' },
      correctAnswer: { en: 'Correct answer', pa: 'ਸਹੀ ਉੱਤਰ' },
      reviewPanel: { en: 'Content provenance', pa: 'ਸਮੱਗਰੀ ਦਾ ਮੂਲ' },
      story: { en: 'The story', pa: 'ਕਥਾ' },
      funFact: { en: 'Did you know?', pa: 'ਕੀ ਤੁਸੀਂ ਜਾਣਦੇ ਹੋ?' },
      roles: { en: 'Roles & contributions', pa: 'ਰੋਲ ਅਤੇ ਯੋਗਦਾਨ' },
      accomplishments: { en: 'Key accomplishments', pa: 'ਮੁੱਖ ਪ੍ਰਾਪਤੀਆਂ' },
      shaheedi: { en: 'Shaheedi', pa: 'ਸ਼ਹੀਦੀ' },
      jathedaar: { en: 'Current Jathedar', pa: 'ਮੌਜੂਦਾ ਜਥੇਦਾਰ' },
      visitorsInfo: { en: 'Visitor information', pa: 'ਸੈਲਾਨੀ ਜਾਣਕਾਰੀ' },
      openInBrowser: { en: 'Open in browser', pa: 'ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਖੋਲ੍ਹੋ' },
      visitSite: { en: 'Visit site', pa: 'ਸਾਈਟ ਵੇਖੋ' },
      takhtsIntro: { en: 'The Panj Takht (Five Thrones) are the five most sacred seats of Sikh institutional authority. Each Takht holds supreme significance in the Sikh world — governing doctrine, issuing binding decrees (hukamnamas), and marking pivotal moments in Sikh history. They span the geography of South Asia, from Punjab to Bihar, Deccan to Karnataka.', pa: 'ਪੰਜ ਤਖ਼ਤ ਸਿੱਖ ਸੰਸਥਾਗਤ ਅਧਿਕਾਰ ਦੇ ਸਭ ਤੋਂ ਪਵਿੱਤਰ ਪੰਜ ਅਸਥਾਨ ਹਨ। ਹਰ ਤਖ਼ਤ ਸਿੱਖ ਜਗਤ ਵਿੱਚ ਸਰਵੋੱਚ ਮਹੱਤਵ ਰੱਖਦਾ ਹੈ।' },
      pyareIntro: { en: 'On Vaisakhi of 1699, Guru Gobind Singh Ji asked for five volunteers willing to give their heads for the faith. Five men stepped forward from different corners of India — different castes, different occupations, different lives — and together became the Panj Pyare: the Five Beloved Ones. Guru Gobind Singh Ji deliberately chose men from five distinct caste backgrounds and five different regions of India — a Khatri, a Jat, a Jheevar, a Chhimba, and a Nai — as a decisive act to dissolve caste distinction (ਜਾਤ-ਪਾਤ) within the Khalsa and declare that all souls stand equal before Waheguru. They are the founding exemplars of the Khalsa, the embodiment of courage, equality, and selfless devotion. Touch each pin on the map to learn where they came from, who they were, and the lives they led.', pa: '1699 ਦੀ ਵਿਸਾਖੀ ਨੂੰ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਧਰਮ ਲਈ ਆਪਣਾ ਸਿਰ ਦੇਣ ਲਈ ਤਿਆਰ ਪੰਜ ਸੇਵਾਦਾਰਾਂ ਦੀ ਮੰਗ ਕੀਤੀ। ਭਾਰਤ ਦੇ ਵੱਖ-ਵੱਖ ਕੋਨਿਆਂ ਤੋਂ ਪੰਜ ਵਿਅਕਤੀ ਅੱਗੇ ਆਏ ਅਤੇ ਪੰਜ ਪਿਆਰੇ ਬਣੇ। ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਜਾਣਬੁੱਝ ਕੇ ਪੰਜ ਵੱਖ-ਵੱਖ ਜਾਤਾਂ ਅਤੇ ਖੇਤਰਾਂ ਤੋਂ ਪੁਰਸ਼ ਚੁਣੇ — ਖ਼ਾਲਸੇ ਅੰਦਰ ਜਾਤ-ਪਾਤ ਨੂੰ ਖ਼ਤਮ ਕਰਨ ਅਤੇ ਇਹ ਐਲਾਨ ਕਰਨ ਲਈ ਕਿ ਵਾਹਿਗੁਰੂ ਅੱਗੇ ਸਾਰੀਆਂ ਰੂਹਾਂ ਬਰਾਬਰ ਹਨ।' },
      selectOnMap: { en: 'Select a location on the map to begin', pa: 'ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਨਕਸ਼ੇ ਤੇ ਇੱਕ ਸਥਾਨ ਚੁਣੋ' },
      learnMore: { en: 'Learn more →', pa: 'ਹੋਰ ਜਾਣੋ →' },
      beforeKhalsa: { en: 'Before the Khalsa', pa: 'ਖ਼ਾਲਸੇ ਤੋਂ ਪਹਿਲਾਂ' },
      afterKhalsa: { en: 'After initiation', pa: 'ਅੰਮ੍ਰਿਤ ਛਕਣ ਤੋਂ ਬਾਅਦ' },
      timelineTitle: { en: 'Key Events Timeline', pa: 'ਮੁੱਖ ਘਟਨਾਵਾਂ ਦੀ ਸਮਾਂ-ਰੇਖਾ' },
      faqTitle: { en: 'Frequently Asked Questions', pa: 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ' },
      leafletsHelper: { en: 'Access the full Basics of Sikhi leaflet library:', pa: 'ਬੇਸਿਕਸ ਆਫ ਸਿੱਖੀ ਲੀਫਲੈਟ ਲਾਇਬ੍ਰੇਰੀ ਤੱਕ ਪਹੁੰਚ ਕਰੋ:' },
      recapTitle: { en: 'What you learned', pa: 'ਤੁਸੀਂ ਕੀ ਸਿੱਖਿਆ' },
      collaborationWith: { en: 'Built in Collaboration With', pa: 'ਸਾਂਝੇ ਤੌਰ ਤੇ ਬਣਾਇਆ' },
      livePreviews: { en: 'Live Previews', pa: 'ਲਾਈਵ ਝਲਕ' },
      scanToVisit: { en: 'Scan to visit', pa: 'ਵੇਖਣ ਲਈ ਸਕੈਨ ਕਰੋ' },
      lessons: { en: 'Lessons from their life', pa: 'ਜੀਵਨ ਤੋਂ ਸਿੱਖਿਆ' },
      language: { en: 'Language', pa: 'ਭਾਸ਼ਾ' },
      qualities: { en: 'Qualities', pa: 'ਗੁਣ' },
      gurusVisited: { en: 'Gurus associated with this site', pa: 'ਇਸ ਅਸਥਾਨ ਨਾਲ ਸੰਬੰਧਿਤ ਗੁਰੂ ਸਾਹਿਬਾਨ' },
      areaHistory: { en: 'History of the surrounding area', pa: 'ਆਲੇ-ਦੁਆਲੇ ਦੇ ਇਲਾਕੇ ਦਾ ਇਤਿਹਾਸ' },
      localImpact: { en: 'Impact on the local area', pa: 'ਸਥਾਨਕ ਇਲਾਕੇ ਤੇ ਪ੍ਰਭਾਵ' },
      embedUnavailable: { en: 'This site cannot be embedded here — view it in your browser instead.', pa: 'ਇਹ ਸਾਈਟ ਇੱਥੇ ਏਮਬੈਡ ਨਹੀਂ ਹੋ ਸਕਦੀ — ਇਸਨੂੰ ਆਪਣੇ ਬ੍ਰਾਊਜ਼ਰ ਵਿੱਚ ਵੇਖੋ।' },
      ttsListen: { en: 'Listen', pa: 'ਸੁਣੋ' },
      ttsNoPunjabiVoice: { en: 'No Punjabi voice is available on this device — showing text only.', pa: 'ਇਸ ਡਿਵਾਈਸ ਤੇ ਪੰਜਾਬੀ ਆਵਾਜ਼ ਉਪਲਬਧ ਨਹੀਂ ਹੈ — ਸਿਰਫ਼ ਪਾਠ ਦਿਖਾਇਆ ਜਾ ਰਿਹਾ ਹੈ।' },
      journeyProgress: { en: 'Your journey', pa: 'ਤੁਹਾਡੀ ਯਾਤਰਾ' },
      installBannerAndroid: { en: 'Add this display to your home screen for quick access.', pa: 'ਤੁਰੰਤ ਪਹੁੰਚ ਲਈ ਇਸ ਪ੍ਰਦਰਸ਼ਨੀ ਨੂੰ ਆਪਣੀ ਹੋਮ ਸਕ੍ਰੀਨ ਤੇ ਸ਼ਾਮਲ ਕਰੋ।' },
      installBannerIos: { en: 'Tap Share, then "Add to Home Screen" for quick access.', pa: 'ਤੁਰੰਤ ਪਹੁੰਚ ਲਈ ਸ਼ੇਅਰ ਤੇ, ਫਿਰ "ਹੋਮ ਸਕ੍ਰੀਨ ਤੇ ਸ਼ਾਮਲ ਕਰੋ" ਤੇ ਟੈਪ ਕਰੋ।' },
      installAction: { en: 'Install', pa: 'ਇੰਸਟਾਲ ਕਰੋ' },
      dismissAction: { en: 'Dismiss', pa: 'ਖਾਰਜ ਕਰੋ' },
      chapterLabel: { en: 'Chapter', pa: 'ਅਧਿਆਇ' },
      previousChapter: { en: 'Previous', pa: 'ਪਿਛਲਾ' },
      nextChapter: { en: 'Next', pa: 'ਅਗਲਾ' },
      aiContentNotice: {
        en: 'Historical summaries on this page are AI-drafted from verified sources and pending review by our scholar board before being presented as final.',
        pa: 'ਇਸ ਪੰਨੇ ਦੇ ਇਤਿਹਾਸਕ ਸਾਰ AI ਦੁਆਰਾ ਪ੍ਰਮਾਣਿਤ ਸਰੋਤਾਂ ਤੋਂ ਤਿਆਰ ਕੀਤੇ ਗਏ ਹਨ ਅਤੇ ਅੰਤਿਮ ਪੇਸ਼ਕਾਰੀ ਤੋਂ ਪਹਿਲਾਂ ਸਾਡੇ ਵਿਦਵਤ ਬੋਰਡ ਦੀ ਸਮੀਖਿਆ ਅਧੀਨ ਹਨ।',
      },
      pauseRotation: { en: 'Pause slideshow', pa: 'ਸਲਾਈਡਸ਼ੋ ਰੋਕੋ' },
      resumeRotation: { en: 'Resume slideshow', pa: 'ਸਲਾਈਡਸ਼ੋ ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ' },
      heroSlide: { en: 'Slide', pa: 'ਸਲਾਈਡ' },
    },
  },
  home: {
    heroTitle: {
      en: 'A museum-grade digital display for reverent, touch-first Sikh learning.',
      pa: 'ਗੰਭੀਰ, ਟਚ-ਪਹਿਲਾਂ ਸਿੱਖ ਸਿੱਖਿਆ ਲਈ ਮਿਊਜ਼ੀਅਮ-ਪੱਧਰੀ ਡਿਜ਼ਿਟਲ ਪ੍ਰਦਰਸ਼ਨੀ।',
    },
    heroDescription: {
      en: 'Explore the formation of the Khalsa, the lives of the Panj Pyare, and the sacred authority of the Panj Takht through a focused bilingual experience — built for touch, whether you\'re at a gurdwara kiosk or on your own phone.',
      pa: 'ਖ਼ਾਲਸੇ ਦੀ ਰਚਨਾ, ਪੰਜ ਪਿਆਰਿਆਂ ਦੇ ਜੀਵਨ ਅਤੇ ਪੰਜ ਤਖ਼ਤਾਂ ਦੀ ਪਵਿੱਤਰ ਅਧਿਕਾਰਤਾ ਨੂੰ ਇੱਕ ਕੇਂਦ੍ਰਿਤ ਦੋਭਾਸ਼ੀ ਅਨੁਭਵ ਰਾਹੀਂ ਜਾਣੋ — ਟਚ ਲਈ ਬਣਿਆ, ਭਾਵੇਂ ਤੁਸੀਂ ਗੁਰਦੁਆਰਾ ਕਿਓਸਕ ਤੇ ਹੋਵੋ ਜਾਂ ਆਪਣੇ ਫ਼ੋਨ ਤੇ।',
    },
    collaborationBanner: {
      en: 'Collaboratively created by the Mata Gujri Ji Group from San Jose Gurmat Camp (July 2026).',
      pa: 'ਸੈਨ ਹੋਜੇ ਗੁਰਮਤ ਕੈਂਪ (ਜੁਲਾਈ 2026) ਦੇ ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਗਰੁੱਪ ਦੀ ਸਾਂਝੀ ਤਿਆਰੀ।',
    },
    differentiationTitle: {
      en: 'Know the difference: Panj Pyare and Panj Takht',
      pa: 'ਫ਼ਰਕ ਸਮਝੋ: ਪੰਜ ਪਿਆਰੇ ਅਤੇ ਪੰਜ ਤਖ਼ਤ',
    },
    differentiationDescription: {
      en: 'Panj Pyare are the first five initiated Sikhs who modeled courage and equality. Panj Takht are the five highest seats of Sikh authority that guide the Panth across geography and time.',
      pa: 'ਪੰਜ ਪਿਆਰੇ ਪਹਿਲੇ ਪੰਜ ਅੰਮ੍ਰਿਤਧਾਰੀ ਸਿੱਖ ਹਨ ਜਿਨ੍ਹਾਂ ਨੇ ਹਿੰਮਤ ਅਤੇ ਬਰਾਬਰੀ ਦਾ ਮਿਸਾਲ ਦਿੱਤਾ। ਪੰਜ ਤਖ਼ਤ ਸਿੱਖ ਅਧਿਕਾਰ ਦੇ ਪੰਜ ਸਰਵੋੱਚ ਅਸਥਾਨ ਹਨ ਜੋ ਪੰਥ ਨੂੰ ਮਾਰਗਦਰਸ਼ਨ ਦਿੰਦੇ ਹਨ।',
    },
    differentiationCards: [
      {
        id: 'pyare',
        imagePath: '/assets/images/panj-pyare-daya-singh.jpg',
        title: { en: 'Panj Pyare', pa: 'ਪੰਜ ਪਿਆਰੇ' },
        description: { en: 'Five historic individuals who offered their heads to Guru Gobind Singh Ji and became the founding exemplars of the Khalsa.', pa: 'ਪੰਜ ਇਤਿਹਾਸਕ ਵਿਅਕਤੀ ਜਿਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਅੱਗੇ ਸਿਰ ਭੇਟ ਕੀਤਾ ਅਤੇ ਖ਼ਾਲਸੇ ਦੇ ਪ੍ਰਥਮ ਮਿਸਾਲ ਬਣੇ।' },
      },
      {
        id: 'takhts',
        imagePath: '/assets/images/IMG_3192.jpeg',
        title: { en: 'Panj Takht', pa: 'ਪੰਜ ਤਖ਼ਤ' },
        description: { en: 'Five sacred institutions and seats of authority that preserve Sikh doctrine, governance, and collective memory.', pa: 'ਪੰਜ ਪਵਿੱਤਰ ਸੰਸਥਾਗਤ ਅਸਥਾਨ ਜੋ ਸਿੱਖ ਮਰਯਾਦਾ, ਨਿਰਣੇ ਅਤੇ ਸਾਂਝੀ ਸਮੂਹਕ ਯਾਦ ਨੂੰ ਸੰਭਾਲਦੇ ਹਨ।' },
      },
    ],
    featureCards: [
      {
        id: 'pyare',
        icon: icons.panjPyare,
        eyebrow: { en: 'Collective Identity', pa: 'ਸਾਂਝੀ ਪਹਿਚਾਣ' },
        title: { en: 'Explore the Panj Pyare', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਜਾਣੋ' },
        description: { en: 'Compare their backgrounds, regions, and contributions in a refined side-by-side experience.', pa: 'ਉਨ੍ਹਾਂ ਦੇ ਪਿਛੋਕੜ, ਇਲਾਕੇ ਅਤੇ ਯੋਗਦਾਨ ਨੂੰ ਇਕ ਨਿੱਖਰੇ ਤੁਲਨਾਤਮਕ ਅਨੁਭਵ ਵਿੱਚ ਦੇਖੋ।' },
        cta: { en: 'Open profiles', pa: 'ਪ੍ਰੋਫ਼ਾਈਲ ਖੋਲ੍ਹੋ' },
      },
      {
        id: 'takhts',
        icon: icons.panjTakht,
        eyebrow: { en: 'Sacred Geography', pa: 'ਪਵਿੱਤਰ ਭੂਗੋਲ' },
        title: { en: 'Journey across the Panj Takht', pa: 'ਪੰਜ ਤਖ਼ਤਾਂ ਦੀ ਯਾਤਰਾ' },
        description: { en: 'Move through the five seats of authority with an elegant map-first narrative layout.', pa: 'ਅਧਿਕਾਰ ਦੇ ਪੰਜ ਆਸਣਾਂ ਰਾਹੀਂ ਸੁੰਦਰ ਨਕਸ਼ਾ-ਪਹਿਲਾਂ ਕਥਾਤਮਕ ਲੇਆਉਟ ਨਾਲ ਯਾਤਰਾ ਕਰੋ।' },
        cta: { en: 'View Takht', pa: 'ਤਖ਼ਤ ਵੇਖੋ' },
      },
      {
        id: 'quiz',
        icon: icons.quiz,
        eyebrow: { en: 'Active Recall', pa: 'ਸਕ੍ਰਿਯ ਯਾਦ' },
        title: { en: 'Test memory with a polished quiz mode', pa: 'ਨਿੱਖਰੇ ਕਵਿਜ਼ ਮੋਡ ਨਾਲ ਯਾਦਸ਼ਕਤੀ ਪਰਖੋ' },
        description: { en: 'Use touch-friendly cards, instant feedback, and replayable rounds to strengthen retention.', pa: 'ਟਚ-ਦੋਸਤ ਕਾਰਡ, ਤੁਰੰਤ ਪ੍ਰਤੀਕਿਰਿਆ ਅਤੇ ਦੁਹਰਾਏ ਜਾ ਸਕਣ ਵਾਲੇ ਰਾਊਂਡਾਂ ਨਾਲ ਯਾਦ ਮਜ਼ਬੂਤ ਕਰੋ।' },
        cta: { en: 'Start quiz', pa: 'ਕਵਿਜ਼ ਸ਼ੁਰੂ ਕਰੋ' },
      },
    ],
  },
  about: {
    title: { en: 'The Story Behind This Display', pa: 'ਇਸ ਪ੍ਰਦਰਸ਼ਨੀ ਦੀ ਕਹਾਣੀ' },
    collaboration: {
      en: 'This display was collaborated on by the Mata Gujri Ji Group from the San Jose Gurmat Camp in July 2026.',
      pa: 'ਇਹ ਪ੍ਰਦਰਸ਼ਨੀ ਜੁਲਾਈ 2026 ਵਿੱਚ ਸੈਨ ਹੋਜੇ ਗੁਰਮਤ ਕੈਂਪ ਦੇ ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਗਰੁੱਪ ਦੇ ਸਹਿਯੋਗ ਨਾਲ ਤਿਆਰ ਕੀਤੀ ਗਈ।',
    },
    contributorsLabel: {
      en: 'Mata Gujri Ji Group',
      pa: 'ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਗਰੁੱਪ',
    },
    contributors: [
      'Evleen Kang',
      'Mannat Kang',
      'Harnoor Dehar',
      'Arashdeep Kaur',
      'Gurparleen Kaur',
      'Mansimar Gill',
      'Gurjot Kaur',
      'Anglepreet Kaur',
    ],
    partnerships: {
      en: 'Built in partnership with Sikhi.io and SikhiUni.com, with curated pathways to trusted Sikh education resources.',
      pa: 'Sikhi.io ਅਤੇ SikhiUni.com ਦੇ ਸਾਥ ਨਾਲ ਬਣਾਇਆ ਗਿਆ, ਭਰੋਸੇਯੋਗ ਸਿੱਖ ਸਿੱਖਿਆ ਸਰੋਤਾਂ ਵੱਲ ਮਾਰਗਦਰਸ਼ਨ ਸਮੇਤ।',
    },
    futureUpdates: {
      en: 'This experience will continue receiving updates, expanded content, and improved visuals.',
      pa: 'ਇਸ ਅਨੁਭਵ ਵਿੱਚ ਆਉਣ ਵਾਲੇ ਸਮੇਂ ਵਿੱਚ ਨਵੇਂ ਅੱਪਡੇਟ, ਵਧੀਕ ਸਮੱਗਰੀ ਅਤੇ ਸੁਧਰੇ ਦ੍ਰਿਸ਼ ਜੋੜੇ ਜਾਣਗੇ।',
    },
    mobileApp: {
      title: { en: 'Take it with you', pa: 'ਆਪਣੇ ਨਾਲ ਲੈ ਜਾਓ' },
      description: {
        en: 'The same bilingual experience is also available as a free Android app — scan the code or download it directly to your phone or tablet.',
        pa: 'ਇਹੀ ਦੋਭਾਸ਼ੀ ਅਨੁਭਵ ਇੱਕ ਮੁਫ਼ਤ ਐਂਡਰਾਇਡ ਐਪ ਵਜੋਂ ਵੀ ਉਪਲਬਧ ਹੈ — ਕੋਡ ਸਕੈਨ ਕਰੋ ਜਾਂ ਸਿੱਧਾ ਆਪਣੇ ਫ਼ੋਨ ਜਾਂ ਟੈਬਲੈੱਟ ਤੇ ਡਾਊਨਲੋਡ ਕਰੋ।',
      },
      cta: { en: 'Download the Android app', pa: 'ਐਂਡਰਾਇਡ ਐਪ ਡਾਊਨਲੋਡ ਕਰੋ' },
    },
    principles: [
      {
        title: { en: 'Bilingual by design', pa: 'ਡਿਜ਼ਾਇਨ ਤੋਂ ਦੋਭਾਸ਼ੀ' },
        description: { en: 'English framing with clear Punjabi Unicode support keeps the display welcoming and reverent.', pa: 'ਅੰਗਰੇਜ਼ੀ ਪ੍ਰਸਤੁਤੀ ਅਤੇ ਸਪਸ਼ਟ ਪੰਜਾਬੀ ਯੂਨੀਕੋਡ ਸਹਾਇਤਾ ਪ੍ਰਦਰਸ਼ਨੀ ਨੂੰ ਸਵਾਗਤੀ ਅਤੇ ਗੰਭੀਰ ਬਣਾਉਂਦੀ ਹੈ।' },
      },
      {
        title: { en: 'Kiosk-first, mobile-ready', pa: 'ਕਿਓਸਕ-ਪਹਿਲਾਂ, ਮੋਬਾਈਲ-ਤਿਆਰ' },
        description: { en: 'Idle reset and large touch targets protect the exhibit flow on-site, while the same experience adapts natively to phones and tablets at home.', pa: 'ਨਿਸ਼ਕ੍ਰਿਯਤਾ ਰੀਸੈੱਟ ਅਤੇ ਵੱਡੇ ਟਚ ਟਾਰਗਟ ਮੌਕੇ ਤੇ ਪ੍ਰਦਰਸ਼ਨੀ ਦੇ ਪ੍ਰਭਾਹ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਦੇ ਹਨ, ਜਦਕਿ ਇਹੀ ਅਨੁਭਵ ਘਰ ਵਿੱਚ ਫ਼ੋਨ ਅਤੇ ਟੈਬਲੈੱਟ ਤੇ ਵੀ ਸੁਭਾਵਿਕ ਢੰਗ ਨਾਲ ਢਲ਼ਦਾ ਹੈ।' },
      },
      {
        title: { en: 'Accuracy gates', pa: 'ਸ਼ੁੱਧਤਾ ਦਰਵਾਜ਼ੇ' },
        description: { en: 'The experience visibly distinguishes drafted material from scholar-reviewed authority.', pa: 'ਇਹ ਅਨੁਭਵ ਖਾਕਾ ਸਮੱਗਰੀ ਅਤੇ ਵਿਦਵਤ-ਪ੍ਰਮਾਣਿਤ ਅਧਿਕਾਰ ਵਿਚਕਾਰ ਸਪਸ਼ਟ ਫ਼ਰਕ ਦਿਖਾਉਂਦਾ ਹੈ।' },
      },
    ],
  },
  resources: {
    title: { en: 'Sikh learning resources', pa: 'ਸਿੱਖ ਸਿੱਖਣ ਦੇ ਸਰੋਤ' },
    intro: { en: 'Discover partner and community platforms for deeper study beyond this interactive display.', pa: 'ਇਸ ਇੰਟਰਐਕਟਿਵ ਪ੍ਰਦਰਸ਼ਨੀ ਤੋਂ ਅੱਗੇ ਗਹਿਰੇ ਅਧਿਐਨ ਲਈ ਭਾਗੀਦਾਰ ਅਤੇ ਕਮਿਊਨਟੀ ਪਲੇਟਫਾਰਮ ਖੋਜੋ।' },
    sites: [
      {
        id: 'sikhi-io',
        title: 'Sikhi.io',
        url: 'https://sikhi.io',
        previewTitle: { en: 'Sikhi.io', pa: 'Sikhi.io' },
        previewDescription: { en: 'Interactive Sikh learning paths and curated teaching tools.', pa: 'ਇੰਟਰਐਕਟਿਵ ਸਿੱਖ ਸਿੱਖਣ ਮਾਰਗ ਅਤੇ ਚੁਣੀ ਹੋਈ ਸਿੱਖਿਆ ਸਮੱਗਰੀ।' },
        details: { en: 'Use for structured onboarding and community-focused study paths.', pa: 'ਸੰਰਚਿਤ ਸ਼ੁਰੂਆਤੀ ਸਿੱਖਿਆ ਅਤੇ ਕਮਿਊਨਟੀ ਕੇਂਦ੍ਰਿਤ ਅਧਿਐਨ ਲਈ।' },
      },
      {
        id: 'sikhiuni',
        title: 'SikhiUni.com',
        url: 'https://sikhiuni.com',
        previewTitle: { en: 'SikhiUni.com', pa: 'SikhiUni.com' },
        previewDescription: { en: 'Courses, lectures, and long-form educational study for Sikhi.', pa: 'ਸਿੱਖੀ ਲਈ ਕੋਰਸ, ਲੈਕਚਰ ਅਤੇ ਵਿਸਤ੍ਰਿਤ ਅਧਿਐਨ ਸਮੱਗਰੀ।' },
        details: { en: 'Ideal for learners wanting guided, classroom-style progression.', pa: 'ਉਨ੍ਹਾਂ ਲਈ ਬਿਹਤਰ ਜੋ ਕਲਾਸਰੂਮ-ਸ਼ੈਲੀ ਮਾਰਗਦਰਸ਼ਿਤ ਅੱਗੇ ਵੱਧਣਾ ਚਾਹੁੰਦੇ ਹਨ।' },
      },
      {
        id: 'gursevak',
        title: 'Gursevak.com',
        url: 'https://gursevak.com',
        previewTitle: { en: 'Gursevak.com', pa: 'Gursevak.com' },
        previewDescription: { en: 'Gurbani-focused materials, references, and Sikh educational media.', pa: 'ਗੁਰਬਾਣੀ-ਕੇਂਦ੍ਰਿਤ ਸਮੱਗਰੀ, ਸੰਦਰਭ ਅਤੇ ਸਿੱਖ ਸਿੱਖਿਆ ਮੀਡੀਆ।' },
        details: { en: 'Useful for learners who want scripture-centered exploration.', pa: 'ਉਨ੍ਹਾਂ ਸਿਖਿਆਰਥੀਆਂ ਲਈ ਜੋ ਗੁਰਬਾਣੀ ਕੇਂਦ੍ਰਿਤ ਖੋਜ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹਨ।' },
      },
      {
        id: 'basicsofsikhi',
        title: 'BasicsOfSikhi.com',
        url: 'https://www.basicsofsikhi.com',
        previewTitle: { en: 'BasicsOfSikhi.com', pa: 'BasicsOfSikhi.com' },
        previewDescription: { en: 'Videos, explainers, and practical learning resources.', pa: 'ਵੀਡੀਓ, ਵਿਆਖਿਆਕਾਰੀ ਸਮੱਗਰੀ ਅਤੇ ਪ੍ਰਯੋਗਕਾਰੀ ਸਿੱਖਣ ਸਰੋਤ।' },
        details: { en: 'Strong for quick introductions and practical everyday Sikh guidance.', pa: 'ਤੁਰੰਤ ਜਾਣ-ਪਛਾਣ ਅਤੇ ਰੋਜ਼ਾਨਾ ਸਿੱਖ ਜੀਵਨ ਮਾਰਗਦਰਸ਼ਨ ਲਈ ਉਪਯੋਗੀ।' },
      },
    ],
  },
  leaflets: {
    title: { en: 'Leaflets and handouts', pa: 'ਲੀਫਲੈਟ ਅਤੇ ਹੈਂਡਆਉਟ' },
    intro: { en: 'Download trusted Sikh learning leaflets to continue your journey after this exhibit.', pa: 'ਇਸ ਪ੍ਰਦਰਸ਼ਨੀ ਤੋਂ ਬਾਅਦ ਵੀ ਸਿੱਖਣ ਜਾਰੀ ਰੱਖਣ ਲਈ ਭਰੋਸੇਯੋਗ ਸਿੱਖ ਲੀਫਲੈਟ ਡਾਊਨਲੋਡ ਕਰੋ।' },
    cta: { en: 'Open leaflet library', pa: 'ਲੀਫਲੈਟ ਲਾਇਬ੍ਰੇਰੀ ਖੋਲ੍ਹੋ' },
    hubUrl: 'https://www.basicsofsikhi.com/resources',
  },
  panjPyare: [
    {
      id: 1,
      imagePath: '/assets/images/panj-pyare-daya-singh.jpg',
      silhouettePath: '/assets/images/singh-silhouette.svg',
      mapPoint: { x: '23.0%', y: '19.1%' },
      name: { en: 'Bhai Daya Singh Ji', pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ' },
      birthName: { en: 'Daya Ram', pa: 'ਦਇਆ ਰਾਮ' },
      years: '1661 – 1708',
      caste: { en: 'Khatri', pa: 'ਖੱਤਰੀ' },
      from: { en: 'Lahore, Punjab (now Pakistan)', pa: 'ਲਾਹੌਰ, ਪੰਜਾਬ (ਹੁਣ ਪਾਕਿਸਤਾਨ)' },
      occupation: { en: 'Merchant', pa: 'ਵਪਾਰੀ' },
      representing: { en: 'North — Compassion (Daya)', pa: 'ਉੱਤਰ — ਦਇਆ' },
      details: { en: 'The first to answer Guru Gobind Singh Ji\'s call on Vaisakhi 1699, later serving with courage in major campaigns and carrying the historic Zafarnama to Aurangzeb.', pa: 'ਵਿਸਾਖੀ 1699 ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਪੁਕਾਰ ਦਾ ਪਹਿਲਾਂ ਉੱਤਰ ਦੇਣ ਵਾਲੇ, ਜਿਨ੍ਹਾਂ ਨੇ ਬਾਅਦ ਵਿੱਚ ਵੱਡੇ ਅਭਿਆਨਾਂ ਵਿੱਚ ਦਲੇਰੀ ਨਾਲ ਸੇਵਾ ਕੀਤੀ ਅਤੇ ਇਤਿਹਾਸਕ ਜ਼ਫ਼ਰਨਾਮਾ ਔਰੰਗਜ਼ੇਬ ਤੱਕ ਪਹੁੰਚਾਇਆ।' },
      story: {
        en: 'On Vaisakhi, April 30, 1699, Guru Gobind Singh Ji addressed a vast gathering at Anandpur Sahib. Drawing his sword, the Guru called for a volunteer willing to give his head for the faith. After a profound silence, Daya Ram of Lahore stepped forward — the first and bravest of five. After initiating all five, the Guru asked the newly-created Panj Pyare to initiate the Guru himself into the Khalsa — placing himself as a student of his own Khalsa. Bhai Daya Singh Ji remained at the Guru\'s side through every hardship until the very end at Nanded in 1708.',
        pa: 'ਵਿਸਾਖੀ, 30 ਅਪ੍ਰੈਲ 1699 ਨੂੰ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵੱਡੀ ਸੰਗਤ ਨੂੰ ਸੰਬੋਧਿਤ ਕੀਤਾ। ਤਲਵਾਰ ਕੱਢ ਕੇ ਗੁਰੂ ਜੀ ਨੇ ਧਰਮ ਲਈ ਆਪਣਾ ਸਿਰ ਦੇਣ ਵਾਲੇ ਸੇਵਾਦਾਰ ਦੀ ਮੰਗ ਕੀਤੀ। ਗਹਿਰੀ ਚੁੱਪ ਤੋਂ ਬਾਅਦ ਲਾਹੌਰ ਤੋਂ ਦਇਆ ਰਾਮ ਪਹਿਲਾ ਅੱਗੇ ਆਇਆ।',
      },
      funFact: {
        en: 'Bhai Daya Singh Ji was entrusted with one of history\'s most daring missions — carrying the Zafarnama ("Letter of Victory") to Emperor Aurangzeb deep in the Deccan. In this letter, Guru Gobind Singh Ji wrote powerful poetry asserting moral victory even in worldly defeat.',
        pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਨੂੰ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਦੱਖਣ ਵਿੱਚ ਜ਼ਫ਼ਰਨਾਮਾ ਪਹੁੰਚਾਉਣ ਦਾ ਇਤਿਹਾਸ ਦਾ ਸਭ ਤੋਂ ਦਲੇਰ ਮਿਸ਼ਨ ਸੌਂਪਿਆ ਗਿਆ।',
      },
      roles: {
        en: 'First of the Panj Pyare; Khalsa diplomat and emissary; trusted companion of Guru Gobind Singh Ji in battle and statecraft.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਪਹਿਲੇ; ਖ਼ਾਲਸਾ ਦੂਤ; ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਭਰੋਸੇਯੋਗ ਸਾਥੀ।',
      },
      accomplishments: {
        en: 'Delivered the Zafarnama to Aurangzeb at Ahmednagar (1706); fought in the Battle of Muktsar (1705); helped initiate Guru Gobind Singh Ji himself into the Khalsa.',
        pa: 'ਅਹਿਮਦਨਗਰ ਵਿੱਚ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਜ਼ਫ਼ਰਨਾਮਾ ਸੌਂਪਿਆ (1706); ਮੁਕਤਸਰ ਦੀ ਜੰਗ ਵਿੱਚ ਲੜੇ (1705)।',
      },
      shaheedi: {
        en: 'Bhai Daya Singh Ji remained with Guru Gobind Singh Ji until the Guru\'s final days at Nanded, Maharashtra, in October 1708. He attained jyoti jot shortly thereafter, never having left the Guru\'s side.',
        pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਨਾਂਦੇੜ, ਮਹਾਰਾਸ਼ਟਰ ਵਿੱਚ ਅਕਤੂਬਰ 1708 ਤੱਕ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਨਾਲ ਰਹੇ।',
      },
      lessons: {
        en: 'Bhai Daya Singh Ji\'s life teaches that true courage means being the first to answer a call others hesitate before, and that steadfast loyalty can carry a person from a merchant\'s ledger to the Guru\'s own emissary. His delivery of the Zafarnama also shows that speaking uncomfortable truth to power, done with dignity, is itself an act of faith.',
        pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਸਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸੱਚੀ ਹਿੰਮਤ ਦਾ ਮਤਲਬ ਹੈ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਪੁਕਾਰ ਦਾ ਜਵਾਬ ਦੇਣਾ, ਅਤੇ ਅਡੋਲ ਵਫ਼ਾਦਾਰੀ ਇੱਕ ਵਪਾਰੀ ਨੂੰ ਗੁਰੂ ਦਾ ਭਰੋਸੇਯੋਗ ਦੂਤ ਬਣਾ ਸਕਦੀ ਹੈ।',
      },
      language: {
        en: 'As a Khatri merchant from Lahore, Bhai Daya Singh Ji would have grown up speaking Punjabi. Given his documented role carrying the Persian-language Zafarnama to Emperor Aurangzeb\'s court, he likely also had working knowledge of Persian, the administrative and diplomatic language of the Mughal era.',
        pa: 'ਲਾਹੌਰ ਦੇ ਇੱਕ ਖੱਤਰੀ ਵਪਾਰੀ ਵਜੋਂ, ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਪੰਜਾਬੀ ਬੋਲਦੇ ਹੋਏ ਵੱਡੇ ਹੋਏ ਹੋਣਗੇ। ਔਰੰਗਜ਼ੇਬ ਦੇ ਦਰਬਾਰ ਵਿੱਚ ਫ਼ਾਰਸੀ ਭਾਸ਼ਾ ਦਾ ਜ਼ਫ਼ਰਨਾਮਾ ਲੈ ਕੇ ਜਾਣ ਦੀ ਭੂਮਿਕਾ ਤੋਂ ਲੱਗਦਾ ਹੈ ਕਿ ਉਹ ਫ਼ਾਰਸੀ ਵੀ ਜਾਣਦੇ ਸਨ।',
      },
      qualities: {
        en: 'Compassion, courage, eloquence, and unwavering loyalty.', pa: 'ਦਇਆ, ਹਿੰਮਤ, ਸੁਭਾਸ਼ਿਤਾ ਅਤੇ ਅਡੋਲ ਵਫ਼ਾਦਾਰੀ।',
      },
      chapters: [
        {
          kicker: { en: 'Before the Call', pa: 'ਪੁਕਾਰ ਤੋਂ ਪਹਿਲਾਂ' },
          title: { en: 'A Merchant of Lahore', pa: 'ਲਾਹੌਰ ਦਾ ਇੱਕ ਵਪਾਰੀ' },
          body: {
            en: 'Long before he was known as Bhai Daya Singh Ji, he was Daya Ram — a Khatri merchant from Lahore, trading in the busy bazaars of a city under Mughal rule. Nothing in his daily ledger hinted at the history he was about to make.',
            pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਬਣਨ ਤੋਂ ਪਹਿਲਾਂ, ਉਹ ਦਇਆ ਰਾਮ ਸਨ — ਲਾਹੌਰ ਦੇ ਇੱਕ ਖੱਤਰੀ ਵਪਾਰੀ, ਜੋ ਮੁਗਲ ਰਾਜ ਅਧੀਨ ਸ਼ਹਿਰ ਦੇ ਵਿਅਸਤ ਬਾਜ਼ਾਰਾਂ ਵਿੱਚ ਵਪਾਰ ਕਰਦੇ ਸਨ। ਉਨ੍ਹਾਂ ਦੇ ਰੋਜ਼ਾਨਾ ਹਿਸਾਬ-ਕਿਤਾਬ ਵਿੱਚ ਕੁਝ ਵੀ ਉਸ ਇਤਿਹਾਸ ਦਾ ਸੰਕੇਤ ਨਹੀਂ ਸੀ ਜੋ ਉਹ ਬਣਾਉਣ ਵਾਲੇ ਸਨ।',
          },
        },
        {
          kicker: { en: 'The Call at Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਪੁਕਾਰ' },
          title: { en: 'The First to Step Forward', pa: 'ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਪਹਿਲੇ' },
          body: {
            en: 'On Vaisakhi, April 30, 1699, Guru Gobind Singh Ji drew his sword before a vast gathering and called for a head. A profound silence fell over the crowd. Then Daya Ram rose — the first of five, the bravest to break the silence.',
            pa: 'ਵਿਸਾਖੀ, 30 ਅਪ੍ਰੈਲ 1699 ਨੂੰ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵੱਡੀ ਸੰਗਤ ਅੱਗੇ ਤਲਵਾਰ ਕੱਢ ਕੇ ਸਿਰ ਦੀ ਮੰਗ ਕੀਤੀ। ਸੰਗਤ ਉੱਤੇ ਗਹਿਰੀ ਚੁੱਪ ਛਾ ਗਈ। ਫਿਰ ਦਇਆ ਰਾਮ ਉੱਠੇ — ਪੰਜਾਂ ਵਿੱਚੋਂ ਪਹਿਲੇ, ਚੁੱਪ ਤੋੜਨ ਵਾਲੇ ਸਭ ਤੋਂ ਦਲੇਰ।',
          },
        },
        {
          kicker: { en: 'Becoming Khalsa', pa: 'ਖ਼ਾਲਸਾ ਬਣਨਾ' },
          title: { en: 'A Guru Who Knelt Before His Own Disciples', pa: 'ਆਪਣੇ ਹੀ ਸ਼ਿਸ਼ਾਂ ਅੱਗੇ ਗੋਡੇ ਟੇਕਣ ਵਾਲਾ ਗੁਰੂ' },
          body: {
            en: 'After initiating all five with Amrit and the name Singh, Guru Gobind Singh Ji did something no one expected — he asked the newly-created Panj Pyare to initiate him in turn, kneeling as a student of the very Khalsa he had just created. Bhai Daya Singh Ji stood among the five who now carried the Guru\'s own authority.',
            pa: 'ਪੰਜਾਂ ਨੂੰ ਅੰਮ੍ਰਿਤ ਅਤੇ ਸਿੰਘ ਨਾਮ ਨਾਲ ਦੀਖਿਆ ਦੇਣ ਤੋਂ ਬਾਅਦ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਕੁਝ ਅਚਰਜ ਕੀਤਾ — ਉਨ੍ਹਾਂ ਨੇ ਨਵੇਂ ਬਣੇ ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਆਪਣੇ ਆਪ ਨੂੰ ਦੀਖਿਆ ਦੇਣ ਲਈ ਕਿਹਾ। ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਉਨ੍ਹਾਂ ਪੰਜਾਂ ਵਿੱਚੋਂ ਸਨ ਜੋ ਹੁਣ ਗੁਰੂ ਦਾ ਆਪਣਾ ਅਧਿਕਾਰ ਰੱਖਦੇ ਸਨ।',
          },
        },
        {
          kicker: { en: 'Role & Legacy', pa: 'ਭੂਮਿਕਾ ਅਤੇ ਵਿਰਾਸਤ' },
          title: { en: 'The Zafarnama to Aurangzeb', pa: 'ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਜ਼ਫ਼ਰਨਾਮਾ' },
          body: {
            en: 'Bhai Daya Singh Ji became the Guru\'s trusted diplomat, fighting at the Battle of Muktsar in 1705 and undertaking one of history\'s most daring missions: carrying the Zafarnama, the Guru\'s letter of moral defiance, deep into the Deccan to Emperor Aurangzeb himself.',
            pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਗੁਰੂ ਦੇ ਭਰੋਸੇਯੋਗ ਦੂਤ ਬਣੇ, 1705 ਵਿੱਚ ਮੁਕਤਸਰ ਦੀ ਜੰਗ ਵਿੱਚ ਲੜੇ, ਅਤੇ ਇਤਿਹਾਸ ਦੇ ਸਭ ਤੋਂ ਦਲੇਰ ਮਿਸ਼ਨਾਂ ਵਿੱਚੋਂ ਇੱਕ ਨਿਭਾਇਆ — ਜ਼ਫ਼ਰਨਾਮਾ, ਦੱਖਣ ਵਿੱਚ ਔਰੰਗਜ਼ੇਬ ਤੱਕ ਪਹੁੰਚਾਇਆ।',
          },
        },
        {
          kicker: { en: 'Lessons for Today', pa: 'ਅੱਜ ਲਈ ਸਿੱਖਿਆ' },
          title: { en: 'The Courage to Go First', pa: 'ਪਹਿਲਾਂ ਜਾਣ ਦੀ ਹਿੰਮਤ' },
          body: {
            en: 'Bhai Daya Singh Ji\'s life teaches that true courage means answering a call others hesitate before — and that steadfast loyalty can carry a person from a merchant\'s ledger to the Guru\'s own emissary. He remained at the Guru\'s side until the very end at Nanded in 1708.',
            pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਸਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸੱਚੀ ਹਿੰਮਤ ਦਾ ਮਤਲਬ ਹੈ ਉਸ ਪੁਕਾਰ ਦਾ ਜਵਾਬ ਦੇਣਾ ਜਿਸ ਅੱਗੇ ਹੋਰ ਝਿਜਕਦੇ ਹਨ। ਉਹ 1708 ਵਿੱਚ ਨਾਂਦੇੜ ਤੱਕ ਗੁਰੂ ਜੀ ਦੇ ਨਾਲ ਰਹੇ।',
          },
        },
      ],
    },
    {
      id: 2,
      imagePath: '/assets/images/panj-pyare-dharam-singh.jpg',
      silhouettePath: '/assets/images/singh-silhouette.svg',
      mapPoint: { x: '39.1%', y: '28.1%' },
      name: { en: 'Bhai Dharam Singh Ji', pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ' },
      birthName: { en: 'Dharam Das', pa: 'ਧਰਮ ਦਾਸ' },
      years: '1666 – 1708',
      caste: { en: 'Jat', pa: 'ਜੱਟ' },
      from: { en: 'Hastinapur, Uttar Pradesh', pa: 'ਹਸਤਿਨਾਪੁਰ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼' },
      occupation: { en: 'Farmer', pa: 'ਕਿਸਾਨ' },
      representing: { en: 'East — Righteousness (Dharam)', pa: 'ਪੂਰਬ — ਧਰਮ' },
      details: { en: 'The second beloved volunteer, remembered as a witness to the Khalsa ideal of righteous resolve and shared discipline.', pa: 'ਦੂਜੇ ਪਿਆਰੇ ਸੇਵਾਦਾਰ, ਜੋ ਖ਼ਾਲਸੇ ਦੇ ਧਰਮੀ ਦ੍ਰਿੜ ਨਿਸ਼ਚੇ ਅਤੇ ਸਾਂਝੇ ਅਨੁਸ਼ਾਸਨ ਦੇ ਆਦਰਸ਼ ਦੇ ਸਾਕਸ਼ੀ ਵਜੋਂ ਯਾਦ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।' },
      story: {
        en: 'Dharam Das was a farmer of the Jat community from Hastinapur, the ancient city of the Mahabharata. He was the second to step forward when Guru Gobind Singh Ji\'s divine call rang out. Rising from the congregation without hesitation, he crossed every social boundary to stand beside a Khatri merchant — a powerful statement that the Khalsa would dissolve the hierarchy of caste. His very name, Dharam (righteousness), became his identity in the Khalsa as Bhai Dharam Singh Ji.',
        pa: 'ਧਰਮ ਦਾਸ ਹਸਤਿਨਾਪੁਰ ਤੋਂ ਜੱਟ ਭਾਈਚਾਰੇ ਦਾ ਕਿਸਾਨ ਸੀ। ਉਹ ਦੂਜਾ ਅੱਗੇ ਆਇਆ ਜਦੋਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਪੁਕਾਰ ਗੂੰਜੀ। ਉਸਨੇ ਖੱਤਰੀ ਵਪਾਰੀ ਦੇ ਨਾਲ ਖੜੇ ਹੋ ਕੇ ਜਾਤ ਦੀਆਂ ਸਾਰੀਆਂ ਸੀਮਾਵਾਂ ਪਾਰ ਕੀਤੀਆਂ।',
      },
      funFact: {
        en: 'Hastinapur — Bhai Dharam Singh Ji\'s hometown — is the legendary capital of the Kaurava kingdom from the ancient Mahabharata epic, a city steeped in the concept of dharma (righteous duty). A man from the city of dharma stepped forward to embody dharma in its truest, most transformative form.',
        pa: 'ਹਸਤਿਨਾਪੁਰ — ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਦਾ ਜੱਦੀ ਸ਼ਹਿਰ — ਮਹਾਭਾਰਤ ਮਹਾਂਕਾਵਿ ਦੀ ਕੌਰਵ ਰਾਜਧਾਨੀ ਹੈ — ਧਰਮ ਦੇ ਸੰਕਲਪ ਵਿੱਚ ਡੁੱਬੀ ਇੱਕ ਪੁਰਾਤਨ ਨਗਰੀ।',
      },
      roles: {
        en: 'Second of the Panj Pyare; represented the farming (Jat) community; embodied righteous duty and steadfast courage in founding the Khalsa.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਦੂਜੇ; ਕਿਸਾਨ ਭਾਈਚਾਰੇ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ; ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਨੀਂਹ ਰੱਖਣ ਵਿੱਚ ਯੋਗਦਾਨ।',
      },
      accomplishments: {
        en: 'One of the five founding members of the Khalsa (1699); helped initiate Guru Gobind Singh Ji into the Khalsa; participated in the Guru\'s military campaigns with distinction.',
        pa: 'ਖ਼ਾਲਸੇ ਦੇ ਪੰਜ ਸੰਸਥਾਪਕ ਮੈਂਬਰਾਂ ਵਿੱਚੋਂ ਇੱਕ (1699); ਗੁਰੂ ਜੀ ਦੀਆਂ ਫ਼ੌਜੀ ਮੁਹਿੰਮਾਂ ਵਿੱਚ ਭਾਗ ਲਿਆ।',
      },
      shaheedi: {
        en: 'Historical accounts differ. Some sources record Bhai Dharam Singh Ji as having attained shaheedi at the Battle of Chamkaur Sahib (1705); others place him at Nanded in 1708. He is honoured as having given everything in service of the Guru\'s mission.',
        pa: 'ਇਤਿਹਾਸਕ ਬਿਰਤਾਂਤ ਵੱਖ-ਵੱਖ ਹਨ। ਕੁਝ ਸਰੋਤ ਕਹਿੰਦੇ ਹਨ ਕਿ ਉਨ੍ਹਾਂ ਨੇ 1705 ਵਿੱਚ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
      },
      lessons: {
        en: 'Bhai Dharam Singh Ji\'s life shows that righteousness (dharam) is proven not by birth or title but by the willingness to cross a room and stand beside someone the world calls different from you. His steadfastness in farming life and in the Guru\'s presence teaches that ordinary daily discipline prepares a person for extraordinary moments.',
        pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਧਰਮ ਜਨਮ ਜਾਂ ਖ਼ਿਤਾਬ ਨਾਲ ਨਹੀਂ ਸਗੋਂ ਉਸ ਵਿਅਕਤੀ ਦੇ ਨਾਲ ਖੜੇ ਹੋਣ ਦੀ ਇੱਛਾ ਨਾਲ ਸਾਬਤ ਹੁੰਦਾ ਹੈ ਜਿਸਨੂੰ ਸੰਸਾਰ ਵੱਖਰਾ ਸਮਝਦਾ ਹੈ।',
      },
      language: {
        en: 'As a Jat farmer from Hastinapur in present-day Uttar Pradesh, Bhai Dharam Singh Ji would most likely have spoken a regional dialect close to Hindi or Brajbhasha natively, alongside the Punjabi used in Guru Gobind Singh Ji\'s Anandpur Sahib sangat.',
        pa: 'ਹਸਤਿਨਾਪੁਰ (ਅੱਜ ਦੇ ਉੱਤਰ ਪ੍ਰਦੇਸ਼) ਦੇ ਇੱਕ ਜੱਟ ਕਿਸਾਨ ਵਜੋਂ, ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਸ਼ਾਇਦ ਹਿੰਦੀ ਜਾਂ ਬ੍ਰਜਭਾਸ਼ਾ ਦੇ ਨੇੜੇ ਇੱਕ ਖੇਤਰੀ ਬੋਲੀ ਬੋਲਦੇ ਸਨ, ਨਾਲ ਹੀ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਸੰਗਤ ਵਿੱਚ ਪੰਜਾਬੀ ਵੀ।',
      },
      qualities: {
        en: 'Righteousness, humility, quiet discipline, and steadfast resolve.', pa: 'ਧਰਮ, ਨਿਮਰਤਾ, ਸ਼ਾਂਤ ਅਨੁਸ਼ਾਸਨ ਅਤੇ ਅਡੋਲ ਦ੍ਰਿੜਤਾ।',
      },
      chapters: [
        {
          kicker: { en: 'Before the Call', pa: 'ਪੁਕਾਰ ਤੋਂ ਪਹਿਲਾਂ' },
          title: { en: 'A Farmer of Hastinapur', pa: 'ਹਸਤਿਨਾਪੁਰ ਦਾ ਇੱਕ ਕਿਸਾਨ' },
          body: {
            en: 'Dharam Das was a Jat farmer from Hastinapur, the ancient city of the Mahabharata — a place steeped in the very concept of dharma, righteous duty. Nothing about his quiet farming life suggested he would soon embody that word in its truest form.',
            pa: 'ਧਰਮ ਦਾਸ ਹਸਤਿਨਾਪੁਰ ਦੇ ਇੱਕ ਜੱਟ ਕਿਸਾਨ ਸਨ — ਮਹਾਭਾਰਤ ਦੀ ਪ੍ਰਾਚੀਨ ਨਗਰੀ, ਧਰਮ ਦੇ ਸੰਕਲਪ ਵਿੱਚ ਡੁੱਬੀ ਹੋਈ। ਉਨ੍ਹਾਂ ਦੇ ਸ਼ਾਂਤ ਕਿਸਾਨੀ ਜੀਵਨ ਵਿੱਚ ਕੁਝ ਵੀ ਇਹ ਸੰਕੇਤ ਨਹੀਂ ਦਿੰਦਾ ਸੀ ਕਿ ਉਹ ਜਲਦੀ ਹੀ ਇਸ ਸ਼ਬਦ ਨੂੰ ਇਸਦੇ ਸੱਚੇ ਰੂਪ ਵਿੱਚ ਸਾਕਾਰ ਕਰਨਗੇ।',
          },
        },
        {
          kicker: { en: 'The Call at Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਪੁਕਾਰ' },
          title: { en: 'Crossing Every Boundary', pa: 'ਹਰ ਸੀਮਾ ਪਾਰ ਕਰਨਾ' },
          body: {
            en: 'Dharam Das was the second to rise when the Guru\'s call rang out — and in doing so, he crossed every social boundary of his time to stand beside a Khatri merchant. It was a living statement that the Khalsa would dissolve the hierarchy of caste from its very first moment.',
            pa: 'ਜਦੋਂ ਗੁਰੂ ਦੀ ਪੁਕਾਰ ਗੂੰਜੀ ਤਾਂ ਧਰਮ ਦਾਸ ਦੂਜੇ ਉੱਠੇ — ਅਤੇ ਅਜਿਹਾ ਕਰਦਿਆਂ ਉਨ੍ਹਾਂ ਨੇ ਆਪਣੇ ਸਮੇਂ ਦੀਆਂ ਸਾਰੀਆਂ ਸਮਾਜਿਕ ਸੀਮਾਵਾਂ ਪਾਰ ਕਰਕੇ ਇੱਕ ਖੱਤਰੀ ਵਪਾਰੀ ਦੇ ਨਾਲ ਖੜੇ ਹੋਏ। ਇਹ ਇੱਕ ਜੀਵੰਤ ਬਿਆਨ ਸੀ ਕਿ ਖ਼ਾਲਸਾ ਆਪਣੇ ਪਹਿਲੇ ਪਲ ਤੋਂ ਹੀ ਜਾਤ ਦੀ ਲੜੀ ਨੂੰ ਭੰਗ ਕਰ ਦੇਵੇਗਾ।',
          },
        },
        {
          kicker: { en: 'Becoming Khalsa', pa: 'ਖ਼ਾਲਸਾ ਬਣਨਾ' },
          title: { en: 'A New Name, A New Brotherhood', pa: 'ਇੱਕ ਨਵਾਂ ਨਾਮ, ਇੱਕ ਨਵਾਂ ਭਾਈਚਾਰਾ' },
          body: {
            en: 'Initiated with Amrit alongside four strangers from four corners of India, Dharam Das rose as Bhai Dharam Singh Ji — his old name, caste, and title dissolved into a single shared identity: Khalsa. He, too, helped initiate the Guru into the very order he had founded.',
            pa: 'ਭਾਰਤ ਦੇ ਚਾਰ ਖਿੱਤਿਆਂ ਤੋਂ ਆਏ ਚਾਰ ਅਜਨਬੀਆਂ ਦੇ ਨਾਲ ਅੰਮ੍ਰਿਤ ਨਾਲ ਦੀਖਿਆ ਲੈ ਕੇ, ਧਰਮ ਦਾਸ ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਵਜੋਂ ਉੱਠੇ — ਉਨ੍ਹਾਂ ਦਾ ਪੁਰਾਣਾ ਨਾਮ, ਜਾਤ ਅਤੇ ਖ਼ਿਤਾਬ ਇੱਕ ਸਾਂਝੀ ਪਹਿਚਾਣ ਵਿੱਚ ਘੁਲ ਗਏ: ਖ਼ਾਲਸਾ।',
          },
        },
        {
          kicker: { en: 'Role & Legacy', pa: 'ਭੂਮਿਕਾ ਅਤੇ ਵਿਰਾਸਤ' },
          title: { en: 'Standing With the Guru in Battle', pa: 'ਜੰਗ ਵਿੱਚ ਗੁਰੂ ਦੇ ਨਾਲ' },
          body: {
            en: 'As one of the five founding members of the Khalsa, Bhai Dharam Singh Ji went on to serve in Guru Gobind Singh Ji\'s military campaigns with distinction. Historical accounts of his final days differ — some placing his shaheedi at Chamkaur Sahib in 1705, others at Nanded in 1708 — but all honour a man who gave everything to the Guru\'s mission.',
            pa: 'ਖ਼ਾਲਸੇ ਦੇ ਪੰਜ ਸੰਸਥਾਪਕ ਮੈਂਬਰਾਂ ਵਿੱਚੋਂ ਇੱਕ ਵਜੋਂ, ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਨੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀਆਂ ਫ਼ੌਜੀ ਮੁਹਿੰਮਾਂ ਵਿੱਚ ਵਿਸ਼ੇਸ਼ ਯੋਗਦਾਨ ਪਾਇਆ। ਉਨ੍ਹਾਂ ਦੇ ਅੰਤਿਮ ਦਿਨਾਂ ਬਾਰੇ ਇਤਿਹਾਸਕ ਬਿਰਤਾਂਤ ਵੱਖ-ਵੱਖ ਹਨ, ਪਰ ਸਾਰੇ ਉਸ ਵਿਅਕਤੀ ਦਾ ਸਨਮਾਨ ਕਰਦੇ ਹਨ ਜਿਸਨੇ ਗੁਰੂ ਦੇ ਮਿਸ਼ਨ ਲਈ ਸਭ ਕੁਝ ਦਿੱਤਾ।',
          },
        },
        {
          kicker: { en: 'Lessons for Today', pa: 'ਅੱਜ ਲਈ ਸਿੱਖਿਆ' },
          title: { en: 'Righteousness Proven, Not Inherited', pa: 'ਧਰਮ ਵਿਰਾਸਤ ਨਹੀਂ, ਸਾਬਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ' },
          body: {
            en: 'Bhai Dharam Singh Ji\'s life shows that righteousness is proven not by birth or title, but by the willingness to cross a room and stand beside someone the world calls different from you — and that ordinary daily discipline prepares a person for extraordinary moments.',
            pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਧਰਮ ਜਨਮ ਜਾਂ ਖ਼ਿਤਾਬ ਨਾਲ ਨਹੀਂ ਸਗੋਂ ਉਸ ਵਿਅਕਤੀ ਦੇ ਨਾਲ ਖੜੇ ਹੋਣ ਦੀ ਇੱਛਾ ਨਾਲ ਸਾਬਤ ਹੁੰਦਾ ਹੈ ਜਿਸਨੂੰ ਸੰਸਾਰ ਵੱਖਰਾ ਸਮਝਦਾ ਹੈ।',
          },
        },
      ],
    },
    {
      id: 3,
      imagePath: '/assets/images/panj-pyare-himmat-singh.jpg',
      silhouettePath: '/assets/images/singh-silhouette.svg',
      mapPoint: { x: '45.7%', y: '43.4%' },
      name: { en: 'Bhai Himmat Singh Ji', pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ' },
      birthName: { en: 'Himmat Rai', pa: 'ਹਿੰਮਤ ਰਾਏ' },
      years: '1661 – 1705',
      caste: { en: 'Jheevar (water carrier)', pa: 'ਝੀਵਰ (ਪਾਣੀ ਢੋਣ ਵਾਲਾ)' },
      from: { en: 'Jagannath Puri, Odisha', pa: 'ਜਗਨਨਾਥ ਪੁਰੀ, ਉੜੀਸਾ' },
      occupation: { en: 'Water carrier at Guru Ka Langar', pa: 'ਗੁਰੂ ਕੇ ਲੰਗਰ ਵਿੱਚ ਪਾਣੀ ਢੋਣ ਵਾਲਾ' },
      representing: { en: 'Center — Courage (Himmat)', pa: 'ਕੇਂਦਰ — ਹਿੰਮਤ' },
      details: { en: 'The third beloved companion, remembered for fearless service and for standing firm in the face of battlefield sacrifice.', pa: 'ਤੀਜੇ ਪਿਆਰੇ, ਜੋ ਨਿਰਭਉ ਸੇਵਾ ਅਤੇ ਯੁੱਧਕਾਲੀ ਬਲਿਦਾਨ ਦੇ ਸਾਹਮਣੇ ਅਡੋਲ ਖੜ੍ਹੇ ਰਹਿਣ ਲਈ ਯਾਦ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।' },
      story: {
        en: 'Himmat Rai was a water carrier (jheevar) who made the long pilgrimage from Jagannath Puri in Odisha to serve at Guru Ka Langar in Anandpur Sahib. On Vaisakhi 1699, he was the third to rise when the Guru called. His act was extraordinary: in the caste hierarchy of the era, jheevar was one of the most marginalized communities. Yet at this founding moment, he stood equal to a Khatri merchant. His courage (himmat) in stepping forward embodied the Khalsa\'s founding truth — all souls are equal before the Creator.',
        pa: 'ਹਿੰਮਤ ਰਾਏ ਉੜੀਸਾ ਦੇ ਜਗਨਨਾਥ ਪੁਰੀ ਤੋਂ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਗੁਰੂ ਕੇ ਲੰਗਰ ਵਿੱਚ ਸੇਵਾ ਕਰਨ ਲਈ ਆਇਆ ਸੀ। ਵਿਸਾਖੀ 1699 ਨੂੰ ਉਹ ਤੀਜਾ ਅੱਗੇ ਆਇਆ — ਜਾਤ ਦੀਆਂ ਸਾਰੀਆਂ ਸੀਮਾਵਾਂ ਤੋੜਦੇ ਹੋਏ।',
      },
      funFact: {
        en: 'Himmat Rai traveled from Jagannath Puri in Odisha — one of India\'s four most sacred pilgrimage sites (dhams), home to one of the most revered temples in tradition. His spiritual yearning carried him hundreds of miles to serve in the Guru\'s presence.',
        pa: 'ਹਿੰਮਤ ਰਾਏ ਉੜੀਸਾ ਦੇ ਜਗਨਨਾਥ ਪੁਰੀ ਤੋਂ ਆਇਆ — ਭਾਰਤ ਦੇ ਚਾਰ ਸਭ ਤੋਂ ਪਵਿੱਤਰ ਧਾਰਮਿਕ ਸਥਾਨਾਂ ਵਿੱਚੋਂ ਇੱਕ।',
      },
      roles: {
        en: 'Third of the Panj Pyare; served as water carrier at Guru Ka Langar; represented marginalized communities; living proof of the Khalsa\'s casteless equality.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਤੀਜੇ; ਗੁਰੂ ਕੇ ਲੰਗਰ ਵਿੱਚ ਪਾਣੀ ਢੋਣ ਵਾਲੇ; ਖ਼ਾਲਸੇ ਦੀ ਜਾਤ-ਮੁਕਤ ਬਰਾਬਰੀ ਦੇ ਜੀਵੰਤ ਸਬੂਤ।',
      },
      accomplishments: {
        en: 'Co-inaugurated the Khande-di-Pahul (Amrit ceremony); helped initiate Guru Gobind Singh Ji into the Khalsa; fought bravely in the Guru\'s military campaigns across Punjab.',
        pa: 'ਖੰਡੇ ਦੀ ਪਾਹੁਲ ਦੀ ਸ਼ੁਰੂਆਤ ਕੀਤੀ; ਗੁਰੂ ਜੀ ਦੀਆਂ ਫ਼ੌਜੀ ਮੁਹਿੰਮਾਂ ਵਿੱਚ ਦਲੇਰੀ ਨਾਲ ਲੜੇ।',
      },
      shaheedi: {
        en: 'Bhai Himmat Singh Ji attained shaheedi at the Battle of Chamkaur Sahib on December 7, 1705 — fighting alongside the Guru\'s own sons and companions, giving his life to defend the Khalsa Panth.',
        pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਨੇ 7 ਦਸੰਬਰ 1705 ਨੂੰ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
      },
      lessons: {
        en: 'Bhai Himmat Singh Ji\'s life teaches that no service is too humble to lead to greatness, and that dignity is not granted by occupation but claimed through courage. A man who carried water for others was the same man who stood, unflinching, as one of the founders of a new Panth.',
        pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਸਿਖਾਉਂਦਾ ਹੈ ਕਿ ਕੋਈ ਵੀ ਸੇਵਾ ਮਹਾਨਤਾ ਵੱਲ ਲੈ ਜਾਣ ਲਈ ਬਹੁਤ ਨਿਮਾਣੀ ਨਹੀਂ, ਅਤੇ ਸਨਮਾਨ ਕਿੱਤੇ ਨਾਲ ਨਹੀਂ ਸਗੋਂ ਹਿੰਮਤ ਨਾਲ ਹਾਸਲ ਹੁੰਦਾ ਹੈ।',
      },
      language: {
        en: 'Having traveled from Jagannath Puri in present-day Odisha, Bhai Himmat Singh Ji would most likely have spoken Odia natively before learning the Punjabi of Guru Gobind Singh Ji\'s Anandpur Sahib sangat.',
        pa: 'ਅੱਜ ਦੇ ਉੜੀਸਾ ਦੇ ਜਗਨਨਾਥ ਪੁਰੀ ਤੋਂ ਆਉਣ ਕਾਰਨ, ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਸ਼ਾਇਦ ਮੂਲ ਰੂਪ ਵਿੱਚ ਉੜੀਆ ਬੋਲਦੇ ਸਨ, ਬਾਅਦ ਵਿੱਚ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਸੰਗਤ ਦੀ ਪੰਜਾਬੀ ਸਿੱਖੀ।',
      },
      qualities: {
        en: 'Courage, humility, fearlessness, and selfless service.', pa: 'ਹਿੰਮਤ, ਨਿਮਰਤਾ, ਨਿਰਭੈਤਾ ਅਤੇ ਨਿਸ਼ਕਾਮ ਸੇਵਾ।',
      },
      chapters: [
        {
          kicker: { en: 'Before the Call', pa: 'ਪੁਕਾਰ ਤੋਂ ਪਹਿਲਾਂ' },
          title: { en: 'A Water Carrier from Jagannath Puri', pa: 'ਜਗਨਨਾਥ ਪੁਰੀ ਦਾ ਇੱਕ ਪਾਣੀ ਢੋਣ ਵਾਲਾ' },
          body: {
            en: 'Himmat Rai carried water for pilgrims and served at Guru Ka Langar in Anandpur Sahib — having made the long journey from Jagannath Puri in Odisha. In the caste hierarchy of his era, a jheevar occupied one of its most marginalized rungs.',
            pa: 'ਹਿੰਮਤ ਰਾਏ ਸ਼ਰਧਾਲੂਆਂ ਲਈ ਪਾਣੀ ਢੋਂਦੇ ਅਤੇ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਗੁਰੂ ਕੇ ਲੰਗਰ ਵਿੱਚ ਸੇਵਾ ਕਰਦੇ ਸਨ — ਉੜੀਸਾ ਦੇ ਜਗਨਨਾਥ ਪੁਰੀ ਤੋਂ ਲੰਬਾ ਸਫ਼ਰ ਕਰਕੇ ਆਏ। ਆਪਣੇ ਸਮੇਂ ਦੀ ਜਾਤ ਲੜੀ ਵਿੱਚ, ਇੱਕ ਝੀਵਰ ਸਭ ਤੋਂ ਹਾਸ਼ੀਏ ਤੇ ਧੱਕੇ ਵਰਗਾਂ ਵਿੱਚੋਂ ਸੀ।',
          },
        },
        {
          kicker: { en: 'The Call at Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਪੁਕਾਰ' },
          title: { en: 'The Third to Rise', pa: 'ਉੱਠਣ ਵਾਲੇ ਤੀਜੇ' },
          body: {
            en: 'On Vaisakhi 1699, Himmat Rai was the third to step forward when the Guru called for a head — an extraordinary act. At this founding moment, a water carrier stood equal to a Khatri merchant, his courage (himmat) embodying the Khalsa\'s truth that all souls are equal before the Creator.',
            pa: 'ਵਿਸਾਖੀ 1699 ਨੂੰ, ਹਿੰਮਤ ਰਾਏ ਤੀਜੇ ਅੱਗੇ ਆਏ ਜਦੋਂ ਗੁਰੂ ਨੇ ਸਿਰ ਦੀ ਮੰਗ ਕੀਤੀ — ਇੱਕ ਅਸਾਧਾਰਨ ਕਾਰਜ। ਇਸ ਸਥਾਪਨਾ ਦੇ ਪਲ ਤੇ, ਇੱਕ ਪਾਣੀ ਢੋਣ ਵਾਲਾ ਇੱਕ ਖੱਤਰੀ ਵਪਾਰੀ ਦੇ ਬਰਾਬਰ ਖੜ੍ਹਾ ਸੀ।',
          },
        },
        {
          kicker: { en: 'Becoming Khalsa', pa: 'ਖ਼ਾਲਸਾ ਬਣਨਾ' },
          title: { en: 'Dignity Claimed, Not Granted', pa: 'ਹਾਸਲ ਕੀਤਾ ਸਨਮਾਨ, ਦਿੱਤਾ ਨਹੀਂ ਗਿਆ' },
          body: {
            en: 'As Amrit was prepared and the five knelt to receive it, Himmat Rai rose as Bhai Himmat Singh Ji — co-inaugurating the Khande-di-Pahul ceremony itself. Occupation no longer defined him; courage did.',
            pa: 'ਜਿਵੇਂ ਅੰਮ੍ਰਿਤ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਅਤੇ ਪੰਜੇ ਇਸਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਗੋਡੇ ਟੇਕੇ, ਹਿੰਮਤ ਰਾਏ ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਵਜੋਂ ਉੱਠੇ — ਖੰਡੇ ਦੀ ਪਾਹੁਲ ਦੀ ਰਸਮ ਦੀ ਸ਼ੁਰੂਆਤ ਵਿੱਚ ਸਹਿਭਾਗੀ ਬਣੇ। ਹੁਣ ਕਿੱਤਾ ਨਹੀਂ, ਹਿੰਮਤ ਹੀ ਉਨ੍ਹਾਂ ਦੀ ਪਹਿਚਾਣ ਸੀ।',
          },
        },
        {
          kicker: { en: 'Role & Legacy', pa: 'ਭੂਮਿਕਾ ਅਤੇ ਵਿਰਾਸਤ' },
          title: { en: 'Fallen at Chamkaur Sahib', pa: 'ਚਮਕੌਰ ਸਾਹਿਬ ਵਿੱਚ ਸ਼ਹੀਦੀ' },
          body: {
            en: 'Bhai Himmat Singh Ji fought bravely across Guru Gobind Singh Ji\'s campaigns and attained shaheedi at the Battle of Chamkaur Sahib on December 7, 1705 — fighting alongside the Guru\'s own sons and companions to defend the Khalsa Panth.',
            pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀਆਂ ਮੁਹਿੰਮਾਂ ਵਿੱਚ ਦਲੇਰੀ ਨਾਲ ਲੜੇ ਅਤੇ 7 ਦਸੰਬਰ 1705 ਨੂੰ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
          },
        },
        {
          kicker: { en: 'Lessons for Today', pa: 'ਅੱਜ ਲਈ ਸਿੱਖਿਆ' },
          title: { en: 'No Service Too Humble', pa: 'ਕੋਈ ਵੀ ਸੇਵਾ ਛੋਟੀ ਨਹੀਂ' },
          body: {
            en: 'Bhai Himmat Singh Ji\'s life teaches that no service is too humble to lead to greatness, and that dignity is claimed through courage, not granted by occupation. A man who carried water for others became one of the founders of a new Panth.',
            pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਸਿਖਾਉਂਦਾ ਹੈ ਕਿ ਕੋਈ ਵੀ ਸੇਵਾ ਮਹਾਨਤਾ ਵੱਲ ਲੈ ਜਾਣ ਲਈ ਬਹੁਤ ਨਿਮਾਣੀ ਨਹੀਂ, ਅਤੇ ਸਨਮਾਨ ਕਿੱਤੇ ਨਾਲ ਨਹੀਂ ਸਗੋਂ ਹਿੰਮਤ ਨਾਲ ਹਾਸਲ ਹੁੰਦਾ ਹੈ।',
          },
        },
      ],
    },
    {
      id: 4,
      imagePath: '/assets/images/panj-pyare-mohkam-singh.jpg',
      silhouettePath: '/assets/images/singh-silhouette.svg',
      mapPoint: { x: '14.3%', y: '36.7%' },
      name: { en: 'Bhai Mohkam Singh Ji', pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ' },
      birthName: { en: 'Mohkam Chand', pa: 'ਮੋਹਕਮ ਚੰਦ' },
      years: '1663 – 1705',
      caste: { en: 'Chhimba (calico printer)', pa: 'ਛੀਂਬਾ (ਛਾਪਾਕਾਰ)' },
      from: { en: 'Dwarka, Gujarat', pa: 'ਦਵਾਰਕਾ, ਗੁਜਰਾਤ' },
      occupation: { en: 'Tailor and calico printer', pa: 'ਦਰਜ਼ੀ ਅਤੇ ਛਾਪਾਕਾਰ' },
      representing: { en: 'West — Steadfastness (Mohkam)', pa: 'ਪੱਛਮ — ਅਡੋਲਤਾ' },
      details: { en: 'The fourth beloved one, embodying steadfastness and disciplined companionship in the Guru\'s service.', pa: 'ਚੌਥੇ ਪਿਆਰੇ, ਜਿਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਦੀ ਸੇਵਾ ਵਿੱਚ ਦ੍ਰਿੜਤਾ ਅਤੇ ਅਨੁਸ਼ਾਸਿਤ ਸਾਥ ਦਾ ਰੂਪ ਦਿਖਾਇਆ।' },
      story: {
        en: 'Mohkam Chand was a craftsman — a calico printer and tailor — from Dwarka in Gujarat. His hands, skilled in creating patterns on cloth, were now raised in a different devotion: the founding of the Khalsa. He was the fourth to step forward when Guru Gobind Singh Ji called for a head. That a skilled artisan from faraway Dwarka — thousands of miles from Punjab — answered this call demonstrates the extraordinary geographic reach of the Guru\'s sangat across all of India.',
        pa: 'ਮੋਹਕਮ ਚੰਦ ਗੁਜਰਾਤ ਦੇ ਦਵਾਰਕਾ ਤੋਂ ਇੱਕ ਕਾਰੀਗਰ — ਛਾਪਾਕਾਰ ਅਤੇ ਦਰਜ਼ੀ — ਸੀ। ਉਹ ਚੌਥਾ ਅੱਗੇ ਆਇਆ ਜਦੋਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਸਿਰ ਦੇਣ ਵਾਲੇ ਦੀ ਮੰਗ ਕੀਤੀ।',
      },
      funFact: {
        en: 'Bhai Mohkam Singh Ji came from Dwarka — one of the four sacred dhams (pilgrimage sites) of India, considered the holy city of Lord Krishna. That someone from one of tradition\'s holiest cities answered a different, transformative spiritual call is a profound testimony to the Guru\'s reach.',
        pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਦਵਾਰਕਾ ਤੋਂ ਆਏ — ਭਾਰਤ ਦੇ ਚਾਰ ਪਵਿੱਤਰ ਧਾਮਾਂ ਵਿੱਚੋਂ ਇੱਕ, ਜੋ ਭਗਵਾਨ ਕ੍ਰਿਸ਼ਨ ਦੀ ਪਵਿੱਤਰ ਨਗਰੀ ਮੰਨੀ ਜਾਂਦੀ ਹੈ।',
      },
      roles: {
        en: 'Fourth of the Panj Pyare; represented artisan and craftsman communities; embodied steadfastness (mohkam) in service of the Guru and the Khalsa Panth.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਚੌਥੇ; ਕਾਰੀਗਰ ਭਾਈਚਾਰੇ ਦੀ ਪ੍ਰਤੀਨਿਧਤਾ; ਗੁਰੂ ਦੀ ਸੇਵਾ ਵਿੱਚ ਅਡੋਲਤਾ ਦਾ ਰੂਪ।',
      },
      accomplishments: {
        en: 'One of the five founders of the Khalsa Panth (1699); co-initiated the first Amrit ceremony; participated in major battles alongside Guru Gobind Singh Ji.',
        pa: 'ਖ਼ਾਲਸਾ ਪੰਥ ਦੇ ਪੰਜ ਸੰਸਥਾਪਕਾਂ ਵਿੱਚੋਂ ਇੱਕ (1699); ਗੁਰੂ ਜੀ ਦੇ ਨਾਲ ਵੱਡੀਆਂ ਲੜਾਈਆਂ ਵਿੱਚ ਭਾਗ ਲਿਆ।',
      },
      shaheedi: {
        en: 'Bhai Mohkam Singh Ji attained shaheedi at the Battle of Chamkaur Sahib in December 1705, among the brave companions who gave their lives defending the Guru and the Khalsa Panth.',
        pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਨੇ ਦਸੰਬਰ 1705 ਵਿੱਚ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
      },
      lessons: {
        en: 'Bhai Mohkam Singh Ji\'s life shows that skill practiced with devotion — whether in cloth or in character — builds the steadiness a person needs when called to something greater. His journey from Dwarka to Anandpur Sahib is a reminder that sincere seeking can cross any distance.',
        pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸ਼ਰਧਾ ਨਾਲ ਅਭਿਆਸ ਕੀਤਾ ਹੁਨਰ — ਭਾਵੇਂ ਕੱਪੜੇ ਵਿੱਚ ਹੋਵੇ ਜਾਂ ਕਿਰਦਾਰ ਵਿੱਚ — ਉਹ ਅਡੋਲਤਾ ਬਣਾਉਂਦਾ ਹੈ ਜਿਸਦੀ ਲੋੜ ਕਿਸੇ ਵੱਡੀ ਪੁਕਾਰ ਦੇ ਸਮੇਂ ਪੈਂਦੀ ਹੈ।',
      },
      language: {
        en: 'As a craftsman from Dwarka in present-day Gujarat, Bhai Mohkam Singh Ji would most likely have spoken Gujarati natively, in addition to the Punjabi of Guru Gobind Singh Ji\'s sangat.',
        pa: 'ਅੱਜ ਦੇ ਗੁਜਰਾਤ ਦੇ ਦਵਾਰਕਾ ਤੋਂ ਇੱਕ ਕਾਰੀਗਰ ਵਜੋਂ, ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਸ਼ਾਇਦ ਮੂਲ ਰੂਪ ਵਿੱਚ ਗੁਜਰਾਤੀ ਬੋਲਦੇ ਸਨ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਸੰਗਤ ਦੀ ਪੰਜਾਬੀ ਦੇ ਨਾਲ।',
      },
      qualities: {
        en: 'Steadfastness, skillfulness, discipline, and quiet loyalty.', pa: 'ਅਡੋਲਤਾ, ਹੁਨਰਮੰਦੀ, ਅਨੁਸ਼ਾਸਨ ਅਤੇ ਸ਼ਾਂਤ ਵਫ਼ਾਦਾਰੀ।',
      },
      chapters: [
        {
          kicker: { en: 'Before the Call', pa: 'ਪੁਕਾਰ ਤੋਂ ਪਹਿਲਾਂ' },
          title: { en: 'A Craftsman of Dwarka', pa: 'ਦਵਾਰਕਾ ਦਾ ਇੱਕ ਕਾਰੀਗਰ' },
          body: {
            en: 'Mohkam Chand was a tailor and calico printer from Dwarka, Gujarat — one of India\'s four sacred dhams, thousands of miles from Punjab. His hands, skilled in patterning cloth, would soon be raised in a very different devotion.',
            pa: 'ਮੋਹਕਮ ਚੰਦ ਗੁਜਰਾਤ ਦੇ ਦਵਾਰਕਾ ਤੋਂ ਇੱਕ ਦਰਜ਼ੀ ਅਤੇ ਛਾਪਾਕਾਰ ਸਨ — ਭਾਰਤ ਦੇ ਚਾਰ ਪਵਿੱਤਰ ਧਾਮਾਂ ਵਿੱਚੋਂ ਇੱਕ, ਪੰਜਾਬ ਤੋਂ ਹਜ਼ਾਰਾਂ ਮੀਲ ਦੂਰ। ਕੱਪੜੇ ਤੇ ਨਮੂਨੇ ਬਣਾਉਣ ਵਿੱਚ ਹੁਨਰਮੰਦ ਉਨ੍ਹਾਂ ਦੇ ਹੱਥ ਜਲਦੀ ਹੀ ਇੱਕ ਬਿਲਕੁਲ ਵੱਖਰੀ ਭਗਤੀ ਵਿੱਚ ਉੱਠਣ ਵਾਲੇ ਸਨ।',
          },
        },
        {
          kicker: { en: 'The Call at Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਪੁਕਾਰ' },
          title: { en: 'The Fourth to Answer', pa: 'ਜਵਾਬ ਦੇਣ ਵਾਲੇ ਚੌਥੇ' },
          body: {
            en: 'Mohkam Chand was the fourth to step forward when Guru Gobind Singh Ji called for a head — a skilled artisan from faraway Dwarka answering a call that echoed across all of India, proof of the Guru\'s reach to every corner of the subcontinent.',
            pa: 'ਮੋਹਕਮ ਚੰਦ ਚੌਥੇ ਅੱਗੇ ਆਏ ਜਦੋਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਸਿਰ ਦੀ ਮੰਗ ਕੀਤੀ — ਦੂਰ ਦਵਾਰਕਾ ਤੋਂ ਇੱਕ ਹੁਨਰਮੰਦ ਕਾਰੀਗਰ ਨੇ ਉਸ ਪੁਕਾਰ ਦਾ ਜਵਾਬ ਦਿੱਤਾ ਜੋ ਸਾਰੇ ਭਾਰਤ ਵਿੱਚ ਗੂੰਜੀ।',
          },
        },
        {
          kicker: { en: 'Becoming Khalsa', pa: 'ਖ਼ਾਲਸਾ ਬਣਨਾ' },
          title: { en: 'Steadfastness Forged Anew', pa: 'ਨਵੇਂ ਸਿਰੇ ਤੋਂ ਘੜੀ ਅਡੋਲਤਾ' },
          body: {
            en: 'Initiated with Amrit as Bhai Mohkam Singh Ji, the craftsman from Dwarka became one of the five founders of the Khalsa Panth — his old name Mohkam Chand transformed, but the steadfastness (mohkam) in his character carried straight through into his new identity.',
            pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਵਜੋਂ ਅੰਮ੍ਰਿਤ ਨਾਲ ਦੀਖਿਆ ਲੈ ਕੇ, ਦਵਾਰਕਾ ਦਾ ਇਹ ਕਾਰੀਗਰ ਖ਼ਾਲਸਾ ਪੰਥ ਦੇ ਪੰਜ ਸੰਸਥਾਪਕਾਂ ਵਿੱਚੋਂ ਇੱਕ ਬਣਿਆ — ਉਨ੍ਹਾਂ ਦਾ ਪੁਰਾਣਾ ਨਾਮ ਬਦਲਿਆ, ਪਰ ਉਨ੍ਹਾਂ ਦੇ ਕਿਰਦਾਰ ਵਿੱਚ ਅਡੋਲਤਾ ਨਵੀਂ ਪਹਿਚਾਣ ਵਿੱਚ ਵੀ ਬਣੀ ਰਹੀ।',
          },
        },
        {
          kicker: { en: 'Role & Legacy', pa: 'ਭੂਮਿਕਾ ਅਤੇ ਵਿਰਾਸਤ' },
          title: { en: 'Fallen at Chamkaur Sahib', pa: 'ਚਮਕੌਰ ਸਾਹਿਬ ਵਿੱਚ ਸ਼ਹੀਦੀ' },
          body: {
            en: 'Bhai Mohkam Singh Ji participated in major battles alongside Guru Gobind Singh Ji and attained shaheedi at the Battle of Chamkaur Sahib in December 1705, among the brave companions who gave their lives defending the Guru and the Khalsa Panth.',
            pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਨੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਨਾਲ ਵੱਡੀਆਂ ਲੜਾਈਆਂ ਵਿੱਚ ਭਾਗ ਲਿਆ ਅਤੇ ਦਸੰਬਰ 1705 ਵਿੱਚ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
          },
        },
        {
          kicker: { en: 'Lessons for Today', pa: 'ਅੱਜ ਲਈ ਸਿੱਖਿਆ' },
          title: { en: 'A Distance Sincere Seeking Can Cross', pa: 'ਸੱਚੀ ਭਾਲ ਦੀ ਪਾਰ ਕੀਤੀ ਦੂਰੀ' },
          body: {
            en: 'Bhai Mohkam Singh Ji\'s life shows that skill practiced with devotion — whether in cloth or in character — builds the steadiness a person needs when called to something greater. His journey from Dwarka to Anandpur Sahib is a reminder that sincere seeking can cross any distance.',
            pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਦਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸ਼ਰਧਾ ਨਾਲ ਅਭਿਆਸ ਕੀਤਾ ਹੁਨਰ ਉਹ ਅਡੋਲਤਾ ਬਣਾਉਂਦਾ ਹੈ ਜਿਸਦੀ ਲੋੜ ਕਿਸੇ ਵੱਡੀ ਪੁਕਾਰ ਦੇ ਸਮੇਂ ਪੈਂਦੀ ਹੈ। ਦਵਾਰਕਾ ਤੋਂ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਤੱਕ ਦਾ ਸਫ਼ਰ ਯਾਦ ਦਿਵਾਉਂਦਾ ਹੈ ਕਿ ਸੱਚੀ ਭਾਲ ਕੋਈ ਵੀ ਦੂਰੀ ਪਾਰ ਕਰ ਸਕਦੀ ਹੈ।',
          },
        },
      ],
    },
    {
      id: 5,
      imagePath: '/assets/images/panj-pyare-sahib-singh.jpg',
      silhouettePath: '/assets/images/singh-silhouette.svg',
      mapPoint: { x: '22.7%', y: '54.5%' },
      name: { en: 'Bhai Sahib Singh Ji', pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ' },
      birthName: { en: 'Sahib Chand', pa: 'ਸਾਹਿਬ ਚੰਦ' },
      years: '1662 – 1705',
      caste: { en: 'Nai (barber)', pa: 'ਨਾਈ (ਹਜਾਮ)' },
      from: { en: 'Bidar, Karnataka', pa: 'ਬੀਦਰ, ਕਰਨਾਟਕ' },
      occupation: { en: 'Barber', pa: 'ਹਜਾਮ / ਨਾਈ' },
      representing: { en: 'South — Service (Sahib)', pa: 'ਦੱਖਣ — ਸੇਵਾ' },
      details: { en: 'The fifth to step forward, completing the Panj Pyare and visibly breaking caste distinctions within the Khalsa order.', pa: 'ਅੱਗੇ ਆਉਣ ਵਾਲੇ ਪੰਜਵੇਂ ਪਿਆਰੇ, ਜਿਨ੍ਹਾਂ ਨੇ ਪੰਜ ਪਿਆਰਿਆਂ ਦੀ ਗਿਣਤੀ ਪੂਰੀ ਕੀਤੀ ਅਤੇ ਖ਼ਾਲਸਾ ਪੰਥ ਵਿੱਚ ਜਾਤ-ਭੇਦ ਨੂੰ ਸਪਸ਼ਟ ਤੌਰ ਤੇ ਤੋੜਿਆ।' },
      story: {
        en: 'Sahib Chand was a barber from Bidar, Karnataka — hundreds of miles south of Punjab. In traditional Indian society, the Nai (barber) community occupied a marginalized rung of the caste order. Yet when Guru Gobind Singh Ji\'s call rang out on Vaisakhi 1699, Sahib Chand was the fifth to step forward — and in doing so, he stood alongside a Khatri merchant, a Jat farmer, a water carrier, and a calico printer. Five people, five different castes, five corners of India. The Khalsa was complete: united as one brotherhood under Waheguru.',
        pa: 'ਸਾਹਿਬ ਚੰਦ ਕਰਨਾਟਕ ਦੇ ਬੀਦਰ ਤੋਂ ਇੱਕ ਨਾਈ ਸੀ। ਵਿਸਾਖੀ 1699 ਨੂੰ ਉਹ ਪੰਜਵਾਂ ਅੱਗੇ ਆਇਆ — ਇੱਕ ਖੱਤਰੀ, ਜੱਟ, ਝੀਵਰ ਅਤੇ ਛੀਂਬੇ ਦੇ ਨਾਲ ਖੜਾ ਹੋ ਕੇ। ਪੰਜ ਜਾਤਾਂ, ਪੰਜ ਖਿੱਤੇ — ਇੱਕ ਖ਼ਾਲਸਾ।',
      },
      funFact: {
        en: 'Bidar, Bhai Sahib Singh Ji\'s hometown in Karnataka, is over 1,500 km south of Anandpur Sahib. That someone traveled so far to be in the Guru\'s presence — and then answered the most extraordinary call in Sikh history — shows the magnetic spiritual pull of Guru Gobind Singh Ji across the entire subcontinent.',
        pa: 'ਕਰਨਾਟਕ ਵਿੱਚ ਬੀਦਰ, ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਦਾ ਜੱਦੀ ਸ਼ਹਿਰ, ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਤੋਂ 1,500 ਕਿਲੋਮੀਟਰ ਤੋਂ ਵੱਧ ਦੂਰ ਹੈ।',
      },
      roles: {
        en: 'Fifth and final of the Panj Pyare; completed the founding of the Khalsa; represented South India and service communities; embodied the principle of universal equality.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਪੰਜਵੇਂ ਅਤੇ ਆਖਰੀ; ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਨੂੰ ਪੂਰਾ ਕੀਤਾ; ਸਰਵਭੌਮਿਕ ਬਰਾਬਰੀ ਦੇ ਸਿਧਾਂਤ ਨੂੰ ਦਰਸਾਇਆ।',
      },
      accomplishments: {
        en: 'Completed the founding circle of the Panj Pyare; helped inaugurate the Amrit Sanchar ceremony; served as the living embodiment of Sikh teaching that all souls are equal before Waheguru.',
        pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਦੇ ਸੰਸਥਾਪਕ ਚੱਕਰ ਨੂੰ ਪੂਰਾ ਕੀਤਾ; ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ।',
      },
      shaheedi: {
        en: 'Bhai Sahib Singh Ji is believed to have attained shaheedi at the Battle of Chamkaur Sahib in December 1705, giving his life alongside his brothers of the Panj Pyare in the service of the Khalsa Panth.',
        pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਨੇ ਦਸੰਬਰ 1705 ਵਿੱਚ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
      },
      lessons: {
        en: 'Bhai Sahib Singh Ji\'s life teaches that service, however socially undervalued, is a form of devotion — and that the final person to complete a circle can matter as much as the first. His journey from Bidar to Anandpur Sahib completed a living map of a Panth meant for all of India, not one region alone.',
        pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਸਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸੇਵਾ, ਭਾਵੇਂ ਸਮਾਜਿਕ ਤੌਰ ਤੇ ਘੱਟ ਸਮਝੀ ਜਾਵੇ, ਭਗਤੀ ਦਾ ਇੱਕ ਰੂਪ ਹੈ — ਅਤੇ ਚੱਕਰ ਪੂਰਾ ਕਰਨ ਵਾਲਾ ਆਖਰੀ ਵਿਅਕਤੀ ਵੀ ਪਹਿਲੇ ਜਿੰਨਾ ਹੀ ਮਹੱਤਵਪੂਰਨ ਹੋ ਸਕਦਾ ਹੈ।',
      },
      language: {
        en: 'Coming from Bidar in present-day Karnataka, Bhai Sahib Singh Ji would most likely have grown up speaking Kannada and the Deccani vernacular common to the region, in addition to the Punjabi of Guru Gobind Singh Ji\'s sangat.',
        pa: 'ਅੱਜ ਦੇ ਕਰਨਾਟਕ ਦੇ ਬੀਦਰ ਤੋਂ ਆਉਣ ਕਾਰਨ, ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਸ਼ਾਇਦ ਕੰਨੜ ਅਤੇ ਖੇਤਰ ਦੀ ਦੱਖਣੀ ਬੋਲੀ ਬੋਲਦੇ ਹੋਏ ਵੱਡੇ ਹੋਏ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਸੰਗਤ ਦੀ ਪੰਜਾਬੀ ਦੇ ਨਾਲ।',
      },
      qualities: {
        en: 'Service, humility, devotion, and quiet perseverance.', pa: 'ਸੇਵਾ, ਨਿਮਰਤਾ, ਭਗਤੀ ਅਤੇ ਸ਼ਾਂਤ ਦ੍ਰਿੜਤਾ।',
      },
      chapters: [
        {
          kicker: { en: 'Before the Call', pa: 'ਪੁਕਾਰ ਤੋਂ ਪਹਿਲਾਂ' },
          title: { en: 'A Barber from Bidar', pa: 'ਬੀਦਰ ਦਾ ਇੱਕ ਨਾਈ' },
          body: {
            en: 'Sahib Chand was a barber from Bidar, Karnataka — over 1,500 kilometres south of Anandpur Sahib. In the caste order of the era, the Nai (barber) community occupied one of its most marginalized rungs.',
            pa: 'ਸਾਹਿਬ ਚੰਦ ਕਰਨਾਟਕ ਦੇ ਬੀਦਰ ਤੋਂ ਇੱਕ ਨਾਈ ਸਨ — ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਤੋਂ 1,500 ਕਿਲੋਮੀਟਰ ਤੋਂ ਵੱਧ ਦੱਖਣ ਵਿੱਚ। ਉਸ ਸਮੇਂ ਦੀ ਜਾਤ ਵਿਵਸਥਾ ਵਿੱਚ, ਨਾਈ ਭਾਈਚਾਰਾ ਸਭ ਤੋਂ ਹਾਸ਼ੀਏ ਤੇ ਧੱਕੇ ਵਰਗਾਂ ਵਿੱਚੋਂ ਇੱਕ ਸੀ।',
          },
        },
        {
          kicker: { en: 'The Call at Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਪੁਕਾਰ' },
          title: { en: 'The Fifth, and the Circle Complete', pa: 'ਪੰਜਵੇਂ, ਅਤੇ ਚੱਕਰ ਪੂਰਾ' },
          body: {
            en: 'On Vaisakhi 1699, Sahib Chand was the fifth to step forward — standing alongside a Khatri merchant, a Jat farmer, a water carrier, and a calico printer. Five people, five different castes, five corners of India. The Khalsa was complete.',
            pa: 'ਵਿਸਾਖੀ 1699 ਨੂੰ, ਸਾਹਿਬ ਚੰਦ ਪੰਜਵੇਂ ਅੱਗੇ ਆਏ — ਇੱਕ ਖੱਤਰੀ, ਜੱਟ, ਝੀਵਰ ਅਤੇ ਛੀਂਬੇ ਦੇ ਨਾਲ ਖੜ੍ਹੇ ਹੋ ਕੇ। ਪੰਜ ਲੋਕ, ਪੰਜ ਵੱਖ-ਵੱਖ ਜਾਤਾਂ, ਭਾਰਤ ਦੇ ਪੰਜ ਖਿੱਤੇ। ਖ਼ਾਲਸਾ ਪੂਰਾ ਹੋਇਆ।',
          },
        },
        {
          kicker: { en: 'Becoming Khalsa', pa: 'ਖ਼ਾਲਸਾ ਬਣਨਾ' },
          title: { en: 'United as One Brotherhood', pa: 'ਇੱਕ ਭਾਈਚਾਰੇ ਵਜੋਂ ਇਕਜੁੱਟ' },
          body: {
            en: 'As the fifth to receive Amrit, Bhai Sahib Singh Ji helped inaugurate the Amrit Sanchar ceremony itself — becoming the living embodiment of a teaching that all souls are equal before Waheguru, regardless of the trade a person\'s hands once knew.',
            pa: 'ਅੰਮ੍ਰਿਤ ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲੇ ਪੰਜਵੇਂ ਵਜੋਂ, ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਨੇ ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ ਦੀ ਰਸਮ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ — ਇਸ ਸਿੱਖਿਆ ਦੇ ਜੀਵੰਤ ਰੂਪ ਬਣੇ ਕਿ ਸਾਰੀਆਂ ਰੂਹਾਂ ਵਾਹਿਗੁਰੂ ਅੱਗੇ ਬਰਾਬਰ ਹਨ।',
          },
        },
        {
          kicker: { en: 'Role & Legacy', pa: 'ਭੂਮਿਕਾ ਅਤੇ ਵਿਰਾਸਤ' },
          title: { en: 'Fallen at Chamkaur Sahib', pa: 'ਚਮਕੌਰ ਸਾਹਿਬ ਵਿੱਚ ਸ਼ਹੀਦੀ' },
          body: {
            en: 'Bhai Sahib Singh Ji is believed to have attained shaheedi at the Battle of Chamkaur Sahib in December 1705, giving his life alongside his brothers of the Panj Pyare in the service of the Khalsa Panth.',
            pa: 'ਮੰਨਿਆ ਜਾਂਦਾ ਹੈ ਕਿ ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਨੇ ਦਸੰਬਰ 1705 ਵਿੱਚ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਆਪਣੇ ਪੰਜ ਪਿਆਰੇ ਭਰਾਵਾਂ ਦੇ ਨਾਲ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸੇਵਾ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।',
          },
        },
        {
          kicker: { en: 'Lessons for Today', pa: 'ਅੱਜ ਲਈ ਸਿੱਖਿਆ' },
          title: { en: 'The Last to Complete the Circle', pa: 'ਚੱਕਰ ਪੂਰਾ ਕਰਨ ਵਾਲੇ ਆਖਰੀ' },
          body: {
            en: 'Bhai Sahib Singh Ji\'s life teaches that service, however socially undervalued, is a form of devotion — and that the last person to complete a circle can matter as much as the first. His journey from Bidar to Anandpur Sahib completed a living map of a Panth meant for all of India.',
            pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਦਾ ਜੀਵਨ ਸਿਖਾਉਂਦਾ ਹੈ ਕਿ ਸੇਵਾ, ਭਾਵੇਂ ਸਮਾਜਿਕ ਤੌਰ ਤੇ ਘੱਟ ਸਮਝੀ ਜਾਵੇ, ਭਗਤੀ ਦਾ ਇੱਕ ਰੂਪ ਹੈ। ਬੀਦਰ ਤੋਂ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਤੱਕ ਦਾ ਸਫ਼ਰ ਇੱਕ ਪੂਰਨ ਪੰਥ ਦਾ ਜੀਵੰਤ ਨਕਸ਼ਾ ਪੂਰਾ ਕਰਦਾ ਹੈ।',
          },
        },
      ],
    },
  ],
  takhts: [
    {
      id: 'akal_takht',
      imagePath: '/assets/images/IMG_3192.jpeg',
      silhouettePath: '/assets/images/gurdwara-silhouette.svg',
      name: { en: 'Sri Akal Takht Sahib', pa: 'ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ' },
      location: { en: 'Amritsar, Punjab, India', pa: 'ਅੰਮ੍ਰਿਤਸਰ, ਪੰਜਾਬ, ਭਾਰਤ' },
      establishedBy: { en: 'Guru Hargobind Sahib Ji — 6th Guru (1606 CE)', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ — ਛੇਵੇਂ ਗੁਰੂ (1606 ਈ.)' },
      significance: { en: 'The supreme seat of Sikh temporal authority (Miri), standing directly opposite Sri Harmandir Sahib to embody the dual principle of Miri-Piri — worldly sovereignty and spiritual authority united.', pa: 'ਸਿੱਖ ਸੰਸਾਰਕ ਅਧਿਕਾਰ (ਮੀਰੀ) ਦਾ ਸਰਵੋੱਚ ਆਸਣ, ਜੋ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੇ ਬਿਲਕੁਲ ਸਾਹਮਣੇ ਖੜ੍ਹਾ ਹੈ ਅਤੇ ਮੀਰੀ-ਪੀਰੀ ਦੇ ਦੋਹਰੇ ਸਿਧਾਂਤ ਦਾ ਰੂਪ ਹੈ।' },
      details: { en: 'Akal Takht anchors Sikh institutional leadership and is the source of all official hukamnamas (edicts) that govern the Sikh Panth worldwide.', pa: 'ਅਕਾਲ ਤਖ਼ਤ ਸਿੱਖ ਸੰਸਥਾਗਤ ਨੇਤ੍ਰਿਤਵ ਦਾ ਕੇਂਦਰ ਹੈ ਅਤੇ ਵਿਸ਼ਵਵਿਆਪੀ ਸਿੱਖ ਪੰਥ ਨੂੰ ਸੇਧਿਤ ਕਰਨ ਵਾਲੇ ਸਾਰੇ ਸਰਕਾਰੀ ਹੁਕਮਨਾਮਿਆਂ ਦਾ ਸਰੋਤ ਹੈ।' },
      mapPoint: { x: '15.2%', y: '13.4%' },
      story: {
        en: 'In 1606, after the Mughal Empire imprisoned Guru Hargobind Sahib Ji\'s father (Guru Arjan Dev Ji, the 5th Guru), the 6th Guru responded boldly upon his release: the Sikh Panth would embrace both spiritual authority (Piri) AND worldly sovereignty (Miri). He built the Akal Takht — the "Eternal Throne" — directly opposite the Harmandir Sahib, and wore two swords simultaneously for the first time: Miri and Piri. The Akal Takht has since been the supreme seat of Sikh political and institutional authority. It issues hukamnamas (royal edicts) that are binding on all Sikhs worldwide.',
        pa: '1606 ਵਿੱਚ, ਜਦੋਂ ਮੁਗਲ ਸਾਮਰਾਜ ਨੇ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (5ਵੇਂ ਗੁਰੂ) ਨੂੰ ਸ਼ਹੀਦ ਕੀਤਾ, ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ (6ਵੇਂ ਗੁਰੂ) ਨੇ ਜੇਲ੍ਹ ਤੋਂ ਰਿਹਾਈ ਤੋਂ ਬਾਅਦ ਦਲੇਰੀ ਨਾਲ ਅਕਾਲ ਤਖ਼ਤ ਦੀ ਉਸਾਰੀ ਕੀਤੀ।',
      },
      funFact: {
        en: 'The original Akal Takht was built intentionally taller than the Mughal Emperor\'s seat of power — a deliberate statement that sovereign Sikh authority recognizes no earthly superior. It was severely damaged during Operation Blue Star in 1984 and later rebuilt.',
        pa: 'ਮੂਲ ਅਕਾਲ ਤਖ਼ਤ ਜਾਣਬੁੱਝ ਕੇ ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਦੀ ਸੱਤਾ ਦੀ ਸੀਟ ਨਾਲੋਂ ਉੱਚਾ ਬਣਾਇਆ ਗਿਆ ਸੀ। 1984 ਵਿੱਚ ਓਪਰੇਸ਼ਨ ਬਲੂ ਸਟਾਰ ਦੌਰਾਨ ਇਹ ਬੁਰੀ ਤਰ੍ਹਾਂ ਨੁਕਸਾਨਿਆ ਗਿਆ ਸੀ।',
      },
      jathedaar: {
        en: 'The current Jathedar of Sri Akal Takht Sahib is appointed by the SGPC (Shiromani Gurdwara Parbandhak Committee). The Jathedar is the highest temporal authority in Sikhism, responsible for issuing hukamnamas (official edicts) to the global Sikh Panth.',
        pa: 'ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੇ ਜਥੇਦਾਰ ਦੀ ਨਿਯੁਕਤੀ ਸ਼੍ਰੋਮਣੀ ਗੁਰਦੁਆਰਾ ਪ੍ਰਬੰਧਕ ਕਮੇਟੀ (SGPC) ਦੁਆਰਾ ਕੀਤੀ ਜਾਂਦੀ ਹੈ। ਜਥੇਦਾਰ ਸਿੱਖ ਧਰਮ ਵਿੱਚ ਸਭ ਤੋਂ ਉੱਚਾ ਸੰਸਾਰਕ ਅਧਿਕਾਰ ਹੈ।',
      },
      visitorsInfo: {
        en: 'Head covering and removal of footwear required. No tobacco, alcohol, or meat on premises. The Langar (community kitchen) is open to all, free of charge. Darshan hours run from early morning to late night. Photography is restricted in the Sachkhand (inner sanctum). Dress modestly and speak in hushed tones.',
        pa: 'ਸਿਰ ਢੱਕਣਾ ਅਤੇ ਜੁੱਤੇ ਉਤਾਰਨੇ ਜ਼ਰੂਰੀ ਹਨ। ਪਰਿਸਰ ਵਿੱਚ ਤੰਬਾਕੂ, ਸ਼ਰਾਬ ਜਾਂ ਮਾਸ ਦੀ ਮਨਾਹੀ ਹੈ। ਲੰਗਰ ਸਾਰਿਆਂ ਲਈ ਖੁੱਲ੍ਹਾ ਹੈ।',
      },
      yearDeclared: '1606',
      gurusVisited: {
        en: 'Amritsar\'s sacred pool was founded by Guru Ram Das Ji (4th Guru); Guru Arjan Dev Ji (5th Guru) completed Sri Harmandir Sahib beside it and compiled the Adi Granth here; Guru Hargobind Sahib Ji (6th Guru) built the Akal Takht itself in 1606. Later Gurus\' direct visits to the Akal Takht specifically are less documented, as the seat of Guruship moved elsewhere for several generations following Guru Hargobind Sahib Ji.',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਪਵਿੱਤਰ ਸਰੋਵਰ ਦੀ ਸਥਾਪਨਾ ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ (ਚੌਥੇ ਗੁਰੂ) ਨੇ ਕੀਤੀ; ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ (ਪੰਜਵੇਂ ਗੁਰੂ) ਨੇ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਪੂਰਾ ਕੀਤਾ ਅਤੇ ਆਦਿ ਗ੍ਰੰਥ ਇੱਥੇ ਤਿਆਰ ਕੀਤਾ; ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ (ਛੇਵੇਂ ਗੁਰੂ) ਨੇ 1606 ਵਿੱਚ ਅਕਾਲ ਤਖ਼ਤ ਖ਼ੁਦ ਬਣਾਇਆ।',
      },
      areaHistory: {
        en: 'Amritsar grew up around the sacred pool founded circa 1577 by Guru Ram Das Ji, developing into Punjab\'s foremost Sikh pilgrimage and trading city. It endured repeated invasions and desecrations through the 18th century, including attacks by Ahmad Shah Durrani, before flourishing as a cultural and political center under the Sikh Misls and later the Sikh Empire of Maharaja Ranjit Singh.',
        pa: 'ਅੰਮ੍ਰਿਤਸਰ ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਦੁਆਰਾ ਲਗਭਗ 1577 ਵਿੱਚ ਸਥਾਪਿਤ ਪਵਿੱਤਰ ਸਰੋਵਰ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਵਧਿਆ, ਪੰਜਾਬ ਦਾ ਪ੍ਰਮੁੱਖ ਸਿੱਖ ਤੀਰਥ ਅਤੇ ਵਪਾਰਕ ਸ਼ਹਿਰ ਬਣ ਗਿਆ। ਇਸਨੇ 18ਵੀਂ ਸਦੀ ਦੌਰਾਨ ਵਾਰ-ਵਾਰ ਹਮਲੇ ਸਹੇ, ਬਾਅਦ ਵਿੱਚ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਸਿੱਖ ਸਾਮਰਾਜ ਹੇਠ ਵਧਿਆ-ਫੁੱਲਿਆ।',
      },
      localImpact: {
        en: 'The Akal Takht anchors Amritsar\'s identity as the spiritual and political capital of the Sikh world, drawing millions of pilgrims annually whose visits sustain the city\'s langar (community kitchen) tradition, local economy, and civic life around the twin principles of Miri-Piri.',
        pa: 'ਅਕਾਲ ਤਖ਼ਤ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਪਹਿਚਾਣ ਨੂੰ ਸਿੱਖ ਜਗਤ ਦੀ ਅਧਿਆਤਮਿਕ ਅਤੇ ਰਾਜਨੀਤਿਕ ਰਾਜਧਾਨੀ ਵਜੋਂ ਸਥਾਪਿਤ ਕਰਦਾ ਹੈ, ਹਰ ਸਾਲ ਲੱਖਾਂ ਸ਼ਰਧਾਲੂਆਂ ਨੂੰ ਖਿੱਚਦਾ ਹੈ।',
      },
      chapters: [
        {
          kicker: { en: 'Founding Story', pa: 'ਸਥਾਪਨਾ ਦੀ ਕਥਾ' },
          title: { en: 'A Throne Built in Defiance', pa: 'ਦ੍ਰਿੜਤਾ ਵਿੱਚ ਉਸਾਰਿਆ ਤਖ਼ਤ' },
          body: {
            en: 'In 1606, after the Mughal Empire martyred his father Guru Arjan Dev Ji, the young Guru Hargobind Sahib Ji responded not with retreat but with resolve. He built the Akal Takht — the "Eternal Throne" — directly opposite the Harmandir Sahib, and for the first time wore two swords together: Miri and Piri.',
            pa: '1606 ਵਿੱਚ, ਮੁਗਲ ਸਾਮਰਾਜ ਵੱਲੋਂ ਆਪਣੇ ਪਿਤਾ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਸ਼ਹੀਦੀ ਤੋਂ ਬਾਅਦ, ਨੌਜਵਾਨ ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਨੇ ਪਿੱਛੇ ਹਟਣ ਦੀ ਥਾਂ ਦ੍ਰਿੜਤਾ ਨਾਲ ਜਵਾਬ ਦਿੱਤਾ। ਉਨ੍ਹਾਂ ਨੇ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੇ ਬਿਲਕੁਲ ਸਾਹਮਣੇ ਅਕਾਲ ਤਖ਼ਤ ਉਸਾਰਿਆ, ਅਤੇ ਪਹਿਲੀ ਵਾਰ ਦੋ ਤਲਵਾਰਾਂ ਇਕੱਠੀਆਂ ਪਹਿਨੀਆਂ: ਮੀਰੀ ਅਤੇ ਪੀਰੀ।',
          },
        },
        {
          kicker: { en: 'Why It Was Established', pa: 'ਇਹ ਕਿਉਂ ਸਥਾਪਿਤ ਹੋਇਆ' },
          title: { en: 'Miri-Piri: Two Swords, One Principle', pa: 'ਮੀਰੀ-ਪੀਰੀ: ਦੋ ਤਲਵਾਰਾਂ, ਇੱਕ ਸਿਧਾਂਤ' },
          body: {
            en: 'The Akal Takht embodies a founding Sikh principle: spiritual authority (Piri) and worldly sovereignty (Miri) are not separate, but united in one seat. It was built intentionally taller than the Mughal Emperor\'s own seat of power — a deliberate statement that sovereign Sikh authority recognizes no earthly superior.',
            pa: 'ਅਕਾਲ ਤਖ਼ਤ ਇੱਕ ਬੁਨਿਆਦੀ ਸਿੱਖ ਸਿਧਾਂਤ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ: ਅਧਿਆਤਮਿਕ ਅਧਿਕਾਰ (ਪੀਰੀ) ਅਤੇ ਸੰਸਾਰਕ ਪ੍ਰਭੁਸੱਤਾ (ਮੀਰੀ) ਵੱਖਰੇ ਨਹੀਂ, ਸਗੋਂ ਇੱਕ ਆਸਣ ਵਿੱਚ ਇਕਜੁੱਟ ਹਨ। ਇਹ ਜਾਣਬੁੱਝ ਕੇ ਮੁਗਲ ਬਾਦਸ਼ਾਹ ਦੀ ਸੱਤਾ ਦੀ ਸੀਟ ਨਾਲੋਂ ਉੱਚਾ ਬਣਾਇਆ ਗਿਆ ਸੀ।',
          },
        },
        {
          kicker: { en: 'Historical Role', pa: 'ਇਤਿਹਾਸਕ ਭੂਮਿਕਾ' },
          title: { en: 'The Source of Every Hukamnama', pa: 'ਹਰ ਹੁਕਮਨਾਮੇ ਦਾ ਸਰੋਤ' },
          body: {
            en: 'Since 1606, the Akal Takht has been the supreme seat of Sikh institutional authority — the source of every hukamnama (edict) binding on Sikhs worldwide, its Jathedar the highest temporal authority in the faith, appointed by the SGPC.',
            pa: '1606 ਤੋਂ, ਅਕਾਲ ਤਖ਼ਤ ਸਿੱਖ ਸੰਸਥਾਗਤ ਅਧਿਕਾਰ ਦਾ ਸਰਵੋੱਚ ਆਸਣ ਰਿਹਾ ਹੈ — ਵਿਸ਼ਵਭਰ ਦੇ ਸਿੱਖਾਂ ਲਈ ਬੰਧਨਕਾਰੀ ਹਰ ਹੁਕਮਨਾਮੇ ਦਾ ਸਰੋਤ, ਜਿਸਦਾ ਜਥੇਦਾਰ ਧਰਮ ਵਿੱਚ ਸਭ ਤੋਂ ਉੱਚਾ ਸੰਸਾਰਕ ਅਧਿਕਾਰ ਹੈ।',
          },
        },
        {
          kicker: { en: 'Present Day', pa: 'ਅੱਜ' },
          title: { en: 'Rebuilt, and Still the Panth\'s Compass', pa: 'ਮੁੜ ਉਸਾਰਿਆ, ਅਤੇ ਅੱਜ ਵੀ ਪੰਥ ਦੀ ਦਿਸ਼ਾ' },
          body: {
            en: 'The Akal Takht was severely damaged during Operation Blue Star in 1984 and later rebuilt by the Sikh community. Today it anchors Amritsar\'s identity as the spiritual and political capital of the Sikh world, drawing millions of pilgrims whose visits sustain the city\'s langar tradition and civic life.',
            pa: '1984 ਵਿੱਚ ਓਪਰੇਸ਼ਨ ਬਲੂ ਸਟਾਰ ਦੌਰਾਨ ਅਕਾਲ ਤਖ਼ਤ ਬੁਰੀ ਤਰ੍ਹਾਂ ਨੁਕਸਾਨਿਆ ਗਿਆ ਸੀ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਸਿੱਖ ਭਾਈਚਾਰੇ ਦੁਆਰਾ ਮੁੜ ਉਸਾਰਿਆ ਗਿਆ। ਅੱਜ ਇਹ ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਪਹਿਚਾਣ ਨੂੰ ਸਿੱਖ ਜਗਤ ਦੀ ਰਾਜਧਾਨੀ ਵਜੋਂ ਸਥਾਪਿਤ ਕਰਦਾ ਹੈ।',
          },
        },
      ],
    },
    {
      id: 'kesgarh_sahib',
      imagePath: '/assets/images/IMG_3194.jpeg',
      silhouettePath: '/assets/images/gurdwara-silhouette.svg',
      name: { en: 'Takht Sri Keshgarh Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ' },
      location: { en: 'Anandpur Sahib, Punjab, India', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ, ਪੰਜਾਬ, ਭਾਰਤ' },
      establishedBy: { en: 'Guru Gobind Singh Ji — 10th Guru (Vaisakhi 1699 CE)', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ — ਦਸਵੇਂ ਗੁਰੂ (ਵਿਸਾਖੀ 1699 ਈ.)' },
      significance: { en: 'The birthplace of the Khalsa Panth and site where Guru Gobind Singh Ji first prepared Amrit (Khande-di-Pahul) and initiated the Panj Pyare on Vaisakhi 1699.', pa: 'ਖ਼ਾਲਸਾ ਪੰਥ ਦਾ ਜਨਮ ਅਸਥਾਨ ਜਿੱਥੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵਿਸਾਖੀ 1699 ਨੂੰ ਪਹਿਲੀ ਵਾਰ ਅੰਮ੍ਰਿਤ ਤਿਆਰ ਕੀਤਾ ਅਤੇ ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਛਕਾਇਆ।' },
      details: { en: 'Keshgarh Sahib marks the public formation of a disciplined spiritual-political community that would forever change the course of Sikh and South Asian history.', pa: 'ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ ਇੱਕ ਅਨੁਸ਼ਾਸਿਤ ਅਧਿਆਤਮਿਕ-ਰਾਜਨੀਤਿਕ ਸੰਗਤ ਦੀ ਜਨਤਕ ਰਚਨਾ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ ਜਿਸਨੇ ਸਿੱਖ ਅਤੇ ਦੱਖਣੀ ਏਸ਼ੀਆਈ ਇਤਿਹਾਸ ਦੀ ਦਿਸ਼ਾ ਬਦਲ ਦਿੱਤੀ।' },
      mapPoint: { x: '26.3%', y: '16.9%' },
      story: {
        en: 'On the Vaisakhi of 1699, Guru Gobind Singh Ji summoned thousands of Sikhs to the fortress-city of Anandpur Sahib. Addressing the vast congregation, he called for five volunteers willing to offer their heads. As each of the Panj Pyare stepped forward, the Guru took them behind a tent. Each time, he emerged with a bloodied sword — and the crowd feared the worst. What was truly happening was the preparation of Amrit — the sacred nectar of initiation — with Panj Banis recited and the double-edged khanda (sword) stirred into the iron bowl. The Guru initiated the five, gave them the name "Singh," and then asked them to initiate the Guru himself. Keshgarh Sahib also preserves the sacred weapons (shastars) of Guru Gobind Singh Ji.',
        pa: 'ਵਿਸਾਖੀ 1699 ਨੂੰ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਸਿੱਖਾਂ ਨੂੰ ਬੁਲਾਇਆ। ਉਨ੍ਹਾਂ ਨੇ ਪੰਜ ਸੇਵਾਦਾਰਾਂ ਦੀ ਮੰਗ ਕੀਤੀ ਜੋ ਆਪਣੇ ਸਿਰ ਦੇਣ ਲਈ ਤਿਆਰ ਹੋਣ। ਪੰਜ ਪਿਆਰੇ ਅੱਗੇ ਆਏ, ਅੰਮ੍ਰਿਤ ਤਿਆਰ ਕੀਤਾ ਗਿਆ, ਅਤੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਿਰਜਣਾ ਹੋਈ।',
      },
      funFact: {
        en: 'The sacred weapons (Guru-ka-shaster) of Guru Gobind Singh Ji are kept at Keshgarh Sahib and displayed for the sangat. Among them is the original Khanda used to prepare the very first Amrit on Vaisakhi 1699. Major celebrations including the festival of Hola Mohalla take place here annually.',
        pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਪਵਿੱਤਰ ਹਥਿਆਰ (ਗੁਰੂ-ਕਾ-ਸ਼ਸਤਰ) ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ ਵਿੱਚ ਰੱਖੇ ਹੋਏ ਹਨ। ਹਰ ਸਾਲ ਇੱਥੇ ਹੋਲਾ ਮਹੱਲਾ ਦਾ ਤਿਉਹਾਰ ਮਨਾਇਆ ਜਾਂਦਾ ਹੈ।',
      },
      jathedaar: {
        en: 'The Jathedar of Takht Sri Keshgarh Sahib is one of the five Jathedars of the Panj Takht, responsible for the spiritual and administrative oversight of this most sacred site where the Khalsa was born.',
        pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ ਦੇ ਜਥੇਦਾਰ ਪੰਜ ਤਖ਼ਤਾਂ ਦੇ ਪੰਜ ਜਥੇਦਾਰਾਂ ਵਿੱਚੋਂ ਇੱਕ ਹਨ।',
      },
      visitorsInfo: {
        en: 'Head covering and removal of footwear required. The Shastarghar (weapons museum) displays the historic weapons of Guru Gobind Singh Ji and is a must-visit. The Hola Mohalla spring festival brings hundreds of thousands of Sikhs to Anandpur Sahib annually. Photography inside the main sanctum is restricted.',
        pa: 'ਸਿਰ ਢੱਕਣਾ ਅਤੇ ਜੁੱਤੇ ਉਤਾਰਨੇ ਜ਼ਰੂਰੀ ਹਨ। ਸ਼ਸਤਰਘਰ (ਹਥਿਆਰਾਂ ਦਾ ਅਜਾਇਬਘਰ) ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਇਤਿਹਾਸਕ ਹਥਿਆਰਾਂ ਨੂੰ ਦਿਖਾਉਂਦਾ ਹੈ।',
      },
      yearDeclared: '1699',
      gurusVisited: {
        en: 'Guru Tegh Bahadur Ji (9th Guru) founded the town, then called Chak Nanaki, in 1665. His son Guru Gobind Singh Ji (10th Guru) grew up here, established the Khalsa on Vaisakhi 1699, and made Anandpur Sahib his primary seat until 1704.',
        pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ (9ਵੇਂ ਗੁਰੂ) ਨੇ 1665 ਵਿੱਚ ਇਸ ਨਗਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ, ਉਦੋਂ ਇਸਨੂੰ ਚੱਕ ਨਾਨਕੀ ਕਿਹਾ ਜਾਂਦਾ ਸੀ। ਉਨ੍ਹਾਂ ਦੇ ਪੁੱਤਰ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (10ਵੇਂ ਗੁਰੂ) ਇੱਥੇ ਵੱਡੇ ਹੋਏ ਅਤੇ ਵਿਸਾਖੀ 1699 ਨੂੰ ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।',
      },
      areaHistory: {
        en: 'Founded in 1665 at the foothills of the Shivalik range, Anandpur Sahib grew into a fortified town after Guru Gobind Singh Ji built a ring of forts — including Anandgarh, Lohgarh, Fatehgarh, and Holgarh — to protect the young Khalsa community from hill-state rajas and Mughal forces. It was the site of repeated sieges before the Guru\'s forced evacuation in December 1704.',
        pa: '1665 ਵਿੱਚ ਸ਼ਿਵਾਲਿਕ ਪਹਾੜੀਆਂ ਦੀ ਤਲਹਟੀ ਵਿੱਚ ਸਥਾਪਿਤ, ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਬਣਾਏ ਕਿਲ੍ਹਿਆਂ ਦੇ ਘੇਰੇ ਨਾਲ ਇੱਕ ਕਿਲ੍ਹਾਬੰਦ ਨਗਰ ਬਣ ਗਿਆ। ਦਸੰਬਰ 1704 ਵਿੱਚ ਗੁਰੂ ਜੀ ਦੀ ਮਜਬੂਰੀ ਦੀ ਨਿਕਾਸੀ ਤੋਂ ਪਹਿਲਾਂ ਇਹ ਵਾਰ-ਵਾਰ ਘੇਰਾਬੰਦੀ ਦਾ ਸਥਾਨ ਰਿਹਾ।',
      },
      localImpact: {
        en: 'Anandpur Sahib remains one of Sikhi\'s most important pilgrimage towns, hosting the large annual Hola Mohalla festival, and its fort-building history shaped defensive settlement patterns across the Shivalik foothill region.',
        pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਸਿੱਖੀ ਦੇ ਸਭ ਤੋਂ ਮਹੱਤਵਪੂਰਨ ਤੀਰਥ ਨਗਰਾਂ ਵਿੱਚੋਂ ਇੱਕ ਬਣਿਆ ਰਹਿੰਦਾ ਹੈ, ਹਰ ਸਾਲ ਵੱਡਾ ਹੋਲਾ ਮਹੱਲਾ ਤਿਉਹਾਰ ਮਨਾਉਂਦਾ ਹੈ।',
      },
      chapters: [
        {
          kicker: { en: 'Founding Story', pa: 'ਸਥਾਪਨਾ ਦੀ ਕਥਾ' },
          title: { en: 'Thousands Gathered at Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਇਕੱਠੇ' },
          body: {
            en: 'On the Vaisakhi of 1699, Guru Gobind Singh Ji summoned thousands of Sikhs to the fortress-city of Anandpur Sahib. Drawing his sword before the vast congregation, he called for five volunteers willing to offer their heads for the faith.',
            pa: 'ਵਿਸਾਖੀ 1699 ਨੂੰ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੇ ਕਿਲ੍ਹਾਬੰਦ ਨਗਰ ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਸਿੱਖਾਂ ਨੂੰ ਬੁਲਾਇਆ। ਵੱਡੀ ਸੰਗਤ ਅੱਗੇ ਤਲਵਾਰ ਕੱਢ ਕੇ, ਉਨ੍ਹਾਂ ਨੇ ਧਰਮ ਲਈ ਆਪਣੇ ਸਿਰ ਭੇਟ ਕਰਨ ਲਈ ਤਿਆਰ ਪੰਜ ਸੇਵਾਦਾਰਾਂ ਦੀ ਮੰਗ ਕੀਤੀ।',
          },
        },
        {
          kicker: { en: 'Why It Was Established', pa: 'ਇਹ ਕਿਉਂ ਸਥਾਪਿਤ ਹੋਇਆ' },
          title: { en: 'The Birth of the Khalsa', pa: 'ਖ਼ਾਲਸੇ ਦਾ ਜਨਮ' },
          body: {
            en: 'As each of the Panj Pyare stepped forward, the Guru led them behind a tent and emerged each time with a bloodied sword — the crowd fearing the worst. What was truly happening was the preparation of Amrit, stirred with a khanda in an iron bowl to the recitation of Panj Banis. Here the Khalsa Panth was born.',
            pa: 'ਜਿਵੇਂ-ਜਿਵੇਂ ਪੰਜ ਪਿਆਰੇ ਅੱਗੇ ਆਏ, ਗੁਰੂ ਜੀ ਉਨ੍ਹਾਂ ਨੂੰ ਤੰਬੂ ਪਿੱਛੇ ਲੈ ਗਏ ਅਤੇ ਹਰ ਵਾਰ ਖ਼ੂਨ ਨਾਲ ਰੰਗੀ ਤਲਵਾਰ ਨਾਲ ਬਾਹਰ ਆਏ। ਅਸਲ ਵਿੱਚ ਪੰਜ ਬਾਣੀਆਂ ਦੇ ਪਾਠ ਨਾਲ ਲੋਹੇ ਦੇ ਭਾਂਡੇ ਵਿੱਚ ਖੰਡੇ ਨਾਲ ਹਿਲਾਇਆ ਅੰਮ੍ਰਿਤ ਤਿਆਰ ਹੋ ਰਿਹਾ ਸੀ। ਇੱਥੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦਾ ਜਨਮ ਹੋਇਆ।',
          },
        },
        {
          kicker: { en: 'Historical Role', pa: 'ਇਤਿਹਾਸਕ ਭੂਮਿਕਾ' },
          title: { en: 'Guardian of the Guru\'s Weapons', pa: 'ਗੁਰੂ ਦੇ ਹਥਿਆਰਾਂ ਦਾ ਰਖਵਾਲਾ' },
          body: {
            en: 'Founded as the town of Chak Nanaki by Guru Tegh Bahadur Ji in 1665, Anandpur Sahib became Guru Gobind Singh Ji\'s primary seat, ringed by forts to protect the young Khalsa community. Keshgarh Sahib today preserves the Guru\'s sacred weapons (shastars), including the original khanda used to prepare the first Amrit.',
            pa: '1665 ਵਿੱਚ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੁਆਰਾ ਚੱਕ ਨਾਨਕੀ ਨਗਰ ਵਜੋਂ ਸਥਾਪਿਤ, ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਮੁੱਖ ਆਸਣ ਬਣਿਆ। ਕੇਸਗੜ੍ਹ ਸਾਹਿਬ ਅੱਜ ਗੁਰੂ ਜੀ ਦੇ ਪਵਿੱਤਰ ਸ਼ਸਤਰ ਸੰਭਾਲਦਾ ਹੈ, ਜਿਸ ਵਿੱਚ ਪਹਿਲਾ ਅੰਮ੍ਰਿਤ ਤਿਆਰ ਕਰਨ ਲਈ ਵਰਤਿਆ ਗਿਆ ਮੂਲ ਖੰਡਾ ਸ਼ਾਮਲ ਹੈ।',
          },
        },
        {
          kicker: { en: 'Present Day', pa: 'ਅੱਜ' },
          title: { en: 'Hola Mohalla and a Living Birthplace', pa: 'ਹੋਲਾ ਮਹੱਲਾ ਅਤੇ ਇੱਕ ਜੀਵੰਤ ਜਨਮ ਅਸਥਾਨ' },
          body: {
            en: 'Each spring, hundreds of thousands of Sikhs gather at Anandpur Sahib for Hola Mohalla, filling the birthplace of the Khalsa with the same energy that filled it on that Vaisakhi in 1699. The Shastarghar (weapons museum) remains a must-visit for pilgrims tracing the Khalsa\'s founding moment.',
            pa: 'ਹਰ ਬਸੰਤ, ਲੱਖਾਂ ਸਿੱਖ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਹੋਲਾ ਮਹੱਲਾ ਲਈ ਇਕੱਠੇ ਹੁੰਦੇ ਹਨ, ਖ਼ਾਲਸੇ ਦੇ ਜਨਮ ਅਸਥਾਨ ਨੂੰ ਉਸੇ ਊਰਜਾ ਨਾਲ ਭਰਦੇ ਹਨ ਜੋ 1699 ਦੀ ਉਸ ਵਿਸਾਖੀ ਤੇ ਸੀ। ਸ਼ਸਤਰਘਰ ਅੱਜ ਵੀ ਸ਼ਰਧਾਲੂਆਂ ਲਈ ਜ਼ਰੂਰ ਦੇਖਣ ਵਾਲਾ ਸਥਾਨ ਹੈ।',
          },
        },
      ],
    },
    {
      id: 'damdama_sahib',
      imagePath: '/assets/images/IMG_3200.jpeg',
      silhouettePath: '/assets/images/gurdwara-silhouette.svg',
      name: { en: 'Takht Sri Damdama Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ' },
      location: { en: 'Talwandi Sabo, Bathinda, Punjab, India', pa: 'ਤਲਵੰਡੀ ਸਾਬੋ, ਬਠਿੰਡਾ, ਪੰਜਾਬ, ਭਾਰਤ' },
      establishedBy: { en: 'Guru Gobind Singh Ji — 10th Guru (1705–06 CE)', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ — ਦਸਵੇਂ ਗੁਰੂ (1705–06 ਈ.)' },
      significance: { en: 'Called "Guru Ki Kashi" — the Guru\'s Varanasi — a supreme center of Sikh learning where Guru Gobind Singh Ji compiled the final and definitive version of Guru Granth Sahib Ji.', pa: '"ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ" ਵਜੋਂ ਪ੍ਰਸਿੱਧ — ਸਿੱਖ ਵਿੱਦਿਆ ਦਾ ਸਰਵੋੱਚ ਕੇਂਦਰ ਜਿੱਥੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਅੰਤਿਮ ਅਤੇ ਅਧਿਕਾਰਕ ਸੰਸਕਰਣ ਤਿਆਰ ਕੀਤਾ।' },
      details: { en: 'Damdama Sahib represents the sacred transmission, study, and disciplined preservation of Gurbani — the living word of the Guru Granth Sahib Ji.', pa: 'ਦਮਦਮਾ ਸਾਹਿਬ ਗੁਰਬਾਣੀ ਦੀ ਪਵਿੱਤਰ ਪਰੰਪਰਾ, ਅਧਿਐਨ ਅਤੇ ਅਨੁਸ਼ਾਸਿਤ ਸੰਭਾਲ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।' },
      mapPoint: { x: '15.2%', y: '22.3%' },
      story: {
        en: 'After the devastating battles of 1704–05 — having lost his four sons, his mother Mata Gujri Ji, and countless companions — Guru Gobind Singh Ji arrived at Talwandi Sabo. Here, for approximately nine months, the Guru "breathed" (damdama = resting/breathing place) and gathered his scattered sangat. Most profoundly, he re-established the entire Guru Granth Sahib Ji from memory — reciting it to Bhai Mani Singh Ji who transcribed it — and added the bani of Guru Tegh Bahadur Ji (the 9th Guru, his own father). This final version, the Damdama Sahib Beed, became the definitive scripture of the Sikhs.',
        pa: 'ਵਿਨਾਸ਼ਕਾਰੀ ਲੜਾਈਆਂ ਤੋਂ ਬਾਅਦ — ਆਪਣੇ ਚਾਰੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਅਤੇ ਅਣਗਿਣਤ ਸਾਥੀਆਂ ਨੂੰ ਗੁਆ ਕੇ — ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਤਲਵੰਡੀ ਸਾਬੋ ਪਹੁੰਚੇ। ਇੱਥੇ ਉਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਅੰਤਮ ਬੀੜ ਤਿਆਰ ਕੀਤੀ।',
      },
      funFact: {
        en: 'Damdama Sahib is called "Guru Ki Kashi" (the Guru\'s Varanasi/Benares) — a title recognizing it as the supreme center of Sikh scholarship, equivalent in spiritual gravity to the ancient city of Varanasi in Hindu tradition. It was formally declared the 5th Takht on November 26, 1966.',
        pa: 'ਦਮਦਮਾ ਸਾਹਿਬ ਨੂੰ "ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ" ਕਿਹਾ ਜਾਂਦਾ ਹੈ। ਇਸਨੂੰ 26 ਨਵੰਬਰ 1966 ਨੂੰ ਰਸਮੀ ਤੌਰ ਤੇ 5ਵਾਂ ਤਖ਼ਤ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ।',
      },
      jathedaar: {
        en: 'The Jathedar of Takht Sri Damdama Sahib oversees this Takht and its tradition of scholarship. The site is especially revered by students and scholars of Gurbani from around the world.',
        pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਦਮਦਮਾ ਸਾਹਿਬ ਦੇ ਜਥੇਦਾਰ ਇਸ ਤਖ਼ਤ ਅਤੇ ਵਿਦਵਤਾ ਦੀ ਪਰੰਪਰਾ ਦੀ ਨਿਗਰਾਨੀ ਕਰਦੇ ਹਨ।',
      },
      visitorsInfo: {
        en: 'Head covering and removal of footwear required. The Takht has significant historical relics associated with Guru Gobind Singh Ji\'s sojourn. It is especially revered by Gurbani scholars. The site was formally recognized as the 5th Takht on November 26, 1966. Photography policies vary by location within the complex.',
        pa: 'ਸਿਰ ਢੱਕਣਾ ਅਤੇ ਜੁੱਤੇ ਉਤਾਰਨੇ ਜ਼ਰੂਰੀ ਹਨ। ਇਸ ਤਖ਼ਤ ਨੂੰ 26 ਨਵੰਬਰ 1966 ਨੂੰ ਰਸਮੀ ਤੌਰ ਤੇ ਮਾਨਤਾ ਮਿਲੀ।',
      },
      yearDeclared: '1966 (formally declared)',
      gurusVisited: {
        en: 'Guru Gobind Singh Ji (10th Guru) is the Guru documented at this specific site, residing here for approximately nine months in 1705–06 after the battles of Chamkaur and the loss of his family.',
        pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (10ਵੇਂ ਗੁਰੂ) ਇਸ ਖ਼ਾਸ ਅਸਥਾਨ ਨਾਲ ਦਸਤਾਵੇਜ਼ੀ ਤੌਰ ਤੇ ਜੁੜੇ ਗੁਰੂ ਹਨ, ਜਿੱਥੇ ਉਹ 1705–06 ਵਿੱਚ ਲਗਭਗ ਨੌਂ ਮਹੀਨੇ ਰਹੇ।',
      },
      areaHistory: {
        en: 'Talwandi Sabo sits in the semi-arid Malwa region near present-day Bathinda. It was a modest settlement before Guru Gobind Singh Ji\'s extended residency, after which it became renowned as a center of Gurbani scholarship and study, earning the name "Guru Ki Kashi."',
        pa: 'ਤਲਵੰਡੀ ਸਾਬੋ ਅੱਜ ਦੇ ਬਠਿੰਡਾ ਦੇ ਨੇੜੇ ਅਰਧ-ਸੁੱਕੇ ਮਾਲਵਾ ਖੇਤਰ ਵਿੱਚ ਸਥਿਤ ਹੈ। ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਲੰਬੇ ਨਿਵਾਸ ਤੋਂ ਬਾਅਦ ਇਹ ਗੁਰਬਾਣੀ ਵਿਦਵਤਾ ਦਾ ਕੇਂਦਰ ਬਣ ਗਿਆ, "ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ" ਦਾ ਨਾਮ ਕਮਾਇਆ।',
      },
      localImpact: {
        en: 'The Takht\'s scholarly legacy shaped Talwandi Sabo and the wider Bathinda area into a center of Sikh religious education, with institutions such as Guru Kashi University, named for the site\'s epithet, continuing that tradition of learning today.',
        pa: 'ਤਖ਼ਤ ਦੀ ਵਿਦਵਤਾ ਪਰੰਪਰਾ ਨੇ ਤਲਵੰਡੀ ਸਾਬੋ ਅਤੇ ਬਠਿੰਡਾ ਖੇਤਰ ਨੂੰ ਸਿੱਖ ਧਾਰਮਿਕ ਸਿੱਖਿਆ ਦਾ ਕੇਂਦਰ ਬਣਾ ਦਿੱਤਾ, ਗੁਰੂ ਕਾਸ਼ੀ ਯੂਨੀਵਰਸਿਟੀ ਵਰਗੀਆਂ ਸੰਸਥਾਵਾਂ ਅੱਜ ਵੀ ਇਹ ਪਰੰਪਰਾ ਜਾਰੀ ਰੱਖਦੀਆਂ ਹਨ।',
      },
      chapters: [
        {
          kicker: { en: 'Founding Story', pa: 'ਸਥਾਪਨਾ ਦੀ ਕਥਾ' },
          title: { en: 'A Resting Place After Loss', pa: 'ਨੁਕਸਾਨ ਤੋਂ ਬਾਅਦ ਇੱਕ ਵਿਸ਼ਰਾਮ ਅਸਥਾਨ' },
          body: {
            en: 'After the devastating battles of 1704–05 — having lost his four sons, his mother Mata Gujri Ji, and countless companions — Guru Gobind Singh Ji arrived at Talwandi Sabo. Here, for nearly nine months, the Guru "breathed" (damdama = resting place) and gathered his scattered sangat.',
            pa: '1704-05 ਦੀਆਂ ਵਿਨਾਸ਼ਕਾਰੀ ਲੜਾਈਆਂ ਤੋਂ ਬਾਅਦ — ਆਪਣੇ ਚਾਰੇ ਪੁੱਤਰਾਂ, ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਅਤੇ ਅਣਗਿਣਤ ਸਾਥੀਆਂ ਨੂੰ ਗੁਆ ਕੇ — ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਤਲਵੰਡੀ ਸਾਬੋ ਪਹੁੰਚੇ। ਇੱਥੇ, ਲਗਭਗ ਨੌਂ ਮਹੀਨੇ, ਗੁਰੂ ਜੀ ਨੇ ਦਮ ਲਿਆ ਅਤੇ ਆਪਣੀ ਖਿੰਡੀ ਹੋਈ ਸੰਗਤ ਨੂੰ ਇਕੱਠਾ ਕੀਤਾ।',
          },
        },
        {
          kicker: { en: 'Why It Was Established', pa: 'ਇਹ ਕਿਉਂ ਸਥਾਪਿਤ ਹੋਇਆ' },
          title: { en: 'Reciting Guru Granth Sahib Ji From Memory', pa: 'ਯਾਦ ਤੋਂ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਪਾਠ' },
          body: {
            en: 'Most profoundly, Guru Gobind Singh Ji re-established the entire Guru Granth Sahib Ji from memory here — reciting it to Bhai Mani Singh Ji, who transcribed it — and added the bani of his own father, Guru Tegh Bahadur Ji. This final version became the definitive scripture of the Sikhs.',
            pa: 'ਸਭ ਤੋਂ ਗਹਿਰੀ ਗੱਲ ਇਹ ਹੈ ਕਿ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਇੱਥੇ ਯਾਦ ਤੋਂ ਪੂਰਾ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਮੁੜ ਤਿਆਰ ਕੀਤਾ — ਭਾਈ ਮਨੀ ਸਿੰਘ ਜੀ ਨੂੰ ਪਾਠ ਕਰਵਾ ਕੇ, ਜਿਨ੍ਹਾਂ ਨੇ ਇਸਨੂੰ ਲਿਖਿਆ — ਅਤੇ ਆਪਣੇ ਪਿਤਾ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਬਾਣੀ ਜੋੜੀ। ਇਹ ਅੰਤਿਮ ਸੰਸਕਰਣ ਸਿੱਖਾਂ ਦਾ ਅਧਿਕਾਰਕ ਗ੍ਰੰਥ ਬਣਿਆ।',
          },
        },
        {
          kicker: { en: 'Historical Role', pa: 'ਇਤਿਹਾਸਕ ਭੂਮਿਕਾ' },
          title: { en: 'Guru Ki Kashi', pa: 'ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ' },
          body: {
            en: 'Talwandi Sabo earned the title "Guru Ki Kashi" — the Guru\'s Varanasi — recognizing it as the supreme center of Sikh scholarship, equal in spiritual gravity to the ancient city of Varanasi in Hindu tradition. It was formally declared the fifth Takht on November 26, 1966.',
            pa: 'ਤਲਵੰਡੀ ਸਾਬੋ ਨੇ "ਗੁਰੂ ਕੀ ਕਾਸ਼ੀ" ਦਾ ਖ਼ਿਤਾਬ ਕਮਾਇਆ — ਸਿੱਖ ਵਿਦਵਤਾ ਦਾ ਸਰਵੋੱਚ ਕੇਂਦਰ। ਇਸਨੂੰ 26 ਨਵੰਬਰ 1966 ਨੂੰ ਰਸਮੀ ਤੌਰ ਤੇ ਪੰਜਵਾਂ ਤਖ਼ਤ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ।',
          },
        },
        {
          kicker: { en: 'Present Day', pa: 'ਅੱਜ' },
          title: { en: 'A Living Center of Gurbani Study', pa: 'ਗੁਰਬਾਣੀ ਅਧਿਐਨ ਦਾ ਜੀਵੰਤ ਕੇਂਦਰ' },
          body: {
            en: 'Talwandi Sabo\'s scholarly legacy shaped the wider Bathinda region into a center of Sikh religious education. Institutions such as Guru Kashi University, named for the site\'s epithet, continue that tradition of learning today, drawing students and scholars of Gurbani from around the world.',
            pa: 'ਤਲਵੰਡੀ ਸਾਬੋ ਦੀ ਵਿਦਵਤਾ ਪਰੰਪਰਾ ਨੇ ਬਠਿੰਡਾ ਖੇਤਰ ਨੂੰ ਸਿੱਖ ਧਾਰਮਿਕ ਸਿੱਖਿਆ ਦਾ ਕੇਂਦਰ ਬਣਾ ਦਿੱਤਾ। ਗੁਰੂ ਕਾਸ਼ੀ ਯੂਨੀਵਰਸਿਟੀ ਵਰਗੀਆਂ ਸੰਸਥਾਵਾਂ ਅੱਜ ਵੀ ਇਹ ਪਰੰਪਰਾ ਜਾਰੀ ਰੱਖਦੀਆਂ ਹਨ।',
          },
        },
      ],
    },
    {
      id: 'patna_sahib',
      imagePath: '/assets/images/IMG_3197.jpeg',
      silhouettePath: '/assets/images/gurdwara-silhouette.svg',
      name: { en: 'Takht Sri Patna Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ' },
      location: { en: 'Patna, Bihar, India', pa: 'ਪਟਨਾ, ਬਿਹਾਰ, ਭਾਰਤ' },
      establishedBy: { en: 'Birthplace of Guru Gobind Singh Ji (December 22, 1666)', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਅਸਥਾਨ (22 ਦਸੰਬਰ, 1666)' },
      significance: { en: 'Marks the birthplace of Guru Gobind Singh Ji, where Gobind Rai (his birth name) spent his first six years before moving to Anandpur Sahib, and where sacred childhood relics are preserved.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਜਨਮ ਅਸਥਾਨ ਦੀ ਨਿਸ਼ਾਨਦੇਹੀ ਕਰਦਾ ਹੈ, ਜਿੱਥੇ ਗੋਬਿੰਦ ਰਾਏ (ਉਨ੍ਹਾਂ ਦਾ ਜਨਮ ਨਾਮ) ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਜਾਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਪਹਿਲੇ ਛੇ ਸਾਲ ਬਿਤਾਏ।' },
      details: { en: 'Patna Sahib connects the story of the Khalsa to Bihar — demonstrating the full geographic sweep of Sikh history from the east to the northwest of the subcontinent.', pa: 'ਪਟਨਾ ਸਾਹਿਬ ਖ਼ਾਲਸੇ ਦੀ ਕਥਾ ਨੂੰ ਬਿਹਾਰ ਨਾਲ ਜੋੜਦਾ ਹੈ — ਉਪਮਹਾਂਦੀਪ ਦੇ ਪੂਰਬ ਤੋਂ ਉੱਤਰ-ਪੱਛਮ ਤੱਕ ਸਿੱਖ ਇਤਿਹਾਸ ਦੀ ਭੂਗੋਲਿਕ ਵਿਸ਼ਾਲਤਾ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ।' },
      mapPoint: { x: '47.8%', y: '31.3%' },
      story: {
        en: 'In December 1666, Guru Tegh Bahadur Ji\'s wife, Mata Gujri Ji, gave birth to a son in Patna, Bihar — the child who would become Guru Gobind Singh Ji, the 10th Guru. His birth name was Gobind Rai. He spent his first approximately six years in Patna, surrounded by the devoted Sikh sangat of Bihar. The sacred site where the Guru was born is now preserved as a Takht. Precious relics of the Guru\'s childhood are kept here — including his iron arrow (baan), sandals (kharavan), and the cradle (palana) in which the young Guru rested.',
        pa: 'ਦਸੰਬਰ 1666 ਵਿੱਚ, ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਪਤਨੀ, ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਨੇ ਪਟਨਾ, ਬਿਹਾਰ ਵਿੱਚ ਇੱਕ ਪੁੱਤਰ ਨੂੰ ਜਨਮ ਦਿੱਤਾ — ਜੋ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਬਣੇ। ਉਨ੍ਹਾਂ ਦਾ ਜਨਮ ਨਾਮ ਗੋਬਿੰਦ ਰਾਏ ਸੀ।',
      },
      funFact: {
        en: 'Among the relics preserved at Patna Sahib is the young Guru\'s iron arrow (baan) — remarkable because even as a child, Gobind Rai was trained in the warrior arts. The Guru\'s childhood friends in Patna are said to have playfully called him their "Raja" (king).',
        pa: 'ਪਟਨਾ ਸਾਹਿਬ ਵਿੱਚ ਸੁਰੱਖਿਅਤ ਯਾਦਗਾਰੀ ਵਸਤੂਆਂ ਵਿੱਚ ਨੌਜਵਾਨ ਗੁਰੂ ਦਾ ਲੋਹੇ ਦਾ ਤੀਰ (ਬਾਣ) ਵੀ ਹੈ — ਇਹ ਦਰਸਾਉਂਦਾ ਹੈ ਕਿ ਬਚਪਨ ਤੋਂ ਹੀ ਗੋਬਿੰਦ ਰਾਏ ਨੂੰ ਯੋਧੇ ਕਲਾਵਾਂ ਵਿੱਚ ਸਿੱਖਿਅਤ ਕੀਤਾ ਗਿਆ ਸੀ।',
      },
      jathedaar: {
        en: 'The Jathedar of Takht Sri Patna Sahib (also called Harmandir Ji, Patna) is appointed to preserve and serve this birth-site of the 10th Guru, maintaining the sacred relics and overseeing Sikh religious observances in Bihar.',
        pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ ਦੇ ਜਥੇਦਾਰ ਦੀ ਨਿਯੁਕਤੀ 10ਵੇਂ ਗੁਰੂ ਦੇ ਜਨਮ ਅਸਥਾਨ ਦੀ ਸੰਭਾਲ ਅਤੇ ਸੇਵਾ ਲਈ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
      },
      visitorsInfo: {
        en: 'Head covering and removal of footwear required. Sacred childhood relics of Guru Gobind Singh Ji are preserved in the museum here. The complex is located in Patna City (Patna Sahib area). Pilgrims from across India visit for Guru Gobind Singh Ji\'s Prakash Utsav (birthday celebration) in December–January. Behave reverently and dress modestly.',
        pa: 'ਸਿਰ ਢੱਕਣਾ ਅਤੇ ਜੁੱਤੇ ਉਤਾਰਨੇ ਜ਼ਰੂਰੀ ਹਨ। ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਬਚਪਨ ਦੀਆਂ ਪਵਿੱਤਰ ਯਾਦਗਾਰੀ ਵਸਤੂਆਂ ਇੱਥੇ ਸੁਰੱਖਿਅਤ ਹਨ।',
      },
      yearDeclared: '1666 (birthplace recognized)',
      gurusVisited: {
        en: 'Guru Nanak Dev Ji (1st Guru) is traditionally held to have visited Patna during his travels (udasis). Guru Tegh Bahadur Ji (9th Guru) had his family, including his wife Mata Gujri Ji, reside in Patna while he traveled through eastern India; his son, Guru Gobind Singh Ji (10th Guru), was born here in December 1666.',
        pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ (ਪਹਿਲੇ ਗੁਰੂ) ਦੇ ਆਪਣੀਆਂ ਉਦਾਸੀਆਂ ਦੌਰਾਨ ਪਟਨਾ ਆਉਣ ਦੀ ਪਰੰਪਰਾ ਹੈ। ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ (9ਵੇਂ ਗੁਰੂ) ਦਾ ਪਰਿਵਾਰ, ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਸਮੇਤ, ਪਟਨਾ ਵਿੱਚ ਰਿਹਾ; ਉਨ੍ਹਾਂ ਦੇ ਪੁੱਤਰ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (10ਵੇਂ ਗੁਰੂ) ਦਾ ਜਨਮ ਦਸੰਬਰ 1666 ਵਿੱਚ ਇੱਥੇ ਹੋਇਆ।',
      },
      areaHistory: {
        en: 'Patna (ancient Pataliputra) is among the oldest continuously inhabited cities in the world, once the capital of the Magadha and Mauryan empires. By the 17th century it was a major Mughal-era trading city on the Ganges with an established Sikh sangat.',
        pa: 'ਪਟਨਾ (ਪ੍ਰਾਚੀਨ ਪਾਟਲੀਪੁੱਤਰ) ਸੰਸਾਰ ਦੇ ਸਭ ਤੋਂ ਪੁਰਾਣੇ ਲਗਾਤਾਰ ਵਸੇ ਸ਼ਹਿਰਾਂ ਵਿੱਚੋਂ ਹੈ, ਕਦੇ ਮਗਧ ਅਤੇ ਮੌਰੀਆ ਸਾਮਰਾਜਾਂ ਦੀ ਰਾਜਧਾਨੀ ਸੀ। 17ਵੀਂ ਸਦੀ ਤੱਕ ਇਹ ਗੰਗਾ ਕੰਢੇ ਇੱਕ ਵੱਡਾ ਮੁਗਲ-ਕਾਲੀ ਵਪਾਰਕ ਸ਼ਹਿਰ ਸੀ ਜਿੱਥੇ ਇੱਕ ਸਥਾਪਿਤ ਸਿੱਖ ਸੰਗਤ ਸੀ।',
      },
      localImpact: {
        en: 'Takht Sri Patna Sahib anchors a small but historic Sikh community within a city where Sikhs are a minority, drawing pilgrims especially for Guru Gobind Singh Ji\'s Prakash Utsav and marking the geographic reach of Sikh heritage into eastern India.',
        pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ ਇੱਕ ਛੋਟੇ ਪਰ ਇਤਿਹਾਸਕ ਸਿੱਖ ਭਾਈਚਾਰੇ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ, ਖ਼ਾਸ ਕਰਕੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਪ੍ਰਕਾਸ਼ ਉਤਸਵ ਲਈ ਸ਼ਰਧਾਲੂਆਂ ਨੂੰ ਖਿੱਚਦਾ ਹੈ।',
      },
      chapters: [
        {
          kicker: { en: 'Founding Story', pa: 'ਸਥਾਪਨਾ ਦੀ ਕਥਾ' },
          title: { en: 'A Son Born in Patna', pa: 'ਪਟਨਾ ਵਿੱਚ ਜਨਮਿਆ ਪੁੱਤਰ' },
          body: {
            en: 'In December 1666, Mata Gujri Ji, wife of Guru Tegh Bahadur Ji, gave birth to a son in Patna, Bihar — the child who would become Guru Gobind Singh Ji. His birth name was Gobind Rai, and he spent his first six years here, surrounded by Bihar\'s devoted Sikh sangat.',
            pa: 'ਦਸੰਬਰ 1666 ਵਿੱਚ, ਮਾਤਾ ਗੁਜਰੀ ਜੀ, ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਪਤਨੀ, ਨੇ ਪਟਨਾ, ਬਿਹਾਰ ਵਿੱਚ ਇੱਕ ਪੁੱਤਰ ਨੂੰ ਜਨਮ ਦਿੱਤਾ — ਜੋ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਬਣੇ। ਉਨ੍ਹਾਂ ਦਾ ਜਨਮ ਨਾਮ ਗੋਬਿੰਦ ਰਾਏ ਸੀ, ਅਤੇ ਉਨ੍ਹਾਂ ਨੇ ਇੱਥੇ ਆਪਣੇ ਪਹਿਲੇ ਛੇ ਸਾਲ ਬਿਤਾਏ।',
          },
        },
        {
          kicker: { en: 'Why It Was Established', pa: 'ਇਹ ਕਿਉਂ ਸਥਾਪਿਤ ਹੋਇਆ' },
          title: { en: 'A Childhood Trained for Greatness', pa: 'ਮਹਾਨਤਾ ਲਈ ਸਿੱਖਿਅਤ ਬਚਪਨ' },
          body: {
            en: 'Even as a child, Gobind Rai was trained in the warrior arts — among the relics preserved here is his iron arrow (baan). His childhood friends in Patna are said to have playfully called him their "Raja." Takht Sri Patna Sahib marks this sacred birthplace and its treasured relics.',
            pa: 'ਬਚਪਨ ਤੋਂ ਹੀ ਗੋਬਿੰਦ ਰਾਏ ਨੂੰ ਯੋਧੇ ਕਲਾਵਾਂ ਵਿੱਚ ਸਿੱਖਿਅਤ ਕੀਤਾ ਗਿਆ ਸੀ — ਇੱਥੇ ਸੰਭਾਲੀਆਂ ਵਸਤੂਆਂ ਵਿੱਚ ਉਨ੍ਹਾਂ ਦਾ ਲੋਹੇ ਦਾ ਤੀਰ ਵੀ ਹੈ। ਪਟਨਾ ਵਿੱਚ ਉਨ੍ਹਾਂ ਦੇ ਬਚਪਨ ਦੇ ਦੋਸਤ ਖੇਡ-ਖੇਡ ਵਿੱਚ ਉਨ੍ਹਾਂ ਨੂੰ "ਰਾਜਾ" ਕਹਿੰਦੇ ਸਨ।',
          },
        },
        {
          kicker: { en: 'Historical Role', pa: 'ਇਤਿਹਾਸਕ ਭੂਮਿਕਾ' },
          title: { en: 'Connecting the Khalsa to the East', pa: 'ਖ਼ਾਲਸੇ ਨੂੰ ਪੂਰਬ ਨਾਲ ਜੋੜਨਾ' },
          body: {
            en: 'Patna — ancient Pataliputra, once capital of the Magadha and Mauryan empires — was by the 17th century a major Mughal-era trading city with an established Sikh sangat. Patna Sahib connects the story of the Khalsa to Bihar, demonstrating the full geographic sweep of Sikh history.',
            pa: 'ਪਟਨਾ — ਪ੍ਰਾਚੀਨ ਪਾਟਲੀਪੁੱਤਰ, ਕਦੇ ਮਗਧ ਅਤੇ ਮੌਰੀਆ ਸਾਮਰਾਜਾਂ ਦੀ ਰਾਜਧਾਨੀ — 17ਵੀਂ ਸਦੀ ਤੱਕ ਇੱਕ ਵੱਡਾ ਮੁਗਲ-ਕਾਲੀ ਵਪਾਰਕ ਸ਼ਹਿਰ ਸੀ ਜਿੱਥੇ ਇੱਕ ਸਥਾਪਿਤ ਸਿੱਖ ਸੰਗਤ ਸੀ। ਪਟਨਾ ਸਾਹਿਬ ਖ਼ਾਲਸੇ ਦੀ ਕਥਾ ਨੂੰ ਬਿਹਾਰ ਨਾਲ ਜੋੜਦਾ ਹੈ।',
          },
        },
        {
          kicker: { en: 'Present Day', pa: 'ਅੱਜ' },
          title: { en: 'Prakash Utsav in the East', pa: 'ਪੂਰਬ ਵਿੱਚ ਪ੍ਰਕਾਸ਼ ਉਤਸਵ' },
          body: {
            en: 'Pilgrims from across India visit Takht Sri Patna Sahib especially for Guru Gobind Singh Ji\'s Prakash Utsav (birthday celebration) each December–January, anchoring a small but historic Sikh community within a city where Sikhs are a minority.',
            pa: 'ਭਾਰਤ ਭਰ ਦੇ ਸ਼ਰਧਾਲੂ ਹਰ ਦਸੰਬਰ-ਜਨਵਰੀ ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਪ੍ਰਕਾਸ਼ ਉਤਸਵ ਲਈ ਖ਼ਾਸ ਤੌਰ ਤੇ ਤਖ਼ਤ ਸ੍ਰੀ ਪਟਨਾ ਸਾਹਿਬ ਆਉਂਦੇ ਹਨ, ਇੱਕ ਛੋਟੇ ਪਰ ਇਤਿਹਾਸਕ ਸਿੱਖ ਭਾਈਚਾਰੇ ਨੂੰ ਸੰਭਾਲਦੇ ਹੋਏ।',
          },
        },
      ],
    },
    {
      id: 'hazur_sahib',
      imagePath: '/assets/images/IMG_3196.jpeg',
      silhouettePath: '/assets/images/gurdwara-silhouette.svg',
      name: { en: 'Takht Sri Hazur Sahib', pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ' },
      location: { en: 'Nanded, Maharashtra, India', pa: 'ਨਾਂਦੇੜ, ਮਹਾਰਾਸ਼ਟਰ, ਭਾਰਤ' },
      establishedBy: { en: 'Site of Guru Gobind Singh Ji\'s jyoti jot (1708 CE); Gurdwara built by Maharaja Ranjit Singh (1832–39)', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਜੋਤੀ ਜੋਤ ਦਾ ਅਸਥਾਨ (1708 ਈ.); ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੁਆਰਾ ਗੁਰਦੁਆਰਾ ਉਸਾਰਿਆ (1832–39)' },
      significance: { en: 'The sacred site where Guru Gobind Singh Ji spent his final days, declared Guru Granth Sahib Ji as the eternal living Guru, and attained jyoti jot in October 1708.', pa: 'ਉਹ ਪਵਿੱਤਰ ਅਸਥਾਨ ਜਿੱਥੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਆਪਣੇ ਅੰਤਿਮ ਦਿਨ ਬਿਤਾਏ, ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਘੋਸ਼ਿਤ ਕੀਤਾ ਅਤੇ ਅਕਤੂਬਰ 1708 ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾਏ।' },
      details: { en: 'Hazur Sahib carries the profound sense of completion — where the line of human Gurus ended and the eternal Guru Granth Sahib Ji was proclaimed as the living, eternal Guru of the Sikhs forever.', pa: 'ਹਜ਼ੂਰ ਸਾਹਿਬ ਪੂਰਨਤਾ ਦੀ ਗਹਿਰੀ ਭਾਵਨਾ ਰੱਖਦਾ ਹੈ — ਜਿੱਥੇ ਮਨੁੱਖੀ ਗੁਰੂਆਂ ਦੀ ਲੜੀ ਸਮਾਪਤ ਹੋਈ ਅਤੇ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਿੱਖਾਂ ਦੇ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਵਜੋਂ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ।' },
      mapPoint: { x: '25.5%', y: '44.5%' },
      story: {
        en: 'In October 1708, Guru Gobind Singh Ji was at Nanded, Maharashtra, when he was fatally wounded by an assailant. As his final days drew near, the Guru gathered the Sikh sangat and, in a ceremony of profound finality, declared that after him, the Sri Guru Granth Sahib Ji would be the eternal, living Guru of the Sikhs: "Sab Sikhan ko hukam hai, Guru Maniyo Granth." The golden-domed Hazur Sahib — also called Sachkhand ("Realm of Truth") — was later built on this sacred site by Maharaja Ranjit Singh between 1832 and 1839.',
        pa: 'ਅਕਤੂਬਰ 1708 ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨਾਂਦੇੜ ਵਿੱਚ ਸਨ। ਆਪਣੇ ਅੰਤਿਮ ਦਿਨਾਂ ਵਿੱਚ, ਗੁਰੂ ਜੀ ਨੇ ਸੰਗਤ ਨੂੰ ਇਕੱਠਾ ਕੀਤਾ ਅਤੇ ਘੋਸ਼ਣਾ ਕੀਤੀ: "ਸਬ ਸਿਖਨ ਕੋ ਹੁਕਮ ਹੈ, ਗੁਰੂ ਮਾਨਿਓ ਗ੍ਰੰਥ।"',
      },
      funFact: {
        en: 'Maharaja Ranjit Singh, the "Lion of Punjab," commissioned the construction of the current golden-domed structure of Hazur Sahib between 1832 and 1839, fulfilling a long-held Sikh aspiration to honor this most sacred site. "Hazur" itself means "in the presence of the revered one."',
        pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ, "ਸ਼ੇਰ-ਏ-ਪੰਜਾਬ," ਨੇ 1832 ਤੋਂ 1839 ਦੇ ਵਿਚਕਾਰ ਹਜ਼ੂਰ ਸਾਹਿਬ ਦੀ ਮੌਜੂਦਾ ਸੁਨਹਿਰੀ-ਗੁੰਬਦ ਵਾਲੀ ਇਮਾਰਤ ਬਣਾਈ।',
      },
      jathedaar: {
        en: 'The Jathedar of Takht Sri Hazur Sahib (Sachkhand Sri Hazur Abchal Nagar Sahib) is appointed by the Nanded Sahib Sikh Gurdwara Sachkhand Sahib Board. Kirtan is performed continuously 24 hours at this sacred site.',
        pa: 'ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ (ਸਚਖੰਡ ਸ੍ਰੀ ਹਜ਼ੂਰ ਅਬਚਲ ਨਗਰ ਸਾਹਿਬ) ਦੇ ਜਥੇਦਾਰ ਦੀ ਨਿਯੁਕਤੀ ਨਾਂਦੇੜ ਸਾਹਿਬ ਸਿੱਖ ਗੁਰਦੁਆਰਾ ਸਚਖੰਡ ਸਾਹਿਬ ਬੋਰਡ ਦੁਆਰਾ ਕੀਤੀ ਜਾਂਦੀ ਹੈ।',
      },
      visitorsInfo: {
        en: 'Non-Sikhs may enter the Gurdwara after covering their head and removing footwear. The Sachkhand (innermost sanctum) has additional access restrictions. Continuous kirtan is performed 24 hours. Multiple shrines within the complex commemorate specific moments in Guru Gobind Singh Ji\'s final days. Dress modestly and behave with deep reverence.',
        pa: 'ਗੈਰ-ਸਿੱਖ ਸਿਰ ਢੱਕ ਕੇ ਅਤੇ ਜੁੱਤੇ ਉਤਾਰ ਕੇ ਗੁਰਦੁਆਰੇ ਵਿੱਚ ਦਾਖਲ ਹੋ ਸਕਦੇ ਹਨ। ਸਚਖੰਡ (ਅੰਦਰੂਨੀ ਪਵਿੱਤਰ ਅਸਥਾਨ) ਵਿੱਚ ਵਾਧੂ ਪਾਬੰਦੀਆਂ ਹਨ। ਇੱਥੇ 24 ਘੰਟੇ ਕੀਰਤਨ ਹੁੰਦਾ ਹੈ।',
      },
      yearDeclared: '1708',
      gurusVisited: {
        en: 'Guru Gobind Singh Ji (10th Guru) is the Guru documented at this site, spending his final months here in 1708 after journeying south following his reconciliation with Emperor Bahadur Shah I.',
        pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ (10ਵੇਂ ਗੁਰੂ) ਇਸ ਅਸਥਾਨ ਨਾਲ ਦਸਤਾਵੇਜ਼ੀ ਤੌਰ ਤੇ ਜੁੜੇ ਗੁਰੂ ਹਨ, ਜਿੱਥੇ ਉਨ੍ਹਾਂ ਨੇ 1708 ਵਿੱਚ ਆਪਣੇ ਅੰਤਿਮ ਮਹੀਨੇ ਬਿਤਾਏ।',
      },
      areaHistory: {
        en: 'Nanded sits on the banks of the Godavari River in the Deccan, in present-day Maharashtra. It was under Mughal administration in the early 18th century when Guru Gobind Singh Ji camped there in 1708, where he was fatally wounded by an assailant.',
        pa: 'ਨਾਂਦੇੜ ਦੱਖਣ ਦੇ ਗੋਦਾਵਰੀ ਨਦੀ ਕੰਢੇ, ਅੱਜ ਦੇ ਮਹਾਰਾਸ਼ਟਰ ਵਿੱਚ ਸਥਿਤ ਹੈ। 18ਵੀਂ ਸਦੀ ਦੇ ਸ਼ੁਰੂ ਵਿੱਚ ਇਹ ਮੁਗਲ ਪ੍ਰਸ਼ਾਸਨ ਹੇਠ ਸੀ ਜਦੋਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ 1708 ਵਿੱਚ ਇੱਥੇ ਠਹਿਰੇ।',
      },
      localImpact: {
        en: 'Hazur Sahib transformed Nanded into a major Sikh pilgrimage destination in the Deccan, drawing devotees from across India and sustaining a distinctive local Sikh community, including a long-standing Nihang Singh custodial tradition, far from Punjab.',
        pa: 'ਹਜ਼ੂਰ ਸਾਹਿਬ ਨੇ ਨਾਂਦੇੜ ਨੂੰ ਦੱਖਣ ਵਿੱਚ ਇੱਕ ਵੱਡਾ ਸਿੱਖ ਤੀਰਥ ਸਥਾਨ ਬਣਾ ਦਿੱਤਾ, ਪੰਜਾਬ ਤੋਂ ਦੂਰ ਇੱਕ ਵਿਲੱਖਣ ਸਥਾਨਕ ਸਿੱਖ ਭਾਈਚਾਰੇ ਨੂੰ ਕਾਇਮ ਰੱਖਦਾ ਹੈ।',
      },
      chapters: [
        {
          kicker: { en: 'Founding Story', pa: 'ਸਥਾਪਨਾ ਦੀ ਕਥਾ' },
          title: { en: 'The Guru\'s Final Days at Nanded', pa: 'ਨਾਂਦੇੜ ਵਿੱਚ ਗੁਰੂ ਜੀ ਦੇ ਅੰਤਿਮ ਦਿਨ' },
          body: {
            en: 'In October 1708, Guru Gobind Singh Ji was at Nanded, Maharashtra, when he was fatally wounded by an assailant. As his final days drew near, he gathered the Sikh sangat for a ceremony of profound finality.',
            pa: 'ਅਕਤੂਬਰ 1708 ਵਿੱਚ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨਾਂਦੇੜ, ਮਹਾਰਾਸ਼ਟਰ ਵਿੱਚ ਸਨ ਜਦੋਂ ਇੱਕ ਹਮਲਾਵਰ ਨੇ ਉਨ੍ਹਾਂ ਨੂੰ ਘਾਤਕ ਜ਼ਖ਼ਮੀ ਕੀਤਾ। ਆਪਣੇ ਅੰਤਿਮ ਦਿਨਾਂ ਵਿੱਚ, ਉਨ੍ਹਾਂ ਨੇ ਸਿੱਖ ਸੰਗਤ ਨੂੰ ਇੱਕ ਗਹਿਰੀ ਅੰਤਿਮਤਾ ਦੀ ਰਸਮ ਲਈ ਇਕੱਠਾ ਕੀਤਾ।',
          },
        },
        {
          kicker: { en: 'Why It Was Established', pa: 'ਇਹ ਕਿਉਂ ਸਥਾਪਿਤ ਹੋਇਆ' },
          title: { en: 'Guru Maniyo Granth', pa: 'ਗੁਰੂ ਮਾਨਿਓ ਗ੍ਰੰਥ' },
          body: {
            en: 'The Guru declared that after him, the Sri Guru Granth Sahib Ji would be the eternal, living Guru of the Sikhs forever: "Sab Sikhan ko hukam hai, Guru Maniyo Granth." The line of human Gurus ended here — and an eternal one began.',
            pa: 'ਗੁਰੂ ਜੀ ਨੇ ਘੋਸ਼ਣਾ ਕੀਤੀ ਕਿ ਉਨ੍ਹਾਂ ਤੋਂ ਬਾਅਦ, ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਸਿੱਖਾਂ ਦੇ ਸਦੀਵੀ, ਜੀਵੰਤ ਗੁਰੂ ਹੋਣਗੇ: "ਸਬ ਸਿਖਨ ਕੋ ਹੁਕਮ ਹੈ, ਗੁਰੂ ਮਾਨਿਓ ਗ੍ਰੰਥ।" ਇੱਥੇ ਮਨੁੱਖੀ ਗੁਰੂਆਂ ਦੀ ਲੜੀ ਸਮਾਪਤ ਹੋਈ — ਅਤੇ ਇੱਕ ਸਦੀਵੀ ਗੁਰੂ ਦੀ ਸ਼ੁਰੂਆਤ ਹੋਈ।',
          },
        },
        {
          kicker: { en: 'Historical Role', pa: 'ਇਤਿਹਾਸਕ ਭੂਮਿਕਾ' },
          title: { en: 'Sachkhand — The Realm of Truth', pa: 'ਸਚਖੰਡ — ਸੱਚ ਦਾ ਰਾਜ' },
          body: {
            en: 'The golden-domed Hazur Sahib, also called Sachkhand ("Realm of Truth"), was later built on this sacred site by Maharaja Ranjit Singh between 1832 and 1839, fulfilling a long-held Sikh aspiration to honour this most sacred site of completion.',
            pa: 'ਸੁਨਹਿਰੀ-ਗੁੰਬਦ ਵਾਲਾ ਹਜ਼ੂਰ ਸਾਹਿਬ, ਜਿਸਨੂੰ ਸਚਖੰਡ ਵੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਬਾਅਦ ਵਿੱਚ ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੁਆਰਾ 1832 ਤੋਂ 1839 ਦੇ ਵਿਚਕਾਰ ਇਸ ਪਵਿੱਤਰ ਅਸਥਾਨ ਤੇ ਬਣਾਇਆ ਗਿਆ।',
          },
        },
        {
          kicker: { en: 'Present Day', pa: 'ਅੱਜ' },
          title: { en: 'Kirtan Without Pause', pa: 'ਬਿਨਾਂ ਰੁਕੇ ਕੀਰਤਨ' },
          body: {
            en: 'At Hazur Sahib, kirtan is performed continuously, 24 hours a day, and multiple shrines within the complex commemorate specific moments in Guru Gobind Singh Ji\'s final days — a living site of profound reverence in the Deccan, far from Punjab yet central to every Sikh\'s story.',
            pa: 'ਹਜ਼ੂਰ ਸਾਹਿਬ ਵਿੱਚ 24 ਘੰਟੇ ਲਗਾਤਾਰ ਕੀਰਤਨ ਹੁੰਦਾ ਹੈ, ਅਤੇ ਪਰਿਸਰ ਦੇ ਅੰਦਰ ਕਈ ਗੁਰਦੁਆਰੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਅੰਤਿਮ ਦਿਨਾਂ ਦੇ ਖ਼ਾਸ ਪਲਾਂ ਦੀ ਯਾਦ ਦਿਵਾਉਂਦੇ ਹਨ।',
          },
        },
      ],
    },
  ],
  learnSikhi: {
    title: { en: 'Learn About Sikhi', pa: 'ਸਿੱਖੀ ਬਾਰੇ ਜਾਣੋ' },
    intro: {
      en: 'A foundational introduction to gurdwara spaces, etiquette, the Ten Gurus, the Char Sahibzaade, the Panj Kakaar, and Gurbani — for visitors of any background.',
      pa: 'ਗੁਰਦੁਆਰਾ ਸਥਾਨਾਂ, ਮਰਯਾਦਾ, ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨ, ਚਾਰ ਸਾਹਿਬਜ਼ਾਦਿਆਂ, ਪੰਜ ਕਕਾਰਾਂ ਅਤੇ ਗੁਰਬਾਣੀ ਬਾਰੇ ਇੱਕ ਬੁਨਿਆਦੀ ਜਾਣ-ਪਛਾਣ — ਹਰ ਪਿਛੋਕੜ ਦੇ ਸੈਲਾਨੀਆਂ ਲਈ।',
    },
    gurdwaraRoomsTitle: { en: 'Gurdwara rooms', pa: 'ਗੁਰਦੁਆਰੇ ਦੇ ਸਥਾਨ' },
    gurdwaraRooms: [
      {
        name: { en: 'Diwan Hall', pa: 'ਦੀਵਾਨ ਹਾਲ' },
        description: {
          en: 'The main congregation hall where Sri Guru Granth Sahib Ji is enthroned. Kirtan and katha take place here, and the sangat sits together on the floor as equals, regardless of status, facing the Guru.',
          pa: 'ਮੁੱਖ ਸੰਗਤ ਹਾਲ ਜਿੱਥੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਹੁੰਦਾ ਹੈ। ਇੱਥੇ ਕੀਰਤਨ ਅਤੇ ਕਥਾ ਹੁੰਦੀ ਹੈ, ਅਤੇ ਸੰਗਤ ਬਰਾਬਰੀ ਨਾਲ ਫ਼ਰਸ਼ ਤੇ ਬੈਠਦੀ ਹੈ।',
        },
      },
      {
        name: { en: 'Sachkhand', pa: 'ਸਚਖੰਡ' },
        description: {
          en: '"Realm of Truth" — the inner sanctum where Sri Guru Granth Sahib Ji rests overnight (Sukhasan) after the day\'s prakash. It is treated with the same reverence given to a living Guru\'s private chamber, and access is often restricted.',
          pa: '"ਸੱਚ ਦਾ ਖੇਤਰ" — ਅੰਦਰੂਨੀ ਪਵਿੱਤਰ ਅਸਥਾਨ ਜਿੱਥੇ ਦਿਨ ਦੇ ਪ੍ਰਕਾਸ਼ ਤੋਂ ਬਾਅਦ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਰਾਤ ਨੂੰ ਸੁਖਾਸਨ ਕਰਦੇ ਹਨ। ਇਸਨੂੰ ਜੀਵੰਤ ਗੁਰੂ ਦੇ ਨਿੱਜੀ ਕਮਰੇ ਵਾਂਗ ਹੀ ਸਤਿਕਾਰਿਆ ਜਾਂਦਾ ਹੈ।',
        },
      },
      {
        name: { en: 'Langar Hall', pa: 'ਲੰਗਰ ਹਾਲ' },
        description: {
          en: 'The community dining hall where free vegetarian meals are served to every visitor, regardless of faith, caste, or background — a living expression of equality and selfless service (seva).',
          pa: 'ਸਾਂਝਾ ਭੋਜਨ ਹਾਲ ਜਿੱਥੇ ਹਰ ਸੈਲਾਨੀ ਨੂੰ, ਧਰਮ, ਜਾਤ ਜਾਂ ਪਿਛੋਕੜ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ, ਮੁਫ਼ਤ ਸ਼ਾਕਾਹਾਰੀ ਭੋਜਨ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ — ਬਰਾਬਰੀ ਅਤੇ ਸੇਵਾ ਦਾ ਜੀਵੰਤ ਪ੍ਰਗਟਾਵਾ।',
        },
      },
      {
        name: { en: 'Shoe room', pa: 'ਜੋੜਾ ਘਰ' },
        description: {
          en: 'The area near the entrance (Joda Ghar) where visitors remove and store their footwear before entering the gurdwara, as a sign of respect and cleanliness.',
          pa: 'ਪ੍ਰਵੇਸ਼ ਦੁਆਰ ਦੇ ਨੇੜੇ ਦਾ ਸਥਾਨ (ਜੋੜਾ ਘਰ) ਜਿੱਥੇ ਸੈਲਾਨੀ ਗੁਰਦੁਆਰੇ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਜੁੱਤੇ ਉਤਾਰਦੇ ਹਨ।',
        },
      },
    ],
    etiquetteTitle: { en: 'Etiquette', pa: 'ਮਰਯਾਦਾ' },
    etiquette: [
      {
        title: { en: 'Dress modestly', pa: 'ਸਾਦਗੀ ਨਾਲ ਪਹਿਰਾਵਾ' },
        description: { en: 'Cover shoulders and legs; avoid overly casual, tight, or revealing clothing.', pa: 'ਮੋਢੇ ਅਤੇ ਲੱਤਾਂ ਢੱਕੋ; ਬਹੁਤ ਜ਼ਿਆਦਾ ਆਮ, ਤੰਗ ਜਾਂ ਖੁੱਲ੍ਹੇ ਕੱਪੜਿਆਂ ਤੋਂ ਬਚੋ।' },
      },
      {
        title: { en: 'Remove socks in the Darbar Sahib', pa: 'ਦਰਬਾਰ ਸਾਹਿਬ ਵਿੱਚ ਜ਼ੁਰਾਬਾਂ ਉਤਾਰੋ' },
        description: { en: 'In the main Diwan Hall, shoes and socks are typically both removed; practice can vary slightly by gurdwara, so follow local signage.', pa: 'ਮੁੱਖ ਦੀਵਾਨ ਹਾਲ ਵਿੱਚ ਆਮ ਤੌਰ ਤੇ ਜੁੱਤੇ ਅਤੇ ਜ਼ੁਰਾਬਾਂ ਦੋਵੇਂ ਉਤਾਰੇ ਜਾਂਦੇ ਹਨ; ਇਹ ਗੁਰਦੁਆਰੇ ਅਨੁਸਾਰ ਥੋੜ੍ਹਾ ਵੱਖਰਾ ਹੋ ਸਕਦਾ ਹੈ।' },
      },
      {
        title: { en: 'Wash hands before langar and before seconds', pa: 'ਲੰਗਰ ਤੋਂ ਪਹਿਲਾਂ ਅਤੇ ਦੁਬਾਰਾ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਹੱਥ ਧੋਵੋ' },
        description: { en: 'Wash your hands before eating in the langar hall, and again before returning for a second helping.', pa: 'ਲੰਗਰ ਹਾਲ ਵਿੱਚ ਖਾਣ ਤੋਂ ਪਹਿਲਾਂ ਹੱਥ ਧੋਵੋ, ਅਤੇ ਦੁਬਾਰਾ ਭੋਜਨ ਲੈਣ ਤੋਂ ਪਹਿਲਾਂ ਵੀ।' },
      },
      {
        title: { en: 'Wash hands after the washroom', pa: 'ਵਾਸ਼ਰੂਮ ਤੋਂ ਬਾਅਦ ਹੱਥ ਧੋਵੋ' },
        description: { en: 'Wash hands thoroughly after using the washroom, before returning to any communal area.', pa: 'ਵਾਸ਼ਰੂਮ ਵਰਤਣ ਤੋਂ ਬਾਅਦ ਕਿਸੇ ਵੀ ਸਾਂਝੇ ਸਥਾਨ ਤੇ ਵਾਪਸ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਚੰਗੀ ਤਰ੍ਹਾਂ ਹੱਥ ਧੋਵੋ।' },
      },
      {
        title: { en: 'Remove shoes in the shoe room', pa: 'ਜੋੜਾ ਘਰ ਵਿੱਚ ਜੁੱਤੇ ਉਤਾਰੋ' },
        description: { en: 'Remove and store footwear in the designated shoe room before entering the gurdwara premises.', pa: 'ਗੁਰਦੁਆਰੇ ਦੇ ਪਰਿਸਰ ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਨਿਯਤ ਜੋੜਾ ਘਰ ਵਿੱਚ ਜੁੱਤੇ ਉਤਾਰੋ।' },
      },
      {
        title: { en: 'Cover your head throughout the premises', pa: 'ਪੂਰੇ ਪਰਿਸਰ ਵਿੱਚ ਸਿਰ ਢੱਕੋ' },
        description: { en: 'Head covering is required throughout the entire gurdwara premises, not just the Diwan Hall. Head coverings are usually available for visitors who don\'t bring their own.', pa: 'ਸਿਰ ਢੱਕਣਾ ਪੂਰੇ ਗੁਰਦੁਆਰਾ ਪਰਿਸਰ ਵਿੱਚ ਜ਼ਰੂਰੀ ਹੈ, ਸਿਰਫ਼ ਦੀਵਾਨ ਹਾਲ ਵਿੱਚ ਨਹੀਂ। ਜਿਨ੍ਹਾਂ ਕੋਲ ਆਪਣਾ ਨਹੀਂ ਹੈ ਉਨ੍ਹਾਂ ਲਈ ਆਮ ਤੌਰ ਤੇ ਸਿਰ ਢੱਕਣ ਵਾਲੇ ਕੱਪੜੇ ਉਪਲਬਧ ਹੁੰਦੇ ਹਨ।' },
      },
    ],
    gurusTitle: { en: 'The Ten Gurus', pa: 'ਦਸ ਗੁਰੂ ਸਾਹਿਬਾਨ' },
    guruLineageTitle: { en: 'The Guru Lineage', pa: 'ਗੁਰੂ ਪਰੰਪਰਾ' },
    guruLineageIntro: {
      en: 'Succession from Guru Nanak Dev Ji to Guru Gobind Singh Ji was never simply hereditary — each Guru named the successor best suited to carry the message forward, a chosen spiritual heir as often as a son.',
      pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਤੋਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਤੱਕ ਦੀ ਗੁਰਗੱਦੀ ਕਦੇ ਵੀ ਸਿਰਫ਼ ਖ਼ਾਨਦਾਨੀ ਨਹੀਂ ਸੀ — ਹਰ ਗੁਰੂ ਨੇ ਸੁਨੇਹੇ ਨੂੰ ਅੱਗੇ ਵਧਾਉਣ ਲਈ ਸਭ ਤੋਂ ਯੋਗ ਵਾਰਿਸ ਥਾਪਿਆ, ਜੋ ਪੁੱਤਰ ਜਿੰਨੀ ਵਾਰ ਚੁਣਿਆ ਹੋਇਆ ਅਧਿਆਤਮਿਕ ਵਾਰਿਸ ਵੀ ਹੁੰਦਾ ਸੀ।',
    },
    gurus: [
      {
        order: 1,
        name: { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
        years: '1469 – 1539',
        summary: { en: 'Founder of Sikhi. Born in Talwandi (now Nankana Sahib, Pakistan), he taught belief in one formless God, rejected empty ritual and caste distinction, and undertook long journeys (udasis) sharing this message. He established the twin institutions of sangat (congregation) and langar (community kitchen).', pa: 'ਸਿੱਖੀ ਦੇ ਬਾਨੀ। ਤਲਵੰਡੀ (ਹੁਣ ਨਨਕਾਣਾ ਸਾਹਿਬ) ਵਿੱਚ ਜਨਮੇ, ਉਨ੍ਹਾਂ ਨੇ ਇੱਕ ਨਿਰਾਕਾਰ ਪਰਮਾਤਮਾ ਦੀ ਸਿੱਖਿਆ ਦਿੱਤੀ ਅਤੇ ਜਾਤ-ਭੇਦ ਨੂੰ ਰੱਦ ਕੀਤਾ। ਉਨ੍ਹਾਂ ਨੇ ਸੰਗਤ ਅਤੇ ਲੰਗਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ।' },
        relation: { en: 'Founder of Sikhi', pa: 'ਸਿੱਖੀ ਦੇ ਬਾਨੀ' },
        epithet: { en: 'Founder of Sikhi · First Nanak', pa: 'ਸਿੱਖੀ ਦੇ ਬਾਨੀ · ਪਹਿਲੇ ਨਾਨਕ' },
        fullSummary: {
          en: 'Guru Nanak Dev Ji declared one formless God before every caste and creed, and lived that belief as much as he preached it — sharing a common table through langar with people the social order kept apart, and undertaking decades of travel (udasis) across South Asia and beyond to carry the message directly to ordinary people. His teaching that every soul stands equal before the Creator, regardless of birth, gender, or status, became the founding principle every Guru after him carried forward.',
          pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਹਰ ਜਾਤ ਅਤੇ ਮਜ਼੍ਹਬ ਅੱਗੇ ਇੱਕ ਨਿਰਾਕਾਰ ਪਰਮਾਤਮਾ ਦਾ ਐਲਾਨ ਕੀਤਾ, ਅਤੇ ਇਸ ਵਿਸ਼ਵਾਸ ਨੂੰ ਓਨਾ ਹੀ ਜੀਵਿਆ ਜਿੰਨਾ ਪ੍ਰਚਾਰਿਆ — ਲੰਗਰ ਰਾਹੀਂ ਸਮਾਜਿਕ ਵਿਵਸਥਾ ਵੱਲੋਂ ਵੱਖ ਕੀਤੇ ਲੋਕਾਂ ਨਾਲ ਸਾਂਝੀ ਥਾਲੀ ਵੰਡੀ, ਅਤੇ ਦਹਾਕਿਆਂ ਤੱਕ ਉਦਾਸੀਆਂ ਰਾਹੀਂ ਦੱਖਣੀ ਏਸ਼ੀਆ ਅਤੇ ਉਸ ਤੋਂ ਪਰ੍ਹੇ ਸਫ਼ਰ ਕੀਤਾ। ਉਨ੍ਹਾਂ ਦੀ ਸਿੱਖਿਆ ਕਿ ਹਰ ਰੂਹ ਜਨਮ, ਲਿੰਗ ਜਾਂ ਰੁਤਬੇ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ ਸਿਰਜਣਹਾਰ ਅੱਗੇ ਬਰਾਬਰ ਹੈ, ਹਰ ਅਗਲੇ ਗੁਰੂ ਨੇ ਅੱਗੇ ਵਧਾਈ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Nanak Dev Ji proclaimed the equality of women around 1499 — roughly four centuries before New Zealand, in 1893, became the first nation on earth to grant women the vote.',
          pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਲਗਭਗ 1499 ਵਿੱਚ ਔਰਤਾਂ ਦੀ ਬਰਾਬਰੀ ਦਾ ਐਲਾਨ ਕੀਤਾ — 1893 ਵਿੱਚ ਨਿਊਜ਼ੀਲੈਂਡ ਦੇ ਔਰਤਾਂ ਨੂੰ ਵੋਟ ਦਾ ਹੱਕ ਦੇਣ ਵਾਲਾ ਪਹਿਲਾ ਦੇਸ਼ ਬਣਨ ਤੋਂ ਲਗਭਗ ਚਾਰ ਸਦੀਆਂ ਪਹਿਲਾਂ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
      },
      {
        order: 2,
        name: { en: 'Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ' },
        years: '1504 – 1552',
        summary: { en: 'The second Guru formalized the Gurmukhi script used to write Gurbani, strengthened the langar tradition, and promoted physical fitness and education among Sikhs.', pa: 'ਦੂਜੇ ਗੁਰੂ ਨੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਨੂੰ ਰਸਮੀ ਰੂਪ ਦਿੱਤਾ, ਲੰਗਰ ਪਰੰਪਰਾ ਨੂੰ ਮਜ਼ਬੂਤ ਕੀਤਾ, ਅਤੇ ਸਰੀਰਕ ਤੰਦਰੁਸਤੀ ਅਤੇ ਸਿੱਖਿਆ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕੀਤਾ।' },
        relation: { en: 'Chosen successor', pa: 'ਚੁਣੇ ਗਏ ਵਾਰਿਸ' },
        epithet: { en: 'Standardized Gurmukhi · Second Nanak', pa: 'ਗੁਰਮੁਖੀ ਦੇ ਮਿਆਰੀਕਰਤਾ · ਦੂਜੇ ਨਾਨਕ' },
        fullSummary: {
          en: 'Guru Angad Dev Ji standardized the Gurmukhi script so that scripture and literacy belonged to the common tongue rather than a priestly elite, opening schools that welcomed children of every background. He strengthened the langar and sangat institutions Guru Nanak Dev Ji had founded, and promoted physical fitness — including wrestling grounds (akharas) — believing a healthy body supported a disciplined spiritual life.',
          pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਨੂੰ ਮਿਆਰੀ ਬਣਾਇਆ ਤਾਂ ਜੋ ਗ੍ਰੰਥ ਅਤੇ ਸਾਖਰਤਾ ਪੁਜਾਰੀ ਵਰਗ ਦੀ ਥਾਂ ਆਮ ਲੋਕਾਂ ਦੀ ਬੋਲੀ ਦੀ ਮਲਕੀਅਤ ਬਣੇ, ਹਰ ਪਿਛੋਕੜ ਦੇ ਬੱਚਿਆਂ ਲਈ ਸਕੂਲ ਖੋਲ੍ਹੇ। ਉਨ੍ਹਾਂ ਨੇ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੁਆਰਾ ਸਥਾਪਿਤ ਲੰਗਰ ਅਤੇ ਸੰਗਤ ਸੰਸਥਾਵਾਂ ਨੂੰ ਮਜ਼ਬੂਤ ਕੀਤਾ, ਅਤੇ ਸਰੀਰਕ ਤੰਦਰੁਸਤੀ — ਅਖਾੜਿਆਂ ਸਮੇਤ — ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕੀਤਾ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Angad Dev Ji built schools open to every child in the 1540s, roughly three centuries before Europe moved toward free, universal education in the 1870s.',
          pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ 1540ਵਿਆਂ ਵਿੱਚ ਹਰ ਬੱਚੇ ਲਈ ਖੁੱਲ੍ਹੇ ਸਕੂਲ ਬਣਾਏ — ਯੂਰਪ ਦੇ 1870ਵਿਆਂ ਵਿੱਚ ਮੁਫ਼ਤ, ਸਰਵਵਿਆਪਕ ਸਿੱਖਿਆ ਵੱਲ ਵਧਣ ਤੋਂ ਲਗਭਗ ਤਿੰਨ ਸਦੀਆਂ ਪਹਿਲਾਂ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
      },
      {
        order: 3,
        name: { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' },
        years: '1479 – 1574',
        summary: { en: 'The third Guru institutionalized langar so firmly that, according to Sikh tradition, even the Mughal Emperor Akbar sat on the floor to eat before receiving an audience. He opposed sati and purdah, composed Anand Sahib, and organized the growing Sikh community into 22 preaching districts (manjis).', pa: 'ਤੀਜੇ ਗੁਰੂ ਨੇ ਲੰਗਰ ਨੂੰ ਪੱਕੀ ਸੰਸਥਾ ਬਣਾਇਆ। ਉਨ੍ਹਾਂ ਨੇ ਸਤੀ ਅਤੇ ਪਰਦੇ ਦੀ ਪ੍ਰਥਾ ਦਾ ਵਿਰੋਧ ਕੀਤਾ, ਅਨੰਦ ਸਾਹਿਬ ਦੀ ਰਚਨਾ ਕੀਤੀ, ਅਤੇ ਸੰਗਤ ਨੂੰ 22 ਮੰਜੀਆਂ ਵਿੱਚ ਸੰਗਠਿਤ ਕੀਤਾ।' },
        relation: { en: 'Chosen successor', pa: 'ਚੁਣੇ ਗਏ ਵਾਰਿਸ' },
        epithet: { en: 'Social Revolutionary · Third Nanak', pa: 'ਸਮਾਜਿਕ ਕ੍ਰਾਂਤੀਕਾਰੀ · ਤੀਜੇ ਨਾਨਕ' },
        fullSummary: {
          en: 'Guru Amar Das Ji used the shared table of langar as an instrument of social reform, requiring even Emperor Akbar to sit on the floor among ordinary people before granting an audience. He spoke out against sati and purdah, championed widow remarriage, and organized the growing Sikh community into 22 preaching districts (manjis) — several led by women — spreading the faith while training a new generation of leadership.',
          pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਨੇ ਲੰਗਰ ਦੀ ਸਾਂਝੀ ਥਾਲੀ ਨੂੰ ਸਮਾਜਿਕ ਸੁਧਾਰ ਦੇ ਸਾਧਨ ਵਜੋਂ ਵਰਤਿਆ, ਇੱਥੋਂ ਤੱਕ ਕਿ ਬਾਦਸ਼ਾਹ ਅਕਬਰ ਨੂੰ ਵੀ ਮੁਲਾਕਾਤ ਤੋਂ ਪਹਿਲਾਂ ਆਮ ਲੋਕਾਂ ਦੇ ਨਾਲ ਫ਼ਰਸ਼ ਤੇ ਬੈਠਣਾ ਪਿਆ। ਉਨ੍ਹਾਂ ਨੇ ਸਤੀ ਅਤੇ ਪਰਦੇ ਦੇ ਵਿਰੁੱਧ ਆਵਾਜ਼ ਉਠਾਈ, ਵਿਧਵਾ ਵਿਆਹ ਦਾ ਸਮਰਥਨ ਕੀਤਾ, ਅਤੇ ਵਧਦੀ ਸਿੱਖ ਸੰਗਤ ਨੂੰ 22 ਮੰਜੀਆਂ ਵਿੱਚ ਸੰਗਠਿਤ ਕੀਤਾ — ਕਈਆਂ ਦੀ ਅਗਵਾਈ ਔਰਤਾਂ ਨੇ ਕੀਤੀ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Amar Das Ji appointed women to lead congregations in the 1550s — over four centuries before major world churches began ordaining women as clergy in the 1990s.',
          pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਨੇ 1550ਵਿਆਂ ਵਿੱਚ ਔਰਤਾਂ ਨੂੰ ਸੰਗਤਾਂ ਦੀ ਅਗਵਾਈ ਕਰਨ ਲਈ ਨਿਯੁਕਤ ਕੀਤਾ — 1990ਵਿਆਂ ਵਿੱਚ ਵੱਡੇ ਵਿਸ਼ਵ ਚਰਚਾਂ ਦੇ ਔਰਤਾਂ ਨੂੰ ਪਾਦਰੀ ਨਿਯੁਕਤ ਕਰਨ ਤੋਂ ਚਾਰ ਸਦੀਆਂ ਤੋਂ ਵੱਧ ਪਹਿਲਾਂ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
      },
      {
        order: 4,
        name: { en: 'Guru Ram Das Ji', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ' },
        years: '1534 – 1581',
        summary: { en: 'The fourth Guru founded the city of Amritsar and excavated its sacred pool, around which Sri Harmandir Sahib would later be built. He composed the Lavan hymns used in the Anand Karaj, the Sikh wedding ceremony.', pa: 'ਚੌਥੇ ਗੁਰੂ ਨੇ ਅੰਮ੍ਰਿਤਸਰ ਸ਼ਹਿਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਅਤੇ ਇਸਦਾ ਪਵਿੱਤਰ ਸਰੋਵਰ ਪੁੱਟਿਆ। ਉਨ੍ਹਾਂ ਨੇ ਲਾਵਾਂ ਦੀ ਰਚਨਾ ਕੀਤੀ, ਜੋ ਅਨੰਦ ਕਾਰਜ ਵਿੱਚ ਵਰਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।' },
        relation: { en: 'Son-in-law and chosen successor', pa: 'ਜਵਾਈ ਅਤੇ ਚੁਣੇ ਗਏ ਵਾਰਿਸ' },
        epithet: { en: 'Founded Amritsar · Fourth Nanak', pa: 'ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਸੰਸਥਾਪਕ · ਚੌਥੇ ਨਾਨਕ' },
        fullSummary: {
          en: 'Guru Ram Das Ji founded the city of Amritsar and excavated its sacred pool as an open city welcoming every caste, faith, and trade — laying the ground on which Sri Harmandir Sahib would later rise. In the Lavan hymns he composed for the Anand Karaj, he reframed marriage as a spiritual union between equal souls rather than a transfer of ownership, a vision still read at Sikh weddings today.',
          pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਨੇ ਅੰਮ੍ਰਿਤਸਰ ਸ਼ਹਿਰ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਅਤੇ ਇਸਦਾ ਪਵਿੱਤਰ ਸਰੋਵਰ ਪੁੱਟਿਆ — ਹਰ ਜਾਤ, ਮਜ਼੍ਹਬ ਅਤੇ ਕਿੱਤੇ ਦਾ ਸਵਾਗਤ ਕਰਨ ਵਾਲਾ ਖੁੱਲ੍ਹਾ ਸ਼ਹਿਰ। ਅਨੰਦ ਕਾਰਜ ਲਈ ਰਚੀਆਂ ਲਾਵਾਂ ਵਿੱਚ, ਉਨ੍ਹਾਂ ਨੇ ਵਿਆਹ ਨੂੰ ਦੋ ਬਰਾਬਰ ਰੂਹਾਂ ਦੇ ਅਧਿਆਤਮਿਕ ਮੇਲ ਵਜੋਂ ਪੇਸ਼ ਕੀਤਾ, ਮਲਕੀਅਤ ਦੇ ਤਬਾਦਲੇ ਵਜੋਂ ਨਹੀਂ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Ram Das Ji defined marriage as a partnership of equals in 1581 — three centuries before married women in much of the world were legally permitted to own property in their own name.',
          pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਨੇ 1581 ਵਿੱਚ ਵਿਆਹ ਨੂੰ ਬਰਾਬਰਾਂ ਦੀ ਸਾਂਝੇਦਾਰੀ ਵਜੋਂ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ — ਦੁਨੀਆ ਦੇ ਬਹੁਤੇ ਹਿੱਸਿਆਂ ਵਿੱਚ ਵਿਆਹੀਆਂ ਔਰਤਾਂ ਨੂੰ ਆਪਣੇ ਨਾਮ ਤੇ ਜਾਇਦਾਦ ਰੱਖਣ ਦਾ ਕਾਨੂੰਨੀ ਹੱਕ ਮਿਲਣ ਤੋਂ ਤਿੰਨ ਸਦੀਆਂ ਪਹਿਲਾਂ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
      },
      {
        order: 5,
        name: { en: 'Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ' },
        years: '1563 – 1606',
        summary: { en: 'The fifth Guru compiled the Adi Granth in 1604 — the first version of what would become Guru Granth Sahib Ji — and completed the construction of Sri Harmandir Sahib. He became the first Sikh martyr, executed by Mughal Emperor Jahangir in 1606.', pa: 'ਪੰਜਵੇਂ ਗੁਰੂ ਨੇ 1604 ਵਿੱਚ ਆਦਿ ਗ੍ਰੰਥ ਤਿਆਰ ਕੀਤਾ ਅਤੇ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀ ਉਸਾਰੀ ਪੂਰੀ ਕੀਤੀ। ਉਹ ਪਹਿਲੇ ਸਿੱਖ ਸ਼ਹੀਦ ਬਣੇ, 1606 ਵਿੱਚ ਬਾਦਸ਼ਾਹ ਜਹਾਂਗੀਰ ਦੁਆਰਾ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' },
        relation: { en: 'Son of Guru Ram Das Ji', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਦੇ ਪੁੱਤਰ' },
        epithet: { en: 'First Martyr · Compiled the Adi Granth · Fifth Nanak', pa: 'ਪਹਿਲੇ ਸ਼ਹੀਦ · ਆਦਿ ਗ੍ਰੰਥ ਦੇ ਸੰਪਾਦਕ · ਪੰਜਵੇਂ ਨਾਨਕ' },
        fullSummary: {
          en: 'Guru Arjan Dev Ji compiled the Adi Granth in 1604, gathering the hymns of Hindu, Muslim, and low-caste saints alongside those of the Sikh Gurus as equal voices in one scripture. He completed Sri Harmandir Sahib, built open on all four sides so that people of every direction and background could enter, and in 1606 became the faith\'s first martyr — tortured to death by the Mughal state rather than alter Gurbani or surrender the Sikhs\' freedom of conscience.',
          pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ 1604 ਵਿੱਚ ਆਦਿ ਗ੍ਰੰਥ ਤਿਆਰ ਕੀਤਾ, ਹਿੰਦੂ, ਮੁਸਲਿਮ ਅਤੇ ਨੀਵੀਂ ਜਾਤ ਦੇ ਸੰਤਾਂ ਦੀ ਬਾਣੀ ਨੂੰ ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੀ ਬਾਣੀ ਦੇ ਨਾਲ ਬਰਾਬਰ ਆਵਾਜ਼ਾਂ ਵਜੋਂ ਇੱਕ ਗ੍ਰੰਥ ਵਿੱਚ ਇਕੱਠਾ ਕੀਤਾ। ਉਨ੍ਹਾਂ ਨੇ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਪੂਰਾ ਕੀਤਾ, ਚਾਰੇ ਪਾਸੇ ਖੁੱਲ੍ਹਾ ਬਣਾਇਆ, ਅਤੇ 1606 ਵਿੱਚ ਧਰਮ ਦੇ ਪਹਿਲੇ ਸ਼ਹੀਦ ਬਣੇ — ਗੁਰਬਾਣੀ ਬਦਲਣ ਜਾਂ ਸਿੱਖਾਂ ਦੀ ਅੰਤਹਕਰਣ ਦੀ ਆਜ਼ਾਦੀ ਸਮਰਪਣ ਕਰਨ ਦੀ ਥਾਂ ਮੁਗਲ ਰਾਜ ਦੁਆਰਾ ਤਸ਼ੱਦਦ ਨਾਲ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Arjan Dev Ji enshrined religious pluralism in scripture in 1604 — over 340 years before the United Nations declared freedom of belief a universal human right in 1948.',
          pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ 1604 ਵਿੱਚ ਗ੍ਰੰਥ ਵਿੱਚ ਧਾਰਮਿਕ ਬਹੁਲਵਾਦ ਸਥਾਪਿਤ ਕੀਤਾ — ਸੰਯੁਕਤ ਰਾਸ਼ਟਰ ਦੁਆਰਾ 1948 ਵਿੱਚ ਵਿਸ਼ਵਾਸ ਦੀ ਆਜ਼ਾਦੀ ਨੂੰ ਸਰਬ-ਵਿਆਪਕ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਐਲਾਨਣ ਤੋਂ 340 ਸਾਲ ਤੋਂ ਵੱਧ ਪਹਿਲਾਂ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
      },
      {
        order: 6,
        name: { en: 'Guru Hargobind Sahib Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ' },
        years: '1595 – 1644',
        summary: { en: 'The sixth Guru introduced the principle of Miri-Piri — temporal and spiritual authority held together — wearing two swords and building the Akal Takht, in direct response to Mughal persecution of his father.', pa: 'ਛੇਵੇਂ ਗੁਰੂ ਨੇ ਮੀਰੀ-ਪੀਰੀ ਦਾ ਸਿਧਾਂਤ ਪੇਸ਼ ਕੀਤਾ, ਦੋ ਤਲਵਾਰਾਂ ਪਹਿਨੀਆਂ ਅਤੇ ਅਕਾਲ ਤਖ਼ਤ ਬਣਾਇਆ।' },
        relation: { en: 'Son of Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੇ ਪੁੱਤਰ' },
        epithet: { en: 'Saint-Soldier · Miri-Piri · Sixth Nanak', pa: 'ਸੰਤ-ਸਿਪਾਹੀ · ਮੀਰੀ-ਪੀਰੀ · ਛੇਵੇਂ ਨਾਨਕ' },
        fullSummary: {
          en: 'In direct response to his father\'s martyrdom, Guru Hargobind Sahib Ji introduced Miri-Piri — the principle that spiritual authority must also defend the oppressed — wearing two swords together for the first time and raising the Akal Takht as a seat of temporal Sikh authority. He took up arms only to protect the defenceless, of any faith, never for conquest.',
          pa: 'ਆਪਣੇ ਪਿਤਾ ਦੀ ਸ਼ਹੀਦੀ ਦੇ ਸਿੱਧੇ ਜਵਾਬ ਵਿੱਚ, ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਨੇ ਮੀਰੀ-ਪੀਰੀ ਦਾ ਸਿਧਾਂਤ ਪੇਸ਼ ਕੀਤਾ — ਅਧਿਆਤਮਿਕ ਅਧਿਕਾਰ ਨੂੰ ਦੱਬੇ-ਕੁਚਲਿਆਂ ਦੀ ਰਾਖੀ ਨਾਲ ਜੋੜਿਆ — ਪਹਿਲੀ ਵਾਰ ਦੋ ਤਲਵਾਰਾਂ ਇਕੱਠੀਆਂ ਪਹਿਨੀਆਂ ਅਤੇ ਅਕਾਲ ਤਖ਼ਤ ਉਸਾਰਿਆ। ਉਨ੍ਹਾਂ ਨੇ ਹਥਿਆਰ ਸਿਰਫ਼ ਬੇਸਹਾਰਾ ਲੋਕਾਂ ਦੀ ਰਾਖੀ ਲਈ ਚੁੱਕੇ, ਜਿੱਤ ਲਈ ਕਦੇ ਨਹੀਂ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Hargobind Sahib Ji made defending human rights a sacred duty in the 1600s — roughly three centuries before the world codified them in the Universal Declaration of Human Rights (1948).',
          pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਨੇ 1600ਵਿਆਂ ਵਿੱਚ ਮਨੁੱਖੀ ਅਧਿਕਾਰਾਂ ਦੀ ਰਾਖੀ ਨੂੰ ਪਵਿੱਤਰ ਫ਼ਰਜ਼ ਬਣਾਇਆ — ਵਿਸ਼ਵ ਦੇ 1948 ਵਿੱਚ ਸਰਬ-ਵਿਆਪਕ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਐਲਾਨਨਾਮੇ ਵਿੱਚ ਇਨ੍ਹਾਂ ਨੂੰ ਸੰਹਿਤਾਬੱਧ ਕਰਨ ਤੋਂ ਲਗਭਗ ਤਿੰਨ ਸਦੀਆਂ ਪਹਿਲਾਂ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
      },
      {
        order: 7,
        name: { en: 'Guru Har Rai Ji', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ' },
        years: '1630 – 1661',
        summary: { en: 'The seventh Guru was known for compassion, maintained a large but non-aggressive army, and established herbal medicine dispensaries, while carefully avoiding direct conflict with the Mughal state.', pa: 'ਸੱਤਵੇਂ ਗੁਰੂ ਦਇਆ ਲਈ ਜਾਣੇ ਜਾਂਦੇ ਸਨ, ਇੱਕ ਵੱਡੀ ਪਰ ਗ਼ੈਰ-ਹਮਲਾਵਰ ਫ਼ੌਜ ਰੱਖੀ, ਅਤੇ ਜੜੀ-ਬੂਟੀਆਂ ਦੇ ਦਵਾਖ਼ਾਨੇ ਸਥਾਪਿਤ ਕੀਤੇ।' },
        relation: { en: 'Grandson of Guru Hargobind Sahib Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੇ ਪੋਤਰੇ' },
        epithet: { en: 'Compassionate Healer · Seventh Nanak', pa: 'ਦਿਆਲੂ ਵੈਦ · ਸੱਤਵੇਂ ਨਾਨਕ' },
        fullSummary: {
          en: 'Guru Har Rai Ji maintained a large but strictly defensive army while running free herbal medicine dispensaries open to all — including, according to Sikh tradition, treating the family of the very Mughal prince who hunted him. He cultivated extensive gardens and taught reverence for nature and animal life as an extension of faith.',
          pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ ਨੇ ਇੱਕ ਵੱਡੀ ਪਰ ਸਖ਼ਤੀ ਨਾਲ ਬਚਾਅ-ਪੱਖੀ ਫ਼ੌਜ ਰੱਖੀ, ਨਾਲ ਹੀ ਸਭ ਲਈ ਖੁੱਲ੍ਹੇ ਮੁਫ਼ਤ ਜੜੀ-ਬੂਟੀਆਂ ਦੇ ਦਵਾਖ਼ਾਨੇ ਚਲਾਏ — ਸਿੱਖ ਪਰੰਪਰਾ ਅਨੁਸਾਰ, ਉਸੇ ਮੁਗਲ ਸ਼ਹਿਜ਼ਾਦੇ ਦੇ ਪਰਿਵਾਰ ਦਾ ਇਲਾਜ ਵੀ ਕੀਤਾ ਜਿਸਨੇ ਉਨ੍ਹਾਂ ਦਾ ਪਿੱਛਾ ਕੀਤਾ। ਉਨ੍ਹਾਂ ਨੇ ਵਿਸ਼ਾਲ ਬਾਗ ਪਾਲੇ ਅਤੇ ਕੁਦਰਤ ਅਤੇ ਪਸ਼ੂ ਜੀਵਨ ਦਾ ਆਦਰ ਸਿਖਾਇਆ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Har Rai Ji practised free healthcare and conservation in the 1650s — three centuries before either became recognized modern movements (the World Health Organization in 1948, Earth Day in 1970).',
          pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ ਨੇ 1650ਵਿਆਂ ਵਿੱਚ ਮੁਫ਼ਤ ਸਿਹਤ ਸੇਵਾ ਅਤੇ ਕੁਦਰਤ ਸੰਭਾਲ ਦਾ ਅਭਿਆਸ ਕੀਤਾ — ਦੋਵੇਂ ਆਧੁਨਿਕ ਲਹਿਰਾਂ ਬਣਨ ਤੋਂ ਤਿੰਨ ਸਦੀਆਂ ਪਹਿਲਾਂ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
      },
      {
        order: 8,
        name: { en: 'Guru Har Krishan Ji', pa: 'ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ' },
        years: '1656 – 1664',
        summary: { en: 'The eighth Guru became Guru at age five, the youngest of the ten. He is remembered for serving and healing the sick during a smallpox epidemic in Delhi, before succumbing to the illness himself at age eight.', pa: 'ਅੱਠਵੇਂ ਗੁਰੂ ਪੰਜ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰੂ ਬਣੇ। ਦਿੱਲੀ ਵਿੱਚ ਚੇਚਕ ਦੀ ਮਹਾਂਮਾਰੀ ਦੌਰਾਨ ਬਿਮਾਰਾਂ ਦੀ ਸੇਵਾ ਕਰਦੇ ਹੋਏ, ਅੱਠ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਖ਼ੁਦ ਇਸ ਬਿਮਾਰੀ ਨਾਲ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' },
        relation: { en: 'Son of Guru Har Rai Ji', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ ਦੇ ਪੁੱਤਰ' },
        epithet: { en: 'Bal Guru (Child Guru) · Eighth Nanak', pa: 'ਬਾਲ ਗੁਰੂ · ਅੱਠਵੇਂ ਨਾਨਕ' },
        fullSummary: {
          en: 'Crowned Guru at age five, Guru Har Krishan Ji met a smallpox epidemic sweeping Delhi not by withdrawing to safety but by tending the sick of every faith with his own hands, offering water and comfort at the height of the city\'s suffering. He contracted the illness himself while serving others and attained jyoti jot at age eight.',
          pa: 'ਪੰਜ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰਿਆਈ ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲੇ, ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ ਨੇ ਦਿੱਲੀ ਵਿੱਚ ਫੈਲੀ ਚੇਚਕ ਦੀ ਮਹਾਂਮਾਰੀ ਦਾ ਸਾਹਮਣਾ ਸੁਰੱਖਿਅਤ ਥਾਂ ਹਟਣ ਦੀ ਥਾਂ ਹਰ ਮਜ਼੍ਹਬ ਦੇ ਬਿਮਾਰਾਂ ਦੀ ਆਪਣੇ ਹੱਥੀਂ ਸੇਵਾ ਕਰਕੇ ਕੀਤਾ। ਦੂਜਿਆਂ ਦੀ ਸੇਵਾ ਕਰਦੇ ਹੋਏ ਖ਼ੁਦ ਇਹ ਬਿਮਾਰੀ ਲੱਗ ਗਈ ਅਤੇ ਅੱਠ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Har Krishan Ji led selfless epidemic relief as a child in 1664 — the humanitarian ideal the world would only formally organize around two centuries later, with the founding of the Red Cross in 1863.',
          pa: 'ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ ਨੇ 1664 ਵਿੱਚ ਬਚਪਨ ਵਿੱਚ ਹੀ ਨਿਸ਼ਕਾਮ ਮਹਾਂਮਾਰੀ ਰਾਹਤ ਦੀ ਅਗਵਾਈ ਕੀਤੀ — ਇਹ ਮਨੁੱਖਤਾਵਾਦੀ ਆਦਰਸ਼ ਦੁਨੀਆ ਨੇ 1863 ਵਿੱਚ ਰੈੱਡ ਕਰਾਸ ਦੀ ਸਥਾਪਨਾ ਨਾਲ ਲਗਭਗ ਦੋ ਸਦੀਆਂ ਬਾਅਦ ਹੀ ਰਸਮੀ ਤੌਰ ਤੇ ਸੰਗਠਿਤ ਕੀਤਾ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
      },
      {
        order: 9,
        name: { en: 'Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ' },
        years: '1621 – 1675',
        summary: { en: 'The ninth Guru, known as "Hind di Chadar" (Shield of India), sacrificed his life to defend the religious freedom of Kashmiri Pandits who sought his protection. He was executed by Emperor Aurangzeb in Delhi in 1675 for refusing to convert to Islam and for upholding others\' right to practice their own faith.', pa: 'ਨੌਵੇਂ ਗੁਰੂ, "ਹਿੰਦ ਦੀ ਚਾਦਰ" ਵਜੋਂ ਜਾਣੇ ਜਾਂਦੇ, ਨੇ ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਦੀ ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਦੀ ਰਾਖੀ ਲਈ ਆਪਣੀ ਜਾਨ ਵਾਰੀ। 1675 ਵਿੱਚ ਦਿੱਲੀ ਵਿੱਚ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਦੁਆਰਾ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' },
        relation: { en: 'Son of Guru Hargobind Sahib Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦੇ ਪੁੱਤਰ' },
        epithet: { en: 'Hind di Chadar (Shield of India) · Ninth Nanak', pa: 'ਹਿੰਦ ਦੀ ਚਾਦਰ · ਨੌਵੇਂ ਨਾਨਕ' },
        fullSummary: {
          en: 'When Kashmiri Pandits came to Guru Tegh Bahadur Ji seeking protection from forced conversion, he gave his life defending their right to practise a faith that was not his own. Executed in Delhi in 1675 by Emperor Aurangzeb for refusing to renounce Sikhi and for upholding others\' freedom of conscience, he is remembered as Hind di Chadar — the Shield of India — for a sacrifice history records as one of the purest stands for religious liberty.',
          pa: 'ਜਦੋਂ ਕਸ਼ਮੀਰੀ ਪੰਡਿਤ ਜ਼ਬਰਦਸਤੀ ਧਰਮ ਬਦਲਾਵ ਤੋਂ ਸੁਰੱਖਿਆ ਲਈ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਕੋਲ ਆਏ, ਉਨ੍ਹਾਂ ਨੇ ਇੱਕ ਹੋਰ ਮਜ਼੍ਹਬ ਦੀ ਪਾਲਣਾ ਦੇ ਹੱਕ ਦੀ ਰਾਖੀ ਲਈ ਆਪਣੀ ਜਾਨ ਵਾਰੀ। 1675 ਵਿੱਚ ਦਿੱਲੀ ਵਿੱਚ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਦੁਆਰਾ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ, ਉਨ੍ਹਾਂ ਨੂੰ ਹਿੰਦ ਦੀ ਚਾਦਰ ਵਜੋਂ ਯਾਦ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Tegh Bahadur Ji was martyred in 1675 defending another people\'s religious freedom — 273 years before that freedom was declared a universal human right in 1948.',
          pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ 1675 ਵਿੱਚ ਇੱਕ ਹੋਰ ਲੋਕਾਂ ਦੀ ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਦੀ ਰਾਖੀ ਕਰਦੇ ਹੋਏ ਸ਼ਹੀਦ ਹੋਏ — ਇਸ ਆਜ਼ਾਦੀ ਨੂੰ 1948 ਵਿੱਚ ਸਰਬ-ਵਿਆਪਕ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਐਲਾਨਣ ਤੋਂ 273 ਸਾਲ ਪਹਿਲਾਂ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
      },
      {
        order: 10,
        name: { en: 'Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ' },
        years: '1666 – 1708',
        summary: { en: 'The tenth Guru founded the Khalsa on Vaisakhi 1699, gave Sikhs the Panj Kakaar and the names Singh and Kaur, and compiled the final version of Guru Granth Sahib Ji at Damdama Sahib. Before his passing in 1708, he declared Guru Granth Sahib Ji the eternal, living Guru of the Sikhs.', pa: 'ਦਸਵੇਂ ਗੁਰੂ ਨੇ ਵਿਸਾਖੀ 1699 ਨੂੰ ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ, ਸਿੱਖਾਂ ਨੂੰ ਪੰਜ ਕਕਾਰ ਅਤੇ ਸਿੰਘ-ਕੌਰ ਨਾਮ ਦਿੱਤੇ। 1708 ਵਿੱਚ ਆਪਣੇ ਜੋਤੀ ਜੋਤ ਸਮਾਉਣ ਤੋਂ ਪਹਿਲਾਂ, ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਐਲਾਨਿਆ।' },
        relation: { en: 'Son of Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੇ ਪੁੱਤਰ' },
        epithet: { en: 'Tenth Master · Creator of the Khalsa · Warrior-Saint-Poet', pa: 'ਦਸਵੇਂ ਪਾਤਸ਼ਾਹ · ਖ਼ਾਲਸੇ ਦੇ ਸਿਰਜਣਹਾਰ' },
        fullSummary: {
          en: 'Guru Gobind Singh Ji founded the Khalsa on Vaisakhi 1699, giving initiated Sikhs the shared names Singh and Kaur to dissolve caste distinctions, and raising women as fully initiated warrior-equals within it. He then knelt to receive Amrit from the five he had just initiated — the Panj Pyare — before compiling the final, definitive Guru Granth Sahib Ji at Damdama Sahib and, in his final days, passing sovereignty from a hereditary Guru to the collective Khalsa Panth itself.',
          pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵਿਸਾਖੀ 1699 ਨੂੰ ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ, ਦੀਖਿਆਧਾਰੀ ਸਿੱਖਾਂ ਨੂੰ ਸਾਂਝੇ ਨਾਮ ਸਿੰਘ ਅਤੇ ਕੌਰ ਦਿੱਤੇ ਤਾਂ ਜੋ ਜਾਤ-ਭੇਦ ਖ਼ਤਮ ਹੋਵੇ, ਅਤੇ ਔਰਤਾਂ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਦੀਖਿਆਧਾਰੀ ਯੋਧੇ-ਬਰਾਬਰ ਵਜੋਂ ਉਭਾਰਿਆ। ਫਿਰ ਉਨ੍ਹਾਂ ਨੇ ਆਪਣੇ ਹੀ ਦੀਖਿਆ ਦਿੱਤੇ ਪੰਜ ਪਿਆਰਿਆਂ ਤੋਂ ਅੰਮ੍ਰਿਤ ਲੈਣ ਲਈ ਗੋਡੇ ਟੇਕੇ, ਦਮਦਮਾ ਸਾਹਿਬ ਵਿਖੇ ਅੰਤਿਮ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਤਿਆਰ ਕੀਤਾ, ਅਤੇ ਆਪਣੇ ਅੰਤਿਮ ਦਿਨਾਂ ਵਿੱਚ ਵਿਰਾਸਤੀ ਗੁਰਿਆਈ ਨੂੰ ਸਮੂਹਿਕ ਖ਼ਾਲਸਾ ਪੰਥ ਵਿੱਚ ਤਬਦੀਲ ਕੀਤਾ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Gobind Singh Ji abolished inherited privilege and vested sovereignty in the collective community in 1699 — decades before the modern democratic revolutions of the late 18th century.',
          pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ 1699 ਵਿੱਚ ਵਿਰਾਸਤੀ ਵਿਸ਼ੇਸ਼ ਅਧਿਕਾਰ ਖ਼ਤਮ ਕੀਤਾ ਅਤੇ ਪ੍ਰਭੁਸੱਤਾ ਸਮੂਹਿਕ ਭਾਈਚਾਰੇ ਵਿੱਚ ਸੌਂਪੀ — 18ਵੀਂ ਸਦੀ ਦੇ ਅੰਤਲੇ ਆਧੁਨਿਕ ਲੋਕਤੰਤਰੀ ਇਨਕਲਾਬਾਂ ਤੋਂ ਦਹਾਕੇ ਪਹਿਲਾਂ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
      },
      {
        order: 11,
        name: { en: 'Guru Granth Sahib Ji', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ' },
        years: '1708 – Eternity',
        summary: {
          en: 'Declared the eternal, living Guru of the Sikhs in 1708, so that no person could again claim divine authority over another. Its pages bind the words of 36 authors — Gurus, Hindu Bhagats, and Muslim Sufis — as one equal, eternal scripture with no clergy and no hierarchy.',
          pa: '1708 ਵਿੱਚ ਸਿੱਖਾਂ ਦੇ ਸਦੀਵੀ, ਜੀਵੰਤ ਗੁਰੂ ਵਜੋਂ ਐਲਾਨੇ ਗਏ, ਤਾਂ ਜੋ ਕੋਈ ਵੀ ਦੁਬਾਰਾ ਕਿਸੇ ਹੋਰ ਉੱਤੇ ਦੈਵੀ ਅਧਿਕਾਰ ਦਾ ਦਾਅਵਾ ਨਾ ਕਰ ਸਕੇ। ਇਸ ਦੇ ਪੰਨੇ 36 ਲੇਖਕਾਂ — ਗੁਰੂ ਸਾਹਿਬਾਨ, ਹਿੰਦੂ ਭਗਤ ਅਤੇ ਮੁਸਲਿਮ ਸੂਫ਼ੀ — ਦੇ ਸ਼ਬਦਾਂ ਨੂੰ ਇੱਕ ਬਰਾਬਰ, ਸਦੀਵੀ ਗ੍ਰੰਥ ਵਜੋਂ ਬੰਨ੍ਹਦੇ ਹਨ, ਬਿਨਾਂ ਕਿਸੇ ਪੁਜਾਰੀ ਵਰਗ ਜਾਂ ਲੜੀ ਦੇ।',
        },
        relation: { en: 'The eternal, living Guru', pa: 'ਸਦੀਵੀ, ਜੀਵੰਤ ਗੁਰੂ' },
        epithet: { en: 'Eternal Living Guru · Shabad Guru', pa: 'ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ · ਸ਼ਬਦ ਗੁਰੂ' },
        fullSummary: {
          en: 'In 1708, Guru Gobind Singh Ji declared that no human being would again claim divine authority over another — the Sri Guru Granth Sahib Ji itself would be the eternal, living Guru of the Sikhs. Its pages carry the compositions of 36 authors — Gurus, Hindu Bhagats, and Muslim Sufis alike — bound as one scripture with no clergy and no hierarchy, giving every voice within it equal standing regardless of the caste or faith it was born into.',
          pa: '1708 ਵਿੱਚ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਐਲਾਨ ਕੀਤਾ ਕਿ ਹੁਣ ਕੋਈ ਮਨੁੱਖ ਕਿਸੇ ਹੋਰ ਉੱਤੇ ਦੈਵੀ ਅਧਿਕਾਰ ਦਾ ਦਾਅਵਾ ਨਹੀਂ ਕਰੇਗਾ — ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਖ਼ੁਦ ਸਿੱਖਾਂ ਦੇ ਸਦੀਵੀ, ਜੀਵੰਤ ਗੁਰੂ ਹੋਣਗੇ। ਇਸ ਦੇ ਪੰਨਿਆਂ ਵਿੱਚ 36 ਲੇਖਕਾਂ ਦੀ ਰਚਨਾ ਹੈ — ਗੁਰੂ ਸਾਹਿਬਾਨ, ਹਿੰਦੂ ਭਗਤ ਅਤੇ ਮੁਸਲਿਮ ਸੂਫ਼ੀ — ਇੱਕ ਗ੍ਰੰਥ ਵਿੱਚ ਬੰਨ੍ਹੇ, ਬਿਨਾਂ ਕਿਸੇ ਪੁਜਾਰੀ ਵਰਗ ਜਾਂ ਲੜੀ ਦੇ।',
        },
        aheadOfTimeFact: {
          en: 'The scripture bound the words of saints, kings, and the low-born — 36 authors across castes and faiths — as one equal, eternal text in 1708, a radical statement of pluralism for its era.',
          pa: 'ਇਸ ਗ੍ਰੰਥ ਨੇ ਸੰਤਾਂ, ਰਾਜਿਆਂ ਅਤੇ ਨੀਵੀਂ ਜਾਤ ਦੇ ਲੋਕਾਂ ਦੇ ਸ਼ਬਦ — 36 ਲੇਖਕ, ਵੱਖ-ਵੱਖ ਜਾਤਾਂ ਅਤੇ ਮਜ਼੍ਹਬਾਂ ਤੋਂ — ਨੂੰ 1708 ਵਿੱਚ ਇੱਕ ਬਰਾਬਰ, ਸਦੀਵੀ ਗ੍ਰੰਥ ਵਜੋਂ ਬੰਨ੍ਹਿਆ, ਆਪਣੇ ਸਮੇਂ ਲਈ ਬਹੁਲਵਾਦ ਦਾ ਇੱਕ ਕ੍ਰਾਂਤੀਕਾਰੀ ਬਿਆਨ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
        eternal: true,
      },
      {
        order: 12,
        name: { en: 'Guru Khalsa Panth', pa: 'ਗੁਰੂ ਖ਼ਾਲਸਾ ਪੰਥ' },
        years: '1699 – Eternity',
        summary: {
          en: 'Having initiated the first five as Khalsa on Vaisakhi 1699, Guru Gobind Singh Ji knelt to receive Amrit from them in turn — declaring that wherever five initiated Sikhs gather before Guru Granth Sahib Ji, they carry the Guru\'s own authority.',
          pa: 'ਵਿਸਾਖੀ 1699 ਨੂੰ ਪਹਿਲੇ ਪੰਜ ਨੂੰ ਖ਼ਾਲਸਾ ਦੀਖਿਆ ਦੇਣ ਤੋਂ ਬਾਅਦ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਬਦਲੇ ਵਿੱਚ ਉਨ੍ਹਾਂ ਤੋਂ ਅੰਮ੍ਰਿਤ ਲੈਣ ਲਈ ਗੋਡੇ ਟੇਕੇ — ਐਲਾਨ ਕੀਤਾ ਕਿ ਜਿੱਥੇ ਵੀ ਪੰਜ ਦੀਖਿਆਧਾਰੀ ਸਿੱਖ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਅੱਗੇ ਇਕੱਠੇ ਹੁੰਦੇ ਹਨ, ਉਹ ਗੁਰੂ ਦਾ ਆਪਣਾ ਅਧਿਕਾਰ ਰੱਖਦੇ ਹਨ।',
        },
        relation: { en: 'The collective Guru', pa: 'ਸਮੂਹਿਕ ਗੁਰੂ' },
        epithet: { en: 'The Collective Guru · Guru Panth', pa: 'ਸਮੂਹਿਕ ਗੁਰੂ · ਗੁਰੂ ਪੰਥ' },
        fullSummary: {
          en: 'After creating the Khalsa, Guru Gobind Singh Ji asked the Panj Pyare he had just initiated to initiate him in return — a Guru kneeling before his own disciples. He then declared that this authority did not rest in any one person: wherever five initiated Sikhs gather in the presence of Guru Granth Sahib Ji, they carry the Guru\'s own sanction. No single leader, however senior, could again claim to speak for the Guru alone.',
          pa: 'ਖ਼ਾਲਸੇ ਦੀ ਸਿਰਜਣਾ ਤੋਂ ਬਾਅਦ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਹੁਣੇ ਦੀਖਿਆ ਦਿੱਤੇ ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਬਦਲੇ ਵਿੱਚ ਆਪਣੇ ਆਪ ਨੂੰ ਦੀਖਿਆ ਦੇਣ ਲਈ ਕਿਹਾ — ਇੱਕ ਗੁਰੂ ਆਪਣੇ ਹੀ ਸ਼ਿਸ਼ਾਂ ਅੱਗੇ ਗੋਡੇ ਟੇਕ ਰਿਹਾ ਸੀ। ਫਿਰ ਉਨ੍ਹਾਂ ਨੇ ਐਲਾਨ ਕੀਤਾ ਕਿ ਇਹ ਅਧਿਕਾਰ ਕਿਸੇ ਇੱਕ ਵਿਅਕਤੀ ਵਿੱਚ ਨਹੀਂ — ਜਿੱਥੇ ਵੀ ਪੰਜ ਦੀਖਿਆਧਾਰੀ ਸਿੱਖ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਹਾਜ਼ਰੀ ਵਿੱਚ ਇਕੱਠੇ ਹੁੰਦੇ ਹਨ, ਉਹ ਗੁਰੂ ਦਾ ਆਪਣਾ ਅਧਿਕਾਰ ਰੱਖਦੇ ਹਨ।',
        },
        aheadOfTimeFact: {
          en: 'Guru Gobind Singh Ji vested ultimate authority in a collective body accountable to no single leader in 1699 — long before the world widely settled on collective, checked governance as a safeguard against unaccountable power.',
          pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ 1699 ਵਿੱਚ ਅੰਤਿਮ ਅਧਿਕਾਰ ਇੱਕ ਸਮੂਹਿਕ ਸੰਸਥਾ ਵਿੱਚ ਸੌਂਪਿਆ, ਕਿਸੇ ਇੱਕ ਆਗੂ ਪ੍ਰਤੀ ਜਵਾਬਦੇਹ ਨਹੀਂ — ਦੁਨੀਆ ਦੇ ਸਮੂਹਿਕ, ਸੰਤੁਲਿਤ ਸ਼ਾਸਨ ਨੂੰ ਸ਼ਕਤੀ ਦੀ ਦੁਰਵਰਤੋਂ ਦੇ ਵਿਰੁੱਧ ਬਚਾਅ ਵਜੋਂ ਵਿਆਪਕ ਤੌਰ ਤੇ ਅਪਣਾਉਣ ਤੋਂ ਬਹੁਤ ਪਹਿਲਾਂ।',
        },
        storiesUrl: 'https://sikhi.io/stories',
        eternal: true,
      },
    ],
    sahibzaadeTitle: { en: 'The Four Sahibzaade', pa: 'ਚਾਰ ਸਾਹਿਬਜ਼ਾਦੇ' },
    sahibzaade: [
      { name: { en: 'Baba Ajit Singh Ji', pa: 'ਬਾਬਾ ਅਜੀਤ ਸਿੰਘ ਜੀ' }, years: '1687 – 1704', summary: { en: 'The eldest son of Guru Gobind Singh Ji, he attained shaheedi fighting at the Battle of Chamkaur Sahib in December 1704, alongside his younger brother.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਸਭ ਤੋਂ ਵੱਡੇ ਪੁੱਤਰ, ਦਸੰਬਰ 1704 ਵਿੱਚ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਈ।' } },
      { name: { en: 'Baba Jujhar Singh Ji', pa: 'ਬਾਬਾ ਜੁਝਾਰ ਸਿੰਘ ਜੀ' }, years: '1691 – 1704', summary: { en: 'The second son, he fought and attained shaheedi at the Battle of Chamkaur Sahib alongside his elder brother, facing overwhelming Mughal forces.', pa: 'ਦੂਜੇ ਪੁੱਤਰ, ਆਪਣੇ ਵੱਡੇ ਭਰਾ ਦੇ ਨਾਲ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਲੜਦੇ ਹੋਏ ਸ਼ਹੀਦੀ ਪਾਈ।' } },
      { name: { en: 'Baba Zorawar Singh Ji', pa: 'ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ' }, years: '1696 – 1705', summary: { en: 'The third son, separated from Guru Gobind Singh Ji during the evacuation of Anandpur Sahib, was captured along with his younger brother and grandmother Mata Gujri Ji. Sikh tradition holds that he was martyred at Sirhind in December 1705, at age nine, for refusing to renounce his faith.', pa: 'ਤੀਜੇ ਪੁੱਤਰ, ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਨਿਕਾਸੀ ਦੌਰਾਨ ਵੱਖ ਹੋ ਗਏ, ਆਪਣੇ ਛੋਟੇ ਭਰਾ ਅਤੇ ਦਾਦੀ ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਨਾਲ ਫੜੇ ਗਏ। ਸਿੱਖ ਪਰੰਪਰਾ ਅਨੁਸਾਰ, ਦਸੰਬਰ 1705 ਵਿੱਚ ਸਰਹਿੰਦ ਵਿਖੇ 9 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' } },
      { name: { en: 'Baba Fateh Singh Ji', pa: 'ਬਾਬਾ ਫ਼ਤਿਹ ਸਿੰਘ ਜੀ' }, years: '1699 – 1705', summary: { en: 'The youngest son, captured alongside his brother and grandmother, was martyred with Baba Zorawar Singh Ji at Sirhind at age six, also for refusing to renounce his faith.', pa: 'ਸਭ ਤੋਂ ਛੋਟੇ ਪੁੱਤਰ, ਆਪਣੇ ਭਰਾ ਅਤੇ ਦਾਦੀ ਨਾਲ ਫੜੇ ਗਏ, ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ ਦੇ ਨਾਲ ਸਰਹਿੰਦ ਵਿਖੇ 6 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' } },
    ],
    kakaarsTitle: { en: 'The Five Kakaar', pa: 'ਪੰਜ ਕਕਾਰ' },
    kakaarsIntro: {
      en: 'The five articles of faith given by Guru Gobind Singh Ji to every initiated Khalsa Sikh on Vaisakhi 1699, worn at all times.',
      pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਵਿਸਾਖੀ 1699 ਨੂੰ ਹਰ ਅੰਮ੍ਰਿਤਧਾਰੀ ਖ਼ਾਲਸਾ ਸਿੱਖ ਨੂੰ ਦਿੱਤੀਆਂ ਪੰਜ ਨਿਸ਼ਾਨੀਆਂ, ਜੋ ਹਰ ਸਮੇਂ ਪਹਿਨੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।',
    },
    kakaars: [
      { name: { en: 'ਕੇਸ', pa: 'ਕੇਸ' }, meaning: { en: 'Uncut hair', pa: 'ਬਿਨਾਂ ਕੱਟੇ ਵਾਲ' }, description: { en: 'Symbolizes acceptance of God\'s will and the Creator\'s natural design, and a life of spiritual devotion.', pa: 'ਪਰਮਾਤਮਾ ਦੀ ਰਜ਼ਾ ਅਤੇ ਕੁਦਰਤੀ ਸਿਰਜਣਾ ਨੂੰ ਸਵੀਕਾਰ ਕਰਨ ਦਾ ਪ੍ਰਤੀਕ।' } },
      { name: { en: 'ਕੰਘਾ', pa: 'ਕੰਘਾ' }, meaning: { en: 'Wooden comb', pa: 'ਲੱਕੜ ਦੀ ਕੰਘੀ' }, description: { en: 'Symbolizes cleanliness and discipline, used to keep the kesh tidy.', pa: 'ਸਫ਼ਾਈ ਅਤੇ ਅਨੁਸ਼ਾਸਨ ਦਾ ਪ੍ਰਤੀਕ, ਕੇਸਾਂ ਨੂੰ ਸੰਵਾਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।' } },
      { name: { en: 'ਕੜਾ', pa: 'ਕੜਾ' }, meaning: { en: 'Iron bracelet', pa: 'ਲੋਹੇ ਦਾ ਕੜਾ' }, description: { en: 'Symbolizes restraint from wrongdoing and an unbroken bond with the Guru.', pa: 'ਗ਼ਲਤ ਕੰਮਾਂ ਤੋਂ ਸੰਜਮ ਅਤੇ ਗੁਰੂ ਨਾਲ ਅਟੁੱਟ ਸੰਬੰਧ ਦਾ ਪ੍ਰਤੀਕ।' } },
      { name: { en: 'ਕਛਹਿਰਾ', pa: 'ਕਛਹਿਰਾ' }, meaning: { en: 'Cotton undergarment', pa: 'ਸੂਤੀ ਅੰਦਰੂਨੀ ਵਸਤਰ' }, description: { en: 'Symbolizes self-control, moral character, and readiness for action.', pa: 'ਸੰਜਮ, ਨੈਤਿਕ ਕਿਰਦਾਰ ਅਤੇ ਕਾਰਵਾਈ ਲਈ ਤਿਆਰੀ ਦਾ ਪ੍ਰਤੀਕ।' } },
      { name: { en: 'ਕਿਰਪਾਨ', pa: 'ਕਿਰਪਾਨ' }, meaning: { en: 'Ceremonial sword', pa: 'ਰਸਮੀ ਤਲਵਾਰ' }, description: { en: 'Symbolizes the duty to defend justice, the oppressed, and righteousness (ਧਰਮ).', pa: 'ਨਿਆਂ, ਦੱਬੇ-ਕੁਚਲਿਆਂ ਅਤੇ ਧਰਮ ਦੀ ਰਾਖੀ ਦੇ ਫ਼ਰਜ਼ ਦਾ ਪ੍ਰਤੀਕ।' } },
    ],
    introTitle: { en: 'Introduction to Sikhi', pa: 'ਸਿੱਖੀ ਦੀ ਜਾਣ-ਪਛਾਣ' },
    whatIsSikhi: {
      en: 'Sikhi is a distinct, monotheistic faith centered on belief in one formless God (ੴ, Ik Onkar) and the teachings of Guru Nanak Dev Ji and the nine Gurus who followed him, culminating in the eternal Guru Granth Sahib Ji.',
      pa: 'ਸਿੱਖੀ ਇੱਕ ਵੱਖਰਾ, ਇੱਕ-ਈਸ਼ਵਰਵਾਦੀ ਧਰਮ ਹੈ, ਜੋ ਇੱਕ ਨਿਰਾਕਾਰ ਪਰਮਾਤਮਾ (ੴ, ਇੱਕ ਓਅੰਕਾਰ) ਅਤੇ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਤੋਂ ਲੈ ਕੇ ਨੌਂ ਹੋਰ ਗੁਰੂ ਸਾਹਿਬਾਨ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਤੇ ਕੇਂਦ੍ਰਿਤ ਹੈ, ਜੋ ਸਦੀਵੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਸਮਾਪਤ ਹੁੰਦਾ ਹੈ।',
    },
    founding: {
      en: 'Sikhi was founded in the Punjab region of South Asia in 1469, with the birth and teachings of Guru Nanak Dev Ji in Talwandi (now Nankana Sahib, Pakistan).',
      pa: 'ਸਿੱਖੀ ਦੀ ਸਥਾਪਨਾ 1469 ਵਿੱਚ ਦੱਖਣੀ ਏਸ਼ੀਆ ਦੇ ਪੰਜਾਬ ਖੇਤਰ ਵਿੱਚ, ਤਲਵੰਡੀ (ਹੁਣ ਨਨਕਾਣਾ ਸਾਹਿਬ, ਪਾਕਿਸਤਾਨ) ਵਿੱਚ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਜਨਮ ਅਤੇ ਸਿੱਖਿਆਵਾਂ ਨਾਲ ਹੋਈ।',
    },
    sevaSimran: {
      en: 'Seva (selfless service) and simran (remembrance of God through meditation) sit at the heart of daily Sikh practice. Seva dissolves ego by serving others without expectation of reward; simran keeps the mind anchored to the Divine amid worldly life. Together they are considered inseparable — service without remembrance can become mere activity, and remembrance without service can become mere withdrawal.',
      pa: 'ਸੇਵਾ (ਨਿਸ਼ਕਾਮ ਸੇਵਾ) ਅਤੇ ਸਿਮਰਨ (ਸਿਮਰਨ ਰਾਹੀਂ ਪਰਮਾਤਮਾ ਦੀ ਯਾਦ) ਰੋਜ਼ਾਨਾ ਸਿੱਖ ਅਭਿਆਸ ਦੇ ਕੇਂਦਰ ਵਿੱਚ ਹਨ। ਸੇਵਾ ਬਿਨਾਂ ਕਿਸੇ ਇਨਾਮ ਦੀ ਆਸ ਤੋਂ ਦੂਜਿਆਂ ਦੀ ਸੇਵਾ ਕਰਕੇ ਹਉਮੈ ਨੂੰ ਖ਼ਤਮ ਕਰਦੀ ਹੈ; ਸਿਮਰਨ ਮਨ ਨੂੰ ਪਰਮਾਤਮਾ ਨਾਲ ਜੋੜੀ ਰੱਖਦਾ ਹੈ। ਦੋਵੇਂ ਇੱਕ-ਦੂਜੇ ਤੋਂ ਅਟੁੱਟ ਮੰਨੇ ਜਾਂਦੇ ਹਨ।',
    },
    pillarsTitle: { en: 'The Three Pillars', pa: 'ਤਿੰਨ ਥੰਮ੍ਹ' },
    pillars: [
      {
        term: { en: 'ਨਾਮ ਜਪਣਾ', pa: 'ਨਾਮ ਜਪਣਾ' },
        description: { en: 'Naam Japna — meditating on and remembering God\'s name, keeping the Divine present in every thought and action.', pa: 'ਨਾਮ ਜਪਣਾ — ਪਰਮਾਤਮਾ ਦੇ ਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰਨਾ, ਹਰ ਸੋਚ ਅਤੇ ਕਾਰਜ ਵਿੱਚ ਪਰਮਾਤਮਾ ਨੂੰ ਹਾਜ਼ਰ ਰੱਖਣਾ।' },
      },
      {
        term: { en: 'ਵੰਡ ਕੇ ਛਕਣਾ', pa: 'ਵੰਡ ਕੇ ਛਕਣਾ' },
        description: { en: 'Vand Ke Chhakna — sharing what one has with others, most visibly expressed through langar.', pa: 'ਵੰਡ ਕੇ ਛਕਣਾ — ਆਪਣੀ ਕਮਾਈ ਦੂਜਿਆਂ ਨਾਲ ਵੰਡਣਾ, ਜੋ ਸਭ ਤੋਂ ਵੱਧ ਲੰਗਰ ਰਾਹੀਂ ਦਿਖਾਈ ਦਿੰਦਾ ਹੈ।' },
      },
      {
        term: { en: 'ਕਿਰਤ ਕਰਨੀ', pa: 'ਕਿਰਤ ਕਰਨੀ' },
        description: { en: 'Kirat Karni — earning an honest living through honest work, rejecting exploitation or dependence.', pa: 'ਕਿਰਤ ਕਰਨੀ — ਇਮਾਨਦਾਰ ਮਿਹਨਤ ਰਾਹੀਂ ਸੱਚੀ ਕਮਾਈ ਕਰਨੀ, ਸ਼ੋਸ਼ਣ ਜਾਂ ਨਿਰਭਰਤਾ ਨੂੰ ਰੱਦ ਕਰਨਾ।' },
      },
    ],
    gurbaniTitle: { en: 'Gurbani', pa: 'ਗੁਰਬਾਣੀ' },
    gurbaniIntro: {
      en: 'Gurbani is the revealed word of the Guru — hymns composed by the Sikh Gurus and Bhagats, then compiled and authenticated by the Gurus themselves. Guru Arjan Dev Ji compiled the Adi Granth in 1604 at Sri Harmandir Sahib, and Guru Gobind Singh Ji sealed it as Sri Guru Granth Sahib Ji, the eternal living Guru, in 1708. Every Ang and shabad carries a fixed, universally standardized text across every printed edition worldwide. The four shabads below are among the most widely recited in Sikh daily life.',
      pa: 'ਗੁਰਬਾਣੀ ਗੁਰੂ ਦਾ ਪ੍ਰਗਟ ਕੀਤਾ ਸ਼ਬਦ ਹੈ — ਸਿੱਖ ਗੁਰੂ ਸਾਹਿਬਾਨ ਅਤੇ ਭਗਤਾਂ ਦੁਆਰਾ ਰਚੀ ਗਈ ਬਾਣੀ, ਜਿਸ ਨੂੰ ਗੁਰੂ ਸਾਹਿਬਾਨ ਨੇ ਖ਼ੁਦ ਸੰਪਾਦਿਤ ਅਤੇ ਪ੍ਰਮਾਣਿਤ ਕੀਤਾ। ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ 1604 ਵਿੱਚ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਵਿਖੇ ਆਦਿ ਗ੍ਰੰਥ ਦੀ ਸੰਪਾਦਨਾ ਕੀਤੀ, ਅਤੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ 1708 ਵਿੱਚ ਇਸ ਨੂੰ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ, ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਵਜੋਂ ਸਥਾਪਿਤ ਕੀਤਾ। ਹਰ ਅੰਗ ਅਤੇ ਸ਼ਬਦ ਦਾ ਪਾਠ ਦੁਨੀਆ ਭਰ ਦੇ ਹਰ ਛਾਪੇ ਸੰਸਕਰਣ ਵਿੱਚ ਸਥਿਰ ਅਤੇ ਸਰਬ-ਵਿਆਪਕ ਤੌਰ ਤੇ ਮਿਆਰੀ ਹੈ। ਹੇਠ ਦਿੱਤੇ ਚਾਰ ਸ਼ਬਦ ਸਿੱਖ ਰੋਜ਼ਾਨਾ ਜੀਵਨ ਵਿੱਚ ਸਭ ਤੋਂ ਵੱਧ ਪੜ੍ਹੇ ਜਾਣ ਵਾਲਿਆਂ ਵਿੱਚੋਂ ਹਨ।',
    },
    shabads: [
      {
        gurmukhi: 'ੴ ਸਤਿ ਨਾਮੁ ਕਰਤਾ ਪੁਰਖੁ ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥',
        translation: { en: 'One Universal Creator. Truth is the Name. Creative Being, without fear, without hatred. Image of the Undying, beyond birth, self-existent. Known by the Guru\'s grace.', pa: 'ਇੱਕ ਸਰਬ-ਵਿਆਪਕ ਸਿਰਜਣਹਾਰ। ਸਤਿ ਹੀ ਨਾਮ ਹੈ। ਸਿਰਜਣਹਾਰ, ਭੈ ਤੋਂ ਰਹਿਤ, ਵੈਰ ਤੋਂ ਰਹਿਤ। ਅਕਾਲ ਮੂਰਤਿ, ਜਨਮ ਤੋਂ ਪਰ੍ਹੇ, ਸੈਭੰ। ਗੁਰੂ ਦੀ ਕਿਰਪਾ ਨਾਲ ਜਾਣਿਆ ਜਾਂਦਾ ਹੈ।' },
        ang: 1,
        raag: 'None (Mool Mantar, opening of Japji Sahib)',
        author: { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
        verificationNote: {
          en: 'The Mool Mantar universally opens every printed edition of Guru Granth Sahib Ji at Ang 1, unchanged since Guru Nanak Dev Ji first revealed it.',
          pa: 'ਮੂਲ ਮੰਤਰ ਹਰ ਛਾਪੇ ਸੰਸਕਰਣ ਵਿੱਚ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਅੰਗ 1 ਤੇ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ, ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੁਆਰਾ ਪ੍ਰਗਟ ਕੀਤੇ ਜਾਣ ਤੋਂ ਲੈ ਕੇ ਅੱਜ ਤੱਕ ਅਟੱਲ।',
        },
      },
      {
        gurmukhi: 'ਸੋ ਦਰੁ ਤੇਰਾ ਕੇਹਾ ਸੋ ਘਰੁ ਕੇਹਾ ਜਿਤੁ ਬਹਿ ਸਰਬ ਸਮਾਲੇ ॥',
        translation: { en: 'Where is that Gate of Yours, and where is that Home, in which You sit and take care of all?', pa: 'ਉਹ ਦਰਵਾਜ਼ਾ ਕਿਹੋ ਜਿਹਾ ਹੈ, ਉਹ ਘਰ ਕਿਹੋ ਜਿਹਾ ਹੈ, ਜਿੱਥੇ ਬੈਠ ਕੇ ਤੂੰ ਸਭ ਦੀ ਸੰਭਾਲ ਕਰਦਾ ਹੈਂ?' },
        ang: 8,
        raag: 'Raag Asa',
        author: { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
        verificationNote: {
          en: 'Opening line of So Dar, part of the daily Rehras Sahib recitation, carried in its original form since it was first compiled into the Adi Granth.',
          pa: 'ਸੋ ਦਰੁ ਦੀ ਪਹਿਲੀ ਪੰਕਤੀ, ਰੋਜ਼ਾਨਾ ਰਹਿਰਾਸ ਸਾਹਿਬ ਦਾ ਹਿੱਸਾ, ਆਦਿ ਗ੍ਰੰਥ ਵਿੱਚ ਸੰਪਾਦਿਤ ਹੋਣ ਤੋਂ ਲੈ ਕੇ ਆਪਣੇ ਮੂਲ ਰੂਪ ਵਿੱਚ ਸੁਰੱਖਿਅਤ।',
        },
      },
      {
        gurmukhi: 'ਜੈ ਘਰਿ ਕੀਰਤਿ ਆਖੀਐ ਕਰਤੇ ਕਾ ਹੋਇ ਬੀਚਾਰੋ ॥ ਤਿਤੁ ਘਰਿ ਗਾਵਹੁ ਸੋਹਿਲਾ ਸਿਵਰਿਹੁ ਸਿਰਜਣਹਾਰੋ ॥੧॥',
        translation: { en: 'In that house where the Creator\'s praises are spoken and reflected upon — in that house, sing the song of joy, and remember the Creator Lord. ||1||', pa: 'ਜਿਸ ਘਰ ਵਿੱਚ ਕਰਤੇ ਦੀ ਕੀਰਤੀ ਆਖੀ ਅਤੇ ਵਿਚਾਰੀ ਜਾਵੇ — ਉਸ ਘਰ ਵਿੱਚ ਸੋਹਿਲਾ ਗਾਓ, ਸਿਰਜਣਹਾਰ ਨੂੰ ਯਾਦ ਕਰੋ। ॥੧॥' },
        ang: 12,
        raag: 'Raag Gauri Deepki',
        author: { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
        verificationNote: {
          en: 'Opening verse of Kirtan Sohila, the evening prayer recited before sleep, preserved word-for-word since the Guru first composed it.',
          pa: 'ਕੀਰਤਨ ਸੋਹਿਲਾ ਦੀ ਪਹਿਲੀ ਤੁਕ, ਸੌਣ ਤੋਂ ਪਹਿਲਾਂ ਪੜ੍ਹੀ ਜਾਂਦੀ ਸ਼ਾਮ ਦੀ ਅਰਦਾਸ, ਗੁਰੂ ਜੀ ਦੁਆਰਾ ਰਚੇ ਜਾਣ ਤੋਂ ਲੈ ਕੇ ਸ਼ਬਦ-ਬ-ਸ਼ਬਦ ਸੁਰੱਖਿਅਤ।',
        },
      },
      {
        gurmukhi: 'ਅਨੰਦੁ ਭਇਆ ਮੇਰੀ ਮਾਏ ਸਤਿਗੁਰੂ ਮੈ ਪਾਇਆ ॥ ਸਤਿਗੁਰੁ ਤ ਪਾਇਆ ਸਹਜ ਸੇਤੀ ਮਨਿ ਵਜੀਆ ਵਾਧਾਈਆ ॥',
        translation: { en: 'I am in bliss, O my mother, for I have found my True Guru. I have found the True Guru with intuitive ease, and my mind vibrates with the music of celebration.', pa: 'ਅਨੰਦ ਹੋਇਆ ਹੈ, ਮੇਰੀਏ ਮਾਏ, ਮੈਂ ਸਤਿਗੁਰੂ ਪਾ ਲਿਆ ਹੈ। ਸਤਿਗੁਰੂ ਸਹਿਜ ਨਾਲ ਪਾਇਆ, ਮਨ ਵਿੱਚ ਵਧਾਈਆਂ ਵੱਜੀਆਂ।' },
        ang: 917,
        raag: 'Raag Ramkali',
        author: { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' },
        verificationNote: {
          en: 'Opening verse of Anand Sahib, one of the five Banis recited during Amrit Sanchar, standing exactly as Guru Amar Das Ji composed it.',
          pa: 'ਅਨੰਦ ਸਾਹਿਬ ਦੀ ਪਹਿਲੀ ਤੁਕ, ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ ਵਿੱਚ ਪੜ੍ਹੀਆਂ ਜਾਂਦੀਆਂ ਪੰਜ ਬਾਣੀਆਂ ਵਿੱਚੋਂ ਇੱਕ, ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਦੁਆਰਾ ਰਚੇ ਜਾਣ ਦੇ ਬਿਲਕੁਲ ਮੁਤਾਬਕ।',
        },
      },
    ],
  },
  themes: [
    { id: 'default', palette: 'default', icon: '☬', label: { en: 'Default display', pa: 'ਮੂਲ ਪ੍ਰਦਰਸ਼ਨੀ' } },
    { id: 'vaisakhi', palette: 'vaisakhi', icon: '🌾', label: { en: 'Vaisakhi', pa: 'ਵਿਸਾਖੀ' } },
    { id: 'bandi-chhor-divas', palette: 'diwali', icon: '🪔', label: { en: 'Bandi Chhor Divas', pa: 'ਬੰਦੀ ਛੋੜ ਦਿਵਸ' } },
    { id: 'gurpurab-guru-nanak', palette: 'gurpurab', icon: '✨', label: { en: 'Guru Nanak Dev Ji — Parkash Purab', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ — ਪ੍ਰਕਾਸ਼ ਪੁਰਬ' } },
    { id: 'gurpurab-guru-angad', palette: 'gurpurab', icon: '✨', label: { en: 'Guru Angad Dev Ji — Parkash Purab', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ — ਪ੍ਰਕਾਸ਼ ਪੁਰਬ' } },
    { id: 'gurpurab-guru-amar-das', palette: 'gurpurab', icon: '✨', label: { en: 'Guru Amar Das Ji — Parkash Purab', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ — ਪ੍ਰਕਾਸ਼ ਪੁਰਬ' } },
    { id: 'gurpurab-guru-ram-das', palette: 'gurpurab', icon: '✨', label: { en: 'Guru Ram Das Ji — Parkash Purab', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ — ਪ੍ਰਕਾਸ਼ ਪੁਰਬ' } },
    { id: 'gurpurab-guru-arjan', palette: 'gurpurab', icon: '✨', label: { en: 'Guru Arjan Dev Ji — Parkash Purab', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ — ਪ੍ਰਕਾਸ਼ ਪੁਰਬ' } },
    { id: 'gurpurab-guru-hargobind', palette: 'gurpurab', icon: '✨', label: { en: 'Guru Hargobind Sahib Ji — Parkash Purab', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ — ਪ੍ਰਕਾਸ਼ ਪੁਰਬ' } },
    { id: 'gurpurab-guru-har-rai', palette: 'gurpurab', icon: '✨', label: { en: 'Guru Har Rai Ji — Parkash Purab', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ — ਪ੍ਰਕਾਸ਼ ਪੁਰਬ' } },
    { id: 'gurpurab-guru-har-krishan', palette: 'gurpurab', icon: '✨', label: { en: 'Guru Har Krishan Ji — Parkash Purab', pa: 'ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ — ਪ੍ਰਕਾਸ਼ ਪੁਰਬ' } },
    { id: 'gurpurab-guru-tegh-bahadur', palette: 'gurpurab', icon: '✨', label: { en: 'Guru Tegh Bahadur Ji — Parkash Purab', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ — ਪ੍ਰਕਾਸ਼ ਪੁਰਬ' } },
    { id: 'gurpurab-guru-gobind-singh', palette: 'gurpurab', icon: '✨', label: { en: 'Guru Gobind Singh Ji — Parkash Purab', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ — ਪ੍ਰਕਾਸ਼ ਪੁਰਬ' } },
    { id: 'gurgaddi-guru-granth-sahib', palette: 'gurpurab', icon: '📖', label: { en: 'Guru Granth Sahib Ji — Gurgaddi Divas', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ — ਗੁਰਗੱਦੀ ਦਿਵਸ' } },
  ],
  quiz: {
    intro: { en: 'Quick, polished recall rounds help visitors reinforce names, places, and significance before moving on.', pa: 'ਛੋਟੇ ਨਿੱਖਰੇ ਯਾਦਗਾਰੀ ਰਾਊਂਡ ਨਾਮਾਂ, ਥਾਵਾਂ ਅਤੇ ਮਹੱਤਵ ਨੂੰ ਅੱਗੇ ਵਧਣ ਤੋਂ ਪਹਿਲਾਂ ਮਜ਼ਬੂਤ ਕਰਦੇ ਹਨ।' },
    levelMeta: {
      beginner: {
        title: { en: 'Beginner', pa: 'ਸ਼ੁਰੂਆਤੀ' },
        description: { en: 'Everyday basics — Gurus, Gurdwara, the Five Ks', pa: 'ਰੋਜ਼ਾਨਾ ਦੀਆਂ ਬੁਨਿਆਦੀ ਗੱਲਾਂ — ਗੁਰੂ ਸਾਹਿਬਾਨ, ਗੁਰਦੁਆਰਾ, ਪੰਜ ਕਕਾਰ' },
      },
      intermediate: {
        title: { en: 'Intermediate', pa: 'ਦਰਮਿਆਨਾ' },
        description: { en: 'Guru Granth Sahib, key events, the Sahibzade', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ, ਮੁੱਖ ਘਟਨਾਵਾਂ, ਸਾਹਿਬਜ਼ਾਦੇ' },
      },
      advanced: {
        title: { en: 'Advanced', pa: 'ਉੱਨਤ' },
        description: { en: 'Deeper history, philosophy, and lesser-known detail', pa: 'ਗਹਿਰਾ ਇਤਿਹਾਸ, ਦਰਸ਼ਨ ਅਤੇ ਘੱਟ-ਜਾਣੀਆਂ ਬਾਰੀਕੀਆਂ' },
      },
    },
    countOptions: [
      { count: 5, label: { en: 'Quick round', pa: 'ਛੋਟਾ ਰਾਊਂਡ' } },
      { count: 10, label: { en: 'Full round', pa: 'ਪੂਰਾ ਰਾਊਂਡ' } },
    ],
    levels: {
      beginner: [
        {
          prompt: { en: 'How many human Gurus are there in Sikhi?', pa: 'ਸਿੱਖੀ ਵਿੱਚ ਕਿੰਨੇ ਮਨੁੱਖੀ ਗੁਰੂ ਹੋਏ ਹਨ?' },
          options: [
            { en: 'Five', pa: 'ਪੰਜ' },
            { en: 'Ten', pa: 'ਦਸ' },
            { en: 'Twelve', pa: 'ਬਾਰਾਂ' },
            { en: 'Seven', pa: 'ਸੱਤ' },
          ],
          correctIndex: 1,
          insight: { en: 'There were ten human Gurus, from Guru Nanak Dev Ji to Guru Gobind Singh Ji, spanning 1469 to 1708.', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਤੋਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਤੱਕ, ਦਸ ਮਨੁੱਖੀ ਗੁਰੂ ਹੋਏ, ਜੋ 1469 ਤੋਂ 1708 ਤੱਕ ਫੈਲੇ ਹੋਏ ਹਨ।' },
        },
        {
          prompt: { en: 'Who founded Sikhi?', pa: 'ਸਿੱਖੀ ਦੀ ਸਥਾਪਨਾ ਕਿਸਨੇ ਕੀਤੀ?' },
          options: [
            { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
            { en: 'Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ' },
            { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' },
            { en: 'Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ' },
          ],
          correctIndex: 0,
          insight: { en: 'Guru Nanak Dev Ji founded Sikhi in Punjab in 1469, teaching belief in one formless God and the equality of all people.', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ 1469 ਵਿੱਚ ਪੰਜਾਬ ਵਿੱਚ ਸਿੱਖੀ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ, ਇੱਕ ਨਿਰਾਕਾਰ ਪਰਮਾਤਮਾ ਅਤੇ ਸਭ ਦੀ ਬਰਾਬਰੀ ਦੀ ਸਿੱਖਿਆ ਦਿੱਤੀ।' },
        },
        {
          prompt: { en: 'What is a Sikh place of worship called?', pa: 'ਸਿੱਖ ਪੂਜਾ ਸਥਾਨ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Mandir', pa: 'ਮੰਦਿਰ' },
            { en: 'Gurdwara', pa: 'ਗੁਰਦੁਆਰਾ' },
            { en: 'Masjid', pa: 'ਮਸਜਿਦ' },
            { en: 'Vihara', pa: 'ਵਿਹਾਰ' },
          ],
          correctIndex: 1,
          insight: { en: '"Gurdwara" means "doorway to the Guru" — any building housing Sri Guru Granth Sahib Ji with proper reverence can serve as one.', pa: '"ਗੁਰਦੁਆਰਾ" ਦਾ ਅਰਥ ਹੈ "ਗੁਰੂ ਦਾ ਦਰਵਾਜ਼ਾ" — ਜਿੱਥੇ ਵੀ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਸਤਿਕਾਰ ਸਹਿਤ ਪ੍ਰਕਾਸ਼ ਹੋਵੇ, ਉਹ ਗੁਰਦੁਆਰਾ ਬਣ ਸਕਦਾ ਹੈ।' },
        },
        {
          prompt: { en: 'What is the eternal Guru of the Sikhs called?', pa: 'ਸਿੱਖਾਂ ਦੇ ਸਦੀਵੀ ਗੁਰੂ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Dasam Granth', pa: 'ਦਸਮ ਗ੍ਰੰਥ' },
            { en: 'Guru Granth Sahib', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ' },
            { en: 'Japji Sahib', pa: 'ਜਪੁਜੀ ਸਾਹਿਬ' },
            { en: 'Rehat Maryada', pa: 'ਰਹਿਤ ਮਰਯਾਦਾ' },
          ],
          correctIndex: 1,
          insight: { en: 'Guru Gobind Singh Ji declared Sri Guru Granth Sahib Ji the eternal, living Guru of the Sikhs before his passing in 1708.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ 1708 ਵਿੱਚ ਆਪਣੇ ਜੋਤੀ ਜੋਤ ਸਮਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਐਲਾਨਿਆ।' },
        },
        {
          prompt: { en: 'Who founded the Khalsa?', pa: 'ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਕਿਸਨੇ ਕੀਤੀ?' },
          options: [
            { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
            { en: 'Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ' },
            { en: 'Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ' },
            { en: 'Guru Har Rai Ji', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ' },
          ],
          correctIndex: 2,
          insight: { en: 'Guru Gobind Singh Ji founded the Khalsa on Vaisakhi 1699 at Anandpur Sahib, initiating the Panj Pyare as its first members.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਵਿਸਾਖੀ 1699 ਨੂੰ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ, ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਇਸਦੇ ਪਹਿਲੇ ਮੈਂਬਰ ਵਜੋਂ ਦੀਖਿਆ ਦਿੱਤੀ।' },
        },
        {
          prompt: { en: 'What is the free community kitchen at a Gurdwara called?', pa: 'ਗੁਰਦੁਆਰੇ ਵਿੱਚ ਮੁਫ਼ਤ ਸਾਂਝੇ ਭੋਜਨ ਸਥਾਨ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Langar', pa: 'ਲੰਗਰ' },
            { en: 'Diwan', pa: 'ਦੀਵਾਨ' },
            { en: 'Sangat', pa: 'ਸੰਗਤ' },
            { en: 'Karah', pa: 'ਕੜਾਹ' },
          ],
          correctIndex: 0,
          insight: { en: 'Langar embodies the Sikh principle of equality — everyone sits together on the floor and eats the same free meal, regardless of background.', pa: 'ਲੰਗਰ ਸਿੱਖ ਬਰਾਬਰੀ ਦੇ ਸਿਧਾਂਤ ਨੂੰ ਦਰਸਾਉਂਦਾ ਹੈ — ਸਾਰੇ ਇਕੱਠੇ ਫ਼ਰਸ਼ ਤੇ ਬੈਠ ਕੇ, ਪਿਛੋਕੜ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ, ਇੱਕੋ ਜਿਹਾ ਮੁਫ਼ਤ ਭੋਜਨ ਖਾਂਦੇ ਹਨ।' },
        },
        {
          prompt: { en: 'Where was Guru Nanak Dev Ji born?', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ ਕਿੱਥੇ ਹੋਇਆ?' },
          options: [
            { en: 'Amritsar', pa: 'ਅੰਮ੍ਰਿਤਸਰ' },
            { en: 'Talwandi (Nankana Sahib)', pa: 'ਤਲਵੰਡੀ (ਨਨਕਾਣਾ ਸਾਹਿਬ)' },
            { en: 'Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ' },
            { en: 'Patna', pa: 'ਪਟਨਾ' },
          ],
          correctIndex: 1,
          insight: { en: 'Guru Nanak Dev Ji was born in Talwandi, now called Nankana Sahib, located in present-day Pakistan.', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ ਤਲਵੰਡੀ ਵਿੱਚ ਹੋਇਆ, ਜਿਸਨੂੰ ਹੁਣ ਨਨਕਾਣਾ ਸਾਹਿਬ ਕਿਹਾ ਜਾਂਦਾ ਹੈ, ਅੱਜ ਦੇ ਪਾਕਿਸਤਾਨ ਵਿੱਚ।' },
        },
        {
          prompt: { en: 'In which city is the Golden Temple (Harmandir Sahib) located?', pa: 'ਗੋਲਡਨ ਟੈਂਪਲ (ਹਰਿਮੰਦਰ ਸਾਹਿਬ) ਕਿਸ ਸ਼ਹਿਰ ਵਿੱਚ ਸਥਿਤ ਹੈ?' },
          options: [
            { en: 'Lahore', pa: 'ਲਾਹੌਰ' },
            { en: 'Delhi', pa: 'ਦਿੱਲੀ' },
            { en: 'Amritsar', pa: 'ਅੰਮ੍ਰਿਤਸਰ' },
            { en: 'Patna', pa: 'ਪਟਨਾ' },
          ],
          correctIndex: 2,
          insight: { en: 'Sri Harmandir Sahib sits in the middle of the Amrit Sarovar in Amritsar and has entrances on all four sides, welcoming people of every background.', pa: 'ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਅੰਮ੍ਰਿਤ ਸਰੋਵਰ ਦੇ ਵਿਚਕਾਰ ਸਥਿਤ ਹੈ ਅਤੇ ਇਸਦੇ ਚਾਰੇ ਪਾਸੇ ਦਰਵਾਜ਼ੇ ਹਨ, ਹਰ ਪਿਛੋਕੜ ਦੇ ਲੋਕਾਂ ਦਾ ਸਵਾਗਤ ਕਰਦੇ ਹੋਏ।' },
        },
        {
          prompt: { en: 'How many articles of faith are known as the Five Ks?', pa: 'ਪੰਜ ਕਕਾਰ ਵਜੋਂ ਜਾਣੀਆਂ ਜਾਂਦੀਆਂ ਕਿੰਨੀਆਂ ਨਿਸ਼ਾਨੀਆਂ ਹਨ?' },
          options: [
            { en: 'Three', pa: 'ਤਿੰਨ' },
            { en: 'Four', pa: 'ਚਾਰ' },
            { en: 'Five', pa: 'ਪੰਜ' },
            { en: 'Six', pa: 'ਛੇ' },
          ],
          correctIndex: 2,
          insight: { en: 'The Five Ks — Kesh, Kangha, Kara, Kachera, and Kirpan — were given by Guru Gobind Singh Ji to every initiated Khalsa Sikh on Vaisakhi 1699.', pa: 'ਪੰਜ ਕਕਾਰ — ਕੇਸ, ਕੰਘਾ, ਕੜਾ, ਕਛਹਿਰਾ ਅਤੇ ਕਿਰਪਾਨ — ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਵਿਸਾਖੀ 1699 ਨੂੰ ਹਰ ਅੰਮ੍ਰਿਤਧਾਰੀ ਖ਼ਾਲਸਾ ਸਿੱਖ ਨੂੰ ਦਿੱਤੇ ਗਏ।' },
        },
        {
          prompt: { en: 'What is the Punjabi word for the Sikh turban?', pa: 'ਸਿੱਖ ਪੱਗ ਲਈ ਪੰਜਾਬੀ ਸ਼ਬਦ ਕੀ ਹੈ?' },
          options: [
            { en: 'Kara', pa: 'ਕੜਾ' },
            { en: 'Dastar', pa: 'ਦਸਤਾਰ' },
            { en: 'Kirpan', pa: 'ਕਿਰਪਾਨ' },
            { en: 'Kachera', pa: 'ਕਛਹਿਰਾ' },
          ],
          correctIndex: 1,
          insight: { en: 'The dastar is worn to cover and honor the uncut hair (kesh), and is treated with the same respect as a crown.', pa: 'ਦਸਤਾਰ ਕੇਸਾਂ ਨੂੰ ਢੱਕਣ ਅਤੇ ਸਤਿਕਾਰ ਦੇਣ ਲਈ ਪਹਿਨੀ ਜਾਂਦੀ ਹੈ, ਅਤੇ ਇਸਨੂੰ ਤਾਜ ਜਿੰਨਾ ਹੀ ਸਤਿਕਾਰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।' },
        },
        {
          prompt: { en: 'How many Panj Pyare (Five Beloved Ones) were there?', pa: 'ਕਿੰਨੇ ਪੰਜ ਪਿਆਰੇ ਸਨ?' },
          options: [
            { en: 'Three', pa: 'ਤਿੰਨ' },
            { en: 'Four', pa: 'ਚਾਰ' },
            { en: 'Five', pa: 'ਪੰਜ' },
            { en: 'Nine', pa: 'ਨੌਂ' },
          ],
          correctIndex: 2,
          insight: { en: 'The Panj Pyare were five men from five different castes and regions of India who were the first to be initiated into the Khalsa.', pa: 'ਪੰਜ ਪਿਆਰੇ ਭਾਰਤ ਦੀਆਂ ਪੰਜ ਵੱਖ-ਵੱਖ ਜਾਤਾਂ ਅਤੇ ਖੇਤਰਾਂ ਤੋਂ ਪੰਜ ਵਿਅਕਤੀ ਸਨ ਜੋ ਖ਼ਾਲਸੇ ਵਿੱਚ ਦੀਖਿਆ ਲੈਣ ਵਾਲੇ ਪਹਿਲੇ ਸਨ।' },
        },
        {
          prompt: { en: 'What iron bracelet do Sikhs wear as one of the Five Ks?', pa: 'ਪੰਜ ਕਕਾਰਾਂ ਵਿੱਚੋਂ ਸਿੱਖ ਕਿਹੜਾ ਲੋਹੇ ਦਾ ਕੜਾ ਪਹਿਨਦੇ ਹਨ?' },
          options: [
            { en: 'Kara', pa: 'ਕੜਾ' },
            { en: 'Kanga', pa: 'ਕੰਘਾ' },
            { en: 'Kesh', pa: 'ਕੇਸ' },
            { en: 'Kachera', pa: 'ਕਛਹਿਰਾ' },
          ],
          correctIndex: 0,
          insight: { en: 'The kara is an iron bracelet symbolizing restraint from wrongdoing and an unbroken bond with the Guru.', pa: 'ਕੜਾ ਇੱਕ ਲੋਹੇ ਦਾ ਬਰੇਸਲੈਟ ਹੈ ਜੋ ਗ਼ਲਤ ਕੰਮਾਂ ਤੋਂ ਸੰਜਮ ਅਤੇ ਗੁਰੂ ਨਾਲ ਅਟੁੱਟ ਸੰਬੰਧ ਦਾ ਪ੍ਰਤੀਕ ਹੈ।' },
        },
        {
          prompt: { en: "What does the word 'Sikh' mean?", pa: "'ਸਿੱਖ' ਸ਼ਬਦ ਦਾ ਕੀ ਅਰਥ ਹੈ?" },
          options: [
            { en: 'Warrior', pa: 'ਯੋਧਾ' },
            { en: 'Learner or disciple', pa: 'ਸਿਖਿਆਰਥੀ ਜਾਂ ਚੇਲਾ' },
            { en: 'Priest', pa: 'ਪੁਜਾਰੀ' },
            { en: 'Traveller', pa: 'ਯਾਤਰੀ' },
          ],
          correctIndex: 1,
          insight: { en: '"Sikh" comes from a word meaning "learner" or "disciple" — someone who follows the teachings of the Guru.', pa: "'ਸਿੱਖ' ਸ਼ਬਦ ਦਾ ਮੂਲ ਅਰਥ ਹੈ \"ਸਿਖਿਆਰਥੀ\" ਜਾਂ \"ਚੇਲਾ\" — ਉਹ ਜੋ ਗੁਰੂ ਦੀਆਂ ਸਿੱਖਿਆਵਾਂ ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ।" },
        },
        {
          prompt: { en: 'What is the main hall of a Gurdwara called?', pa: 'ਗੁਰਦੁਆਰੇ ਦੇ ਮੁੱਖ ਹਾਲ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Diwan Hall', pa: 'ਦੀਵਾਨ ਹਾਲ' },
            { en: 'Sanctum', pa: 'ਸੈਂਕਟਮ' },
            { en: 'Chapel', pa: 'ਚੈਪਲ' },
            { en: 'Nave', pa: 'ਨੇਵ' },
          ],
          correctIndex: 0,
          insight: { en: 'The Diwan Hall is where Sri Guru Granth Sahib Ji is enthroned and the sangat gathers for kirtan and katha, sitting together as equals.', pa: 'ਦੀਵਾਨ ਹਾਲ ਉਹ ਸਥਾਨ ਹੈ ਜਿੱਥੇ ਸ੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦਾ ਪ੍ਰਕਾਸ਼ ਹੁੰਦਾ ਹੈ ਅਤੇ ਸੰਗਤ ਕੀਰਤਨ ਤੇ ਕਥਾ ਲਈ ਬਰਾਬਰੀ ਨਾਲ ਇਕੱਠੀ ਹੁੰਦੀ ਹੈ।' },
        },
        {
          prompt: { en: 'Which Guru first compiled the Adi Granth?', pa: 'ਆਦਿ ਗ੍ਰੰਥ ਨੂੰ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਕਿਹੜੇ ਗੁਰੂ ਨੇ ਤਿਆਰ ਕੀਤਾ?' },
          options: [
            { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
            { en: 'Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ' },
            { en: 'Guru Har Gobind Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ' },
            { en: 'Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ' },
          ],
          correctIndex: 1,
          insight: { en: 'Guru Arjan Dev Ji, the fifth Guru, compiled the Adi Granth in 1604 — the first version of what would become Guru Granth Sahib Ji.', pa: 'ਪੰਜਵੇਂ ਗੁਰੂ, ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ 1604 ਵਿੱਚ ਆਦਿ ਗ੍ਰੰਥ ਤਿਆਰ ਕੀਤਾ — ਜੋ ਬਾਅਦ ਵਿੱਚ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਬਣਿਆ, ਦਾ ਪਹਿਲਾ ਸੰਸਕਰਣ।' },
        },
        {
          prompt: { en: "What does 'Waheguru' refer to?", pa: "'ਵਾਹਿਗੁਰੂ' ਕਿਸ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਦਾ ਹੈ?" },
          options: [
            { en: 'A festival', pa: 'ਇੱਕ ਤਿਉਹਾਰ' },
            { en: 'God / the Wondrous One', pa: 'ਪਰਮਾਤਮਾ / ਅਦਭੁਤ ਪ੍ਰਭੂ' },
            { en: 'A Gurdwara official', pa: 'ਗੁਰਦੁਆਰੇ ਦਾ ਅਧਿਕਾਰੀ' },
            { en: 'A prayer book', pa: 'ਇੱਕ ਪ੍ਰਾਰਥਨਾ ਪੁਸਤਕ' },
          ],
          correctIndex: 1,
          insight: { en: '"Waheguru" is often translated as "Wondrous Enlightener" — a name for God used in Sikh prayer and simran.', pa: "'ਵਾਹਿਗੁਰੂ' ਦਾ ਅਰਥ ਅਕਸਰ \"ਅਦਭੁਤ ਪ੍ਰਕਾਸ਼ਕ\" ਕੀਤਾ ਜਾਂਦਾ ਹੈ — ਸਿੱਖ ਸਿਮਰਨ ਅਤੇ ਅਰਦਾਸ ਵਿੱਚ ਵਰਤਿਆ ਪਰਮਾਤਮਾ ਦਾ ਨਾਮ।" },
        },
        {
          prompt: { en: 'What is the small wooden comb among the Five Ks called?', pa: 'ਪੰਜ ਕਕਾਰਾਂ ਵਿੱਚੋਂ ਛੋਟੀ ਲੱਕੜ ਦੀ ਕੰਘੀ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Kanga', pa: 'ਕੰਘਾ' },
            { en: 'Kara', pa: 'ਕੜਾ' },
            { en: 'Kesh', pa: 'ਕੇਸ' },
            { en: 'Kirpan', pa: 'ਕਿਰਪਾਨ' },
          ],
          correctIndex: 0,
          insight: { en: 'The kanga symbolizes cleanliness and discipline, and is used to keep the kesh neat and tidy.', pa: 'ਕੰਘਾ ਸਫ਼ਾਈ ਅਤੇ ਅਨੁਸ਼ਾਸਨ ਦਾ ਪ੍ਰਤੀਕ ਹੈ, ਅਤੇ ਕੇਸਾਂ ਨੂੰ ਸੰਵਾਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।' },
        },
      ],
      intermediate: [
        {
          prompt: { en: 'Which Guru built Harmandir Sahib (the Golden Temple)?', pa: 'ਹਰਿਮੰਦਰ ਸਾਹਿਬ (ਗੋਲਡਨ ਟੈਂਪਲ) ਕਿਹੜੇ ਗੁਰੂ ਨੇ ਬਣਾਇਆ?' },
          options: [
            { en: 'Guru Ram Das Ji', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ' },
            { en: 'Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ' },
            { en: 'Guru Har Gobind Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ' },
            { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' },
          ],
          correctIndex: 1,
          insight: { en: "Guru Ram Das Ji founded the city and excavated the sacred pool; his son Guru Arjan Dev Ji then built Sri Harmandir Sahib and installed the Adi Granth within it.", pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਨੇ ਸ਼ਹਿਰ ਵਸਾਇਆ ਅਤੇ ਪਵਿੱਤਰ ਸਰੋਵਰ ਪੁੱਟਿਆ; ਉਨ੍ਹਾਂ ਦੇ ਪੁੱਤਰ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਨੇ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਬਣਾਇਆ।' },
        },
        {
          prompt: { en: 'Which Guru compiled the Adi Granth and was later martyred?', pa: 'ਆਦਿ ਗ੍ਰੰਥ ਤਿਆਰ ਕਰਨ ਵਾਲੇ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਸ਼ਹੀਦ ਹੋਏ ਗੁਰੂ ਕੌਣ ਸਨ?' },
          options: [
            { en: 'Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ' },
            { en: 'Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ' },
            { en: 'Guru Har Rai Ji', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ' },
            { en: 'Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ' },
          ],
          correctIndex: 1,
          insight: { en: 'Guru Arjan Dev Ji became the first Sikh martyr, executed by Mughal Emperor Jahangir in 1606.', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਪਹਿਲੇ ਸਿੱਖ ਸ਼ਹੀਦ ਬਣੇ, 1606 ਵਿੱਚ ਬਾਦਸ਼ਾਹ ਜਹਾਂਗੀਰ ਦੁਆਰਾ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' },
        },
        {
          prompt: { en: 'Which Guru was martyred in Delhi defending religious freedom for others?', pa: 'ਦੂਜਿਆਂ ਦੀ ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਦੀ ਰੱਖਿਆ ਕਰਦੇ ਹੋਏ ਦਿੱਲੀ ਵਿੱਚ ਕਿਹੜੇ ਗੁਰੂ ਸ਼ਹੀਦ ਹੋਏ?' },
          options: [
            { en: 'Guru Har Krishan Ji', pa: 'ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ' },
            { en: 'Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ' },
            { en: 'Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ' },
            { en: 'Guru Har Gobind Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ' },
          ],
          correctIndex: 1,
          insight: { en: 'Guru Tegh Bahadur Ji, known as "Hind di Chadar," sacrificed his life in 1675 defending the religious freedom of Kashmiri Pandits.', pa: '"ਹਿੰਦ ਦੀ ਚਾਦਰ" ਵਜੋਂ ਜਾਣੇ ਜਾਂਦੇ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਨੇ 1675 ਵਿੱਚ ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਦੀ ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਦੀ ਰੱਖਿਆ ਲਈ ਆਪਣੀ ਜਾਨ ਵਾਰੀ।' },
        },
        {
          prompt: { en: 'In what year was the Khalsa founded at Anandpur Sahib?', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿਖੇ ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਕਿਸ ਸਾਲ ਹੋਈ?' },
          options: [
            { en: '1604', pa: '1604' },
            { en: '1699', pa: '1699' },
            { en: '1708', pa: '1708' },
            { en: '1666', pa: '1666' },
          ],
          correctIndex: 1,
          insight: { en: 'The Khalsa was founded on Vaisakhi 1699, when Guru Gobind Singh Ji called for volunteers and initiated the Panj Pyare.', pa: 'ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਵਿਸਾਖੀ 1699 ਨੂੰ ਹੋਈ, ਜਦੋਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਸੇਵਾਦਾਰਾਂ ਦੀ ਮੰਗ ਕੀਤੀ ਅਤੇ ਪੰਜ ਪਿਆਰਿਆਂ ਨੂੰ ਦੀਖਿਆ ਦਿੱਤੀ।' },
        },
        {
          prompt: { en: 'How many sons (Sahibzade) did Guru Gobind Singh Ji have?', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਕਿੰਨੇ ਪੁੱਤਰ (ਸਾਹਿਬਜ਼ਾਦੇ) ਸਨ?' },
          options: [
            { en: 'Two', pa: 'ਦੋ' },
            { en: 'Three', pa: 'ਤਿੰਨ' },
            { en: 'Four', pa: 'ਚਾਰ' },
            { en: 'Five', pa: 'ਪੰਜ' },
          ],
          correctIndex: 2,
          insight: { en: 'Guru Gobind Singh Ji had four sons — Baba Ajit Singh Ji, Baba Jujhar Singh Ji, Baba Zorawar Singh Ji, and Baba Fateh Singh Ji — all of whom gave their lives for the Panth.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਚਾਰ ਪੁੱਤਰ ਸਨ — ਬਾਬਾ ਅਜੀਤ ਸਿੰਘ ਜੀ, ਬਾਬਾ ਜੁਝਾਰ ਸਿੰਘ ਜੀ, ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ ਅਤੇ ਬਾਬਾ ਫ਼ਤਿਹ ਸਿੰਘ ਜੀ — ਸਾਰਿਆਂ ਨੇ ਪੰਥ ਲਈ ਆਪਣੀ ਜਾਨ ਦਿੱਤੀ।' },
        },
        {
          prompt: { en: 'How many Angs (pages) does the Guru Granth Sahib have in its standard printed form?', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ ਮਿਆਰੀ ਛਾਪੇ ਸੰਸਕਰਣ ਵਿੱਚ ਕਿੰਨੇ ਅੰਗ ਹਨ?' },
          options: [
            { en: '1000', pa: '1000' },
            { en: '1430', pa: '1430' },
            { en: '1500', pa: '1500' },
            { en: '1200', pa: '1200' },
          ],
          correctIndex: 1,
          insight: { en: 'The standard printed Guru Granth Sahib Ji has 1430 Angs, a format standardized to keep the sacred text consistent across every copy.', pa: 'ਮਿਆਰੀ ਛਾਪੇ ਸੰਸਕਰਣ ਵਿੱਚ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੇ 1430 ਅੰਗ ਹਨ, ਇੱਕ ਫਾਰਮੈਟ ਜੋ ਹਰ ਕਾਪੀ ਵਿੱਚ ਪਵਿੱਤਰ ਪਾਠ ਨੂੰ ਇੱਕਸਾਰ ਰੱਖਣ ਲਈ ਮਿਆਰੀ ਬਣਾਇਆ ਗਿਆ।' },
        },
        {
          prompt: { en: 'How many Ragas (musical measures) are used in the Guru Granth Sahib?', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਕਿੰਨੇ ਰਾਗ ਵਰਤੇ ਗਏ ਹਨ?' },
          options: [
            { en: '21', pa: '21' },
            { en: '25', pa: '25' },
            { en: '31', pa: '31' },
            { en: '40', pa: '40' },
          ],
          correctIndex: 2,
          insight: { en: 'Gurbani in the Guru Granth Sahib Ji is organized into 31 main Raags, each carrying its own mood and musical structure.', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਵਿੱਚ ਗੁਰਬਾਣੀ ਨੂੰ 31 ਮੁੱਖ ਰਾਗਾਂ ਵਿੱਚ ਸੰਗਠਿਤ ਕੀਤਾ ਗਿਆ ਹੈ, ਹਰੇਕ ਦਾ ਆਪਣਾ ਭਾਵ ਅਤੇ ਸੰਗੀਤਕ ਢਾਂਚਾ ਹੈ।' },
        },
        {
          prompt: { en: 'Who wrote Japji Sahib?', pa: 'ਜਪੁਜੀ ਸਾਹਿਬ ਕਿਸਨੇ ਲਿਖਿਆ?' },
          options: [
            { en: 'Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ' },
            { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
            { en: 'Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ' },
            { en: 'Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ' },
          ],
          correctIndex: 1,
          insight: { en: 'Japji Sahib, composed by Guru Nanak Dev Ji, opens Guru Granth Sahib Ji and is recited by Sikhs every morning.', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੁਆਰਾ ਰਚੀ ਜਪੁਜੀ ਸਾਹਿਬ, ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਦੀ ਸ਼ੁਰੂਆਤ ਕਰਦੀ ਹੈ ਅਤੇ ਸਿੱਖਾਂ ਦੁਆਰਾ ਹਰ ਸਵੇਰ ਪੜ੍ਹੀ ਜਾਂਦੀ ਹੈ।' },
        },
        {
          prompt: { en: "What is the name of Guru Gobind Singh Ji's mother?", pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਮਾਤਾ ਦਾ ਨਾਮ ਕੀ ਸੀ?' },
          options: [
            { en: 'Mata Sundri Ji', pa: 'ਮਾਤਾ ਸੁੰਦਰੀ ਜੀ' },
            { en: 'Mata Gujri Ji', pa: 'ਮਾਤਾ ਗੁਜਰੀ ਜੀ' },
            { en: 'Mata Khivi Ji', pa: 'ਮਾਤਾ ਖੀਵੀ ਜੀ' },
            { en: 'Mata Sahib Kaur Ji', pa: 'ਮਾਤਾ ਸਾਹਿਬ ਕੌਰ ਜੀ' },
          ],
          correctIndex: 1,
          insight: { en: 'Mata Gujri Ji was the wife of Guru Tegh Bahadur Ji and mother of Guru Gobind Singh Ji; she was later martyred at Sirhind alongside her two youngest grandsons.', pa: 'ਮਾਤਾ ਗੁਜਰੀ ਜੀ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਪਤਨੀ ਅਤੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਮਾਤਾ ਸਨ; ਉਹ ਬਾਅਦ ਵਿੱਚ ਸਰਹਿੰਦ ਵਿਖੇ ਆਪਣੇ ਦੋ ਛੋਟੇ ਪੋਤਿਆਂ ਨਾਲ ਸ਼ਹੀਦ ਹੋਏ।' },
        },
        {
          prompt: { en: 'The two youngest Sahibzade were bricked alive at which town?', pa: 'ਦੋ ਸਭ ਤੋਂ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਨੂੰ ਕਿਸ ਸ਼ਹਿਰ ਵਿੱਚ ਨੀਹਾਂ ਵਿੱਚ ਚਿਣਿਆ ਗਿਆ?' },
          options: [
            { en: 'Chamkaur', pa: 'ਚਮਕੌਰ' },
            { en: 'Sirhind', pa: 'ਸਰਹਿੰਦ' },
            { en: 'Anandpur', pa: 'ਅਨੰਦਪੁਰ' },
            { en: 'Muktsar', pa: 'ਮੁਕਤਸਰ' },
          ],
          correctIndex: 1,
          insight: { en: 'Sikh tradition holds that Baba Zorawar Singh Ji and Baba Fateh Singh Ji were martyred at Sirhind in December 1705 for refusing to renounce their faith.', pa: 'ਸਿੱਖ ਪਰੰਪਰਾ ਅਨੁਸਾਰ, ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ ਅਤੇ ਬਾਬਾ ਫ਼ਤਿਹ ਸਿੰਘ ਜੀ ਦਸੰਬਰ 1705 ਵਿੱਚ ਸਰਹਿੰਦ ਵਿਖੇ ਆਪਣਾ ਧਰਮ ਛੱਡਣ ਤੋਂ ਇਨਕਾਰ ਕਰਨ ਤੇ ਸ਼ਹੀਦ ਹੋਏ।' },
        },
        {
          prompt: { en: 'What is the Sikh initiation ceremony called?', pa: 'ਸਿੱਖ ਦੀਖਿਆ ਸਮਾਰੋਹ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Anand Karaj', pa: 'ਅਨੰਦ ਕਾਰਜ' },
            { en: 'Amrit Sanchar', pa: 'ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ' },
            { en: 'Akhand Path', pa: 'ਅਖੰਡ ਪਾਠ' },
            { en: 'Ardas', pa: 'ਅਰਦਾਸ' },
          ],
          correctIndex: 1,
          insight: { en: 'Amrit Sanchar (also called Khande-di-Pahul) is the ceremony where a Sikh formally joins the Khalsa by drinking Amrit prepared with the double-edged khanda.', pa: 'ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ (ਖੰਡੇ ਦੀ ਪਾਹੁਲ) ਉਹ ਸਮਾਰੋਹ ਹੈ ਜਿੱਥੇ ਸਿੱਖ ਦੋ-ਧਾਰੀ ਖੰਡੇ ਨਾਲ ਤਿਆਰ ਅੰਮ੍ਰਿਤ ਛਕ ਕੇ ਰਸਮੀ ਤੌਰ ਤੇ ਖ਼ਾਲਸੇ ਵਿੱਚ ਸ਼ਾਮਲ ਹੁੰਦਾ ਹੈ।' },
        },
        {
          prompt: { en: "Guru Nanak Dev Ji's long missionary journeys are known as?", pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀਆਂ ਲੰਬੀਆਂ ਧਰਮ-ਪ੍ਰਚਾਰ ਯਾਤਰਾਵਾਂ ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Yatras', pa: 'ਯਾਤਰਾ' },
            { en: 'Udasis', pa: 'ਉਦਾਸੀਆਂ' },
            { en: 'Melas', pa: 'ਮੇਲੇ' },
            { en: 'Sangats', pa: 'ਸੰਗਤਾਂ' },
          ],
          correctIndex: 1,
          insight: { en: 'Guru Nanak Dev Ji undertook four major Udasis, traveling thousands of miles across South Asia and beyond to share his teachings.', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਚਾਰ ਵੱਡੀਆਂ ਉਦਾਸੀਆਂ ਕੀਤੀਆਂ, ਆਪਣੀਆਂ ਸਿੱਖਿਆਵਾਂ ਸਾਂਝੀਆਂ ਕਰਨ ਲਈ ਹਜ਼ਾਰਾਂ ਮੀਲ ਦੀ ਯਾਤਰਾ ਕੀਤੀ।' },
        },
        {
          prompt: { en: 'Which Guru is remembered for his knowledge of herbal medicine and a healing garden?', pa: 'ਜੜੀ-ਬੂਟੀਆਂ ਦੇ ਗਿਆਨ ਅਤੇ ਇੱਕ ਇਲਾਜੀ ਬਾਗ਼ ਲਈ ਕਿਹੜਾ ਗੁਰੂ ਯਾਦ ਕੀਤਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Guru Har Rai Ji', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ' },
            { en: 'Guru Har Krishan Ji', pa: 'ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ' },
            { en: 'Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ' },
            { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' },
          ],
          correctIndex: 0,
          insight: { en: 'Guru Har Rai Ji maintained a herbal garden and dispensary at Kiratpur Sahib, using his knowledge of medicine to heal those in need.', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ ਨੇ ਕੀਰਤਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਇੱਕ ਜੜੀ-ਬੂਟੀਆਂ ਦਾ ਬਾਗ਼ ਅਤੇ ਦਵਾਖ਼ਾਨਾ ਰੱਖਿਆ, ਲੋੜਵੰਦਾਂ ਨੂੰ ਠੀਕ ਕਰਨ ਲਈ ਆਪਣੇ ਦਵਾਈ ਦੇ ਗਿਆਨ ਦੀ ਵਰਤੋਂ ਕੀਤੀ।' },
        },
        {
          prompt: { en: 'Which Guru, though a young child, is remembered for healing the sick in Delhi?', pa: 'ਛੋਟੀ ਉਮਰ ਦੇ ਬਾਵਜੂਦ, ਦਿੱਲੀ ਵਿੱਚ ਬਿਮਾਰਾਂ ਨੂੰ ਠੀਕ ਕਰਨ ਲਈ ਕਿਹੜਾ ਗੁਰੂ ਯਾਦ ਕੀਤਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Guru Har Krishan Ji', pa: 'ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ' },
            { en: 'Guru Har Gobind Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ' },
            { en: 'Guru Har Rai Ji', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ' },
            { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' },
          ],
          correctIndex: 0,
          insight: { en: 'Guru Har Krishan Ji became Guru at age five and served the sick during a smallpox epidemic in Delhi, before succumbing to the illness himself at age eight.', pa: 'ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ ਪੰਜ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰੂ ਬਣੇ ਅਤੇ ਦਿੱਲੀ ਵਿੱਚ ਚੇਚਕ ਦੀ ਮਹਾਂਮਾਰੀ ਦੌਰਾਨ ਬਿਮਾਰਾਂ ਦੀ ਸੇਵਾ ਕੀਤੀ, ਅੱਠ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਖ਼ੁਦ ਇਸ ਬਿਮਾਰੀ ਨਾਲ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' },
        },
        {
          prompt: { en: 'Who built the Akal Takht in Amritsar?', pa: 'ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਅਕਾਲ ਤਖ਼ਤ ਕਿਸਨੇ ਬਣਾਇਆ?' },
          options: [
            { en: 'Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ' },
            { en: 'Guru Har Gobind Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ' },
            { en: 'Guru Ram Das Ji', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ' },
            { en: 'Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ' },
          ],
          correctIndex: 1,
          insight: { en: 'Guru Har Gobind Ji built the Akal Takht in 1606, introducing the principle of Miri-Piri — temporal and spiritual authority held together.', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ ਨੇ 1606 ਵਿੱਚ ਅਕਾਲ ਤਖ਼ਤ ਬਣਾਇਆ, ਮੀਰੀ-ਪੀਰੀ ਦਾ ਸਿਧਾਂਤ ਪੇਸ਼ ਕੀਤਾ — ਸੰਸਾਰਕ ਅਤੇ ਅਧਿਆਤਮਿਕ ਅਧਿਕਾਰ ਇਕੱਠੇ।' },
        },
        {
          prompt: { en: 'Which Guru founded the city of Amritsar?', pa: 'ਅੰਮ੍ਰਿਤਸਰ ਸ਼ਹਿਰ ਦੀ ਸਥਾਪਨਾ ਕਿਹੜੇ ਗੁਰੂ ਨੇ ਕੀਤੀ?' },
          options: [
            { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' },
            { en: 'Guru Ram Das Ji', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ' },
            { en: 'Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ' },
            { en: 'Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ' },
          ],
          correctIndex: 1,
          insight: { en: 'Guru Ram Das Ji founded Amritsar (originally Ramdaspur) and excavated its sacred pool, around which Sri Harmandir Sahib was later built.', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਨੇ ਅੰਮ੍ਰਿਤਸਰ (ਮੂਲ ਰੂਪ ਵਿੱਚ ਰਾਮਦਾਸਪੁਰ) ਦੀ ਸਥਾਪਨਾ ਕੀਤੀ ਅਤੇ ਇਸਦਾ ਪਵਿੱਤਰ ਸਰੋਵਰ ਪੁੱਟਿਆ।' },
        },
        {
          prompt: { en: 'What system did Guru Amar Das Ji establish to organise the Sikh community into regions?', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਨੇ ਸਿੱਖ ਭਾਈਚਾਰੇ ਨੂੰ ਖੇਤਰਾਂ ਵਿੱਚ ਸੰਗਠਿਤ ਕਰਨ ਲਈ ਕਿਹੜੀ ਪ੍ਰਣਾਲੀ ਸਥਾਪਿਤ ਕੀਤੀ?' },
          options: [
            { en: 'Manji system', pa: 'ਮੰਜੀ ਪ੍ਰਣਾਲੀ' },
            { en: 'Panchayat system', pa: 'ਪੰਚਾਇਤ ਪ੍ਰਣਾਲੀ' },
            { en: 'Sangat Marg', pa: 'ਸੰਗਤ ਮਾਰਗ' },
            { en: 'Diwan Circuit', pa: 'ਦੀਵਾਨ ਚੱਕਰ' },
          ],
          correctIndex: 0,
          insight: { en: 'Guru Amar Das Ji organized the growing Sikh community into 22 preaching districts called manjis, each led by a trusted appointee.', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਨੇ ਵਧ ਰਹੀ ਸਿੱਖ ਸੰਗਤ ਨੂੰ 22 ਮੰਜੀਆਂ ਨਾਮਕ ਪ੍ਰਚਾਰ ਖੇਤਰਾਂ ਵਿੱਚ ਸੰਗਠਿਤ ਕੀਤਾ, ਹਰੇਕ ਦੀ ਅਗਵਾਈ ਇੱਕ ਭਰੋਸੇਯੋਗ ਨਿਯੁਕਤ ਵਿਅਕਤੀ ਕਰਦਾ ਸੀ।' },
        },
      ],
      advanced: [
        {
          prompt: { en: 'Which Guru introduced the concept of Miri-Piri, wearing two swords for temporal and spiritual authority?', pa: 'ਮੀਰੀ-ਪੀਰੀ ਪੇਸ਼ ਕਰਦੇ ਹੋਏ, ਸੰਸਾਰਕ ਅਤੇ ਅਧਿਆਤਮਿਕ ਅਧਿਕਾਰ ਲਈ ਦੋ ਤਲਵਾਰਾਂ ਕਿਹੜੇ ਗੁਰੂ ਨੇ ਪਹਿਨੀਆਂ?' },
          options: [
            { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' },
            { en: 'Guru Har Gobind Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ' },
            { en: 'Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ' },
            { en: 'Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ' },
          ],
          correctIndex: 1,
          insight: { en: "Guru Har Gobind Ji wore two swords — Miri and Piri — after his father's martyrdom, declaring that the Sikh Panth would hold both worldly and spiritual authority.", pa: 'ਆਪਣੇ ਪਿਤਾ ਦੀ ਸ਼ਹੀਦੀ ਤੋਂ ਬਾਅਦ, ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ ਨੇ ਮੀਰੀ ਅਤੇ ਪੀਰੀ, ਦੋ ਤਲਵਾਰਾਂ ਪਹਿਨੀਆਂ, ਐਲਾਨ ਕੀਤਾ ਕਿ ਸਿੱਖ ਪੰਥ ਸੰਸਾਰਕ ਅਤੇ ਅਧਿਆਤਮਿਕ ਦੋਵੇਂ ਅਧਿਕਾਰ ਰੱਖੇਗਾ।' },
        },
        {
          prompt: { en: "What was Guru Gobind Singh Ji's given name before the Khalsa was founded?", pa: 'ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਤੋਂ ਪਹਿਲਾਂ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਦਿੱਤਾ ਗਿਆ ਨਾਮ ਕੀ ਸੀ?' },
          options: [
            { en: 'Gobind Rai', pa: 'ਗੋਬਿੰਦ ਰਾਏ' },
            { en: 'Gobind Chand', pa: 'ਗੋਬਿੰਦ ਚੰਦ' },
            { en: 'Har Gobind', pa: 'ਹਰਿਗੋਬਿੰਦ' },
            { en: 'Tegh Rai', pa: 'ਤੇਗ਼ ਰਾਏ' },
          ],
          correctIndex: 0,
          insight: { en: 'Guru Gobind Singh Ji was born Gobind Rai in Patna in 1666; he took the name Gobind Singh after founding the Khalsa in 1699.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ 1666 ਵਿੱਚ ਪਟਨਾ ਵਿੱਚ ਗੋਬਿੰਦ ਰਾਏ ਵਜੋਂ ਹੋਇਆ; ਉਨ੍ਹਾਂ ਨੇ 1699 ਵਿੱਚ ਖ਼ਾਲਸੇ ਦੀ ਸਥਾਪਨਾ ਤੋਂ ਬਾਅਦ ਗੋਬਿੰਦ ਸਿੰਘ ਨਾਮ ਲਿਆ।' },
        },
        {
          prompt: { en: 'Who is traditionally recognised as the first of the Panj Pyare?', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਪਹਿਲੇ ਵਜੋਂ ਪਰੰਪਰਾਗਤ ਤੌਰ ਤੇ ਕੌਣ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਹਨ?' },
          options: [
            { en: 'Bhai Daya Singh', pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ' },
            { en: 'Bhai Dharam Singh', pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ' },
            { en: 'Bhai Himmat Singh', pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ' },
            { en: 'Bhai Sahib Singh', pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ' },
          ],
          correctIndex: 0,
          insight: { en: 'Bhai Daya Singh Ji, a Khatri merchant from Lahore, was the first to step forward when Guru Gobind Singh Ji called for volunteers on Vaisakhi 1699.', pa: 'ਲਾਹੌਰ ਦੇ ਇੱਕ ਖੱਤਰੀ ਵਪਾਰੀ, ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ, ਵਿਸਾਖੀ 1699 ਨੂੰ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਪੁਕਾਰ ਤੇ ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਅੱਗੇ ਆਏ।' },
        },
        {
          prompt: { en: 'The Zafarnama, a letter of moral defiance, was written by Guru Gobind Singh Ji to whom?', pa: 'ਜ਼ਫ਼ਰਨਾਮਾ, ਨੈਤਿਕ ਦ੍ਰਿੜਤਾ ਦਾ ਪੱਤਰ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਕਿਸਨੂੰ ਲਿਖਿਆ?' },
          options: [
            { en: 'Emperor Akbar', pa: 'ਬਾਦਸ਼ਾਹ ਅਕਬਰ' },
            { en: 'Emperor Aurangzeb', pa: 'ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ' },
            { en: 'Emperor Shah Jahan', pa: 'ਬਾਦਸ਼ਾਹ ਸ਼ਾਹਜਹਾਂ' },
            { en: 'Emperor Jahangir', pa: 'ਬਾਦਸ਼ਾਹ ਜਹਾਂਗੀਰ' },
          ],
          correctIndex: 1,
          insight: { en: 'The Zafarnama ("Letter of Victory") was a Persian-language letter Guru Gobind Singh Ji sent to Emperor Aurangzeb, asserting moral victory despite worldly loss.', pa: 'ਜ਼ਫ਼ਰਨਾਮਾ ("ਜਿੱਤ ਦਾ ਪੱਤਰ") ਇੱਕ ਫ਼ਾਰਸੀ ਭਾਸ਼ਾ ਦਾ ਪੱਤਰ ਸੀ ਜੋ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਭੇਜਿਆ, ਸੰਸਾਰਕ ਹਾਰ ਦੇ ਬਾਵਜੂਦ ਨੈਤਿਕ ਜਿੱਤ ਦਾ ਦਾਅਵਾ ਕਰਦੇ ਹੋਏ।' },
        },
        {
          prompt: { en: "Who was Guru Nanak Dev Ji's Muslim companion and musician on his travels?", pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੇ ਮੁਸਲਿਮ ਸਾਥੀ ਅਤੇ ਸੰਗੀਤਕਾਰ ਕੌਣ ਸਨ?' },
          options: [
            { en: 'Bhai Lehna', pa: 'ਭਾਈ ਲਹਿਣਾ' },
            { en: 'Bhai Mardana', pa: 'ਭਾਈ ਮਰਦਾਨਾ' },
            { en: 'Bhai Bala', pa: 'ਭਾਈ ਬਾਲਾ' },
            { en: 'Bhai Gurdas', pa: 'ਭਾਈ ਗੁਰਦਾਸ' },
          ],
          correctIndex: 1,
          insight: { en: "Bhai Mardana, a Muslim rabab player from Talwandi, accompanied Guru Nanak Dev Ji on his Udasis, providing the musical accompaniment for his hymns.", pa: 'ਤਲਵੰਡੀ ਤੋਂ ਇੱਕ ਮੁਸਲਿਮ ਰਬਾਬ ਵਾਦਕ, ਭਾਈ ਮਰਦਾਨਾ, ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦੀਆਂ ਉਦਾਸੀਆਂ ਵਿੱਚ ਨਾਲ ਗਏ, ਉਨ੍ਹਾਂ ਦੇ ਸ਼ਬਦਾਂ ਲਈ ਸੰਗੀਤਕ ਸਾਥ ਦਿੱਤਾ।' },
        },
        {
          prompt: { en: 'Guru Amar Das Ji is credited with establishing the tradition of sitting together to eat as equals, known as?', pa: 'ਬਰਾਬਰੀ ਨਾਲ ਇਕੱਠੇ ਬੈਠ ਕੇ ਖਾਣ ਦੀ ਪਰੰਪਰਾ, ਜੋ ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਨੇ ਸਥਾਪਿਤ ਕੀਤੀ, ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Sangat', pa: 'ਸੰਗਤ' },
            { en: 'Pangat', pa: 'ਪੰਗਤ' },
            { en: 'Diwan', pa: 'ਦੀਵਾਨ' },
            { en: 'Ardas', pa: 'ਅਰਦਾਸ' },
          ],
          correctIndex: 1,
          insight: { en: 'Pangat means sitting together in a row to eat, regardless of caste or status — a practice Guru Amar Das Ji insisted on even for the Mughal Emperor Akbar.', pa: 'ਪੰਗਤ ਦਾ ਅਰਥ ਹੈ ਜਾਤ ਜਾਂ ਰੁਤਬੇ ਦੀ ਪਰਵਾਹ ਕੀਤੇ ਬਿਨਾਂ ਇੱਕ ਕਤਾਰ ਵਿੱਚ ਬੈਠ ਕੇ ਖਾਣਾ — ਇੱਕ ਰਿਵਾਜ ਜਿਸ ਤੇ ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਨੇ ਬਾਦਸ਼ਾਹ ਅਕਬਰ ਲਈ ਵੀ ਜ਼ੋਰ ਦਿੱਤਾ।' },
        },
        {
          prompt: { en: 'Which city did Guru Ram Das Ji found, originally called Ramdaspur?', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਨੇ ਕਿਹੜਾ ਸ਼ਹਿਰ ਵਸਾਇਆ, ਜਿਸਨੂੰ ਮੂਲ ਰੂਪ ਵਿੱਚ ਰਾਮਦਾਸਪੁਰ ਕਿਹਾ ਜਾਂਦਾ ਸੀ?' },
          options: [
            { en: 'Amritsar', pa: 'ਅੰਮ੍ਰਿਤਸਰ' },
            { en: 'Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ' },
            { en: 'Kartarpur', pa: 'ਕਰਤਾਰਪੁਰ' },
            { en: 'Tarn Taran', pa: 'ਤਰਨਤਾਰਨ' },
          ],
          correctIndex: 0,
          insight: { en: 'Amritsar was originally called Ramdaspur after its founder, Guru Ram Das Ji, before taking its present name from the Amrit Sarovar at its heart.', pa: 'ਅੰਮ੍ਰਿਤਸਰ ਨੂੰ ਮੂਲ ਰੂਪ ਵਿੱਚ ਇਸਦੇ ਸੰਸਥਾਪਕ, ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਦੇ ਨਾਮ ਤੇ ਰਾਮਦਾਸਪੁਰ ਕਿਹਾ ਜਾਂਦਾ ਸੀ, ਬਾਅਦ ਵਿੱਚ ਇਸਦੇ ਕੇਂਦਰ ਵਿਚਲੇ ਅੰਮ੍ਰਿਤ ਸਰੋਵਰ ਤੋਂ ਮੌਜੂਦਾ ਨਾਮ ਮਿਲਿਆ।' },
        },
        {
          prompt: { en: 'Bhai Gurdas Ji is remembered chiefly for which contribution?', pa: 'ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਮੁੱਖ ਤੌਰ ਤੇ ਕਿਸ ਯੋਗਦਾਨ ਲਈ ਯਾਦ ਕੀਤੇ ਜਾਂਦੇ ਹਨ?' },
          options: [
            { en: 'Leading the Khalsa army', pa: 'ਖ਼ਾਲਸਾ ਫ਼ੌਜ ਦੀ ਅਗਵਾਈ' },
            { en: 'Scribing the Adi Granth', pa: 'ਆਦਿ ਗ੍ਰੰਥ ਦੀ ਲਿਖਾਈ' },
            { en: 'Founding Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਸਥਾਪਨਾ' },
            { en: 'Composing the Zafarnama', pa: 'ਜ਼ਫ਼ਰਨਾਮਾ ਦੀ ਰਚਨਾ' },
          ],
          correctIndex: 1,
          insight: { en: 'Bhai Gurdas Ji served as the scribe for Guru Arjan Dev Ji, writing out the Adi Granth by hand as the Guru dictated it in 1604.', pa: 'ਭਾਈ ਗੁਰਦਾਸ ਜੀ ਨੇ ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੇ ਲਿਖਾਰੀ ਵਜੋਂ ਸੇਵਾ ਕੀਤੀ, 1604 ਵਿੱਚ ਗੁਰੂ ਜੀ ਦੇ ਬੋਲਣ ਤੇ ਆਦਿ ਗ੍ਰੰਥ ਹੱਥੀਂ ਲਿਖਿਆ।' },
        },
        {
          prompt: { en: 'Which military leader led Sikh forces after Guru Gobind Singh Ji and defeated the forces at Sirhind?', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਤੋਂ ਬਾਅਦ ਸਿੱਖ ਫ਼ੌਜਾਂ ਦੀ ਅਗਵਾਈ ਕਰਕੇ ਸਰਹਿੰਦ ਦੀਆਂ ਫ਼ੌਜਾਂ ਨੂੰ ਕਿਸ ਫ਼ੌਜੀ ਆਗੂ ਨੇ ਹਰਾਇਆ?' },
          options: [
            { en: 'Banda Singh Bahadur', pa: 'ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ' },
            { en: 'Baba Deep Singh', pa: 'ਬਾਬਾ ਦੀਪ ਸਿੰਘ' },
            { en: 'Jassa Singh Ahluwalia', pa: 'ਜੱਸਾ ਸਿੰਘ ਆਹਲੂਵਾਲੀਆ' },
            { en: 'Hari Singh Nalwa', pa: 'ਹਰੀ ਸਿੰਘ ਨਲਵਾ' },
          ],
          correctIndex: 0,
          insight: { en: 'Banda Singh Bahadur, commissioned by Guru Gobind Singh Ji, led the Khalsa to victory at Sirhind in 1710, avenging the martyrdom of the Sahibzade.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਭੇਜੇ ਗਏ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੇ 1710 ਵਿੱਚ ਸਰਹਿੰਦ ਵਿਖੇ ਖ਼ਾਲਸੇ ਦੀ ਜਿੱਤ ਦੀ ਅਗਵਾਈ ਕੀਤੀ, ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹੀਦੀ ਦਾ ਬਦਲਾ ਲਿਆ।' },
        },
        {
          prompt: { en: 'Which Guru is credited with developing the Gurmukhi script?', pa: 'ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿਕਸਿਤ ਕਰਨ ਦਾ ਸਿਹਰਾ ਕਿਹੜੇ ਗੁਰੂ ਨੂੰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ' },
            { en: 'Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ' },
            { en: 'Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ' },
            { en: 'Guru Ram Das Ji', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ' },
          ],
          correctIndex: 1,
          insight: { en: 'Guru Angad Dev Ji, the second Guru, formalized and standardized the Gurmukhi script used to write Gurbani.', pa: 'ਦੂਜੇ ਗੁਰੂ, ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੇ ਗੁਰਬਾਣੀ ਲਿਖਣ ਲਈ ਵਰਤੀ ਜਾਂਦੀ ਗੁਰਮੁਖੀ ਲਿਪੀ ਨੂੰ ਰਸਮੀ ਅਤੇ ਮਿਆਰੀ ਬਣਾਇਆ।' },
        },
        {
          prompt: { en: 'The Dasam Granth is traditionally attributed to which Guru?', pa: 'ਦਸਮ ਗ੍ਰੰਥ ਪਰੰਪਰਾਗਤ ਤੌਰ ਤੇ ਕਿਹੜੇ ਗੁਰੂ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ?' },
          options: [
            { en: 'Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ' },
            { en: 'Guru Har Gobind Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਜੀ' },
            { en: 'Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ' },
            { en: 'Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ' },
          ],
          correctIndex: 2,
          insight: { en: 'The Dasam Granth is traditionally attributed to Guru Gobind Singh Ji, though questions of authorship and compilation are still studied by scholars.', pa: 'ਦਸਮ ਗ੍ਰੰਥ ਪਰੰਪਰਾਗਤ ਤੌਰ ਤੇ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨਾਲ ਸੰਬੰਧਿਤ ਹੈ, ਭਾਵੇਂ ਲੇਖਕਤਾ ਅਤੇ ਸੰਕਲਨ ਦੇ ਸਵਾਲ ਅਜੇ ਵੀ ਵਿਦਵਾਨਾਂ ਦੁਆਰਾ ਅਧਿਐਨ ਅਧੀਨ ਹਨ।' },
        },
        {
          prompt: { en: "The 'Chali Mukte' (Forty Liberated Ones) are associated with which battle?", pa: "'ਚਾਲੀ ਮੁਕਤੇ' ਕਿਹੜੀ ਜੰਗ ਨਾਲ ਸੰਬੰਧਿਤ ਹਨ?" },
          options: [
            { en: 'Battle of Chamkaur', pa: 'ਚਮਕੌਰ ਦੀ ਜੰਗ' },
            { en: 'Battle of Muktsar', pa: 'ਮੁਕਤਸਰ ਦੀ ਜੰਗ' },
            { en: 'Battle of Bhangani', pa: 'ਭੰਗਾਣੀ ਦੀ ਜੰਗ' },
            { en: 'Battle of Anandpur', pa: 'ਅਨੰਦਪੁਰ ਦੀ ਜੰਗ' },
          ],
          correctIndex: 1,
          insight: { en: 'The Chali Mukte ("Forty Liberated Ones") were forty Sikhs who returned to fight and died defending Guru Gobind Singh Ji at the Battle of Muktsar in 1705.', pa: 'ਚਾਲੀ ਮੁਕਤੇ ਉਹ ਚਾਲੀ ਸਿੱਖ ਸਨ ਜੋ 1705 ਵਿੱਚ ਮੁਕਤਸਰ ਦੀ ਜੰਗ ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੀ ਰੱਖਿਆ ਕਰਦੇ ਹੋਏ ਵਾਪਸ ਪਰਤੇ ਅਤੇ ਸ਼ਹੀਦ ਹੋਏ।' },
        },
        {
          prompt: { en: 'Guru Gobind Singh Ji passed away at which town, now home to Hazur Sahib?', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਦੇਹਾਂਤ ਕਿਸ ਸ਼ਹਿਰ ਵਿੱਚ ਹੋਇਆ, ਜੋ ਹੁਣ ਹਜ਼ੂਰ ਸਾਹਿਬ ਦਾ ਘਰ ਹੈ?' },
          options: [
            { en: 'Nanded', pa: 'ਨਾਂਦੇੜ' },
            { en: 'Patna', pa: 'ਪਟਨਾ' },
            { en: 'Talwandi', pa: 'ਤਲਵੰਡੀ' },
            { en: 'Damdama Sahib', pa: 'ਦਮਦਮਾ ਸਾਹਿਬ' },
          ],
          correctIndex: 0,
          insight: { en: 'Guru Gobind Singh Ji attained jyoti jot at Nanded in October 1708, where Takht Sri Hazur Sahib now stands.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਅਕਤੂਬਰ 1708 ਵਿੱਚ ਨਾਂਦੇੜ ਵਿਖੇ ਜੋਤੀ ਜੋਤ ਸਮਾਏ, ਜਿੱਥੇ ਹੁਣ ਤਖ਼ਤ ਸ੍ਰੀ ਹਜ਼ੂਰ ਸਾਹਿਬ ਸਥਿਤ ਹੈ।' },
        },
        {
          prompt: { en: 'Guru Tegh Bahadur Ji was martyred while defending the religious rights of which community?', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਕਿਸ ਭਾਈਚਾਰੇ ਦੇ ਧਾਰਮਿਕ ਅਧਿਕਾਰਾਂ ਦੀ ਰੱਖਿਆ ਕਰਦੇ ਹੋਏ ਸ਼ਹੀਦ ਹੋਏ?' },
          options: [
            { en: 'Sikhs of Punjab', pa: 'ਪੰਜਾਬ ਦੇ ਸਿੱਖ' },
            { en: 'Kashmiri Pandits', pa: 'ਕਸ਼ਮੀਰੀ ਪੰਡਿਤ' },
            { en: 'Sufi mystics', pa: 'ਸੂਫ਼ੀ ਸੰਤ' },
            { en: 'Buddhist monks', pa: 'ਬੋਧੀ ਭਿਕਸ਼ੂ' },
          ],
          correctIndex: 1,
          insight: { en: "Kashmiri Pandits facing forced conversion sought Guru Tegh Bahadur Ji's protection; he offered his own life in Delhi in 1675 rather than see their faith destroyed.", pa: 'ਜ਼ਬਰਦਸਤੀ ਧਰਮ ਬਦਲਣ ਦਾ ਸਾਹਮਣਾ ਕਰ ਰਹੇ ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਨੇ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਤੋਂ ਸੁਰੱਖਿਆ ਮੰਗੀ; ਉਨ੍ਹਾਂ ਨੇ 1675 ਵਿੱਚ ਦਿੱਲੀ ਵਿੱਚ ਆਪਣੀ ਜਾਨ ਦੇ ਦਿੱਤੀ।' },
        },
        {
          prompt: { en: 'The Sikh code of conduct, formally documented in the 20th century, is known as?', pa: 'ਸਿੱਖ ਆਚਾਰ ਸੰਹਿਤਾ, ਜੋ 20ਵੀਂ ਸਦੀ ਵਿੱਚ ਰਸਮੀ ਤੌਰ ਤੇ ਦਸਤਾਵੇਜ਼ੀ ਬਣੀ, ਨੂੰ ਕੀ ਕਿਹਾ ਜਾਂਦਾ ਹੈ?' },
          options: [
            { en: 'Rehat Maryada', pa: 'ਰਹਿਤ ਮਰਯਾਦਾ' },
            { en: 'Zafarnama', pa: 'ਜ਼ਫ਼ਰਨਾਮਾ' },
            { en: 'Ardas Sahib', pa: 'ਅਰਦਾਸ ਸਾਹਿਬ' },
            { en: 'Sukhmani Sahib', pa: 'ਸੁਖਮਨੀ ਸਾਹਿਬ' },
          ],
          correctIndex: 0,
          insight: { en: 'The Sikh Rehat Maryada was formally adopted by the SGPC in 1945 to provide a unified code of conduct and religious practice for Sikhs worldwide.', pa: 'ਸਿੱਖ ਰਹਿਤ ਮਰਯਾਦਾ ਨੂੰ 1945 ਵਿੱਚ ਸ਼੍ਰੋਮਣੀ ਗੁਰਦੁਆਰਾ ਪ੍ਰਬੰਧਕ ਕਮੇਟੀ ਦੁਆਰਾ ਰਸਮੀ ਤੌਰ ਤੇ ਅਪਣਾਇਆ ਗਿਆ, ਵਿਸ਼ਵ ਭਰ ਦੇ ਸਿੱਖਾਂ ਲਈ ਇੱਕਸਾਰ ਆਚਾਰ ਸੰਹਿਤਾ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ।' },
        },
        {
          prompt: { en: 'The final compilation of the Guru Granth Sahib, including Guru Tegh Bahadur Ji\'s bani, was completed by Guru Gobind Singh Ji at which location?', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਦਾ ਅੰਤਿਮ ਸੰਕਲਨ, ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਬਾਣੀ ਸਮੇਤ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਕਿਸ ਸਥਾਨ ਤੇ ਪੂਰਾ ਕੀਤਾ?' },
          options: [
            { en: 'Damdama Sahib', pa: 'ਦਮਦਮਾ ਸਾਹਿਬ' },
            { en: 'Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ' },
            { en: 'Nanded', pa: 'ਨਾਂਦੇੜ' },
            { en: 'Kartarpur', pa: 'ਕਰਤਾਰਪੁਰ' },
          ],
          correctIndex: 0,
          insight: { en: 'At Damdama Sahib, Guru Gobind Singh Ji dictated the entire Adi Granth from memory to Bhai Mani Singh Ji and added the bani of Guru Tegh Bahadur Ji, completing the Damdama Sahib Beed.', pa: 'ਦਮਦਮਾ ਸਾਹਿਬ ਵਿਖੇ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਨੇ ਪੂਰਾ ਆਦਿ ਗ੍ਰੰਥ ਯਾਦ ਤੋਂ ਭਾਈ ਮਨੀ ਸਿੰਘ ਜੀ ਨੂੰ ਲਿਖਵਾਇਆ ਅਤੇ ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਬਾਣੀ ਜੋੜੀ।' },
        },
        {
          prompt: { en: 'Bhai Taru Singh is remembered for which act of faith?', pa: 'ਭਾਈ ਤਾਰੂ ਸਿੰਘ ਜੀ ਕਿਸ ਨਿਹਚਾ ਦੇ ਕਾਰਜ ਲਈ ਯਾਦ ਕੀਤੇ ਜਾਂਦੇ ਹਨ?' },
          options: [
            { en: 'Composing the Anand Sahib', pa: 'ਅਨੰਦ ਸਾਹਿਬ ਦੀ ਰਚਨਾ' },
            { en: 'Choosing to have his scalp removed rather than cut his hair', pa: 'ਕੇਸ ਕੱਟਣ ਦੀ ਬਜਾਏ ਖੋਪੜੀ ਲੁਹਾਉਣੀ ਚੁਣਨਾ' },
            { en: 'Leading the first Khalsa army', pa: 'ਪਹਿਲੀ ਖ਼ਾਲਸਾ ਫ਼ੌਜ ਦੀ ਅਗਵਾਈ' },
            { en: 'Building the Akal Takht', pa: 'ਅਕਾਲ ਤਖ਼ਤ ਦਾ ਨਿਰਮਾਣ' },
          ],
          correctIndex: 1,
          insight: { en: 'Bhai Taru Singh Ji chose to have his scalp removed rather than cut his kesh, a profound act of faith remembered as one of Sikh history\'s most enduring examples of resolve.', pa: 'ਭਾਈ ਤਾਰੂ ਸਿੰਘ ਜੀ ਨੇ ਆਪਣੇ ਕੇਸ ਕਟਾਉਣ ਦੀ ਬਜਾਏ ਆਪਣੀ ਖੋਪੜੀ ਲੁਹਾਉਣੀ ਚੁਣੀ, ਸਿੱਖ ਇਤਿਹਾਸ ਦੇ ਸਭ ਤੋਂ ਸਥਾਈ ਦ੍ਰਿੜਤਾ ਦੇ ਮਿਸਾਲਾਂ ਵਿੱਚੋਂ ਇੱਕ ਵਜੋਂ ਯਾਦ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।' },
        },
      ],
    },
  },
  faq: [
    { question: { en: 'What is the Khalsa?', pa: 'ਖ਼ਾਲਸਾ ਕੀ ਹੈ?' }, answer: { en: 'The Khalsa is the initiated Sikh community created by Guru Gobind Singh Ji on Vaisakhi 1699. Members commit to a disciplined, egalitarian spiritual-warrior way of life, wearing five articles of faith (Panj Kakars).', pa: 'ਖ਼ਾਲਸਾ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੁਆਰਾ ਵਿਸਾਖੀ 1699 ਨੂੰ ਬਣਾਈ ਗਈ ਅੰਮ੍ਰਿਤਧਾਰੀ ਸਿੱਖ ਸੰਗਤ ਹੈ।' } },
    { question: { en: 'What is Amrit Sanchar?', pa: 'ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ ਕੀ ਹੈ?' }, answer: { en: 'Amrit Sanchar (also called Khande-di-Pahul) is the Sikh initiation ceremony, where the initiate receives sacred Amrit prepared with the double-edged khanda and Panj Banis.', pa: 'ਅੰਮ੍ਰਿਤ ਸੰਚਾਰ (ਖੰਡੇ ਦੀ ਪਾਹੁਲ) ਸਿੱਖ ਦੀਖਿਆ ਸਮਾਰੋਹ ਹੈ।' } },
    { question: { en: 'What are the Panj Kakars?', pa: 'ਪੰਜ ਕਕਾਰ ਕੀ ਹਨ?' }, answer: { en: 'The five articles of faith worn by initiated Sikhs: Kesh (uncut hair), Kara (iron bracelet), Kanga (wooden comb), Kachera (cotton undergarment), and Kirpan (steel sword).', pa: 'ਅੰਮ੍ਰਿਤਧਾਰੀ ਸਿੱਖਾਂ ਦੁਆਰਾ ਪਹਿਨੇ ਜਾਣ ਵਾਲੇ ਪੰਜ ਵਿਸ਼ਵਾਸ ਦੇ ਲੇਖ: ਕੇਸ, ਕੜਾ, ਕੰਘਾ, ਕਛਹਿਰਾ, ਕਿਰਪਾਨ।' } },
    { question: { en: 'What is a Hukamnama?', pa: 'ਹੁਕਮਨਾਮਾ ਕੀ ਹੈ?' }, answer: { en: 'A Hukamnama is an official edict or religious decree issued by the Jathedar of Sri Akal Takht Sahib, binding on all Sikhs worldwide.', pa: 'ਹੁਕਮਨਾਮਾ ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੇ ਜਥੇਦਾਰ ਦੁਆਰਾ ਜਾਰੀ ਕੀਤਾ ਅਧਿਕਾਰਕ ਧਾਰਮਿਕ ਫ਼ੈਸਲਾ ਹੈ।' } },
    { question: { en: 'Who is Guru Granth Sahib Ji?', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਕੌਣ ਹਨ?' }, answer: { en: 'Guru Granth Sahib Ji is the eternal, living Guru of the Sikhs — the sacred scripture declared as the permanent and undying Guru by Guru Gobind Singh Ji before his passing in 1708.', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਸਿੱਖਾਂ ਦੇ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਹਨ।' } },
    { question: { en: 'What is Miri-Piri?', pa: 'ਮੀਰੀ-ਪੀਰੀ ਕੀ ਹੈ?' }, answer: { en: 'Miri-Piri is the Sikh principle of dual sovereignty — Miri (temporal/worldly authority) and Piri (spiritual authority) held together, represented by the two swords worn by Guru Hargobind Sahib Ji.', pa: 'ਮੀਰੀ-ਪੀਰੀ ਦੋਹਰੀ ਪ੍ਰਭੂਸੱਤਾ ਦਾ ਸਿੱਖ ਸਿਧਾਂਤ ਹੈ।' } },
  ],
  timeline: [
    { year: '1469', category: 'guru', title: { en: 'Birth of Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The first Sikh Guru is born in Talwandi (now Nankana Sahib, Pakistan), founding the Sikh faith.', pa: 'ਪਹਿਲੇ ਸਿੱਖ ਗੁਰੂ ਦਾ ਤਲਵੰਡੀ ਵਿੱਚ ਜਨਮ ਹੋਇਆ।' }, mapPoint: { x: '44.3%', y: '14.0%' } },
    { year: '1479', category: 'guru', title: { en: 'Birth of Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The third Guru, who would later institutionalize langar and compose Anand Sahib, is born in Basarke, Punjab.', pa: 'ਤੀਜੇ ਗੁਰੂ, ਜਿਨ੍ਹਾਂ ਨੇ ਬਾਅਦ ਵਿੱਚ ਲੰਗਰ ਨੂੰ ਪੱਕੀ ਸੰਸਥਾ ਬਣਾਇਆ ਅਤੇ ਅਨੰਦ ਸਾਹਿਬ ਰਚਿਆ, ਦਾ ਜਨਮ ਬਾਸਰਕੇ, ਪੰਜਾਬ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1504', category: 'guru', title: { en: 'Birth of Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The second Guru, who formalized the Gurmukhi script, is born in Harike, Punjab.', pa: 'ਦੂਜੇ ਗੁਰੂ, ਜਿਨ੍ਹਾਂ ਨੇ ਗੁਰਮੁਖੀ ਲਿਪੀ ਨੂੰ ਰਸਮੀ ਰੂਪ ਦਿੱਤਾ, ਦਾ ਜਨਮ ਹਰੀਕੇ, ਪੰਜਾਬ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1534', category: 'guru', title: { en: 'Birth of Guru Ram Das Ji', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The fourth Guru, founder of Amritsar, is born in Lahore, Punjab.', pa: 'ਚੌਥੇ ਗੁਰੂ, ਅੰਮ੍ਰਿਤਸਰ ਦੇ ਬਾਨੀ, ਦਾ ਜਨਮ ਲਾਹੌਰ, ਪੰਜਾਬ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1539', category: 'guru', title: { en: 'Jyoti Jot of Guru Nanak Dev Ji', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ' }, description: { en: 'Guru Nanak Dev Ji passes at Kartarpur after naming Guru Angad Dev Ji as his successor.', pa: 'ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਕਰਤਾਰਪੁਰ ਵਿਖੇ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ, ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਨੂੰ ਆਪਣਾ ਵਾਰਿਸ ਥਾਪ ਕੇ।' } },
    { year: '1552', category: 'guru', title: { en: 'Jyoti Jot of Guru Angad Dev Ji', pa: 'ਗੁਰੂ ਅੰਗਦ ਦੇਵ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ' }, description: { en: 'The second Guru passes in Khadur Sahib, having strengthened the Gurmukhi script and the langar tradition.', pa: 'ਦੂਜੇ ਗੁਰੂ ਖਡੂਰ ਸਾਹਿਬ ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' } },
    { year: '1563', category: 'guru', title: { en: 'Birth of Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The fifth Guru, compiler of the Adi Granth and builder of Sri Harmandir Sahib, is born in Goindval, Punjab.', pa: 'ਪੰਜਵੇਂ ਗੁਰੂ, ਆਦਿ ਗ੍ਰੰਥ ਦੇ ਸੰਪਾਦਕ ਅਤੇ ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੇ ਨਿਰਮਾਤਾ, ਦਾ ਜਨਮ ਗੋਇੰਦਵਾਲ, ਪੰਜਾਬ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1574', category: 'guru', title: { en: 'Jyoti Jot of Guru Amar Das Ji', pa: 'ਗੁਰੂ ਅਮਰ ਦਾਸ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ' }, description: { en: 'The third Guru passes in Goindval, having organized the growing Sikh community into 22 preaching districts.', pa: 'ਤੀਜੇ ਗੁਰੂ ਗੋਇੰਦਵਾਲ ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' } },
    { year: '1581', category: 'guru', title: { en: 'Jyoti Jot of Guru Ram Das Ji', pa: 'ਗੁਰੂ ਰਾਮ ਦਾਸ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ' }, description: { en: 'The fourth Guru passes in Goindval, having founded Amritsar and excavated its sacred pool.', pa: 'ਚੌਥੇ ਗੁਰੂ ਗੋਇੰਦਵਾਲ ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' } },
    { year: '1595', category: 'guru', title: { en: 'Birth of Guru Hargobind Sahib Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The sixth Guru, who introduced the principle of Miri-Piri, is born in Guru Ki Wadali, Punjab.', pa: 'ਛੇਵੇਂ ਗੁਰੂ, ਜਿਨ੍ਹਾਂ ਨੇ ਮੀਰੀ-ਪੀਰੀ ਦਾ ਸਿਧਾਂਤ ਪੇਸ਼ ਕੀਤਾ, ਦਾ ਜਨਮ ਗੁਰੂ ਕੀ ਵਡਾਲੀ, ਪੰਜਾਬ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1606', category: 'martyrdom', title: { en: 'Shaheedi of Guru Arjan Dev Ji', pa: 'ਗੁਰੂ ਅਰਜਨ ਦੇਵ ਜੀ ਦੀ ਸ਼ਹੀਦੀ' }, description: { en: 'The fifth Guru becomes the first Sikh martyr, executed by Mughal Emperor Jahangir in Lahore.', pa: 'ਪੰਜਵੇਂ ਗੁਰੂ ਪਹਿਲੇ ਸਿੱਖ ਸ਼ਹੀਦ ਬਣੇ, ਬਾਦਸ਼ਾਹ ਜਹਾਂਗੀਰ ਦੁਆਰਾ ਲਾਹੌਰ ਵਿੱਚ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' } },
    { year: '1606', category: 'political', title: { en: 'Sri Akal Takht Sahib founded', pa: 'ਸ੍ਰੀ ਅਕਾਲ ਤਖ਼ਤ ਸਾਹਿਬ ਦੀ ਸਥਾਪਨਾ' }, description: { en: 'Guru Hargobind Sahib Ji establishes the Akal Takht in Amritsar, embodying the principle of Miri-Piri.', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਅਕਾਲ ਤਖ਼ਤ ਦੀ ਸਥਾਪਨਾ ਕਰਦੇ ਹਨ।' }, mapPoint: { x: '45.6%', y: '13.6%' } },
    { year: '1621', category: 'guru', title: { en: 'Birth of Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The ninth Guru, later known as "Hind di Chadar," is born in Amritsar.', pa: 'ਨੌਵੇਂ ਗੁਰੂ, ਜੋ ਬਾਅਦ ਵਿੱਚ "ਹਿੰਦ ਦੀ ਚਾਦਰ" ਵਜੋਂ ਜਾਣੇ ਗਏ, ਦਾ ਜਨਮ ਅੰਮ੍ਰਿਤਸਰ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1630', category: 'guru', title: { en: 'Birth of Guru Har Rai Ji', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The seventh Guru, known for compassion and herbal medicine dispensaries, is born in Kiratpur Sahib.', pa: 'ਸੱਤਵੇਂ ਗੁਰੂ, ਦਇਆ ਅਤੇ ਜੜੀ-ਬੂਟੀਆਂ ਦੇ ਦਵਾਖ਼ਾਨਿਆਂ ਲਈ ਜਾਣੇ ਜਾਂਦੇ, ਦਾ ਜਨਮ ਕੀਰਤਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1644', category: 'guru', title: { en: 'Jyoti Jot of Guru Hargobind Sahib Ji', pa: 'ਗੁਰੂ ਹਰਿਗੋਬਿੰਦ ਸਾਹਿਬ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ' }, description: { en: 'The sixth Guru passes in Kiratpur Sahib, having built the Akal Takht and established Miri-Piri.', pa: 'ਛੇਵੇਂ ਗੁਰੂ ਕੀਰਤਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' } },
    { year: '1656', category: 'guru', title: { en: 'Birth of Guru Har Krishan Ji', pa: 'ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The eighth Guru, who would become Guru at age five, is born in Kiratpur Sahib.', pa: 'ਅੱਠਵੇਂ ਗੁਰੂ, ਜੋ ਪੰਜ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਗੁਰੂ ਬਣੇ, ਦਾ ਜਨਮ ਕੀਰਤਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1661', category: 'guru', title: { en: 'Jyoti Jot of Guru Har Rai Ji', pa: 'ਗੁਰੂ ਹਰਿ ਰਾਇ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ' }, description: { en: 'The seventh Guru passes in Kiratpur Sahib, naming his young son Har Krishan as successor.', pa: 'ਸੱਤਵੇਂ ਗੁਰੂ ਕੀਰਤਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ, ਆਪਣੇ ਛੋਟੇ ਪੁੱਤਰ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਨੂੰ ਵਾਰਿਸ ਥਾਪ ਕੇ।' } },
    { year: '1661', category: 'guru', title: { en: 'Birth of Bhai Daya Singh Ji', pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The first of the Panj Pyare, born Daya Ram, is born in Lahore.', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਪਹਿਲੇ, ਦਇਆ ਰਾਮ ਵਜੋਂ, ਦਾ ਜਨਮ ਲਾਹੌਰ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1661', category: 'guru', title: { en: 'Birth of Bhai Himmat Singh Ji', pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'One of the Panj Pyare, later a water-carrier serving Guru Ka Langar, is born in Jagannath Puri, Odisha.', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਇੱਕ ਦਾ ਜਨਮ ਜਗਨਨਾਥ ਪੁਰੀ, ਉੜੀਸਾ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1662', category: 'guru', title: { en: 'Birth of Bhai Sahib Singh Ji', pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'One of the Panj Pyare, representing the south of India, is born in Bidar, Karnataka.', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਇੱਕ ਦਾ ਜਨਮ ਬੀਦਰ, ਕਰਨਾਟਕ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1663', category: 'guru', title: { en: 'Birth of Bhai Mohkam Singh Ji', pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'One of the Panj Pyare, a calico printer and tailor by trade, is born in Dwarka, Gujarat.', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਇੱਕ ਦਾ ਜਨਮ ਦਵਾਰਕਾ, ਗੁਜਰਾਤ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1664', category: 'guru', title: { en: 'Jyoti Jot of Guru Har Krishan Ji', pa: 'ਗੁਰੂ ਹਰਿ ਕ੍ਰਿਸ਼ਨ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ' }, description: { en: 'The eighth Guru passes in Delhi at age eight, having served and healed the sick during a smallpox epidemic.', pa: 'ਅੱਠਵੇਂ ਗੁਰੂ ਦਿੱਲੀ ਵਿੱਚ ਅੱਠ ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' } },
    { year: '1666', category: 'guru', title: { en: 'Birth of Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'The 10th Guru is born in Patna, Bihar as Gobind Rai.', pa: 'ਦਸਵੇਂ ਗੁਰੂ ਦਾ ਜਨਮ ਪਟਨਾ, ਬਿਹਾਰ ਵਿੱਚ ਗੋਬਿੰਦ ਰਾਏ ਵਜੋਂ ਹੋਇਆ।' }, mapPoint: { x: '56.6%', y: '28.5%' } },
    { year: '1666', category: 'guru', title: { en: 'Birth of Bhai Dharam Singh Ji', pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਦਾ ਜਨਮ' }, description: { en: 'One of the Panj Pyare, born in the ancient city of Hastinapur, Uttar Pradesh.', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਇੱਕ ਦਾ ਜਨਮ ਹਸਤਿਨਾਪੁਰ, ਉੱਤਰ ਪ੍ਰਦੇਸ਼ ਵਿੱਚ ਹੋਇਆ।' } },
    { year: '1675', category: 'martyrdom', title: { en: 'Shaheedi of Guru Tegh Bahadur Ji', pa: 'ਗੁਰੂ ਤੇਗ਼ ਬਹਾਦਰ ਜੀ ਦੀ ਸ਼ਹੀਦੀ' }, description: { en: 'The ninth Guru is executed by Emperor Aurangzeb in Delhi for defending the religious freedom of Kashmiri Pandits.', pa: 'ਨੌਵੇਂ ਗੁਰੂ ਕਸ਼ਮੀਰੀ ਪੰਡਿਤਾਂ ਦੀ ਧਾਰਮਿਕ ਆਜ਼ਾਦੀ ਦੀ ਰਾਖੀ ਲਈ ਦਿੱਲੀ ਵਿੱਚ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਦੁਆਰਾ ਸ਼ਹੀਦ ਕੀਤੇ ਗਏ।' } },
    { year: '1699', category: 'guru', title: { en: 'Creation of the Khalsa', pa: 'ਖ਼ਾਲਸੇ ਦੀ ਸਿਰਜਣਾ' }, description: { en: 'Guru Gobind Singh Ji creates the Panj Pyare and the Khalsa Panth at Anandpur Sahib on Vaisakhi.', pa: 'ਵਿਸਾਖੀ ਨੂੰ ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਪੰਜ ਪਿਆਰੇ ਅਤੇ ਖ਼ਾਲਸਾ ਪੰਥ ਦੀ ਸਿਰਜਣਾ ਕਰਦੇ ਹਨ।' }, mapPoint: { x: '47.3%', y: '14.6%' } },
    { year: '1704', category: 'battle', title: { en: 'Evacuation of Anandpur Sahib', pa: 'ਅਨੰਦਪੁਰ ਸਾਹਿਬ ਦੀ ਨਿਕਾਸੀ' }, description: { en: 'After a prolonged siege, Guru Gobind Singh Ji and his family are forced to evacuate the fortress city, separated while crossing the swollen Sarsa river.', pa: 'ਲੰਬੀ ਘੇਰਾਬੰਦੀ ਤੋਂ ਬਾਅਦ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਅਤੇ ਪਰਿਵਾਰ ਨੂੰ ਕਿਲ੍ਹਾਬੰਦ ਨਗਰ ਛੱਡਣਾ ਪਿਆ, ਸਰਸਾ ਨਦੀ ਪਾਰ ਕਰਦਿਆਂ ਵੱਖ ਹੋ ਗਏ।' } },
    { year: '1704', category: 'martyrdom', title: { en: 'Shaheedi of Baba Ajit Singh Ji & Baba Jujhar Singh Ji', pa: 'ਬਾਬਾ ਅਜੀਤ ਸਿੰਘ ਜੀ ਅਤੇ ਬਾਬਾ ਜੁਝਾਰ ਸਿੰਘ ਜੀ ਦੀ ਸ਼ਹੀਦੀ' }, description: { en: 'The two elder Sahibzaade, sons of Guru Gobind Singh Ji, attain shaheedi fighting at the Battle of Chamkaur Sahib.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਦੋ ਵੱਡੇ ਸਾਹਿਬਜ਼ਾਦੇ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਲੜਦੇ ਹੋਏ ਸ਼ਹੀਦੀ ਪਾਉਂਦੇ ਹਨ।' } },
    { year: '1705', category: 'battle', title: { en: 'Battle of Chamkaur Sahib', pa: 'ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ' }, description: { en: 'A historic battle where the Guru and a handful of Sikhs faced a massive Mughal army. Several Panj Pyare attain shaheedi.', pa: 'ਇੱਕ ਇਤਿਹਾਸਕ ਜੰਗ ਜਿੱਥੇ ਗੁਰੂ ਅਤੇ ਕੁਝ ਸਿੱਖਾਂ ਨੇ ਵੱਡੀ ਮੁਗਲ ਫ਼ੌਜ ਦਾ ਸਾਹਮਣਾ ਕੀਤਾ।' }, mapPoint: { x: '47.2%', y: '15.8%' } },
    { year: '1705', category: 'martyrdom', title: { en: 'Shaheedi of Bhai Himmat Singh Ji', pa: 'ਭਾਈ ਹਿੰਮਤ ਸਿੰਘ ਜੀ ਦੀ ਸ਼ਹੀਦੀ' }, description: { en: 'One of the Panj Pyare attains shaheedi at the Battle of Chamkaur Sahib, defending the Khalsa Panth.', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਇੱਕ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਉਂਦੇ ਹਨ।' } },
    { year: '1705', category: 'martyrdom', title: { en: 'Shaheedi of Bhai Mohkam Singh Ji', pa: 'ਭਾਈ ਮੋਹਕਮ ਸਿੰਘ ਜੀ ਦੀ ਸ਼ਹੀਦੀ' }, description: { en: 'One of the Panj Pyare attains shaheedi at the Battle of Chamkaur Sahib, defending the Khalsa Panth.', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਇੱਕ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਉਂਦੇ ਹਨ।' } },
    { year: '1705', category: 'martyrdom', title: { en: 'Shaheedi of Bhai Sahib Singh Ji', pa: 'ਭਾਈ ਸਾਹਿਬ ਸਿੰਘ ਜੀ ਦੀ ਸ਼ਹੀਦੀ' }, description: { en: 'One of the Panj Pyare attains shaheedi at the Battle of Chamkaur Sahib, defending the Khalsa Panth.', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਇੱਕ ਚਮਕੌਰ ਸਾਹਿਬ ਦੀ ਜੰਗ ਵਿੱਚ ਸ਼ਹੀਦੀ ਪਾਉਂਦੇ ਹਨ।' } },
    { year: '1705', category: 'martyrdom', title: { en: 'Shaheedi of Baba Zorawar Singh Ji & Baba Fateh Singh Ji', pa: 'ਬਾਬਾ ਜ਼ੋਰਾਵਰ ਸਿੰਘ ਜੀ ਅਤੇ ਬਾਬਾ ਫ਼ਤਿਹ ਸਿੰਘ ਜੀ ਦੀ ਸ਼ਹੀਦੀ' }, description: { en: 'The two youngest Sahibzaade, ages nine and six, are martyred at Sirhind for refusing to renounce their faith.', pa: 'ਦੋ ਸਭ ਤੋਂ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦੇ, 9 ਅਤੇ 6 ਸਾਲ ਦੀ ਉਮਰ ਵਿੱਚ, ਆਪਣਾ ਧਰਮ ਨਾ ਛੱਡਣ ਕਰਕੇ ਸਰਹਿੰਦ ਵਿਖੇ ਸ਼ਹੀਦ ਕੀਤੇ ਜਾਂਦੇ ਹਨ।' } },
    { year: '1706', category: 'political', title: { en: 'Zafarnama sent to Aurangzeb', pa: 'ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਜ਼ਫ਼ਰਨਾਮਾ' }, description: { en: 'Guru Gobind Singh Ji sends the Zafarnama, a Persian letter of moral defiance, to Emperor Aurangzeb, carried by Bhai Daya Singh Ji into the Deccan.', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਰਾਹੀਂ ਜ਼ਫ਼ਰਨਾਮਾ ਬਾਦਸ਼ਾਹ ਔਰੰਗਜ਼ੇਬ ਨੂੰ ਭੇਜਦੇ ਹਨ।' } },
    { year: '1706', category: 'scripture', title: { en: 'Definitive Guru Granth Sahib Ji compiled at Damdama Sahib', pa: 'ਦਮਦਮਾ ਸਾਹਿਬ ਵਿਖੇ ਅੰਤਿਮ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਤਿਆਰ' }, description: { en: 'At Talwandi Sabo, Guru Gobind Singh Ji recites the entire Guru Granth Sahib Ji from memory to Bhai Mani Singh Ji, adding the bani of Guru Tegh Bahadur Ji.', pa: 'ਤਲਵੰਡੀ ਸਾਬੋ ਵਿਖੇ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਭਾਈ ਮਨੀ ਸਿੰਘ ਜੀ ਨੂੰ ਯਾਦ ਤੋਂ ਪੂਰਾ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਪਾਠ ਕਰਵਾਉਂਦੇ ਹਨ।' } },
    { year: '1708', category: 'scripture', title: { en: 'Guru Granth Sahib Ji declared eternal Guru', pa: 'ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਸਦੀਵੀ ਗੁਰੂ ਘੋਸ਼ਿਤ' }, description: { en: 'At Hazur Sahib in Nanded, Guru Gobind Singh Ji declares the Guru Granth Sahib Ji as the eternal, living Guru of the Sikhs.', pa: 'ਨਾਂਦੇੜ ਵਿੱਚ ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ ਨੂੰ ਸਦੀਵੀ ਜੀਵੰਤ ਗੁਰੂ ਘੋਸ਼ਿਤ ਕਰਦੇ ਹਨ।' }, mapPoint: { x: '48.2%', y: '44.6%' } },
    { year: '1708', category: 'guru', title: { en: 'Jyoti Jot of Guru Gobind Singh Ji', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ' }, description: { en: 'The tenth Guru passes at Hazur Sahib, Nanded, having declared Guru Granth Sahib Ji the eternal Guru of the Sikhs.', pa: 'ਦਸਵੇਂ ਗੁਰੂ ਨਾਂਦੇੜ ਦੇ ਹਜ਼ੂਰ ਸਾਹਿਬ ਵਿਖੇ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' } },
    { year: '1708', category: 'guru', title: { en: 'Jyoti Jot of Bhai Daya Singh Ji', pa: 'ਭਾਈ ਦਯਾ ਸਿੰਘ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ' }, description: { en: 'The first of the Panj Pyare passes at Nanded, having remained at Guru Gobind Singh Ji\'s side until the very end.', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਪਹਿਲੇ, ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਦੇ ਨਾਲ ਅੰਤ ਤੱਕ ਰਹਿ ਕੇ, ਨਾਂਦੇੜ ਵਿਖੇ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' } },
    { year: '1708', category: 'guru', title: { en: 'Jyoti Jot of Bhai Dharam Singh Ji', pa: 'ਭਾਈ ਧਰਮ ਸਿੰਘ ਜੀ ਦਾ ਜੋਤੀ ਜੋਤ' }, description: { en: 'One of the Panj Pyare passes at Nanded in the Guru\'s final days, honoured for a life given fully in service.', pa: 'ਪੰਜ ਪਿਆਰਿਆਂ ਵਿੱਚੋਂ ਇੱਕ ਗੁਰੂ ਜੀ ਦੇ ਅੰਤਿਮ ਦਿਨਾਂ ਵਿੱਚ ਨਾਂਦੇੜ ਵਿਖੇ ਜੋਤੀ ਜੋਤ ਸਮਾ ਗਏ।' } },
    { year: '1708', category: 'political', title: { en: 'Guru Gobind Singh Ji commissions Banda Singh Bahadur', pa: 'ਗੁਰੂ ਗੋਬਿੰਦ ਸਿੰਘ ਜੀ ਵੱਲੋਂ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੂੰ ਹੁਕਮ' }, description: { en: 'At Nanded, the Guru commissions Banda Singh Bahadur to lead the Khalsa into Punjab, giving him five arrows and a hukamnama calling Sikhs to join him.', pa: 'ਨਾਂਦੇੜ ਵਿਖੇ, ਗੁਰੂ ਜੀ ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਨੂੰ ਖ਼ਾਲਸੇ ਦੀ ਅਗਵਾਈ ਪੰਜਾਬ ਵੱਲ ਕਰਨ ਦਾ ਹੁਕਮ ਦਿੰਦੇ ਹਨ, ਪੰਜ ਤੀਰ ਅਤੇ ਇੱਕ ਹੁਕਮਨਾਮਾ ਦੇ ਕੇ।' } },
    { year: '1709', category: 'battle', title: { en: 'Banda Singh Bahadur captures Sirhind', pa: 'ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਵੱਲੋਂ ਸਰਹਿੰਦ ਦੀ ਜਿੱਤ' }, description: { en: 'Banda Singh Bahadur defeats the Mughal governor of Sirhind, avenging the martyrdom of the two youngest Sahibzaade there four years earlier.', pa: 'ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਸਰਹਿੰਦ ਦੇ ਮੁਗਲ ਗਵਰਨਰ ਨੂੰ ਹਰਾਉਂਦੇ ਹਨ, ਚਾਰ ਸਾਲ ਪਹਿਲਾਂ ਉੱਥੇ ਦੋ ਛੋਟੇ ਸਾਹਿਬਜ਼ਾਦਿਆਂ ਦੀ ਸ਼ਹੀਦੀ ਦਾ ਬਦਲਾ ਲੈਂਦੇ ਹੋਏ।' } },
    { year: '1710', category: 'political', title: { en: 'Banda Singh Bahadur establishes Khalsa Raj', pa: 'ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਵੱਲੋਂ ਖ਼ਾਲਸਾ ਰਾਜ ਦੀ ਸਥਾਪਨਾ' }, description: { en: 'Ruling from the hill fort of Lohgarh, Banda Singh Bahadur establishes the first Sikh state, issuing coins and a state seal in the name of Guru Nanak Dev Ji and Guru Gobind Singh Ji.', pa: 'ਲੋਹਗੜ੍ਹ ਦੇ ਪਹਾੜੀ ਕਿਲ੍ਹੇ ਤੋਂ ਰਾਜ ਕਰਦੇ ਹੋਏ, ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਪਹਿਲਾ ਸਿੱਖ ਰਾਜ ਸਥਾਪਿਤ ਕਰਦੇ ਹਨ।' } },
    { year: '1716', category: 'martyrdom', title: { en: 'Martyrdom of Banda Singh Bahadur', pa: 'ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਦੀ ਸ਼ਹੀਦੀ' }, description: { en: 'After a prolonged siege at Gurdas Nangal, Banda Singh Bahadur and hundreds of Sikhs are captured and executed in Delhi rather than renounce their faith.', pa: 'ਗੁਰਦਾਸ ਨੰਗਲ ਦੀ ਲੰਬੀ ਘੇਰਾਬੰਦੀ ਤੋਂ ਬਾਅਦ, ਬੰਦਾ ਸਿੰਘ ਬਹਾਦਰ ਅਤੇ ਸੈਂਕੜੇ ਸਿੱਖਾਂ ਨੂੰ ਫੜ ਕੇ ਦਿੱਲੀ ਵਿੱਚ ਸ਼ਹੀਦ ਕੀਤਾ ਗਿਆ।' } },
    { year: '1734', category: 'martyrdom', title: { en: 'Martyrdom of Bhai Mani Singh Ji', pa: 'ਭਾਈ ਮਨੀ ਸਿੰਘ ਜੀ ਦੀ ਸ਼ਹੀਦੀ' }, description: { en: 'The head granthi of Sri Harmandir Sahib is executed in Lahore after refusing to pay a tax on a Diwali gathering, a martyrdom widely remembered in Sikh daily Ardaas.', pa: 'ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੇ ਮੁੱਖ ਗ੍ਰੰਥੀ ਨੂੰ ਦੀਵਾਲੀ ਦੇ ਇਕੱਠ ਤੇ ਟੈਕਸ ਦੇਣ ਤੋਂ ਇਨਕਾਰ ਕਰਨ ਕਰਕੇ ਲਾਹੌਰ ਵਿੱਚ ਸ਼ਹੀਦ ਕੀਤਾ ਗਿਆ।' } },
    { year: '1746', category: 'massacre', title: { en: 'Chhota Ghallughara (Small Holocaust)', pa: 'ਛੋਟਾ ਘੱਲੂਘਾਰਾ' }, description: { en: 'Mughal forces under Lakhpat Rai kill thousands of Sikhs, including many non-combatants, in a sustained campaign across Punjab.', pa: 'ਲਖਪਤ ਰਾਏ ਦੀ ਅਗਵਾਈ ਹੇਠ ਮੁਗਲ ਫ਼ੌਜਾਂ ਪੰਜਾਬ ਭਰ ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਸਿੱਖਾਂ ਨੂੰ ਮਾਰਦੀਆਂ ਹਨ।' } },
    { year: '1748', category: 'political', title: { en: 'Formation of the Dal Khalsa', pa: 'ਦਲ ਖ਼ਾਲਸਾ ਦੀ ਸਥਾਪਨਾ' }, description: { en: 'Sikh warrior bands unite into the Dal Khalsa, a confederation of misls (companies) that would defend and govern Punjab through the mid-18th century.', pa: 'ਸਿੱਖ ਜੋਧਾ ਟੋਲੀਆਂ ਦਲ ਖ਼ਾਲਸਾ ਵਿੱਚ ਇਕਜੁੱਟ ਹੁੰਦੀਆਂ ਹਨ, ਮਿਸਲਾਂ ਦਾ ਇੱਕ ਸੰਘ ਜੋ 18ਵੀਂ ਸਦੀ ਦੇ ਮੱਧ ਤੱਕ ਪੰਜਾਬ ਦੀ ਰਾਖੀ ਅਤੇ ਸ਼ਾਸਨ ਕਰਦਾ ਹੈ।' } },
    { year: '1762', category: 'massacre', title: { en: 'Wadda Ghallughara (Great Holocaust)', pa: 'ਵੱਡਾ ਘੱਲੂਘਾਰਾ' }, description: { en: 'Ahmad Shah Durrani\'s forces kill tens of thousands of Sikhs, including many women, children, and elders, near Kup Rahira — the deadliest single day in Sikh history.', pa: 'ਅਹਿਮਦ ਸ਼ਾਹ ਦੁੱਰਾਨੀ ਦੀਆਂ ਫ਼ੌਜਾਂ ਕੁੱਪ ਰਹੀੜਾ ਨੇੜੇ ਹਜ਼ਾਰਾਂ ਸਿੱਖਾਂ ਨੂੰ ਮਾਰਦੀਆਂ ਹਨ।' } },
    { year: '1764', category: 'battle', title: { en: 'Sikh Misls raze Sirhind', pa: 'ਸਿੱਖ ਮਿਸਲਾਂ ਵੱਲੋਂ ਸਰਹਿੰਦ ਦੀ ਤਬਾਹੀ' }, description: { en: 'The confederated Sikh misls capture and level Sirhind, the city where the two youngest Sahibzaade were martyred in 1705.', pa: 'ਸੰਘਬੱਧ ਸਿੱਖ ਮਿਸਲਾਂ ਸਰਹਿੰਦ ਨੂੰ ਜਿੱਤ ਕੇ ਢਾਹ ਦਿੰਦੀਆਂ ਹਨ।' } },
    { year: '1799', category: 'political', title: { en: 'Maharaja Ranjit Singh captures Lahore', pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਵੱਲੋਂ ਲਾਹੌਰ ਦੀ ਜਿੱਤ' }, description: { en: 'The 19-year-old leader of the Sukerchakia misl captures Lahore, beginning the process of uniting Punjab under a single Sikh Empire.', pa: 'ਸੁਕਰਚਕੀਆ ਮਿਸਲ ਦੇ 19-ਸਾਲਾ ਆਗੂ ਲਾਹੌਰ ਨੂੰ ਜਿੱਤਦੇ ਹਨ, ਪੰਜਾਬ ਨੂੰ ਇੱਕ ਸਿੱਖ ਸਾਮਰਾਜ ਹੇਠ ਇਕਜੁੱਟ ਕਰਨ ਦੀ ਸ਼ੁਰੂਆਤ ਕਰਦੇ ਹੋਏ।' } },
    { year: '1801', category: 'political', title: { en: 'Ranjit Singh crowned Maharaja of Punjab', pa: 'ਰਣਜੀਤ ਸਿੰਘ ਪੰਜਾਬ ਦੇ ਮਹਾਰਾਜਾ ਵਜੋਂ ਤਾਜਪੋਸ਼' }, description: { en: 'On Vaisakhi, Ranjit Singh is formally crowned Maharaja, founding the Sikh Empire that would govern Punjab for the next four decades.', pa: 'ਵਿਸਾਖੀ ਨੂੰ, ਰਣਜੀਤ ਸਿੰਘ ਰਸਮੀ ਤੌਰ ਤੇ ਮਹਾਰਾਜਾ ਵਜੋਂ ਤਾਜਪੋਸ਼ ਹੁੰਦੇ ਹਨ।' } },
    { year: '1809', category: 'political', title: { en: 'Treaty of Amritsar', pa: 'ਅੰਮ੍ਰਿਤਸਰ ਦੀ ਸੰਧੀ' }, description: { en: 'Maharaja Ranjit Singh signs a treaty with the British East India Company, fixing the Sutlej river as the boundary and securing decades of peace for the Sikh Empire.', pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਬ੍ਰਿਟਿਸ਼ ਈਸਟ ਇੰਡੀਆ ਕੰਪਨੀ ਨਾਲ ਸੰਧੀ ਤੇ ਦਸਤਖ਼ਤ ਕਰਦੇ ਹਨ।' } },
    { year: '1830', category: 'political', title: { en: 'Golden covering of Sri Harmandir Sahib completed', pa: 'ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਤੇ ਸੋਨੇ ਦੀ ਸੇਵਾ ਪੂਰੀ' }, description: { en: 'Under Maharaja Ranjit Singh\'s patronage, the upper floors of Sri Harmandir Sahib are covered in gold, giving rise to the popular name "Golden Temple."', pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦੀ ਸਰਪ੍ਰਸਤੀ ਹੇਠ, ਸ੍ਰੀ ਹਰਿਮੰਦਰ ਸਾਹਿਬ ਦੀਆਂ ਉੱਪਰਲੀਆਂ ਮੰਜ਼ਿਲਾਂ ਸੋਨੇ ਨਾਲ ਢੱਕੀਆਂ ਜਾਂਦੀਆਂ ਹਨ।' } },
    { year: '1839', category: 'political', title: { en: 'Death of Maharaja Ranjit Singh', pa: 'ਮਹਾਰਾਜਾ ਰਣਜੀਤ ਸਿੰਘ ਦਾ ਦੇਹਾਂਤ' }, description: { en: 'The "Lion of Punjab" dies in Lahore, leaving behind a unified, prosperous Sikh Empire that would fracture through succession disputes in the years that follow.', pa: '"ਸ਼ੇਰ-ਏ-ਪੰਜਾਬ" ਲਾਹੌਰ ਵਿੱਚ ਦੇਹਾਂਤ ਹੋ ਜਾਂਦੇ ਹਨ।' } },
    { year: '1845', category: 'battle', title: { en: 'First Anglo-Sikh War begins', pa: 'ਪਹਿਲੀ ਐਂਗਲੋ-ਸਿੱਖ ਜੰਗ ਸ਼ੁਰੂ' }, description: { en: 'Following years of instability after Ranjit Singh\'s death, war breaks out between the Sikh Empire and the British East India Company.', pa: 'ਰਣਜੀਤ ਸਿੰਘ ਦੇ ਦੇਹਾਂਤ ਤੋਂ ਬਾਅਦ ਦੇ ਅਸਥਿਰ ਸਾਲਾਂ ਮਗਰੋਂ, ਸਿੱਖ ਸਾਮਰਾਜ ਅਤੇ ਬ੍ਰਿਟਿਸ਼ ਵਿਚਕਾਰ ਜੰਗ ਛਿੜਦੀ ਹੈ।' } },
    { year: '1846', category: 'political', title: { en: 'Treaty of Lahore', pa: 'ਲਾਹੌਰ ਦੀ ਸੰਧੀ' }, description: { en: 'The Sikh Empire cedes significant territory and pays a war indemnity, and a British Resident is installed at Lahore, sharply curtailing Sikh sovereignty.', pa: 'ਸਿੱਖ ਸਾਮਰਾਜ ਵੱਡਾ ਇਲਾਕਾ ਸੌਂਪਦਾ ਹੈ ਅਤੇ ਜੰਗੀ ਹਰਜਾਨਾ ਭਰਦਾ ਹੈ।' } },
    { year: '1848', category: 'battle', title: { en: 'Second Anglo-Sikh War begins', pa: 'ਦੂਜੀ ਐਂਗਲੋ-ਸਿੱਖ ਜੰਗ ਸ਼ੁਰੂ' }, description: { en: 'A revolt against British-imposed terms escalates into a second war between the Sikh Empire and the East India Company.', pa: 'ਬ੍ਰਿਟਿਸ਼ ਵੱਲੋਂ ਥੋਪੀਆਂ ਸ਼ਰਤਾਂ ਵਿਰੁੱਧ ਬਗ਼ਾਵਤ ਦੂਜੀ ਜੰਗ ਵਿੱਚ ਬਦਲ ਜਾਂਦੀ ਹੈ।' } },
    { year: '1849', category: 'political', title: { en: 'Annexation of Punjab; end of the Sikh Empire', pa: 'ਪੰਜਾਬ ਦਾ ਕਬਜ਼ਾ; ਸਿੱਖ ਸਾਮਰਾਜ ਦਾ ਅੰਤ' }, description: { en: 'Following defeat in the Second Anglo-Sikh War, the British East India Company annexes Punjab, ending five decades of Sikh self-rule.', pa: 'ਦੂਜੀ ਐਂਗਲੋ-ਸਿੱਖ ਜੰਗ ਵਿੱਚ ਹਾਰ ਤੋਂ ਬਾਅਦ, ਬ੍ਰਿਟਿਸ਼ ਈਸਟ ਇੰਡੀਆ ਕੰਪਨੀ ਪੰਜਾਬ ਤੇ ਕਬਜ਼ਾ ਕਰ ਲੈਂਦੀ ਹੈ।' } },
  ],  onboarding: {
    welcomeTitle: { en: 'Welcome. Sat Sri Akal.', pa: 'ਜੀ ਆਇਆਂ ਨੂੰ। ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ।' },
    welcomeSubtitle: { en: 'Choose where to begin your journey.', pa: 'ਆਪਣੀ ਯਾਤਰਾ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਚੁਣੋ।' },
    modeTitle: { en: 'What would you like to explore?', pa: 'ਤੁਸੀਂ ਕੀ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹੋ?' },
    modes: [
      { id: 'start-here', icon: icons.khanda, title: { en: 'Start Here', pa: 'ਇੱਥੋਂ ਸ਼ੁਰੂ ਕਰੋ' }, description: { en: 'A guided first look at Sikh history and the Khalsa.', pa: 'ਸਿੱਖ ਇਤਿਹਾਸ ਅਤੇ ਖ਼ਾਲਸੇ ਬਾਰੇ ਮਾਰਗਦਰਸ਼ਿਤ ਪਹਿਲੀ ਝਲਕ।' } },
      { id: 'pyare', icon: icons.panjPyare, title: { en: 'Who were the Panj Pyare?', pa: 'ਪੰਜ ਪਿਆਰੇ ਕੌਣ ਸਨ?' }, description: { en: 'Five brave souls who gave their heads for the Khalsa.', pa: 'ਪੰਜ ਦਲੇਰ ਆਤਮਾਵਾਂ ਜਿਨ੍ਹਾਂ ਨੇ ਖ਼ਾਲਸੇ ਲਈ ਸਿਰ ਦਿੱਤਾ।' } },
      { id: 'takhts', icon: icons.panjTakht, title: { en: 'What are the Panj Takht?', pa: 'ਪੰਜ ਤਖ਼ਤ ਕੀ ਹਨ?' }, description: { en: 'Five sacred seats of Sikh authority across South Asia.', pa: 'ਦੱਖਣੀ ਏਸ਼ੀਆ ਵਿੱਚ ਸਿੱਖ ਅਧਿਕਾਰ ਦੇ ਪੰਜ ਪਵਿੱਤਰ ਅਸਥਾਨ।' } },
    ],
  },
};

export default displayContent;
