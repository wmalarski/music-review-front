import React from 'react'
import { GridListTileBar } from '@material-ui/core'
import ReviewAlbumForm from './review-album-form'
import AlbumDetails from './album-details'
import { AlbumTileData } from './albums-feed'

interface AlbumListItemProps {
  album: AlbumTileData
}

export default function AlbumListItem(props: AlbumListItemProps) {
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
