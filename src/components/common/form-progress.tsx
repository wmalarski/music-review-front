import React from 'react'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { ApolloError } from '@apollo/client'
import LoadingBackdrop from './loading-backdrop'

interface FormProgressProps {
  successMessage: string
  isSnackBarVisible: boolean
  isLoading: boolean
  error: ApolloError | null
  setIsScankBarVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FormProgress(props: FormProgressProps) {
  return (
    <div>
      <LoadingBackdrop isLoading={props.isLoading} />
      <Snackbar
        open={props.isSnackBarVisible}
        autoHideDuration={6000}
        onClose={() => props.setIsScankBarVisible(false)}
      >
        <Alert
          onClose={() => props.setIsScankBarVisible(false)}
          severity="success"
        >
          {props.successMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}
