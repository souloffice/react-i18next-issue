import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from "./en/translation.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    defaultNS: "translation",
    resources: {
      en: {
        translation: EN,
      },
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language if translation for current language is missing
    interpolation: {
      escapeValue: false, // react already escapes by default
    },
  });

export { i18n };
