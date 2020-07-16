import React from 'react'
import { GridListTileBar, makeStyles, createStyles } from '@material-ui/core'
import AlbumDetails from './album-details'
import { AlbumTileData } from './albums-feed'

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
)

interface AlbumGridItemProps {
  album: AlbumTileData
  imageIndex: number
}

export default function AlbumGridItem(props: AlbumGridItemProps) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <img
        src={props.album.image[props.imageIndex].url ?? ''}
        alt={props.album.name}
      />
      <GridListTileBar
        title={props.album.name}
        subtitle={
          <span>
            by: {props.album.performer.name}, {props.album.year}
          </span>
        }
        actionIcon={<AlbumDetails album={props.album} />}
      />
    </div>
  )
}
