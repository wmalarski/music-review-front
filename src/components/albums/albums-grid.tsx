import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import AlbumsFeed from './albums-feed'
import AlbumGridItem from './album-grid-item'
import ScrollGridContainer from '../infinite-scroll/scroll-grid-container'
import AlbumSearchBar from './album-search-bar'
import { useMainListStyles } from '../../hooks/use-styles'

export default function AlbumsGrid() {
  const classes = useMainListStyles()
  const [title, setTitle] = useState('')
  return (
    <Container className={classes.root} maxWidth="xl">
      <AlbumsFeed title={title}>
        {({ albums, loading }) => (
          <ScrollGridContainer
            items={albums}
            loading={loading}
            renderItem={item => <AlbumGridItem album={item} imageIndex={3} />}
            cellHeight={300}
            cols={6}
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
