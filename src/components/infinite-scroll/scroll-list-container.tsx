import React from 'react'
import {
  Container,
  Typography,
  List,
  ListItem,
  Divider,
} from '@material-ui/core'

interface ScrollListProps<T> {
  items: T[]
  renderItem: (item: T) => JSX.Element
  loading: boolean
  maxWidth: 'lg'
}

export default function ScrollListContainer<T>(props: ScrollListProps<T>) {
  return (
    <Container maxWidth={props.maxWidth}>
      {!props.loading && !props.items.length ? (
        <Typography variant="h6">Nothing Found</Typography>
      ) : (
        <List>
          {props.items.map((item, index) => (
            <>
              <ListItem key={index}>{props.renderItem(item)}</ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      )}
    </Container>
  )
}
