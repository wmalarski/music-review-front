import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { AlbumInputType } from '../../types/backend'
import {
  makeStyles,
  Theme,
  createStyles,
  Backdrop,
  CircularProgress,
  TextField,
  List,
  ListItem,
} from '@material-ui/core'
import { ApolloError } from '@apollo/client'
import Alert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
)

interface NewPerformerDialogResult {
  name: string
  albums: AlbumInputType[]
}

interface NewPerformerDialogProps {
  loading: boolean
  open: boolean
  error: ApolloError | undefined
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: (result: NewPerformerDialogResult) => void
}

export default function NewPerformerDialog(props: NewPerformerDialogProps) {
  const classes = useStyles()
  const [name, setName] = React.useState('')
  const [albums, setAlbums] = React.useState<AlbumInputType[]>([])
  const [lastYear, setLastYear] = React.useState(1980)

  const handleClose = () => {
    props.setOpen(false)
  }

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-add-performer"
    >
      <Backdrop className={classes.backdrop} open={props.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <DialogTitle id="form-dialog-add-performer">Add Performer</DialogTitle>
      <DialogContent>
        <DialogContentText>Add Performer to database.</DialogContentText>
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
        <Button
          color="inherit"
          onClick={() => {
            setAlbums([
              ...albums,
              { title: '', year: lastYear, description: '' },
            ])
          }}
        >
          Add Album
        </Button>
        <List className={classes.root}>
          {albums.map((album, index) => (
            <ListItem key={index} className={classes.root}>
              <TextField
                label="Title"
                value={album.title}
                onChange={event => {
                  const newAlbums = [...albums]
                  newAlbums[index].title = event.target.value
                  setAlbums(newAlbums)
                }}
              />
              <TextField
                label="Year"
                type="number"
                value={album.year}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={event => {
                  const newAlbums = [...albums]
                  const year = Number(event.target.value)
                  newAlbums[index].year = year
                  setAlbums(newAlbums)
                  setLastYear(year)
                }}
              />
              <Button
                color="inherit"
                onClick={() => {
                  const newAlbums = [...albums]
                  newAlbums.splice(index, 1)
                  setAlbums(newAlbums)
                }}
              >
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
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
          onClick={() => props.onSubmit({ name, albums })}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}
