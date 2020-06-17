import React from 'react'
import {
  Backdrop,
  makeStyles,
  Theme,
  createStyles,
  CircularProgress,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
)

interface LoadingBackdropProps {
  isLoading: boolean
}

export default function LoadingBackdrop(props: LoadingBackdropProps) {
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open={props.isLoading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
