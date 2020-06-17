import React, { useState } from 'react'
import { makeStyles, Theme, createStyles, Container } from '@material-ui/core'
import AlbumsFeed from './albums-feed'
import AlbumGridItem from './album-grid-item'
import ScrollGridContainer from '../infinite-scroll/scroll-grid-container'
import AlbumSearchBar from './album-search-bar'

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
  const [title, setTitle] = useState('')
  return (
    <Container className={classes.root}>
      <AlbumsFeed title={title}>
        {({ albums, loading }) => (
          <ScrollGridContainer
            items={albums}
            loading={loading}
            renderItem={item => <AlbumGridItem album={item} />}
            maxWidth="lg"
            cellHeight={180}
            cols={5}
            direction="vertical"
            header={
              <AlbumSearchBar
                onClicked={title => {
                  setTitle(title)
                }}
              />
            }
          />
        )}
      </AlbumsFeed>
    </Container>
  )
}
