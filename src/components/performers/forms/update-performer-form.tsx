import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { useCreatePerformerMutation } from '../../../types/backend'
import PerformerDialog from './performer-dialog'
import FormProgress from '../../common/form-progress'
import Alert from '@material-ui/lab/Alert/Alert'

export default function CreatePerformerForm() {
  const [open, setOpen] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [
    createPerformerMutation,
    { loading, error },
  ] = useCreatePerformerMutation()

  return (
    <>
      <Button color="inherit" onClick={() => setOpen(true)}>
        Add Performer
      </Button>
      <PerformerDialog
        open={open}
        setOpen={setOpen}
        onSubmit={result => {
          createPerformerMutation({
            variables: {
              name: result.name,
              albums: result.albums,
              description: '',
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
            successMessage="Performer succesfuly added"
            isLoading={loading}
            error={error ?? null}
            isSnackBarVisible={snackbarOpen}
            setIsScankBarVisible={setSnackbarOpen}
          />
        </div>
      </PerformerDialog>
    </>
  )
}
