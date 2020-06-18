import React from 'react'
import {
  Container,
  Typography,
  List,
  ListItem,
  Divider,
  ListSubheader,
} from '@material-ui/core'

interface ScrollListProps<T> {
  items: T[]
  renderItem: (item: T) => JSX.Element
  loading: boolean
  maxWidth: 'lg'
  header: JSX.Element
}

export default function ScrollListContainer<T>(props: ScrollListProps<T>) {
  return (
    <Container maxWidth={props.maxWidth}>
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
    </Container>
  )
}
