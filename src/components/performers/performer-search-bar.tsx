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
      <form
        onSubmit={event => {
          event.preventDefault()
          props.onClicked(name)
        }}
      >
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          value={name}
          fullWidth
          onChange={event => setName(event.target.value)}
        />
        <Button type="submit" color="inherit">
          <SearchIcon /> Search
        </Button>
      </form>
    </div>
  )
}
