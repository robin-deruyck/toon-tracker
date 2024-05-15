import { Menu } from '@mantine/core'
import { IconPencil } from '@tabler/icons-react'
import { modals } from '@mantine/modals'
import { useCardWebtoon } from '@/components/WebtoonCard/WebtoonCardContext.tsx'
import { WebtoonForm } from '@/components/WebtoonForm'
import { useTranslate } from '@/i18n/useTranslate.ts'
import { globalTranslate } from '@/utils/globalTranslate.ts'

export const WebtoonCardHeaderMenuEdit = () => {
  const { webtoon } = useCardWebtoon()
  const translations = useTranslate(globalTranslate)

  const openEditModal = () =>
    modals.open({
      modalId: 'edit',
      title: `${translations.edit} ${webtoon.name}`,
      centered: true,
      children: (
        <WebtoonForm
          webtoon={webtoon}
          onSubmit={() => modals.close('edit')}
        />
      )
    })
  return (
    <Menu.Item
      leftSection={<IconPencil size={14} />}
      onClick={openEditModal}
    >
      {translations.edit}
    </Menu.Item>
  )
}
