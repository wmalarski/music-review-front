import React from 'react'
import { useReadRandomAlbumsQuery } from '../../types/backend'
import RandomAlbumsFeed from './random-albums-feed'
import ScrollGridContainer from '../infinite-scroll/scroll-grid-container'
import AlbumGridItem from './album-grid-item'
import { useMainListStyles } from '../../hooks/use-styles'
import Container from '@material-ui/core/Container'

export default function RandomAlbumsGrid() {
  const classes = useMainListStyles()
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
    <Container className={classes.root} maxWidth="xl">
      <RandomAlbumsFeed first={18}>
        {({ albums, loading }) => (
          <ScrollGridContainer
            items={albums}
            loading={loading}
            renderItem={item => <AlbumGridItem album={item} imageIndex={3} />}
            cellHeight={300}
            cols={6}
            direction="vertical"
            header={<p></p>}
          />
        )}
      </RandomAlbumsFeed>
    </Container>
  )
}
