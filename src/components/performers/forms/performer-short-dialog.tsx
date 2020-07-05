import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { TextField } from '@material-ui/core'

interface PerformerShortDialogResult {
  name: string
  mbid: string
}

interface PerformerShortDialogProps {
  children: JSX.Element | JSX.Element[]
  open: boolean
  name?: string | null
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: (result: PerformerShortDialogResult) => void
}

export default function PerformerShortDialog(props: PerformerShortDialogProps) {
  const [name, setName] = React.useState(props.name ?? '')

  const handleClose = () => {
    props.setOpen(false)
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-update-performer"
    >
      <DialogTitle id="form-dialog-update-performer">
        Edit Performer
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{props.name}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          value={name}
          fullWidth
          onChange={event => {
            setName(event.target.value)
          }}
        />
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          color="inherit"
          onClick={() => props.onSubmit({ name, mbid: '' })}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  )
}
