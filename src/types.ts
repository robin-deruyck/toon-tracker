import { Webtoon } from '@/models/Webtoon.ts'

export type WebtoonQuery = Partial<
  Omit<Webtoon, 'id' | 'link' | 'nbChapters' | 'lastReadDate' | 'type'> & {
    nbChapters: Condition
    type: string[]
    lastReadDate?: { lowerDate: Date; upperDate: Date | null }
  }
>

type Condition = {
  value: number
  operator: '=' | '>' | '>=' | '<' | '<='
}
