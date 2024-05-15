import { Button, ButtonProps } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import { modals } from '@mantine/modals'
import { WebtoonForm } from '@/components/WebtoonForm'
import { useTranslate } from '@/i18n/useTranslate.ts'
import { globalTranslate } from '@/utils/globalTranslate.ts'
import { addWebtoonButtonTranslate } from '@/components/AddWebtoonButton/AddWebtoonButton.translate.ts'

type AddWebtoonButtonProps = {
  size?: ButtonProps['size']
}
export const AddWebtoonButton = ({ size }: AddWebtoonButtonProps) => {
  const translations = useTranslate({ ...globalTranslate, ...addWebtoonButtonTranslate })

  const openCreateModal = () =>
    modals.open({
      modalId: 'create',
      title: translations.modalTitle,
      centered: true,
      children: <WebtoonForm onSubmit={() => modals.close('create')} />
    })

  return (
    <>
      <Button
        onClick={openCreateModal}
        radius="xl"
        size={size ?? 'sm'}
        leftSection={<IconPlus size={14} />}
        w={{ xs: '100%', sm: 200 }}
        aria-label={translations.addNew}
      >
        {translations.addNew}
      </Button>
    </>
  )
}
