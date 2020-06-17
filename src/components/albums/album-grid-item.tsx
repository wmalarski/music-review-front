import React from 'react'
import { GridListTileBar } from '@material-ui/core'
import ReviewAlbumForm from '../reviews/review-album-form'
import AlbumDetails from './album-details'
import { AlbumTileData } from './albums-feed'

interface AlbumGridItemProps {
  album: AlbumTileData
}

export default function AlbumGridItem(props: AlbumGridItemProps) {
  return (
    <>
      <img src={props.album.coverUrl ?? ''} alt={props.album.title} />
      <GridListTileBar
        title={props.album.title}
        subtitle={
          <span>
            by: {props.album.performer.name}, {props.album.year}
          </span>
        }
        actionIcon={
          <p>
            <ReviewAlbumForm
              album={props.album.id}
              title={props.album.title}
              name={props.album.performer.name}
              year={props.album.year}
            />
            <AlbumDetails album={props.album} />
          </p>
        }
      />
    </>
  )
}
