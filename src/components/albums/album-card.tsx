import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { AlbumDetailsQuery } from '../../types/backend'
import {
  CardContent,
  makeStyles,
  Card,
  CardMedia,
  Typography,
  Theme,
  createStyles,
  Link,
} from '@material-ui/core'
import { AlbumTileData } from './albums-feed'
import ScrollListContainer from '../infinite-scroll/scroll-list-container'
import { notEmpty } from '../../libs/utils'
import ReviewListShortItem from '../reviews/review-list-short-item'
import { RenderHTML } from '../common/render-html'

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
      flexShrink: 100,
    },
    cover: {
      width: 600,
      height: 600,
    },
    controls: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  }),
)

export default function AlbumCard(props: AlbumCardProps) {
  const classes = useStyles()
  const album = props.album
  const albumName = album.name

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={album.image[5].url ?? ''}
        title={albumName}
      />

      <CardContent className={classes.content}>
        <Typography variant="h5">{albumName}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <Link
            component={GatsbyLink}
            to="/performer"
            state={{ id: album.performer.id, name: album.performer.name }}
            color="inherit"
          >
            {album.performer.name}
          </Link>
          ({album.year})
        </Typography>
        {props.details?.album ? (
          <div className={classes.controls}>
            <Typography variant="body2" color="textSecondary" component="p">
              <RenderHTML html={props.details?.album?.wiki?.summary ?? ''} />
            </Typography>
            <ScrollListContainer
              items={props.details.album.reviewSet.edges
                .map(edge => edge?.node)
                .filter(notEmpty)}
              loading={false}
              renderItem={item => <ReviewListShortItem item={item} />}
              header={''}
            />
          </div>
        ) : null}
      </CardContent>
    </Card>
  )
}
