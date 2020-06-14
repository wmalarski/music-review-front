import React from 'react'
import Button from '@material-ui/core/Button'
import { useCreatePerformerMutation } from '../../types/backend'
import NewPerformerDialog from '../dialogs/new-performer-dialog'
import FormProgress from './form-progress'

export default function NewPerformerForm() {
  const [open, setOpen] = React.useState(false)
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const [
    createPerformerMutation,
    { loading, error },
  ] = useCreatePerformerMutation()

  return (
    <div>
      <Button color="inherit" onClick={() => setOpen(true)}>
        Add Performer
      </Button>
      <NewPerformerDialog
        error={error}
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
      />
      <FormProgress
        isLoading={loading}
        error={error ?? null}
        isSnackBarVisible={snackbarOpen}
        setIsScankBarVisible={setSnackbarOpen}
      />
    </div>
  )
}
