import React from 'react'
import { makeStyles, Theme, createStyles, Container } from '@material-ui/core'
import ReviewsFeed from './reviews-feed'
import ReviewListItem from './review-list-item'
import ScrollListContainer from '../infinite-scroll/scroll-list-container'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

export default function ReviewsList() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <ReviewsFeed>
        {({ reviews, loading }) => (
          <ScrollListContainer
            items={reviews}
            loading={loading}
            renderItem={item => <ReviewListItem item={item} />}
            maxWidth="lg"
            header={<p></p>}
          />
        )}
      </ReviewsFeed>
    </Container>
  )
}
