import { useWebtoonStore } from '@/store/webtoons.ts'
import { useEffect } from 'react'
import { WebtoonList } from '../WebtoonList'
import { Container, ScrollArea, Text } from '@mantine/core'
import { useFilterStore } from '@/store/filters.ts'
import { NoWebtoons } from '@/components/NoWebtoons'

export const Results = () => {
  const { webtoons, load } = useWebtoonStore((state) => ({ webtoons: state.webtoons, load: state.fetchWebtoons }))
  const webtoonByExample = useFilterStore((state) => state.filterObject)

  useEffect(() => {
    load(webtoonByExample)
  }, [load, webtoonByExample])

  if (!webtoons.length) return <NoWebtoons />

  return (
    <ScrollArea>
      <Container
        py="xl"
        className="results"
      >
        <Text
          size="xs"
          pb="xs"
        >
          {webtoons.length} items
        </Text>
        <WebtoonList webtoons={webtoons} />
      </Container>
    </ScrollArea>
  )
}
