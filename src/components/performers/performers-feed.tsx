import React from 'react'
import { useReadPerformersQuery } from '../../types/backend'
import { notEmpty } from '../../libs/utils'
import InfiniteScrollWrapper from '../infinite-scroll/infinite-scroll-wrapper'
import { AlbumTileData } from '../albums/albums-feed'

export interface Performer {
  id: string
  name: string
  albumSet: {
    edges: ({
      node?: AlbumTileData | null
    } | null)[]
  }
}

interface PerformersFeedProps {
  children: (props: {
    performers: Performer[]
    loading: boolean
    refetch: () => void
  }) => JSX.Element
  name: string
}

export default function PerformersFeed(props: PerformersFeedProps) {
  const variables = {
    after: null,
    first: 10,
    name: props.name,
  }

  const { loading, data, refetch, fetchMore } = useReadPerformersQuery({
    variables,
  })

  if (!data?.performerSet) {
    return null
  }

  const items = data.performerSet.edges.map(edge => edge?.node).filter(notEmpty)
  const hasNextPage = data.performerSet.pageInfo.hasNextPage

  function onLoadMore() {
    return fetchMore({
      variables: {
        ...variables,
        after: data?.performerSet?.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult?.performerSet || !previousResult.performerSet) {
          return previousResult
        }
        const newEdges = fetchMoreResult.performerSet.edges
        const pageInfo = fetchMoreResult.performerSet.pageInfo
        return newEdges.length
          ? {
              performerSet: {
                __typename: previousResult.performerSet.__typename,
                edges: [...previousResult.performerSet.edges, ...newEdges],
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
      {props.children({ performers: items, loading, refetch })}
    </InfiniteScrollWrapper>
  )
}
