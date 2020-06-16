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
import { AlbumTileData } from './album-grid'

interface AlbumCardProps {
  album: AlbumTileData
  details: AlbumDetailsQuery | null
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
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

  //   <Link component={GatsbyLink} to="/">
  //   Go back to the homepage
  // </Link>

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.album.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.album.performer.name}({props.album.year})
          </Typography>
        </CardContent>
        {props.details?.album ? (
          <div className={classes.controls}>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.details?.album?.description}
            </Typography>
          </div>
        ) : null}
      </div>
      <CardMedia
        className={classes.cover}
        image={props.album.coverUrl ?? ''}
        title={props.album.title}
      />
    </Card>
  )
}
