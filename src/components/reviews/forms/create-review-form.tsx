import React, { useState } from 'react'
import { useReviewAlbumMutation } from '../../../types/backend'
import FormProgress from '../../common/form-progress'
import { IconButton } from '@material-ui/core'
import RateReviewIcon from '@material-ui/icons/RateReview'
import ReviewDialog from './review-dialog'
import Alert from '@material-ui/lab/Alert'
import { AlbumTileData } from '../../albums/albums-feed'

interface CreateReviewFormProps {
  album: AlbumTileData
}

export default function CreateReviewForm(props: CreateReviewFormProps) {
  const [open, setOpen] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [reviewAlbumMutation, { loading, error }] = useReviewAlbumMutation()

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => setOpen(true)}
        title="Add review"
      >
        <RateReviewIcon />
      </IconButton>
      <ReviewDialog
        name={props.album.performer.name}
        title={props.album.name}
        year={props.album.year}
        open={open}
        setOpen={setOpen}
        onSubmit={result => {
          reviewAlbumMutation({
            variables: {
              album: props.album.id,
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
      </ReviewDialog>
    </>
  )
}
