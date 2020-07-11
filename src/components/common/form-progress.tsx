import React from 'react'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import LoadingBackdrop from './loading-backdrop'

interface FormProgressProps {
  successMessage?: string | null
  isSnackBarVisible: boolean
  isLoading: boolean
  setIsScankBarVisible?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FormProgress(props: FormProgressProps) {
  return (
    <div>
      <LoadingBackdrop isLoading={props.isLoading} />
      <Snackbar
        open={props.isSnackBarVisible}
        autoHideDuration={6000}
        onClose={() => {
          if (props.setIsScankBarVisible) props.setIsScankBarVisible(false)
        }}
      >
        <Alert
          onClose={() => {
            if (props.setIsScankBarVisible) props.setIsScankBarVisible(false)
          }}
          severity="success"
        >
          {props.successMessage ?? ''}
        </Alert>
      </Snackbar>
    </div>
  )
}
