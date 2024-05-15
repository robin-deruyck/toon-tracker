import { useCardWebtoon } from './WebtoonCardContext.tsx'
import { Badge, Group, Spoiler, Text } from '@mantine/core'

export const WebtoonCardDetails = () => {
  const {
    webtoon: { name, lastReadChapter, nbChapters, synopsis }
  } = useCardWebtoon()

  return (
    <>
      <Group
        justify="space-between"
        mt="md"
        mb="xs"
      >
        <Text fw={500}>{name}</Text>
        <Badge color="green">{`${lastReadChapter ?? 0} /${nbChapters ?? '?'}`}</Badge>
      </Group>

      <Spoiler
        maxHeight={50}
        showLabel="Show more"
        hideLabel="Hide"
        c="dimmed"
      >
        {synopsis}
      </Spoiler>
    </>
  )
}
