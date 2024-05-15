import { create } from 'zustand'
import { WebtoonQuery } from '@/types.ts'

type Store = {
  isOpen: boolean
  filterObject: WebtoonQuery | undefined
}

type Actions = {
  toggleFilterView(): void
  updateFilter(filter: WebtoonQuery): void
}

export const useFilterStore = create<Store & Actions>((set) => ({
  isOpen: false,
  filterObject: {},
  toggleFilterView: () => set((state) => ({ isOpen: !state.isOpen })),
  updateFilter: (filter: WebtoonQuery) => set((state) => ({ filterObject: { ...state.filterObject, ...filter } }))
}))
