import { Button, Select, Stack } from '@mantine/core'
import { toSelectItem } from '@/components/WebtoonForm/WebtoonForm.service.ts'
import { Genders, Status, Type } from '@/models/Filters.ts'
import { YearPickerInput } from '@mantine/dates'
import { useFilterStore } from '@/store/filters.ts'
import { MultiSelect } from '@/components/MultiSelect/MultiSelect.tsx'
import { DropInput } from '@/components/DropInput'
import { WebtoonQuery } from '@/api/dao/IWebtoonDao.ts'
import classes from './FiltersForm.module.css'
import { useForm } from '@mantine/form'
import { useEffect } from 'react'
import { FiltersFormField, FiltersFormService } from '@/components/FiltersForm/FiltersForm.service.tsx'

type FiltersFormProps = {
  onSubmit(): void
}

export const FiltersForm = ({ onSubmit }: FiltersFormProps) => {
  const { updateFilter, filters = {} } = useFilterStore((state) => ({
    updateFilter: state.updateFilter,
    filters: state.filterObject
  }))

  const form = useForm<FiltersFormField>({ initialValues: FiltersFormService.mapFiltersToForm(filters) })

  useEffect(() => {
    if (filters) {
      form.setInitialValues(FiltersFormService.mapFiltersToForm(filters))
    }
  }, [filters])

  const handleFormSubmit = (values: FiltersFormField) => {
    updateFilter(FiltersFormService.mapFormToFilters(values))
    onSubmit()
  }

  const handleFilterChange = (field: keyof WebtoonQuery) => (value: string | string[] | Date[] | null) => {
    form.setValues({ [field]: value ?? undefined })
  }

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <Stack>
        <Select
          placeholder="Status"
          data={toSelectItem(Status)}
          {...form.getInputProps('status')}
        />
        <YearPickerInput
          type="range"
          placeholder="Pick date range"
          w="100%"
          {...form.getInputProps('lastReadDate')}
        />
        <MultiSelect
          withAll
          placeholder="Select a type"
          data={toSelectItem(Type)}
          {...form.getInputProps('type')}
          onChange={handleFilterChange('type')}
        />
        <MultiSelect
          withAll
          placeholder="Select a gender"
          data={toSelectItem(Genders)}
          {...form.getInputProps('genders')}
        />
        <DropInput
          classNames={{ dropdown: classes.dropInputDropdown, input: classes.dropInputInput }}
          {...form.getInputProps('nbChapters')}
        />
      </Stack>
      <Button
        variant="filled"
        type="submit"
        mt="md"
      >
        Apply Filters
      </Button>
    </form>
  )
}
