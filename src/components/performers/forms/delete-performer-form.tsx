import React, { useState } from 'react'
import { useDeletePerformerMutation } from '../../../types/backend'
import FormProgress from '../../common/form-progress'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import { Performer } from '../performers-feed'

interface DeletePerformerFormProps {
  performer: Performer
}

export default function DeletePerformerForm(props: DeletePerformerFormProps) {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [deletePerformerMutation, { loading }] = useDeletePerformerMutation()

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => {
          deletePerformerMutation({
            variables: {
              performer: props.performer.id,
            },
          }).then(() => setSnackbarOpen(true))
        }}
        title="Delete"
      >
        <DeleteIcon />
      </IconButton>
      <FormProgress
        successMessage="Performer succesfuly deleted"
        isLoading={loading}
        isSnackBarVisible={snackbarOpen}
        setIsScankBarVisible={setSnackbarOpen}
      />
    </>
  )
}
