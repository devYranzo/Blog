import es from "./es";
import en from "./en";
import eu from "./eu";

const translations = {
  es,
  en,
  eu,
};

export type Locale = keyof typeof translations;

export function getTranslations(lang: Locale) {
  return translations[lang];
}
