import { useTranslation } from 'react-i18next'
// TODO: update ustranslate to handle placeholders
export const useTranslate = <T extends Record<string, string>>(translationKeys: T) => {
  const { t } = useTranslation()

  return Object.keys(translationKeys).reduce((acc, key) => {
    // @ts-expect-error we not what we are doing
    acc[key] = t(translationKeys[key])
    return acc
  }, {} as T)
}
