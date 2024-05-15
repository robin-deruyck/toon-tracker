import { Kbd, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { modals } from '@mantine/modals'
import { FiltersForm } from '@/components/FiltersForm'
import { useHotkeys } from '@mantine/hooks'
import { useRef } from 'react'

export const SearchBar = () => {
  const invisibleRef = useRef<HTMLInputElement>(null)

  const openFilterModal = () => {
    modals.open({
      modalId: 'filters',
      title: 'select filters',
      centered: true,
      children: <FiltersForm onSubmit={() => modals.close('filters')} />
    })
  }

  const handleFocus = () => {
    if (invisibleRef.current) {
      invisibleRef.current.focus()
    }
    openFilterModal()
  }

  useHotkeys([['ctrl+K', openFilterModal]])

  return (
    <>
      <TextInput
        variant="filled"
        radius="xl"
        placeholder="Search"
        leftSection={<IconSearch size={14} />}
        w={{ base: '100%', xs: '100%', sm: '550' }}
        onFocus={handleFocus}
        rightSectionWidth={78}
        rightSection={<Kbd>Ctrl + K</Kbd>}
      />
      <input
        ref={invisibleRef}
        style={{ opacity: 0, position: 'absolute', pointerEvents: 'none' }} // Make invisible and non-interactive
        aria-hidden="true"
        tabIndex={-1} // Make it programmatically focusable without being a tab stop
      />
    </>
  )
}
