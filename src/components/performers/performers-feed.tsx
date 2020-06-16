import React from 'react'
import { useReadPerformersQuery } from '../../types/backend'
import { notEmpty } from '../../libs/utils'
import InfiniteScrollWrapper from '../common/infinite-scroll-wrapper'
import { AlbumTileData } from '../albums/album-grid'

export interface Performer {
  id: string
  name: string
  description: string
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
  }) => JSX.Element
}

export default function PerformersFeed(props: PerformersFeedProps) {
  const variables = {
    after: null,
    first: 10,
  }

  const { loading, data, fetchMore } = useReadPerformersQuery({
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
      {props.children({ performers: items, loading })}
    </InfiniteScrollWrapper>
  )
}
