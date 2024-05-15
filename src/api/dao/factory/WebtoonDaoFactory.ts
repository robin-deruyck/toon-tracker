import { IWebtoonDao } from '../IWebtoonDao.ts'
import { WebtoonDesktopDao } from '../WebtoonDesktopDao.ts'

export const WebtoonDaoFactory = {
  createDao(environment: 'web' | 'desktop'): IWebtoonDao {
    switch (environment) {
      case 'desktop':
        return new WebtoonDesktopDao()
      default:
        return new WebtoonDesktopDao()
    }
  }
}
