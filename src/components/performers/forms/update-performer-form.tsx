import React, { useState } from 'react'
import { useUpdatePerformerMutation } from '../../../types/backend'
import FormProgress from '../../common/form-progress'
import Alert from '@material-ui/lab/Alert/Alert'
import { Performer } from '../performers-feed'
import PerformerShortDialog from './performer-short-dialog'
import EditIcon from '@material-ui/icons/Edit'
import { IconButton } from '@material-ui/core'

interface UpdatePerformerFormProps {
  performer: Performer
}

export default function UpdatePerformerForm(props: UpdatePerformerFormProps) {
  const [open, setOpen] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [
    updatePerformerMutation,
    { loading, error },
  ] = useUpdatePerformerMutation()

  return (
    <>
      <IconButton title="Edit" color="inherit" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <PerformerShortDialog
        name={props.performer.name}
        open={open}
        setOpen={setOpen}
        onSubmit={result => {
          updatePerformerMutation({
            variables: {
              performer: props.performer.id,
              name: result.name,
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
      </PerformerShortDialog>
    </>
  )
}
