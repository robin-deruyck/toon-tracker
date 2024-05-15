import { Badge, Flex, Group, Text } from '@mantine/core'
import { LanguageSelector } from '../LanguageSelector'
import { DarkModeSwitchButton } from '../DarkModeSwitchButton'

export const Header = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
    >
      <Group gap="xs">
        <Text>ToonTracker</Text>
        <Badge>{import.meta.env.VITE_REACT_APP_VERSION}</Badge>
      </Group>

      <Group gap="sm">
        <DarkModeSwitchButton />
        <LanguageSelector />
      </Group>
    </Flex>
  )
}
