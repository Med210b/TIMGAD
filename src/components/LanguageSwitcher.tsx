import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (
          options: Record<string, unknown>,
          elementId: string
        ) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
    __timgadGoogleTranslateInitialized?: boolean;
    __timgadGoogleTranslateLoading?: boolean;
  }
}

export type SupportedLanguage = 'en' | 'ar' | 'fr' | 'ru' | 'zh-CN';

export const LANGUAGES: Array<{
  code: SupportedLanguage;
  shortCode: string;
  flag: string;
  label: string;
}> = [
  {
    code: 'en',
    shortCode: 'EN',
    flag: '🇬🇧',
    label: 'English',
  },
  {
    code: 'ar',
    shortCode: 'AR',
    flag: '🇦🇪',
    label: 'العربية',
  },
  {
    code: 'fr',
    shortCode: 'FR',
    flag: '🇫🇷',
    label: 'Français',
  },
  {
    code: 'ru',
    shortCode: 'RU',
    flag: '🇷🇺',
    label: 'Русский',
  },
  {
    code: 'zh-CN',
    shortCode: 'ZH',
    flag: '🇨🇳',
    label: '中文',
  },
];

const LANGUAGE_STORAGE_KEY = 'timgad-language';
const GOOGLE_SCRIPT_ID = 'google-translate-script';
const GOOGLE_ELEMENT_ID = 'google_translate_element';

const GOOGLE_LANGUAGE_CODES: Record<SupportedLanguage, string> = {
  en: '',
  ar: 'ar',
  fr: 'fr',
  ru: 'ru',
  'zh-CN': 'zh-CN',
};

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL || '/';

  if (baseUrl === '/') {
    return '/';
  }

  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
};

const getSavedLanguage = (): SupportedLanguage => {
  try {
    const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (LANGUAGES.some((language) => language.code === saved)) {
      return saved as SupportedLanguage;
    }
  } catch {
    // Ignore localStorage errors.
  }

  const cookieMatch = document.cookie.match(
    /(?:^|;\s*)googtrans=\/en\/([^;]+)/
  );

  const cookieLanguage = cookieMatch?.[1] as
    | SupportedLanguage
    | undefined;

  if (
    cookieLanguage &&
    LANGUAGES.some((language) => language.code === cookieLanguage)
  ) {
    return cookieLanguage;
  }

  return 'en';
};

const setStoredLanguage = (language: SupportedLanguage) => {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Ignore localStorage errors.
  }
};

const removeStoredLanguage = () => {
  try {
    window.localStorage.removeItem(LANGUAGE_STORAGE_KEY);
  } catch {
    // Ignore localStorage errors.
  }
};

const setLanguageCookie = (language: SupportedLanguage) => {
  const basePath = getBasePath();

  const paths = Array.from(
    new Set([
      '/',
      basePath,
      '/TIMGAD/',
      '/TIMGAD',
    ])
  );

  if (language === 'en') {
    paths.forEach((path) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
    });

    return;
  }

  paths.forEach((path) => {
    document.cookie = `googtrans=/en/${language}; path=${path}; max-age=31536000; SameSite=Lax`;
  });
};

const updateDocumentLanguage = (language: SupportedLanguage) => {
  const isArabic = language === 'ar';

  document.documentElement.lang =
    language === 'zh-CN' ? 'zh-CN' : language;

  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';

  document.body.classList.toggle('timgad-rtl', isArabic);
};

const injectGoogleTranslateStyles = () => {
  const styleId = 'timgad-google-translate-styles';

  if (document.getElementById(styleId)) {
    return;
  }

  const style = document.createElement('style');
  style.id = styleId;

  style.textContent = `
    /*
     * Keep the Google Translate engine available,
     * but hide its user-facing controls.
     */

    #${GOOGLE_ELEMENT_ID} {
      position: fixed !important;
      left: -10000px !important;
      top: -10000px !important;
      width: 1px !important;
      height: 1px !important;
      overflow: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      z-index: -1 !important;
    }

    .goog-te-banner-frame,
    iframe.goog-te-banner-frame,
    .skiptranslate > iframe.goog-te-banner-frame,
    body > .skiptranslate {
      display: none !important;
      visibility: hidden !important;
      height: 0 !important;
      max-height: 0 !important;
    }

    body {
      top: 0 !important;
    }

    .goog-tooltip,
    .goog-tooltip:hover {
      display: none !important;
    }

    .goog-text-highlight {
      background: transparent !important;
      box-shadow: none !important;
    }

    .goog-te-balloon-frame {
      display: none !important;
    }

    .goog-te-gadget {
      font-size: 0 !important;
    }

    .goog-te-gadget .goog-te-combo {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }

    .timgad-rtl {
      direction: rtl;
    }
  `;

  document.head.appendChild(style);
};

const getGoogleSelect = () => {
  return document.querySelector<HTMLSelectElement>('.goog-te-combo');
};

