import { Webtoon } from '@/models/Webtoon.ts'
import { create } from 'zustand'
import { Dao } from '@/api/db.ts'
import { WebtoonQuery } from '@/api/dao/IWebtoonDao.ts'

type Store = {
  webtoons: Webtoon[]
}

type Actions = {
  fetchWebtoons: (query?: WebtoonQuery) => Promise<void>
  addWebtoon: (webtoon: Webtoon) => Promise<void>
  updateWebtoon: (webtoon: Webtoon) => Promise<void>
  deleteWebtoon: (id: number) => Promise<void>
}

export const useWebtoonStore = create<Store & Actions>((set, get) => ({
  webtoons: [],

  fetchWebtoons: async (query?: WebtoonQuery) => {
    const webtoons = await Dao.readAll(query)
    set({ webtoons })
  },

  addWebtoon: async (webtoon) => {
    await Dao.create(webtoon)
    get().fetchWebtoons()
  },

  updateWebtoon: async (webtoon) => {
    await Dao.update(webtoon)
    get().fetchWebtoons()
  },

  deleteWebtoon: async (id) => {
    await Dao.delete(id)
    get().fetchWebtoons()
  }
}))
