import React from 'react'
import { makeStyles, Theme, createStyles, Container } from '@material-ui/core'
import PerformersFeed from './performers-feed'
import ScrollListContainer from '../infinite-scroll/scroll-list-container'
import PerformerListItem from './performer-list-item'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

export default function PerformersList() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <PerformersFeed>
        {({ performers, loading }) => (
          <ScrollListContainer
            items={performers}
            loading={loading}
            renderItem={item => <PerformerListItem item={item} />}
            maxWidth="lg"
            header={<p>Performers</p>}
          />
        )}
      </PerformersFeed>
    </Container>
  )
}
