import React, { useState } from 'react'
import { useCreateAlbumMutation } from '../../types/backend'
import FormProgress from '../common/form-progress'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CreateAlbumDialog from './create-album-dialog'
import Alert from '@material-ui/lab/Alert'

interface CreateAlbumFormProps {
  performer: string
  name: string
}

export default function CreateAlbumForm(props: CreateAlbumFormProps) {
  const [open, setOpen] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [albumAlbumMutation, { loading, error }] = useCreateAlbumMutation()

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => setOpen(true)}
        title="Add Album"
      >
        <AddIcon />
      </IconButton>
      <CreateAlbumDialog
        name={props.name}
        open={open}
        setOpen={setOpen}
        onSubmit={result => {
          albumAlbumMutation({
            variables: {
              performer: props.performer,
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
            successMessage="Album Added"
            isLoading={loading}
            error={error ?? null}
            isSnackBarVisible={snackbarOpen}
            setIsScankBarVisible={setSnackbarOpen}
          />
        </div>
      </CreateAlbumDialog>
    </>
  )
}
