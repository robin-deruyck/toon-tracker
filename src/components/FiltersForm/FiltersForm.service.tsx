import { WebtoonQuery } from '@/api/dao/IWebtoonDao.ts'
import { DropInputValue } from '@/components/DropInput'

export type FiltersFormField = {
  status?: string
  lastReadDate?: Date[]
  type?: string[]
  genders?: string[]
  nbChapters?: DropInputValue
}

export const FiltersFormService = {
  mapFiltersToForm(filters: WebtoonQuery): FiltersFormField {
    return {
      ...filters,
      lastReadDate: [
        filters.lastReadDate?.lowerDate ?? new Date(new Date().toUTCString()),
        filters.lastReadDate?.upperDate ?? new Date(new Date().toUTCString())
      ],
      nbChapters: {
        dropValue: filters.nbChapters?.operator,
        inputValue: filters.nbChapters?.value
      }
    }
  },

  mapFormToFilters(formValues: FiltersFormField): WebtoonQuery {
    console.log(formValues)
    return {
      ...formValues,
      nbChapters: { operator: formValues.nbChapters?.dropValue!, value: formValues.nbChapters?.inputValue },
      lastReadDate: { lowerDate: formValues?.lastReadDate![0], upperDate: formValues?.lastReadDate![1] }
    }
  }
}
