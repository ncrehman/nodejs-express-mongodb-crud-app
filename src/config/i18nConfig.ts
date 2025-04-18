import i18n from "i18next";
import Backend from "i18next-fs-backend";
import middleware from "i18next-http-middleware";
import path from "path";

i18n
  .use(Backend) // Use file system backend to load translations
  .use(middleware.LanguageDetector) // Detect language from request headers, query params, etc.
  .init({
    fallbackLng: "en", // Fallback language if a translation is missing
    preload: ["en", "et"], // Preload these languages
    backend: {
      loadPath: path.join(__dirname, "../locales/{{lng}}/translation.json"), // Translation files path
    },
    detection: {
      order: ["querystring", "header", "cookie"], // Priority for detecting language
      caches: ["cookie"], // Cache the language in cookies
    },
    interpolation: {
      escapeValue: false, // No need to escape HTML by default
    },
  });

export default i18n;
