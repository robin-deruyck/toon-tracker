/**
 * @desc Format an object "Map" to an array of {value, label}
 * @param obj {Record<string, number>}
 * @return { Array<{label: string; value: number}> }
 */
export const toSelectItem = (obj: Record<string, number>): { label: string; value: string }[] => {
  return Object.entries(obj).map((entry) => ({ value: entry[1].toString(), label: entry[0] }))
}
