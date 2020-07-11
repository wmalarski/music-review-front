import React from 'react'
import { useReadRandomAlbumsQuery } from '../../types/backend'
import { notEmpty } from '../../libs/utils'
import { AlbumTileData } from './albums-feed'
import Button from '@material-ui/core/Button'
import FormProgress from '../common/form-progress'

interface RandomAlbumsFeedProps {
  children: (props: {
    albums: AlbumTileData[]
    loading: boolean
  }) => JSX.Element
  first: number
}

export default function RandomAlbumsFeed(props: RandomAlbumsFeedProps) {
  const { loading, data, refetch } = useReadRandomAlbumsQuery({
    variables: {
      after: null,
      first: props.first,
    },
  })

  if (!data?.randomAlbumSet) {
    return <FormProgress isLoading={loading} isSnackBarVisible={false} />
  }

  const items = data.randomAlbumSet.edges
    .map(edge => edge?.node)
    .filter(notEmpty)

  return (
    <>
      {props.children({ albums: items, loading })}
      <Button color="inherit" onClick={() => refetch()} fullWidth>
        Reload
      </Button>
    </>
  )
}
