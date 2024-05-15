import { Card } from '@mantine/core'
import { WebtoonCardProvider } from './WebtoonCardContext.tsx'
import { WebtoonCardDetails } from './WebtoonCardDetails.tsx'
import { WebtoonCardPicture } from './WebtoonCardPicture.tsx'
import { WebtoonCardHeader } from './WebtoonCardHeader.tsx'
import { WithWebtoon } from '@/components/WebtoonCard/WebtoonCard.types.ts'

export const WebtoonCard = ({ webtoon }: WithWebtoon) => {
  return (
    <WebtoonCardProvider webtoon={webtoon}>
      <Card
        shadow="sm"
        px="sm"
        pb="sm"
        pt="xs"
        radius="md"
        withBorder
      >
        <WebtoonCardHeader />
        <WebtoonCardPicture />
        <WebtoonCardDetails />
      </Card>
    </WebtoonCardProvider>
  )
}
