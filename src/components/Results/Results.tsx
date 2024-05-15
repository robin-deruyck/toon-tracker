import { useWebtoonStore } from '@/store/webtoons.ts'
import { useEffect } from 'react'
import { WebtoonList } from '../WebtoonList'
import { Container, ScrollArea, Text } from '@mantine/core'

export const Results = () => {
  const { webtoons, load } = useWebtoonStore((state) => ({ webtoons: state.webtoons, load: state.fetchWebtoons }))

  useEffect(() => {
    load()
  }, [load])

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
