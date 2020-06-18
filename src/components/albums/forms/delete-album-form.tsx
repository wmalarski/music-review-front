import React, { useState } from 'react'
import { useDeleteAlbumMutation } from '../../../types/backend'
import FormProgress from '../../common/form-progress'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import { AlbumTileData } from '../albums-feed'

interface DeleteAlbumFormProps {
  album: AlbumTileData
  onDelete: () => void
}

export default function DeleteAlbumForm(props: DeleteAlbumFormProps) {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [deleteAlbumMutation, { loading, error }] = useDeleteAlbumMutation()

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => {
          deleteAlbumMutation({
            variables: {
              id: props.album.id,
            },
          }).then(() => {
            setSnackbarOpen(true)
            props.onDelete()
          })
        }}
        title="Delete"
      >
        <DeleteIcon />
      </IconButton>
      <FormProgress
        successMessage="Album succesfuly deleted"
        isLoading={loading}
        error={error ?? null}
        isSnackBarVisible={snackbarOpen}
        setIsScankBarVisible={setSnackbarOpen}
      />
    </>
  )
}
