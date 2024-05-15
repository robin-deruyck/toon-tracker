import { Menu, Text } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import { useWebtoonStore } from '@/store/webtoons.ts'
import { modals } from '@mantine/modals'
import { useCardWebtoon } from '@/components/WebtoonCard/WebtoonCardContext.tsx'
import { webtoonCardTranslate } from '@/components/WebtoonCard/WebtoonCard.translate.ts'
import { useTranslate } from '@/i18n/useTranslate.ts'
import { globalTranslate } from '@/utils/globalTranslate.ts'

export const WebtoonCardHeaderMenuDelete = () => {
  const { webtoon } = useCardWebtoon()
  const erase = useWebtoonStore((state) => state.deleteWebtoon)
  const translations = useTranslate({ ...globalTranslate, ...webtoonCardTranslate })
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: `${translations.delete} ${webtoon.name}`,
      centered: true,
      children: <Text size="sm">{translations.deleteQuestion}</Text>,
      labels: { cancel: translations.cancel, confirm: translations.delete },
      onConfirm: () => erase(webtoon.id!)
    })

  return (
    <Menu.Item
      leftSection={<IconTrash size={14} />}
      color="red"
      onClick={openDeleteModal}
    >
      {translations.delete}
    </Menu.Item>
  )
}
