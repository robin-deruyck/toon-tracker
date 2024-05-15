import { Container, Text, Title } from '@mantine/core'
import classes from './NoWebtoons.module.css'

export const NoWebtoons = () => {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Uh oh! It looks like the Multiverse of Webtoons is momentarily empty!
            </Title>
            <Text
              size="lg"
              ta="center"
              className={classes.description}
            >
              Did someone use a reality-warping device again?
            </Text>
            <Text
              size="lg"
              ta="center"
              className={classes.description}
            >
              Fear not, brave reader! Smash the "new" button to restore balance!
            </Text>
          </div>
        </div>
      </Container>
    </div>
  )
}
