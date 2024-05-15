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

export interface IWebtoonDao {
  create(webtoon: Partial<Webtoon>): Promise<void>
  read(id: number): Promise<Webtoon>
  readAll(query?: WebtoonQuery): Promise<Webtoon[]>
  update(webtoon: Partial<Webtoon>): Promise<void>
  delete(id: number): Promise<void>
}
