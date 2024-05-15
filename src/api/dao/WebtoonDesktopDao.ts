import { IWebtoonDao, WebtoonQuery } from './IWebtoonDao.ts'
import { Webtoon } from '@/models/Webtoon.ts'
import Dexie, { Collection } from 'dexie'
import { UArray } from '@/utils/array.ts'

class WebtoonDatabase extends Dexie {
  webtoons: Dexie.Table<Webtoon, number>

  constructor() {
    super('webtoonDatabase')
    this.version(1).stores({
      webtoons: '++id'
    })
    this.webtoons = this.table('webtoons')
  }
}

export class WebtoonDesktopDao implements IWebtoonDao {
  private db: WebtoonDatabase

  constructor() {
    this.db = new WebtoonDatabase()
  }

  async create(webtoon: Partial<Webtoon>): Promise<void> {
    const { id, ...without } = webtoon
    await this.db.webtoons.add(without as Webtoon)
  }

  async read(id: number): Promise<Webtoon> {
    const webtoon = await this.db.webtoons.get(id)
    if (!webtoon) throw new Error('No matching record found')
    return webtoon
  }

  async update(webtoon: Webtoon): Promise<void> {
    const updated = await this.db.webtoons.update(webtoon.id!, webtoon)
    if (!updated) throw new Error('No matching record found to update')
  }

  async delete(id: number): Promise<void> {
    await this.read(id)
    await this.db.webtoons.delete(id)
  }

  async readAll(query: WebtoonQuery = {}): Promise<Webtoon[]> {
    let collection = this.db.webtoons.toCollection()

    for (const [key, value] of Object.entries(query) as Array<[keyof WebtoonQuery, any]>) {
      if (value === undefined || value === null) continue
      if (Array.isArray(value)) {
        collection = this.filterByMatchingArray(collection, value, key)
        continue
      }
      switch (key) {
        case 'lastReadDate':
          collection = this.filterByDateRange(collection, value)
          break
        case 'name':
          collection = this.filterByName(collection, value)
          break
        case 'nbChapters':
          collection = this.filterByChapters(collection, value)
          break
        default:
          collection = this.filterByOther(collection, key, value)
          break
      }
    }

    return collection.toArray()
  }

  private filterByDateRange(collection: Collection<Webtoon, number>, dateRange: WebtoonQuery['lastReadDate']) {
    return collection.filter((webtoon) => {
      const webtoonYear = new Date(webtoon.lastReadDate).getFullYear()

      const lowerYear = dateRange!.lowerDate.getFullYear()
      const upperYear = dateRange!.upperDate ? dateRange!.upperDate.getFullYear() : null

      return webtoonYear >= lowerYear && (!upperYear || webtoonYear <= upperYear)
    })
  }

  private filterByMatchingArray(collection: Collection<Webtoon, number>, arr: any[], key: keyof Webtoon) {
    return collection.filter((webtoon) => {
      const value = webtoon[key]
      return Array.isArray(value) ? UArray.haveCommonItems(arr, value) : arr.includes(webtoon[key])
    })
  }

  private filterByName(collection: Collection<Webtoon, number>, name: string) {
    return collection.filter((webtoon) => new RegExp(name, 'i').test(webtoon.name))
  }

  private filterByChapters(
    collection: Collection<Webtoon, number>,
    condition: WebtoonQuery['nbChapters'] = { operator: '>=', value: 0 }
  ) {
    const { operator, value } = condition
    switch (operator) {
      case '=':
        return collection.filter((webtoon) => webtoon.nbChapters === value)
      case '>':
        return collection.filter((webtoon) => webtoon.nbChapters > value)
      case '>=':
        return collection.filter((webtoon) => webtoon.nbChapters >= value)
      case '<':
        return collection.filter((webtoon) => webtoon.nbChapters < value)
      case '<=':
        return collection.filter((webtoon) => webtoon.nbChapters <= value)
      default:
        return collection
    }
  }

  private filterByOther<T extends keyof WebtoonQuery>(
    collection: Collection<Webtoon, number>,
    key: T,
    value: WebtoonQuery[T]
  ) {
    return collection.filter((webtoon) => webtoon[key as keyof Webtoon] === value)
  }
}
