import React, { useState } from 'react'
import {
  TextField,
  Button,
  Slider,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useSearchBarStyles } from '../../hooks/use-styles'

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

const MIN_YEAR = 1950
const MAX_YEAR = new Date().getFullYear()

export default function AlbumSearchBar(props: AlbumSearchBarProps) {
  const classes = useStyles()
  const searchBarClasses = useSearchBarStyles()
  const [title, setTitle] = useState('')
  const [range, setRange] = useState<number[]>([MIN_YEAR, MAX_YEAR])

  return (
    <div className={searchBarClasses.root}>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        value={title}
        fullWidth
        onChange={event => setTitle(event.target.value)}
      />
      <Slider
        className={classes.slider}
        value={range}
        onChange={(_event, newValue) => {
          if (typeof newValue !== 'number') setRange(newValue)
        }}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        color={'secondary'}
        min={MIN_YEAR}
        max={MAX_YEAR}
      />
      <Button
        color="inherit"
        onClick={() => props.onClicked(title, range[0], range[1])}
      >
        <SearchIcon /> Search
      </Button>
    </div>
  )
}
