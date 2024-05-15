import { Flex, Input, Select } from '@mantine/core'
import { ChangeEvent, useState } from 'react'
import clsx from 'clsx'

const Signs = ['=', '>', '>=', '<=', '<'] as const
type Sign = (typeof Signs)[number]

type DropInputProps = {
  classNames?: { dropdown?: string; input?: string }
  onChange?(value: { dropValue?: Sign; inputValue?: any }): void
  value?: DropInputValue
}

export type DropInputValue = { dropValue?: Sign; inputValue?: any }

export const DropInput = ({ onChange = () => null, classNames, value = {} }: DropInputProps) => {
  const [dropValue, setDropValue] = useState<Sign | undefined>()
  const [inputValue, setInputValue] = useState<string | undefined>()

  const handleDropChange = (value: string | null) => {
    setDropValue(value as Sign)
    onChange({ dropValue: value as any, inputValue })
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    onChange({ dropValue, inputValue: e.target.value })
  }

  return (
    <Input.Wrapper>
      <Flex>
        <Select
          checkIconPosition="right"
          onChange={handleDropChange}
          data={Signs}
          className={clsx(classNames?.dropdown)}
          value={value.dropValue}
          defaultValue=">"
        />
        <Input
          type="number"
          onChange={handleInputChange}
          className={clsx(classNames?.input)}
          value={value.inputValue}
          defaultValue={0}
        />
      </Flex>
    </Input.Wrapper>
  )
}
