import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {
  AlbumInputType,
  useReadPerformerMbidLazyQuery,
} from '../../../types/backend'
import { TextField, List, Divider, Badge } from '@material-ui/core'
import PerformerAlbumDialogItem from './performer-album-dialog-item'

interface PerformerDialogResult {
  name: string
  mbid: string
  albums: AlbumInputType[]
}

interface PerformerDialogProps {
  children: JSX.Element | JSX.Element[]
  open: boolean
  name?: string | null
  albums?: AlbumInputType[] | null
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: (result: PerformerDialogResult) => void
}

export default function PerformerDialog(props: PerformerDialogProps) {
  const [name, setName] = React.useState(props.name ?? '')
  const [albums, setAlbums] = React.useState<AlbumInputType[]>(
    props.albums ?? [],
  )
  const [lastYear, setLastYear] = React.useState(1980)
  const [readPerformerMbid, { data }] = useReadPerformerMbidLazyQuery()

  const handleClose = () => {
    props.setOpen(false)
  }

  const isMbidLoaded =
    data?.performerCorrection.mbid !== undefined &&
    albums.map(a => a.mbid !== '').reduce((prev, curr) => prev && curr, true)

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-add-performer"
    >
      <DialogTitle id="form-dialog-add-performer">Add Performer</DialogTitle>
      <DialogContent>
        <DialogContentText>Performer name and mbid.</DialogContentText>
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
        <Divider />
        <List>
          {albums.map((album, index) => (
            <PerformerAlbumDialogItem
              key={index}
              name={name}
              title={album.name}
              year={album.year}
              onFailed={() => {
                console.log('onFailed')
              }}
              onRemove={() => {
                const newAlbums = [...albums]
                newAlbums.splice(index, 1)
                setAlbums(newAlbums)
              }}
              onSubmit={({ mbid, name, year }) => {
                const newAlbums = [...albums]
                newAlbums[index] = { name, mbid, year }
                setAlbums(newAlbums)
                setLastYear(year)
              }}
            />
          ))}
        </List>
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClose}>
          Cancel
        </Button>
        <Badge color="error" variant="dot" invisible={isMbidLoaded}>
          <Button
            color="inherit"
            onClick={() => readPerformerMbid({ variables: { name } })}
          >
            MBID
          </Button>
        </Badge>
        <Button
          color="inherit"
          onClick={() => {
            setAlbums([...albums, { name: '', year: lastYear, mbid: '' }])
          }}
        >
          ADD ALBUM
        </Button>
        <Button
          disabled={!isMbidLoaded}
          color="inherit"
          onClick={() => {
            if (!data) return
            props.onSubmit({ albums, ...data?.performerCorrection })
          }}
        >
          SAVE
        </Button>
      </DialogActions>
    </Dialog>
  )
}
