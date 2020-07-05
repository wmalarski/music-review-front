import React from 'react'
import ReviewsFeed from './reviews-feed'
import ReviewListItem from './review-list-item'
import ScrollListContainer from '../infinite-scroll/scroll-list-container'
import { useMainListStyles } from '../../hooks/use-styles'
import Container from '@material-ui/core/Container'

export default function ReviewsList() {
  const classes = useMainListStyles()
  return (
    <Container className={classes.root} maxWidth="xl">
      <ReviewsFeed>
        {({ reviews, loading }) => (
          <ScrollListContainer
            items={reviews}
            loading={loading}
            renderItem={item => <ReviewListItem item={item} imageSize={2} />}
            header={<p></p>}
          />
        )}
      </ReviewsFeed>
    </Container>
  )
}
