import React from 'react'

import { notEmpty } from '../../libs/utils'
import { ReadPerformerQuery } from '../../types/backend'
import ScrollListContainer from '../infinite-scroll/scroll-list-container'
import ReviewListItem from '../reviews/review-list-item'
import { ReviewTileData } from '../reviews/reviews-feed'

interface PerformerReviewListProps {
  data: ReadPerformerQuery | undefined
  loading: boolean
}

function getReviews(data: ReadPerformerQuery | undefined): ReviewTileData[] {
  const albums = data?.performer?.albumSet.edges ?? []
  const reviews = albums.flatMap(edge => edge?.node?.reviewSet.edges ?? [])
  return reviews.map(edge => edge?.node).filter(notEmpty)
}

export default function PerformerReviewList(props: PerformerReviewListProps) {
  return (
    <ScrollListContainer
      items={getReviews(props.data)}
      loading={props.loading}
      renderItem={item => <ReviewListItem item={item} imageSize={2} />}
      header={<>Reviews</>}
    />
  )
}
