import { describe, expect, it } from 'vitest'
import { WebtoonDaoFactory } from './WebtoonDaoFactory.ts'
import { WebtoonDesktopDao } from '../WebtoonDesktopDao.ts'

describe('[Api utility] WebtoonDaoFactory', () => {
  it('should return an instance of WebtoonDao', () => {
    const dao = WebtoonDaoFactory.createDao('desktop')
    expect(dao).toBeInstanceOf(WebtoonDesktopDao)
  })
})
