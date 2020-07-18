import React, { useState } from 'react'
import RandomAlbumsFeed from './random-albums-feed'
import ScrollGridContainer from '../infinite-scroll/scroll-grid-container'
import AlbumGridItem from './album-grid-item'
import { useMainListStyles } from '../../hooks/use-styles'
import Container from '@material-ui/core/Container'
import AlbumSlider from './albums-slider'

export default function RandomAlbumsGrid() {
  const classes = useMainListStyles()
  const [range, setRange] = useState<number[]>([])

  return (
    <Container className={classes.root} maxWidth="xl">
      <RandomAlbumsFeed first={18} yearLt={range[1]} yearGt={range[0]}>
        {({ albums, loading }) => (
          <>
            <ScrollGridContainer
              items={albums}
              loading={loading}
              renderItem={item => <AlbumGridItem album={item} imageIndex={3} />}
              cellHeight="auto"
              cellWidth={300}
              direction="vertical"
              header={<p></p>}
            />
            <AlbumSlider setRange={setRange} range={range} />
          </>
        )}
      </RandomAlbumsFeed>
    </Container>
  )
}
