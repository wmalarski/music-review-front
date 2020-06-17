import React, { useState } from 'react'
import { TextField, Button, makeStyles, createStyles } from '@material-ui/core'

interface PerformerSearchBarProps {
  onClicked: (name: string) => void
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

export default function PerformerSearchBar(props: PerformerSearchBarProps) {
  const classes = useStyles()
  const [name, setName] = useState('')

  return (
    <div className={classes.root}>
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        value={name}
        fullWidth
        onChange={event => setName(event.target.value)}
      />
      <Button color="inherit" onClick={() => props.onClicked(name)}>
        Filter
      </Button>
    </div>
  )
}
