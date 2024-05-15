import { Button, Menu } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { languageSelectorTranslate } from '@/components/LanguageSelector/LanguageSelector.translate.ts'
import { useTranslate } from '@/i18n/useTranslate.ts'

export const LanguageSelector = () => {
  const { i18n } = useTranslation()
  // i18n.language == 4 digits language (fr-FR)
  const language = i18n.language?.toUpperCase().split('-')[0] ?? 'EN'
  const { ariaLabelSelectFrench, ariaLabelSelectEnglish, ariaLabelSelectedEnglish, ariaLabelSelectedFrench } =
    useTranslate(languageSelectorTranslate)

  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      trigger="click-hover"
      withinPortal
    >
      <Menu.Target>
        <Button
          variant="default"
          size="xs"
          radius="xl"
          aria-label={language === 'EN' ? ariaLabelSelectedEnglish : ariaLabelSelectedFrench}
        >
          {language}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          aria-label={ariaLabelSelectFrench}
          onClick={() => i18n.changeLanguage('fr')}
        >
          FR
        </Menu.Item>
        <Menu.Item
          aria-label={ariaLabelSelectEnglish}
          onClick={() => i18n.changeLanguage('en')}
        >
          EN
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
