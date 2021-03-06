import React, { useState } from 'react'
import { useAlbumDetailsLazyQuery } from '../../types/backend'
import {
  IconButton,
  Dialog,
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
import useIsLoggedId from '../../hooks/use-is-logged-in'

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
  const isLoggedIn = useIsLoggedId()

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
        maxWidth="lg"
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-album-details"
      >
        <DialogContent>
          <AlbumCard album={props.album} details={data ?? null} />
        </DialogContent>
        <DialogActions>
          <YtAlbumForm album={props.album} />
          {isLoggedIn && (
            <>
              <CreateReviewForm album={props.album} />
              <UpdateAlbumForm album={props.album} />
              <DeleteAlbumForm
                album={props.album}
                onDelete={() => setOpen(false)}
              />
            </>
          )}
          <Button color="inherit" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
