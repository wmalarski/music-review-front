import React from 'react'
import Button from '@material-ui/core/Button'
import { useReadAlbumMbidLazyQuery } from '../../../types/backend'
import { TextField, ListItem, Badge } from '@material-ui/core'

interface PerformerAlbumDialogItemResult {
  name: string
  mbid: string
  year: number
}

interface PerformerAlbumDialogItemProps {
  name: string
  title?: string | null
  year?: number | null
  onSubmit: (result: PerformerAlbumDialogItemResult) => void
  onFailed: (msg: string[]) => void
  onRemove: () => void
}

export default function PerformerAlbumDialogItem(
  props: PerformerAlbumDialogItemProps,
) {
  const [title, setTitle] = React.useState(props.title ?? '')
  const [year, setYear] = React.useState(props.year ?? 1980)
  const [readAlbumMbid, { data }] = useReadAlbumMbidLazyQuery({
    onCompleted: (data): void => {
      const album = data.searchAlbums.page[0]
      if (album) {
        props.onSubmit({
          mbid: album.mbid,
          name: album.name,
          year,
        })
      } else {
        props.onFailed(['Album not found'])
      }
    },
    onError: (error): void => props.onFailed([error.message]),
  })
  const mbid = data?.searchAlbums.page[0].mbid

  return (
    <ListItem>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <TextField
        label="Year"
        type="number"
        value={year}
        InputLabelProps={{ shrink: true }}
        onChange={event => setYear(Number(event.target.value))}
      />
      <Badge color="error" variant="dot" invisible={mbid !== undefined}>
        <Button
          color="inherit"
          onClick={() =>
            readAlbumMbid({
              variables: {
                album: `${props.name} ${title}`,
                limit: 1,
              },
            })
          }
        >
          MBID
        </Button>
      </Badge>
      <Button disabled={!mbid} color="inherit" onClick={() => props.onRemove()}>
        REMOVE
      </Button>
    </ListItem>
  )
}
