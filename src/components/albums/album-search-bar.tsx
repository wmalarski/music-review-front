import React, { useState } from 'react'
import {
  TextField,
  Button,
  makeStyles,
  createStyles,
  Slider,
} from '@material-ui/core'

interface AlbumSearchBarProps {
  onClicked: (title: string, fromYear: number, toYear: number) => void
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexGrow: 1,
    },
  }),
)

const MIN_YEAR = 1950
const MAX_YEAR = new Date().getFullYear()

export default function AlbumSearchBar(props: AlbumSearchBarProps) {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [range, setRange] = useState([MIN_YEAR, MAX_YEAR])

  return (
    <div className={classes.root}>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <Slider
        value={range}
        onChange={(event: any) => setRange(event.target.value)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <Button
        color="inherit"
        onClick={() => props.onClicked(title, MIN_YEAR, MAX_YEAR)}
      >
        Filter
      </Button>
    </div>
  )
}
