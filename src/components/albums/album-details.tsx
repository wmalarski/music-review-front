import React, { useState } from 'react'
import { useAlbumDetailsLazyQuery } from '../../types/backend'
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import AlbumCard from './album-card'
import { AlbumTileData } from './albums-feed'
import CreateReviewForm from '../reviews/forms/create-review-form'
import DeleteAlbumForm from './forms/delete-album-form'
import UpdateAlbumForm from './forms/update-album-form'
import YtAlbumForm from './forms/yt-album-form'

interface AlbumDetailsProps {
  album: AlbumTileData
}

export default function AlbumDetails(props: AlbumDetailsProps) {
  const [open, setOpen] = useState(false)
  const [albumDetailsQuery, { data }] = useAlbumDetailsLazyQuery({
    variables: {
      album: props.album.id,
    },
  })

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => {
          setOpen(true)
          albumDetailsQuery()
        }}
      >
        <InfoIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-album-details"
      >
        <DialogTitle id="form-dialog-album-details">Album Details</DialogTitle>
        <DialogContent>
          <AlbumCard album={props.album} details={data ?? null} />
        </DialogContent>
        <DialogActions>
          <YtAlbumForm album={props.album} />
          <CreateReviewForm album={props.album} />
          <UpdateAlbumForm album={props.album} />
          <DeleteAlbumForm
            album={props.album}
            onDelete={() => setOpen(false)}
          />
          <Button color="inherit" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
