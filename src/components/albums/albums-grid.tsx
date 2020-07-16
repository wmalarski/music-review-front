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
  const [yearGt, setYearGt] = useState<number | null>(null)
  const [yearLt, setYearLt] = useState<number | null>(null)
  return (
    <>
      <Container className={classes.root} maxWidth="xl">
        <AlbumSearchBar
          onClicked={(title, fromYear, toYear) => {
            setTitle(title)
            setYearGt(fromYear)
            setYearLt(toYear)
          }}
        />
      </Container>
      <Container className={classes.root} maxWidth="xl">
        <AlbumsFeed title={title} yearGt={yearGt} yearLt={yearLt}>
          {({ albums, loading }) => (
            <ScrollGridContainer
              items={albums}
              loading={loading}
              cellWidth={300}
              renderItem={item => <AlbumGridItem album={item} imageIndex={3} />}
              cellHeight="auto"
              direction="vertical"
              header={''}
            />
          )}
        </AlbumsFeed>
      </Container>
    </>
  )
}