const waitForGoogleSelect = async (
  timeout = 15000
): Promise<HTMLSelectElement | null> => {
  const startedAt = Date.now();

  while (Date.now() - startedAt < timeout) {
    const select = getGoogleSelect();

    if (select && select.options.length > 0) {
      return select;
    }

    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 150);
    });
  }

  return null;
};

const applyGoogleLanguage = async (
  language: SupportedLanguage,
  force = false
): Promise<boolean> => {
  const select = await waitForGoogleSelect();

  if (!select) {
    return false;
  }

  const googleValue = GOOGLE_LANGUAGE_CODES[language];

  const optionExists = Array.from(select.options).some(
    (option) => option.value === googleValue
  );

  if (!optionExists) {
    return false;
  }

  if (force || select.value !== googleValue) {
    select.value = googleValue;

    select.dispatchEvent(
      new Event('change', {
        bubbles: true,
      })
    );
  }

  return true;
};

const waitAndApplyLanguage = async (
  language: SupportedLanguage
): Promise<boolean> => {
  /*
   * Google Translate may initialize at different speeds depending
   * on network conditions. Keep trying instead of using a fixed
   * 100ms / 150ms timeout.
   */

  const maxAttempts = 60;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const applied = await applyGoogleLanguage(language, true);

    if (applied) {
      return true;
    }

    await new Promise<void>((resolve) => {
      window.setTimeout(resolve, 250);
    });
  }

  return false;
};

