export const languages: { code: string; language: string }[] = [
  {
    code: 'es',
    language: 'Español',
  },
  {
    code: 'en',
    language: 'English',
  },
  {
    code: 'fr',
    language: 'Français',
  },
].sort((a, b) => (a.language > b.language ? 1 : -1))
