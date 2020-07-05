import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { TextField } from '@material-ui/core'

interface CreateAlbumDialogResult {
  name: string
  year: number
  mbid: string
}

interface AlbumDialogProps {
  name: string
  title?: string | null
  year?: number | null
  mbid?: string | null
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: (result: CreateAlbumDialogResult) => void
  children: JSX.Element | JSX.Element[]
  dialogTitle: JSX.Element
}

export default function AlbumDialog(props: AlbumDialogProps) {
  const [title, setTitle] = React.useState(props.title ?? '')
  const [mbid, setMbid] = React.useState(props.mbid ?? '')
  const [year, setYear] = React.useState(props.year ?? 1980)

  const handleClose = () => {
    props.setOpen(false)
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-add-album"
    >
      <DialogTitle id="form-dialog-add-album">{props.dialogTitle}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.name}</DialogContentText>
        <TextField
          margin="dense"
          label="Title"
          value={title}
          fullWidth
          onChange={event => setTitle(event.target.value)}
        />
        <TextField
          label="Year"
          type="number"
          value={year}
          InputLabelProps={{ shrink: true }}
          onChange={event => setYear(Number(event.target.value))}
        />
        <TextField
          margin="dense"
          label="Cover Link"
          value={mbid}
          fullWidth
          onChange={event => setMbid(event.target.value)}
        />
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          color="inherit"
          onClick={() => props.onSubmit({ name: title, mbid, year })}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
