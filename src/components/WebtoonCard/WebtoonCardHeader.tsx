import { ActionIcon, Group, Menu } from '@mantine/core'
import { IconDots } from '@tabler/icons-react'
import { WebtoonCardHeaderMenuDelete } from '@/components/WebtoonCard/WebtoonCardHeaderMenuDelete.tsx'
import { WebtoonCardHeaderMenuFavorite } from '@/components/WebtoonCard/WebtoonCardHeaderMenuFavorite.tsx'
import { WebtoonCardHeaderMenuEdit } from '@/components/WebtoonCard/WebtoonCardHeaderMenuEdit.tsx'

export const WebtoonCardHeader = () => {
  return (
    <Group
      justify="space-between"
      pb="sm"
    >
      <div />
      <Menu
        withinPortal
        position="bottom-end"
        shadow="sm"
      >
        <Menu.Target>
          <ActionIcon
            variant="subtle"
            color="gray"
          >
            <IconDots size={16} />
          </ActionIcon>
        </Menu.Target>

        <Menu.Dropdown>
          <WebtoonCardHeaderMenuEdit />
          <WebtoonCardHeaderMenuFavorite />
          <WebtoonCardHeaderMenuDelete />
        </Menu.Dropdown>
      </Menu>
    </Group>
  )
}
