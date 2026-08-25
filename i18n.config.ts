export const i18n = {
  defaultLocale: "id",

  locales: ["id", "en", "ja"],

  localeData: {
    id: {
      name: "Bahasa Indonesia",
      shortName: "ID",
    },

    en: {
      name: "English",
      shortName: "EN",
    },

    ja: {
      name: "日本語",
      shortName: "JA",
    },
  },
} as const;

export type Locale = (typeof i18n.locales)[number];
