import { Card, Image } from '@mantine/core'
import { useCardWebtoon } from '@/components/WebtoonCard/WebtoonCardContext.tsx'

export const WebtoonCardPicture = () => {
  const { webtoon } = useCardWebtoon()
  return (
    <Card.Section>
      <Image
        src={
          webtoon.link?.trim().length
            ? webtoon.link
            : 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'
        }
        height={160}
        alt=""
      />
    </Card.Section>
  )
}
