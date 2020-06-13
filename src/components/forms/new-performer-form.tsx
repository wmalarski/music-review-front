import React from 'react'
import Button from '@material-ui/core/Button'
import { useCreatePerformerMutation } from '../../types/backend'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import NewPerformerDialog from '../dialogs/new-performer-dialog'

export default function NewPerformerForm() {
  const [open, setOpen] = React.useState(false)
  const [snackbarOpen, setSnackbarOpen] = React.useState(false)
  const [
    createPerformerMutation,
    { loading, error },
  ] = useCreatePerformerMutation()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        Add Performer
      </Button>
      <NewPerformerDialog
        loading={loading}
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          Performer succesfuly added
        </Alert>
      </Snackbar>
    </div>
  )
}
