import React from 'react'
import { useReadAlbumsQuery } from '../../types/backend'
import { notEmpty } from '../../libs/utils'
import InfiniteScrollWrapper from '../infinite-scroll/infinite-scroll-wrapper'

export interface AlbumTileData {
  id: string
  title: string
  year: number
  coverUrl?: string | null
  performer: {
    name: string
  }
}

interface AlbumsFeedProps {
  children: (props: {
    albums: AlbumTileData[]
    loading: boolean
  }) => JSX.Element
}

export default function AlbumsFeed(props: AlbumsFeedProps) {
  const variables = {
    after: null,
    first: 10,
  }

  const { loading, data, fetchMore } = useReadAlbumsQuery({
    variables,
  })

  if (!data?.albumSet) {
    return null
  }

  const items = data.albumSet.edges.map(edge => edge?.node).filter(notEmpty)
  const hasNextPage = data.albumSet.pageInfo.hasNextPage

  function onLoadMore() {
    return fetchMore({
      variables: {
        ...variables,
        after: data?.albumSet?.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult?.albumSet || !previousResult.albumSet) {
          return previousResult
        }
        const newEdges = fetchMoreResult.albumSet.edges
        const pageInfo = fetchMoreResult.albumSet.pageInfo
        return newEdges.length
          ? {
              albumSet: {
                __typename: previousResult.albumSet.__typename,
                edges: [...previousResult.albumSet.edges, ...newEdges],
                pageInfo,
              },
            }
          : previousResult
      },
    })
  }

  return (
    <InfiniteScrollWrapper
      hasNextPage={hasNextPage}
      loading={loading}
      onLoadMore={onLoadMore}
    >
      {props.children({ albums: items, loading })}
    </InfiniteScrollWrapper>
  )
}