import React from 'react'
import { AlbumDetailsQuery } from '../../types/backend'
import {
  CardContent,
  makeStyles,
  Card,
  CardMedia,
  Typography,
  Theme,
  createStyles,
} from '@material-ui/core'
import { AlbumTileData } from './albums-feed'
import ScrollListContainer from '../infinite-scroll/scroll-list-container'
import { notEmpty } from '../../libs/utils'
import ReviewListShortItem from '../reviews/review-list-short-item'

interface AlbumCardProps {
  album: AlbumTileData
  details: AlbumDetailsQuery | null
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
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

export default function AlbumCard(props: AlbumCardProps) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.album.image[0].url ?? ''}
        title={props.album.name}
      />

      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {props.album.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {props.album.performer.name}({props.album.year})
        </Typography>
        {props.details?.album ? (
          <div className={classes.controls}>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.details?.album?.wiki?.summary ?? ''}
            </Typography>
            <ScrollListContainer
              items={props.details.album.reviewSet.edges
                .map(edge => edge?.node)
                .filter(notEmpty)}
              loading={false}
              renderItem={item => <ReviewListShortItem item={item} />}
              maxWidth="lg"
              header={<p></p>}
            />
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
