import i18next, { TFunction } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import english from './en.json'
import french from './fr.json'

export let translate: TFunction<'translation', undefined> = null as any

export const setupI18n = async () => {
  // TODO : put debug mode only in dev
  await i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      debug: true,
      resources: {
        en: { translation: english },
        fr: { translation: french }
      },
      fallbackLng: 'en'
    })

  translate = i18next.t
}
