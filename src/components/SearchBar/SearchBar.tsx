import { Kbd, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

export const SearchBar = () => {
  return (
      <TextInput
        variant="filled"
        radius="xl"
        placeholder="Search"
        leftSection={<IconSearch size={14} />}
        w={{ base: '100%', xs: '100%', sm: '550' }}
        rightSectionWidth={78}
        rightSection={<Kbd>Ctrl + K</Kbd>}
      />
  )
}
