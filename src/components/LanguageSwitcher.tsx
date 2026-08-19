import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Check,
  ChevronDown,
  Globe2,
} from 'lucide-react';

import {
  motion,
  AnimatePresence,
} from 'motion/react';

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

    __timgadGoogleTranslateReady?: boolean;
  }
}

export type SupportedLanguage =
  | 'en'
  | 'ar'
  | 'fr'
  | 'ru'
  | 'zh-CN';

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

const STORAGE_KEY =
  'timgad-language';

const GOOGLE_COOKIE =
  'googtrans';

const getSavedLanguage =
  (): SupportedLanguage => {
    try {
      const stored =
        localStorage.getItem(
          STORAGE_KEY
        );

      if (
        LANGUAGES.some(
          (language) =>
            language.code === stored
        )
      ) {
        return stored as SupportedLanguage;
      }
    } catch {
      // Ignore storage errors.
    }

    const match =
      document.cookie.match(
        /(?:^|;\s*)googtrans=\/en\/([^;]+)/
      );

    if (match?.[1]) {
      const cookieLanguage =
        match[1] as SupportedLanguage;

      if (
        LANGUAGES.some(
          (language) =>
            language.code ===
            cookieLanguage
        )
      ) {
        return cookieLanguage;
      }
    }

    return 'en';
  };

const setStoredLanguage = (
  language: SupportedLanguage
) => {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      language
    );
  } catch {
    // Ignore storage errors.
  }
};

const updateDocumentDirection = (
  language: SupportedLanguage
) => {
  const arabic =
    language === 'ar';

  document.documentElement.lang =
    language === 'zh-CN'
      ? 'zh-CN'
      : language;

  document.documentElement.dir =
    arabic ? 'rtl' : 'ltr';

  document.body.classList.toggle(
    'timgad-rtl',
    arabic
  );
};