const clearGoogleTranslateCookies = () => {
  const basePath = getBasePath();

  const paths = Array.from(
    new Set([
      '/',
      basePath,
      '/TIMGAD/',
      '/TIMGAD',
    ])
  );

  paths.forEach((path) => {
    document.cookie =
      `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;

    document.cookie =
      `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}; domain=${window.location.hostname}`;
  });
};

export const setSiteLanguage = async (
  language: SupportedLanguage
) => {
  setStoredLanguage(language);
  updateDocumentLanguage(language);

  window.dispatchEvent(
    new CustomEvent<SupportedLanguage>(
      'timgad-language-change',
      {
        detail: language,
      }
    )
  );

  /*
   * English is the original/source language.
   * Clear Google Translate's cookie and reload.
   */
  if (language === 'en') {
    removeStoredLanguage();
    clearGoogleTranslateCookies();
    updateDocumentLanguage('en');

    window.location.reload();
    return;
  }

  /*
   * Save the Google Translate cookie before trying the live selector.
   * This is especially important on GitHub Pages.
   */
  setLanguageCookie(language);

  /*
   * First try to translate immediately if Google is already ready.
   */
  const appliedImmediately = await applyGoogleLanguage(
    language,
    true
  );

  if (appliedImmediately) {
    return;
  }

  /*
   * If Google has not finished loading, wait for it.
   */
  const appliedAfterWaiting = await waitAndApplyLanguage(
    language
  );

  if (appliedAfterWaiting) {
    return;
  }

  /*
   * Final fallback:
   * Google Translate can pick up the googtrans cookie on reload.
   */
  window.location.reload();
};

const initializeGoogleTranslate = () => {
  if (!window.google?.translate?.TranslateElement) {
    return false;
  }

  const element = document.getElementById(
    GOOGLE_ELEMENT_ID
  );

  if (!element) {
    return false;
  }

  if (!element.hasChildNodes()) {
    try {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'ar,fr,ru,zh-CN',
          autoDisplay: false,
          multilanguagePage: true,
        },
        GOOGLE_ELEMENT_ID
      );
    } catch (error) {
      console.error(
        'TIMGAD Google Translate initialization failed:',
        error
      );

      return false;
    }
  }

  window.__timgadGoogleTranslateInitialized = true;

  return true;
};

const loadGoogleTranslateScript = () => {
  /*
   * If Google's API is already available, initialize directly.
   */
  if (window.google?.translate?.TranslateElement) {
    initializeGoogleTranslate();
    return;
  }

  /*
   * Always register the callback BEFORE loading the script.
   */
  window.googleTranslateElementInit = () => {
    initializeGoogleTranslate();
  };

  const existingScript =
    document.getElementById(GOOGLE_SCRIPT_ID);

  if (existingScript) {
    return;
  }

  if (window.__timgadGoogleTranslateLoading) {
    return;
  }

  window.__timgadGoogleTranslateLoading = true;

  const script = document.createElement('script');

  script.id = GOOGLE_SCRIPT_ID;
  script.src =
    'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;

  script.onerror = () => {
    window.__timgadGoogleTranslateLoading = false;

    console.error(
      'TIMGAD: Google Translate script could not be loaded.'
    );
  };

  document.head.appendChild(script);
};

export const GoogleTranslateBridge: React.FC<{
  pathname: string;
}> = ({ pathname }) => {
  useEffect(() => {
    injectGoogleTranslateStyles();

    const language = getSavedLanguage();

    updateDocumentLanguage(language);

    /*
     * The callback must exist before Google's script loads.
     */
    window.googleTranslateElementInit = () => {
      initializeGoogleTranslate();

      /*
       * Apply the saved language once Google's select exists.
       */
      if (language !== 'en') {
        void waitAndApplyLanguage(language);
      }
    };

    loadGoogleTranslateScript();

    /*
     * If the script was already loaded, keep checking until
     * Google has created its select element.
     */
    let cancelled = false;

    const initializeAndApply = async () => {
      for (let attempt = 0; attempt < 60; attempt += 1) {
        if (cancelled) {
          return;
        }

        initializeGoogleTranslate();

        if (language === 'en') {
          return;
        }

        const applied = await applyGoogleLanguage(
          language,
          true
        );

        if (applied) {
          return;
        }

        await new Promise<void>((resolve) => {
          window.setTimeout(resolve, 250);
        });
      }
    };

    void initializeAndApply();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * When React changes route, make sure the selected language
   * remains applied to newly rendered content.
   */
  useEffect(() => {
    let cancelled = false;

    const reapplyAfterNavigation = async () => {
      const language = getSavedLanguage();

      updateDocumentLanguage(language);

      if (language === 'en') {
        return;
      }

      /*
       * Give React time to render the new page.
       */
      await new Promise<void>((resolve) => {
        window.setTimeout(resolve, 100);
      });

      if (cancelled) {
        return;
      }

      await waitAndApplyLanguage(language);
    };

    void reapplyAfterNavigation();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return (
    <div
      id={GOOGLE_ELEMENT_ID}
      aria-hidden="true"
      translate="no"
    />
  );
};

interface LanguageSwitcherProps {
  mobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  mobile = false,
}) => {
  const [language, setLanguage] =
    useState<SupportedLanguage>(() =>
      getSavedLanguage()
    );

  const [isOpen, setIsOpen] = useState(false);

  const [isChanging, setIsChanging] =
    useState(false);

  const rootRef = useRef<HTMLDivElement>(null);

  const selected =
    LANGUAGES.find(
      (item) => item.code === language
    ) || LANGUAGES[0];

  useEffect(() => {
    const syncLanguage = (event: Event) => {
      const nextLanguage =
        (event as CustomEvent<SupportedLanguage>)
          .detail;

      if (
        LANGUAGES.some(
          (item) => item.code === nextLanguage
        )
      ) {
        setLanguage(nextLanguage);
      }
    };

    const handleOutsideClick = (
      event: MouseEvent
    ) => {
      if (
        rootRef.current &&
        !rootRef.current.contains(
          event.target as Node
        )
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      'timgad-language-change',
      syncLanguage
    );

    document.addEventListener(
      'mousedown',
      handleOutsideClick
    );

    document.addEventListener(
      'keydown',
      handleEscape
    );

    return () => {
      window.removeEventListener(
        'timgad-language-change',
        syncLanguage
      );

      document.removeEventListener(
        'mousedown',
        handleOutsideClick
      );

      document.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, []);

  const handleSelect = async (
    nextLanguage: SupportedLanguage
  ) => {
    if (isChanging || nextLanguage === language) {
      setIsOpen(false);
      return;
    }

    setLanguage(nextLanguage);
    setIsOpen(false);
    setIsChanging(true);

    try {
      await setSiteLanguage(nextLanguage);
    } finally {
      setIsChanging(false);
    }
  };

  return (
    <div
      ref={rootRef}
      className={cn(
        'notranslate relative',
        mobile ? 'w-full' : ''
      )}
      translate="no"
    >
      <button
        type="button"
        onClick={() =>
          setIsOpen((open) => !open)
        }
        disabled={isChanging}
        aria-label="Select website language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={cn(
          'flex min-h-10 items-center gap-2 border border-white/10 px-3 text-[10px] font-bold tracking-[0.2em] text-gray-300 transition-colors hover:border-gold/50 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold disabled:cursor-wait disabled:opacity-70',
          mobile
            ? 'w-full justify-between py-3'
            : 'rounded-sm'
        )}
      >
        <span className="flex items-center gap-2">
          <Globe2
            size={14}
            className="text-gold"
          />

          <span>
            {selected.flag} {selected.shortCode}
          </span>
        </span>

        <ChevronDown
          size={14}
          className={cn(
            'text-gold transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -6,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -6,
            }}
            role="listbox"
            aria-label="Website languages"
            className={cn(
              'absolute z-[60] mt-2 min-w-52 rounded-sm border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-xl',
              mobile
                ? 'left-0 right-0'
                : 'right-0'
            )}
          >
            {LANGUAGES.map((item) => (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={
                  language === item.code
                }
                onClick={() =>
                  void handleSelect(
                    item.code
                  )
                }
                disabled={isChanging}
                className="flex min-h-11 w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold disabled:cursor-wait disabled:opacity-60"
              >
                <span className="flex items-center gap-3">
                  <span aria-hidden="true">
                    {item.flag}
                  </span>

                  <span>
                    {item.label}
                  </span>
                </span>

                {language === item.code && (
                  <Check
                    size={15}
                    className="shrink-0 text-gold"
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;