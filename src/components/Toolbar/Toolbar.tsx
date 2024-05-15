import { Flex, Paper } from '@mantine/core'
import { SearchBar } from '../SearchBar'
import classes from './Toolbar.module.css'

export const Toolbar = () => {
  return (
    <Paper
      shadow="sm"
      radius="lg"
      className={classes.root}
      p={{ base: 'xs', sm: 'sm' }}
    >
      <Flex
        justify="space-between"
        wrap="wrap"
        gap={{ base: 'xs', sm: 'sm' }}
      >
        <SearchBar />
      </Flex>
    </Paper>
  )
}