const clearGoogleCookie = () => {
  const paths = [
    '/',
    '/TIMGAD',
    '/TIMGAD/',
  ];

  paths.forEach((path) => {
    document.cookie =
      `${GOOGLE_COOKIE}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
  });
};

const setGoogleCookie = (
  language: SupportedLanguage
) => {
  const paths = [
    '/',
    '/TIMGAD',
    '/TIMGAD/',
  ];

  paths.forEach((path) => {
    document.cookie =
      `${GOOGLE_COOKIE}=/en/${language}; path=${path}; max-age=31536000; SameSite=Lax`;
  });
};

const getGoogleSelect =
  (): HTMLSelectElement | null => {
    return document.querySelector(
      '.goog-te-combo'
    );
  };

const waitForGoogleSelect =
  async (
    timeout = 20000
  ): Promise<HTMLSelectElement | null> => {
    const start =
      Date.now();

    while (
      Date.now() - start <
      timeout
    ) {
      const select =
        getGoogleSelect();

      if (
        select &&
        select.options.length > 0
      ) {
        return select;
      }

      await new Promise<void>(
        (resolve) =>
          window.setTimeout(
            resolve,
            200
          )
      );
    }

    return null;
  };

const changeGoogleLanguage =
  async (
    language: SupportedLanguage
  ) => {
    if (language === 'en') {
      clearGoogleCookie();

      try {
        localStorage.removeItem(
          STORAGE_KEY
        );
      } catch {
        // Ignore.
      }

      updateDocumentDirection(
        'en'
      );

      window.location.reload();

      return;
    }

    setStoredLanguage(
      language
    );

    setGoogleCookie(
      language
    );

    updateDocumentDirection(
      language
    );

    const select =
      await waitForGoogleSelect();

    if (!select) {
      /*
       * Google has not finished loading.
       * The cookie is already set, so reload
       * and let Google Translate read it.
       */
      window.location.reload();
      return;
    }

    const value =
      language;

    const option =
      Array.from(
        select.options
      ).find(
        (item) =>
          item.value === value
      );

    if (!option) {
      /*
       * The Google widget exists but hasn't
       * populated its language options yet.
       */
      window.location.reload();
      return;
    }

    select.value =
      value;

    select.dispatchEvent(
      new Event(
        'change',
        {
          bubbles: true,
        }
      )
    );
  };

export const GoogleTranslateBridge: React.FC<{
  pathname: string;
}> = ({ pathname }) => {
  useEffect(() => {
    /*
     * Hide Google's visual controls,
     * while keeping its engine active.
     */
    const styleId =
      'timgad-google-translate-style';

    if (
      !document.getElementById(
        styleId
      )
    ) {
      const style =
        document.createElement(
          'style'
        );

      style.id = styleId;

      style.textContent = `
        #google_translate_element {
          position: fixed !important;
          width: 1px !important;
          height: 1px !important;
          left: -10000px !important;
          top: -10000px !important;
          opacity: 0 !important;
          pointer-events: none !important;
          overflow: hidden !important;
          z-index: -9999 !important;
        }

        .goog-te-banner-frame,
        iframe.goog-te-banner-frame,
        body > .skiptranslate {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          max-height: 0 !important;
        }

        body {
          top: 0 !important;
        }

        .goog-te-gadget {
          font-size: 0 !important;
        }

        .goog-te-combo {
          width: 1px !important;
          height: 1px !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }

        .goog-tooltip {
          display: none !important;
        }

        .goog-text-highlight {
          background: transparent !important;
          box-shadow: none !important;
        }

        .timgad-rtl {
          direction: rtl;
        }
      `;

      document.head.appendChild(
        style
      );
    }

    const language =
      getSavedLanguage();

    updateDocumentDirection(
      language
    );

    /*
     * If a language was already selected,
     * wait for Google and reapply it.
     */
    if (
      language !== 'en'
    ) {
      let cancelled =
        false;

      const applySavedLanguage =
        async () => {
          const select =
            await waitForGoogleSelect(
              20000
            );

          if (
            cancelled ||
            !select
          ) {
            return;
          }

          const option =
            Array.from(
              select.options
            ).find(
              (item) =>
                item.value ===
                language
            );

          if (!option) {
            return;
          }

          select.value =
            language;

          select.dispatchEvent(
            new Event(
              'change',
              {
                bubbles: true,
              }
            )
          );
        };

      void applySavedLanguage();

      return () => {
        cancelled = true;
      };
    }

    return undefined;
  }, []);

  /*
   * Reapply the selected language after
   * React route changes.
   */
  useEffect(() => {
    const language =
      getSavedLanguage();

    updateDocumentDirection(
      language
    );

    if (
      language === 'en'
    ) {
      return;
    }

    const timer =
      window.setTimeout(
        async () => {
          const select =
            await waitForGoogleSelect(
              10000
            );

          if (!select) {
            return;
          }

          const option =
            Array.from(
              select.options
            ).find(
              (item) =>
                item.value ===
                language
            );

          if (!option) {
            return;
          }

          select.value =
            language;

          select.dispatchEvent(
            new Event(
              'change',
              {
                bubbles: true,
              }
            )
          );
        },
        300
      );

    return () =>
      window.clearTimeout(
        timer
      );
  }, [pathname]);

  return null;
};

interface LanguageSwitcherProps {
  mobile?: boolean;
}

const LanguageSwitcher: React.FC<
  LanguageSwitcherProps
> = ({
  mobile = false,
}) => {
  const [
    language,
    setLanguage,
  ] =
    useState<SupportedLanguage>(
      getSavedLanguage
    );

  const [
    isOpen,
    setIsOpen,
  ] =
    useState(false);

  const [
    isChanging,
    setIsChanging,
  ] =
    useState(false);

  const rootRef =
    useRef<HTMLDivElement>(
      null
    );

  const selected =
    LANGUAGES.find(
      (item) =>
        item.code ===
        language
    ) ||
    LANGUAGES[0];

  useEffect(() => {
    const handleOutside =
      (event: MouseEvent) => {
        if (
          rootRef.current &&
          !rootRef.current.contains(
            event.target as Node
          )
        ) {
          setIsOpen(false);
        }
      };

    const handleEscape =
      (event: KeyboardEvent) => {
        if (
          event.key ===
          'Escape'
        ) {
          setIsOpen(false);
        }
      };

    document.addEventListener(
      'mousedown',
      handleOutside
    );

    document.addEventListener(
      'keydown',
      handleEscape
    );

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutside
      );

      document.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, []);

  const handleLanguage =
    async (
      nextLanguage: SupportedLanguage
    ) => {
      if (
        isChanging
      ) {
        return;
      }

      setIsOpen(false);

      if (
        nextLanguage ===
        language
      ) {
        return;
      }

      setLanguage(
        nextLanguage
      );

      setIsChanging(
        true
      );

      try {
        await changeGoogleLanguage(
          nextLanguage
        );
      } finally {
        setIsChanging(
          false
        );
      }
    };

  return (
    <div
      ref={rootRef}
      className={cn(
        'notranslate relative',
        mobile &&
          'w-full'
      )}
      translate="no"
    >
      <button
        type="button"
        disabled={
          isChanging
        }
        onClick={() =>
          setIsOpen(
            (value) =>
              !value
          )
        }
        aria-label="Select website language"
        aria-expanded={
          isOpen
        }
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
            {selected.flag}{' '}
            {selected.shortCode}
          </span>
        </span>

        <ChevronDown
          size={14}
          className={cn(
            'text-gold transition-transform',
            isOpen &&
              'rotate-180'
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
            className={cn(
              'absolute z-[9999] mt-2 min-w-52 rounded-sm border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-xl',
              mobile
                ? 'left-0 right-0'
                : 'right-0'
            )}
          >
            {LANGUAGES.map(
              (item) => (
                <button
                  key={
                    item.code
                  }
                  type="button"
                  role="option"
                  aria-selected={
                    language ===
                    item.code
                  }
                  disabled={
                    isChanging
                  }
                  onClick={() =>
                    void handleLanguage(
                      item.code
                    )
                  }
                  className="flex min-h-11 w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold disabled:cursor-wait disabled:opacity-60"
                >
                  <span className="flex items-center gap-3">
                    <span>
                      {
                        item.flag
                      }
                    </span>

                    <span>
                      {
                        item.label
                      }
                    </span>
                  </span>

                  {language ===
                    item.code && (
                    <Check
                      size={
                        15
                      }
                      className="text-gold"
                    />
                  )}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;