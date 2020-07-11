import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { useSearchBarStyles } from '../../hooks/use-styles'

interface PerformerSearchBarProps {
  onClicked: (name: string) => void
}

export default function PerformerSearchBar(props: PerformerSearchBarProps) {
  const classes = useSearchBarStyles()
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
        onEnded={() => props.onClicked(name)}
      />
      <Button color="inherit" onClick={() => props.onClicked(name)}>
        <SearchIcon /> Search
      </Button>
    </div>
  )
}
