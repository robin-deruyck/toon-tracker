import { Menu } from '@mantine/core'
import { IconStar, IconStarFilled } from '@tabler/icons-react'
import { useWebtoonStore } from '@/store/webtoons.ts'
import { useCardWebtoon } from '@/components/WebtoonCard/WebtoonCardContext.tsx'
import { useTranslate } from '@/i18n/useTranslate.ts'
import { globalTranslate } from '@/utils/globalTranslate.ts'
import { webtoonCardTranslate } from '@/components/WebtoonCard/WebtoonCard.translate.ts'

export const WebtoonCardHeaderMenuFavorite = () => {
  const { webtoon } = useCardWebtoon()
  const update = useWebtoonStore((state) => state.updateWebtoon)
  const translations = useTranslate({ ...globalTranslate, ...webtoonCardTranslate })

  return (
    <Menu.Item
      leftSection={webtoon.isBanger ? <IconStarFilled size={14} /> : <IconStar size={14} />}
      onClick={() => update({ ...webtoon, isBanger: !webtoon.isBanger })}
    >
      {webtoon.isBanger ? translations.removeFav : translations.addFav}
    </Menu.Item>
  )
}
