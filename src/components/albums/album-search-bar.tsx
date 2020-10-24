import React, { useState } from 'react'
import {
  TextField,
  Button,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useSearchBarStyles } from '../../hooks/use-styles'
import AlbumSlider from './albums-slider'

interface AlbumSearchBarProps {
  onClicked: (title: string, fromYear: number, toYear: number) => void
}

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    slider: {
      marginTop: theme.spacing(6),
      padding: theme.spacing(1),
    },
  }),
)

export default function AlbumSearchBar(props: AlbumSearchBarProps) {
  const searchBarClasses = useSearchBarStyles()
  const [title, setTitle] = useState('')
  const [range, setRange] = useState<number[]>([])

  return (
    <div className={searchBarClasses.root}>
      <form
        onSubmit={event => {
          event.preventDefault()
          props.onClicked(title, range[0], range[1])
        }}
      >
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          value={title}
          fullWidth
          onChange={event => setTitle(event.target.value)}
        />
        <AlbumSlider setRange={setRange} range={range} />
        <Button type="submit" color="inherit">
          <SearchIcon /> Search
        </Button>
      </form>
    </div>
  )
}
