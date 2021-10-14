import { useLocalStorage } from "../useStorage";
import * as translations from "./Translations/index";

export default function useTranslation() {
  const [language, setLanguage] = useLocalStorage("language", "fr");
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "fr"
  );

  const translate = (key) => {
    const keys = key.split(".");

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
}

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key];
  }, translations[language]);
}
