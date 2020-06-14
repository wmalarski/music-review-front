import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Rating from '@material-ui/lab/Rating'
import { TextField, Box } from '@material-ui/core'
import { ApolloError } from '@apollo/client'
import Alert from '@material-ui/lab/Alert'

interface ReviewAlbumDialogResult {
  review: string
  rating: number
}

interface ReviewAlbumDialogProps {
  name: string
  title: string
  year: number
  open: boolean
  error: ApolloError | undefined
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: (result: ReviewAlbumDialogResult) => void
}

export default function ReviewAlbumDialog(props: ReviewAlbumDialogProps) {
  const [review, setReview] = React.useState('')
  const [rating, setRating] = React.useState(5)

  const handleClose = () => {
    props.setOpen(false)
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-add-performer"
    >
      <DialogTitle id="form-dialog-add-performer">Add Review</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {props.name} - {props.title}({props.year})
        </DialogContentText>
        <TextField
          margin="dense"
          id="name"
          label="Review"
          value={review}
          fullWidth
          onChange={event => {
            setReview(event.target.value)
          }}
        />
        <Rating
          name="customized-10"
          defaultValue={rating}
          value={rating}
          max={10}
          precision={0.25}
          onChange={(_, newValue) => {
            if (newValue) {
              setRating(newValue)
            }
          }}
        />
        {rating !== null && <Box ml={2}>{rating}</Box>}
        {props.error ? (
          <Alert severity="error">{props.error.name ?? ''}</Alert>
        ) : null}
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          color="inherit"
          onClick={() => props.onSubmit({ review, rating })}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}
