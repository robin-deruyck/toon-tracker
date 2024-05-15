import cx from 'clsx'
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'
import classes from './DarkModeSwitchButton.module.css'
import { useTranslate } from '@/i18n/useTranslate.ts'
import { darkModeSwitchButtonTranslate } from '@/components/DarkModeSwitchButton/DarkModeSwitchButton.translate.ts'

export const DarkModeSwitchButton = () => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })
  const isLightmode = computedColorScheme === 'light'
  const toggleMode = () => setColorScheme(isLightmode ? 'dark' : 'light')
  const Icon = isLightmode ? IconMoon : IconSun

  const { ariaLabelToDark, ariaLabelToLight } = useTranslate(darkModeSwitchButtonTranslate)
  return (
    <ActionIcon
      onClick={toggleMode}
      variant="default"
      size="lg"
      radius="xl"
      aria-label={isLightmode ? ariaLabelToDark : ariaLabelToLight}
    >
      <Icon
        className={cx(classes.icon)}
        stroke={1.5}
      />
    </ActionIcon>
  )
}
