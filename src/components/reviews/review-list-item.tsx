import React from 'react'
import { ListItemText } from '@material-ui/core'
import { ReviewTileData } from './reviews-feed'

interface ReviewListItemProps {
  item: ReviewTileData
}

export default function ReviewListItem(props: ReviewListItemProps) {
  return (
    <>
      {props.item ? (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          {props.item.rating} - {props.item.review} - {props.item.created}
        </div>
      ) : (
        <ListItemText primary="Loading" />
      )}
    </>
  )
}
