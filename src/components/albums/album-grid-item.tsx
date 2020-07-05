import React from 'react'
import { GridListTileBar } from '@material-ui/core'
import AlbumDetails from './album-details'
import { AlbumTileData } from './albums-feed'

interface AlbumGridItemProps {
  album: AlbumTileData
}

export default function AlbumGridItem(props: AlbumGridItemProps) {
  return (
    <>
      <img src={props.album.image[0].url ?? ''} alt={props.album.name} />
      <GridListTileBar
        title={props.album.name}
        subtitle={
          <span>
            by: {props.album.performer.name}, {props.album.year}
          </span>
        }
        actionIcon={<AlbumDetails album={props.album} />}
      />
    </>
  )
}
