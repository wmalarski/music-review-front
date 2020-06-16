import React from 'react'
import { Container, Typography, List } from '@material-ui/core'

interface ScrollListProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => JSX.Element
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
          {props.items.map((item, index) => props.renderItem(item, index))}
        </List>
      )}
    </Container>
  )
}
