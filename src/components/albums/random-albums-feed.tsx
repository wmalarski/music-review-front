import React from 'react'
import { useReadRandomAlbumsQuery } from '../../types/backend'
import { notEmpty } from '../../libs/utils'
import { AlbumTileData } from './albums-feed'

interface RandomAlbumsFeedProps {
  children: (props: {
    albums: AlbumTileData[]
    loading: boolean
  }) => JSX.Element
  first: number
}

export default function RandomAlbumsFeed(props: RandomAlbumsFeedProps) {
  const { loading, data } = useReadRandomAlbumsQuery({
    variables: {
      after: null,
      first: props.first,
    },
  })

  if (!data?.randomAlbumSet) {
    return null
  }

  const items = data.randomAlbumSet.edges
    .map(edge => edge?.node)
    .filter(notEmpty)

  return <>{props.children({ albums: items, loading })}</>
}
