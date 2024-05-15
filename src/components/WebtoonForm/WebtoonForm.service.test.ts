import { describe, expect, it } from 'vitest'
import { toSelectItem } from './WebtoonForm.service.ts'

describe('[Service] WebtoonForm', () => {
  it('should return a well formatted array with a complete object map', () => {
    const objectMap = {
      BA: 0,
      BOU: 1,
      LI: 2,
      NET: 3
    }

    expect(toSelectItem(objectMap)).toStrictEqual([
      {
        value: '0',
        label: 'BA'
      },
      {
        value: '1',
        label: 'BOU'
      },
      {
        value: '2',
        label: 'LI'
      },
      {
        value: '3',
        label: 'NET'
      }
    ])
  })
})
