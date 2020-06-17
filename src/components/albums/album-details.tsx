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
          <Button color="inherit" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
