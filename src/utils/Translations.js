import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_EN } from './Languages/en';
import { TRANSLATIONS_UA } from './Languages/ua';
 
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: TRANSLATIONS_EN
        },
        ua: {
          translation: TRANSLATIONS_UA
        },
      }
    });
export default i18n

