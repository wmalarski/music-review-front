import React from 'react'
import { useReadRandomAlbumsQuery } from '../../types/backend'
import { createStyles, makeStyles, Theme, Container } from '@material-ui/core'
import RandomAlbumsFeed from './random-albums-feed'
import ScrollGridContainer from '../infinite-scroll/scroll-grid-container'
import AlbumGridItem from './album-grid-item'

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

export default function RandomAlbumsGrid() {
  const classes = useStyles()
  const { data, loading } = useReadRandomAlbumsQuery({
    variables: {
      after: '',
      first: 20,
    },
  })

  if (loading || !data?.randomAlbumSet) {
    return null
  }

  return (
    <Container className={classes.root}>
      <RandomAlbumsFeed first={20}>
        {({ albums, loading }) => (
          <ScrollGridContainer
            items={albums}
            loading={loading}
            renderItem={item => <AlbumGridItem album={item} />}
            maxWidth="lg"
            cellHeight={180}
            cols={5}
            direction="vertical"
            header={<p></p>}
          />
        )}
      </RandomAlbumsFeed>
    </Container>
  )
}
