import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Rating from '@material-ui/lab/Rating'
import { TextField, Box } from '@material-ui/core'

interface CreateReviewDialogResult {
  review: string
  rating: number
}

interface CreateReviewDialogProps {
  name: string
  title: string
  year: number
  open: boolean
  review?: string | null
  rating?: number | null
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: (result: CreateReviewDialogResult) => void
  children: JSX.Element | JSX.Element[]
}

export default function CreateReviewDialog(props: CreateReviewDialogProps) {
  const [review, setReview] = React.useState(props.review ?? '')
  const [rating, setRating] = React.useState(props.rating ?? 5)

  const handleClose = () => props.setOpen(false)

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
          onChange={event => setReview(event.target.value)}
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
        {props.children}
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
