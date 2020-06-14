import React from 'react'
import {
  Snackbar,
  Backdrop,
  makeStyles,
  Theme,
  createStyles,
  CircularProgress,
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import { ApolloError } from '@apollo/client'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
)

interface FormProgressProps {
  isSnackBarVisible: boolean
  isLoading: boolean
  error: ApolloError | null
  setIsScankBarVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FormProgress(props: FormProgressProps) {
  const classes = useStyles()

  return (
    <div>
      <Backdrop className={classes.backdrop} open={props.isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={props.isSnackBarVisible}
        autoHideDuration={6000}
        onClose={() => props.setIsScankBarVisible(false)}
      >
        <Alert
          onClose={() => props.setIsScankBarVisible(false)}
          severity="success"
        >
          Performer succesfuly added
        </Alert>
      </Snackbar>
    </div>
  )
}
