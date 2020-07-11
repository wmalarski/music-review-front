import React from 'react'
import { useReadAlbumsQuery } from '../../types/backend'
import { notEmpty } from '../../libs/utils'
import InfiniteScrollWrapper from '../infinite-scroll/infinite-scroll-wrapper'

export interface AlbumTileData {
  id: string
  name: string
  year: number
  mbid: string
  image: {
    url: string
  }[]
  wiki?: {
    summary: string
  }
  performer: {
    name: string
  }
}

interface AlbumsFeedProps {
  children: (props: {
    albums: AlbumTileData[]
    loading: boolean
  }) => JSX.Element
  title: string
  yearGt: number | null
  yearLt: number | null
}

export default function AlbumsFeed(props: AlbumsFeedProps) {
  const variables = {
    after: null,
    first: 10,
    title: props.title,
  }

  const { loading, data, fetchMore } = useReadAlbumsQuery({
    variables,
  })
  console.log(variables, loading, data)

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
