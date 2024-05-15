import { SimpleGrid } from '@mantine/core'
import { Webtoon } from '@/models/Webtoon.ts'
import { WebtoonCard } from '@/components/WebtoonCard'

export const WebtoonList = ({ webtoons }: { webtoons: Webtoon[] }) => {
  const cards = webtoons.map((wt) => (
    <WebtoonCard
      key={wt.id}
      webtoon={wt}
    />
  ))
  return <SimpleGrid cols={{ base: 1, sm: 2, lg: 3, xl: 4 }}>{cards}</SimpleGrid>
}
