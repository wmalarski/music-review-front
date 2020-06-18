import React, { useState } from 'react'
import { makeStyles, Theme, createStyles, Container } from '@material-ui/core'
import PerformersFeed from './performers-feed'
import ScrollListContainer from '../infinite-scroll/scroll-list-container'
import PerformerListItem from './performer-list-item'
import PerformerSearchBar from './performer-search-bar'

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

interface PerformersListProps {
  selectedPerformer: string | null
  setSelectedPerformer: (name: string | null) => void
}

export default function PerformersList(props: PerformersListProps) {
  const classes = useStyles()
  const [name, setName] = useState('')
  return (
    <Container className={classes.root}>
      <PerformersFeed name={name}>
        {({ performers, loading }) => (
          <ScrollListContainer
            items={performers}
            loading={loading}
            renderItem={item => (
              <PerformerListItem
                item={item}
                selectedPerformer={props.selectedPerformer}
                setSelectedPerformer={props.setSelectedPerformer}
              />
            )}
            maxWidth="lg"
            header={<PerformerSearchBar onClicked={setName} />}
          />
        )}
      </PerformersFeed>
    </Container>
  )
}
