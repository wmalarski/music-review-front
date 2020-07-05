import React from 'react'
import {
  ListItemText,
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import { ReviewTileData } from './reviews-feed'
import Rating from '@material-ui/lab/Rating/Rating'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  }),
)

interface ReviewListItemProps {
  item: ReviewTileData
}

export default function ReviewListItem(props: ReviewListItemProps) {
  const classes = useStyles()
  return (
    <>
      {props.item ? (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.cover}
              image={props.item.album.coverUrl ?? ''}
              title={props.item.album.name}
            />
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {props.item.album.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.item.album.performer.name}({props.item.album.year})
              </Typography>
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
            </CardContent>
          </Card>
        </div>
      ) : (
        <ListItemText primary="Loading" />
      )}
    </>
  )
}
