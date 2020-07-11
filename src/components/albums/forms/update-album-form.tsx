import React, { useState } from 'react'
import { useUpdateAlbumMutation } from '../../../types/backend'
import FormProgress from '../../common/form-progress'
import { IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import AlbumDialog from './album-dialog'
import Alert from '@material-ui/lab/Alert'
import { AlbumTileData } from '../albums-feed'

interface UpdateAlbumFormProps {
  album: AlbumTileData
}

export default function UpdateAlbumForm(props: UpdateAlbumFormProps) {
  const [open, setOpen] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [updateAlbumMutation, { loading, error }] = useUpdateAlbumMutation()

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => setOpen(true)}
        title="Update Album"
      >
        <EditIcon />
      </IconButton>
      <AlbumDialog
        dialogTitle={<p>Update Album</p>}
        mbid={props.album.mbid}
        title={props.album.name}
        year={props.album.year}
        name={props.album.performer.name}
        open={open}
        setOpen={setOpen}
        onSubmit={result => {
          updateAlbumMutation({
            variables: {
              id: props.album.id,
              ...result,
            },
          }).then(() => {
            setOpen(false)
            setSnackbarOpen(true)
          })
        }}
      >
        <div>
          {error ? <Alert severity="error">{error.name ?? ''}</Alert> : null}
          <FormProgress
            successMessage="Album Updated"
            isLoading={loading}
            isSnackBarVisible={snackbarOpen}
            setIsScankBarVisible={setSnackbarOpen}
          />
        </div>
      </AlbumDialog>
    </>
  )
}
