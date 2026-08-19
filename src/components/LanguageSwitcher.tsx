import React, { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: new (options: Record<string, unknown>, elementId: string) => unknown;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export type SupportedLanguage = 'en' | 'ar' | 'fr' | 'ru' | 'zh-CN';

export const LANGUAGES: Array<{
  code: SupportedLanguage;
  shortCode: string;
  flag: string;
  label: string;
}> = [
  { code: 'en', shortCode: 'EN', flag: '🇬🇧', label: 'English' },
  { code: 'ar', shortCode: 'AR', flag: '🇦🇪', label: 'العربية' },
  { code: 'fr', shortCode: 'FR', flag: '🇫🇷', label: 'Français' },
  { code: 'ru', shortCode: 'RU', flag: '🇷🇺', label: 'Русский' },
  { code: 'zh-CN', shortCode: 'ZH', flag: '🇨🇳', label: '中文' },
];

const LANGUAGE_STORAGE_KEY = 'timgad-language';
const GOOGLE_SCRIPT_ID = 'google-translate-script';

const getSavedLanguage = (): SupportedLanguage => {
  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (LANGUAGES.some((language) => language.code === saved)) {
    return saved as SupportedLanguage;
  }

  const cookieMatch = document.cookie.match(/(?:^|; )googtrans=\/en\/([^;]+)/);
  const cookieLanguage = cookieMatch?.[1] as SupportedLanguage | undefined;
  return LANGUAGES.some((language) => language.code === cookieLanguage) ? cookieLanguage : 'en';
};

const setLanguageCookie = (language: SupportedLanguage) => {
  const cookiePaths = ['/', '/TIMGAD/'];
  if (language === 'en') {
    cookiePaths.forEach((path) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
    });
    return;
  }
  cookiePaths.forEach((path) => {
    document.cookie = `googtrans=/en/${language}; path=${path}; max-age=31536000; SameSite=Lax`;
  });
};

const updateDocumentLanguage = (language: SupportedLanguage) => {
  const isArabic = language === 'ar';
  document.documentElement.lang = language === 'zh-CN' ? 'zh-CN' : language;
  document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  document.body.classList.toggle('timgad-rtl', isArabic);
};

const applyGoogleLanguage = (language: SupportedLanguage, force = false) => {
  const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
  const googleValue = language === 'en' ? '' : language;
  const optionExists = select && Array.from(select.options).some((option) => option.value === googleValue);
  if (!select || !optionExists) {
    return false;
  }

  if (force || select.value !== googleValue) {
    select.value = googleValue;
    select.dispatchEvent(new Event('change'));
  }
  return true;
};

export const setSiteLanguage = (language: SupportedLanguage) => {
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  setLanguageCookie(language);
  updateDocumentLanguage(language);
  window.dispatchEvent(new CustomEvent('timgad-language-change', { detail: language }));
  window.location.reload();
};

export const GoogleTranslateBridge: React.FC<{ pathname: string }> = ({ pathname }) => {
  useEffect(() => {
    const language = getSavedLanguage();
    updateDocumentLanguage(language);

    const initializeGoogleTranslate = () => {
      if (!window.google?.translate?.TranslateElement) {
        return;
      }
      const element = document.getElementById('google_translate_element');
      if (element && !element.hasChildNodes()) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'ar,fr,ru,zh-CN',
            autoDisplay: false,
          },
          'google_translate_element',
        );
      }
      window.setTimeout(() => applyGoogleLanguage(getSavedLanguage()), 100);
    };

    window.googleTranslateElementInit = initializeGoogleTranslate;

    if (!document.getElementById(GOOGLE_SCRIPT_ID)) {
      const script = document.createElement('script');
      script.id = GOOGLE_SCRIPT_ID;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);
    } else {
      initializeGoogleTranslate();
    }

    return undefined;
  }, []);

  useEffect(() => {
    const language = getSavedLanguage();
    updateDocumentLanguage(language);
    const retry = window.setTimeout(() => applyGoogleLanguage(language, true), 150);
    return () => window.clearTimeout(retry);
  }, [pathname]);

  return <div id="google_translate_element" aria-hidden="true" />;
};

interface LanguageSwitcherProps {
  mobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ mobile = false }) => {
  const [language, setLanguage] = useState<SupportedLanguage>(() => getSavedLanguage());
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = LANGUAGES.find((item) => item.code === language) || LANGUAGES[0];

  useEffect(() => {
    const syncLanguage = (event: Event) => {
      const nextLanguage = (event as CustomEvent<SupportedLanguage>).detail;
      if (LANGUAGES.some((item) => item.code === nextLanguage)) {
        setLanguage(nextLanguage);
      }
    };
    const handleOutsideClick = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('timgad-language-change', syncLanguage);
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('timgad-language-change', syncLanguage);
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (nextLanguage: SupportedLanguage) => {
    setLanguage(nextLanguage);
    setIsOpen(false);
    setSiteLanguage(nextLanguage);
  };

  return (
    <div ref={rootRef} className={cn('notranslate relative', mobile ? 'w-full' : '')} translate="no">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Select website language"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={cn(
          'flex min-h-10 items-center gap-2 border border-white/10 px-3 text-[10px] font-bold tracking-[0.2em] text-gray-300 transition-colors hover:border-gold/50 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold',
          mobile ? 'w-full justify-between py-3' : 'rounded-sm',
        )}
      >
        <span className="flex items-center gap-2"><Globe2 size={14} className="text-gold" />{selected.flag} {selected.shortCode}</span>
        <ChevronDown size={14} className={cn('text-gold transition-transform', isOpen && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            role="listbox"
            aria-label="Website languages"
            className={cn(
              'absolute z-[60] mt-2 min-w-52 rounded-sm border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-xl',
              mobile ? 'left-0 right-0' : 'right-0',
            )}
          >
            {LANGUAGES.map((item) => (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={language === item.code}
                onClick={() => handleSelect(item.code)}
                className="flex min-h-11 w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm font-medium text-white transition-colors hover:bg-white/5 hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              >
                <span className="flex items-center gap-3"><span aria-hidden="true">{item.flag}</span><span>{item.label}</span></span>
                {language === item.code && <Check size={15} className="shrink-0 text-gold" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
