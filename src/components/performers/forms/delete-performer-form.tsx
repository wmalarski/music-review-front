import React, { useState } from 'react'
import { useDeletePerformerMutation } from '../../../types/backend'
import FormProgress from '../../common/form-progress'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'

interface DeletePerformerFormProps {
  performer: string
}

export default function DeletePerformerForm(props: DeletePerformerFormProps) {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [
    deletePerformerMutation,
    { loading, error },
  ] = useDeletePerformerMutation()

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => {
          deletePerformerMutation({
            variables: {
              performer: props.performer,
            },
          }).then(() => setSnackbarOpen(true))
        }}
        title="Delete"
      >
        <DeleteIcon />
      </IconButton>
      <FormProgress
        successMessage="Performer succesfuly added"
        isLoading={loading}
        error={error ?? null}
        isSnackBarVisible={snackbarOpen}
        setIsScankBarVisible={setSnackbarOpen}
      />
    </>
  )
}
