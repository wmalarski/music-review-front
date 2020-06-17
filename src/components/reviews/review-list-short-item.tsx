import React from 'react'
import { ListItemText, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating/Rating'

interface ReviewListItemProps {
  item: {
    rating: number
    lastUpdated: string
    review: string
    user: {
      username: string
    }
  }
}

export default function ReviewListShortItem(props: ReviewListItemProps) {
  return (
    <>
      {props.item ? (
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <Typography variant="subtitle2" color="textSecondary">
            {props.item.user.username} {props.item.lastUpdated}
          </Typography>
          <Rating
            name="customized-10"
            defaultValue={props.item.rating}
            max={10}
            precision={0.25}
            readOnly
          />
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.review}
          </Typography>
        </div>
      ) : (
        <ListItemText primary="Loading" />
      )}
    </>
  )
}
