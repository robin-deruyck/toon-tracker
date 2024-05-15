import { CheckIcon, Combobox, ComboboxProps, Group, Pill, PillsInput, useCombobox } from '@mantine/core'
import { useState } from 'react'

const defaultItem = {
  value: 'all',
  label: 'All'
}

type CustomMultiSelectProps = {
  withAll?: boolean
  placeholder?: string
  data: { value: any; label: string }[]
  onChange?(value: string[] | null): void
  value?: string[]
} & ComboboxProps
/**
 * @description
 * - When select all item is selected it must select all items
 * - When an item is selected, it chows a pill with the number of selected items
 *
 */
export const MultiSelect = (props: CustomMultiSelectProps) => {
  const { data = [], withAll, placeholder, onChange = () => null, vars, value = [], ...rest } = props
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active')
  })

  const [selectedItems, setSelectedItems] = useState<any[]>(value)

  const selectAllOptions = withAll ? (
    <Option
      value={defaultItem.value}
      label={defaultItem.label}
    />
  ) : null

  const options = data
    .sort((a, b) => (a.label > b.label ? 1 : -1))
    .map((el) => (
      <Option
        key={el.value}
        value={el.value}
        label={el.label}
        active={selectedItems.includes(el.value)}
      />
    ))

  const handleValueSelect = (val: string) => {
    let result
    if (val === defaultItem.value && selectedItems.length === data.length) {
      result = []
    } else if (val === defaultItem.value) {
      result = data.map((el) => el.value)
    } else {
      result = selectedItems.includes(val) ? selectedItems.filter((v) => v !== val) : [...selectedItems, val]
    }
    setSelectedItems(result)
    onChange(result.length ? result : null)
  }

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={handleValueSelect}
      {...rest}
    >
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {selectedItems.length > 0 ? <Pill>{`Selected items : ${selectedItems.length}`}</Pill> : null}
            <PillsInput.Field placeholder={placeholder} />
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? [selectAllOptions, ...options] : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}

const Option = ({ value, label, active = false }: { value: any; label: string; active?: boolean }) => {
  return (
    <Combobox.Option
      value={value}
      key={value}
      active={active}
    >
      <Group
        justify="space-between"
        gap="sm"
      >
        <span>{label}</span>
        {active ? <CheckIcon size={12} /> : null}
      </Group>
    </Combobox.Option>
  )
}
