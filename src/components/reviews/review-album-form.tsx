import React, { useState } from 'react'
import { useReviewAlbumMutation } from '../../types/backend'
import FormProgress from '../common/form-progress'
import { IconButton } from '@material-ui/core'
import RateReviewIcon from '@material-ui/icons/RateReview'
import ReviewAlbumDialog from './review-album-dialog'
import Alert from '@material-ui/lab/Alert'

interface ReviewAlbumFormProps {
  album: string
  name: string
  title: string
  year: number
}

export default function ReviewAlbumForm(props: ReviewAlbumFormProps) {
  const [open, setOpen] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [reviewAlbumMutation, { loading, error }] = useReviewAlbumMutation()

  return (
    <>
      <IconButton color="inherit" onClick={() => setOpen(true)}>
        <RateReviewIcon />
      </IconButton>
      <ReviewAlbumDialog
        name={props.name}
        title={props.title}
        year={props.year}
        open={open}
        setOpen={setOpen}
        onSubmit={result => {
          reviewAlbumMutation({
            variables: {
              album: props.album,
              rating: result.rating,
              review: result.review,
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
            successMessage="Review Added"
            isLoading={loading}
            error={error ?? null}
            isSnackBarVisible={snackbarOpen}
            setIsScankBarVisible={setSnackbarOpen}
          />
        </div>
      </ReviewAlbumDialog>
    </>
  )
}
