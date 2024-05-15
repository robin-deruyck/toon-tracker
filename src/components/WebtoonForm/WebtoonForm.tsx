import { useWebtoonStore } from '@/store/webtoons.ts'
import { Webtoon } from '@/models/Webtoon.ts'
import { useForm } from '@mantine/form'
import { Button, Group, MultiSelect, Select, Stack, Textarea, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { toSelectItem } from '@/components/WebtoonForm/WebtoonForm.service.ts'
import { Genders, Status, Type } from '@/models/Filters.ts'
import { useTranslate } from '@/i18n/useTranslate.ts'
import { globalTranslate } from '@/utils/globalTranslate.ts'
import { webtoonFormTranslate } from '@/components/WebtoonForm/WebtoonForm.translate.ts'

type WebtoonFormProps = {
  webtoon?: Webtoon
  onSubmit: () => void
}

export const WebtoonForm = ({ webtoon = {} as Webtoon, onSubmit }: WebtoonFormProps) => {
  const { create, update } = useWebtoonStore((state) => ({ create: state.addWebtoon, update: state.updateWebtoon }))
  const translations = useTranslate({ ...globalTranslate, ...webtoonFormTranslate })
  const form = useForm<Webtoon & { status: string }>({
    mode: 'uncontrolled',
    initialValues: {
      id: webtoon.id,
      name: webtoon.name ?? '',
      lastReadChapter: webtoon.lastReadChapter ?? '',
      lastReadDate: webtoon.lastReadDate ?? new Date(),
      nbChapters: webtoon.nbChapters ?? '',
      isBanger: webtoon.isBanger ?? false,
      link: webtoon.link ?? '',
      synopsis: webtoon.synopsis ?? '',
      subNames: webtoon.subNames ?? [],
      genders: webtoon.genders ?? [],
      type: webtoon.type ?? 0,
      status: webtoon?.status ?? '0'
    },

    validate: {
      name: (val) => (val.trim().length < 2 ? translations.nameError : null),
      lastReadChapter: (val) => (val.trim().length < 1 ? translations.lastChapterError : null),
      lastReadDate: (val) => (!val ? translations.lastReadDateError : null)
    }
  })

  const submit = (values: Webtoon) => {
    values.id ? update(values) : create(values)
    onSubmit()
  }

  return (
    <form
      onSubmit={form.onSubmit(submit)}
      noValidate
    >
      <Stack>
        <TextInput
          placeholder={translations.namePlaceholder}
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <TextInput
          placeholder={translations.lastChapterPlaceholder}
          key={form.key('lastReadChapter')}
          {...form.getInputProps('lastReadChapter')}
        />
        <Textarea
          placeholder={translations.synoPlaceholder}
          key={form.key('synopsis')}
          {...form.getInputProps('synopsis')}
        />
        <DateInput
          placeholder={translations.lastReadDatePlaceholder}
          key={form.key('lastReadDate')}
          maxDate={new Date()}
          {...form.getInputProps('lastReadDate')}
        />
        <TextInput
          placeholder={translations.nbChapterPlaceholder}
          key={form.key('nbChapters')}
          {...form.getInputProps('nbChapters')}
        />
        <Select
          placeholder={translations.statusPlaceholder}
          data={toSelectItem(Status)}
          key={form.key('status')}
          {...form.getInputProps('status')}
        />
        <TextInput
          placeholder={translations.linkPlaceholder}
          key={form.key('link')}
          {...form.getInputProps('link')}
        />
        <MultiSelect
          placeholder={translations.gendersPlaceholder}
          data={toSelectItem(Genders)}
          clearable
          key={form.key('genders')}
          {...form.getInputProps('genders')}
        />
        <Select
          placeholder={translations.typePlaceholder}
          data={toSelectItem(Type)}
          key={form.key('type')}
          {...form.getInputProps('type')}
        />

        <Textarea
          placeholder={translations.subNamesPlaceholder}
          key={form.key('subNames')}
          {...form.getInputProps('subNames')}
        />
      </Stack>

      <Group
        justify="center"
        mt="xl"
      >
        <Button
          type="submit"
          fullWidth
          mt="md"
        >
          Save
        </Button>
      </Group>
    </form>
  )
}
