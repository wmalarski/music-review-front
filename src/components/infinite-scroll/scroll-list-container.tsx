import React from 'react'
import { Typography, List, ListItem, ListSubheader } from '@material-ui/core'

interface ScrollListProps<T> {
  items: T[]
  renderItem: (item: T) => JSX.Element
  loading: boolean
  header: JSX.Element
}

export default function ScrollListContainer<T>(props: ScrollListProps<T>) {
  return (
    <div style={{ width: '100%' }}>
      {!props.loading && !props.items.length ? (
        <Typography variant="h6">{props.header}</Typography>
      ) : (
        <List>
          <ListItem key="Subheader" style={{ height: 'auto' }}>
            <ListSubheader component="div">{props.header}</ListSubheader>
          </ListItem>
          {props.items.map((item, index) => (
            <ListItem key={index}>{props.renderItem(item)}</ListItem>
          ))}
        </List>
      )}
    </div>
  )
}
