import React from 'react'
import { makeStyles, Theme, createStyles, Container } from '@material-ui/core'
import AlbumsFeed from './albums-feed'
import AlbumListItem from './album-list-item'
import ScrollGridContainer from '../infinite-scroll/scroll-grid-container'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

export default function AlbumsGrid() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <AlbumsFeed>
        {({ albums, loading }) => (
          <ScrollGridContainer
            items={albums}
            loading={loading}
            renderItem={item => <AlbumListItem album={item} />}
            maxWidth="lg"
            cellHeight={180}
            cols={5}
            direction="vertical"
          />
        )}
      </AlbumsFeed>
    </Container>
  )
}
