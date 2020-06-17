import React from 'react'
import { useReadReviewsQuery } from '../../types/backend'
import { notEmpty } from '../../libs/utils'
import InfiniteScrollWrapper from '../infinite-scroll/infinite-scroll-wrapper'

export interface ReviewTileData {
  id: string
  review: string
  rating: number
  created: string
  lastUpdated: string
  album: {
    id: string
    title: string
    performer: {
      id: string
      name: string
      description: string
    }
  }
}

interface ReviewsFeedProps {
  children: (props: {
    reviews: ReviewTileData[]
    loading: boolean
  }) => JSX.Element
}

export default function ReviewsFeed(props: ReviewsFeedProps) {
  const variables = {
    after: null,
    first: 10,
  }

  const { loading, data, fetchMore } = useReadReviewsQuery({
    variables,
  })

  if (!data?.reviewSet) {
    return null
  }

  const items = data.reviewSet.edges.map(edge => edge?.node).filter(notEmpty)
  const hasNextPage = data.reviewSet.pageInfo.hasNextPage

  function onLoadMore() {
    return fetchMore({
      variables: {
        ...variables,
        after: data?.reviewSet?.pageInfo.endCursor,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult?.reviewSet || !previousResult.reviewSet) {
          return previousResult
        }
        const newEdges = fetchMoreResult.reviewSet.edges
        const pageInfo = fetchMoreResult.reviewSet.pageInfo
        return newEdges.length
          ? {
              reviewSet: {
                __typename: previousResult.reviewSet.__typename,
                edges: [...previousResult.reviewSet.edges, ...newEdges],
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
      {props.children({ reviews: items, loading })}
    </InfiniteScrollWrapper>
  )
}
