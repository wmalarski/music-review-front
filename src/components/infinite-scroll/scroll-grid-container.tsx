import React from 'react'
import {
  Container,
  GridList,
  GridListTile,
  ListSubheader,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  horizontal: {
    flexWrap: 'nowrap',
    transform: 'translateZ(10)',
  },
}))

interface ScrollGridProps<T> {
  items: T[]
  renderItem: (item: T) => JSX.Element
  loading: boolean
  maxWidth: 'lg'
  cellHeight: number | 'auto' | undefined
  cols: number
  direction: 'horizontal' | 'vertical'
  header: JSX.Element
}

export default function ScrollGridContainer<T>(props: ScrollGridProps<T>) {
  const classes = useStyles()
  const isHorizontal = props.direction === 'horizontal'
  return (
    <Container maxWidth={props.maxWidth}>
      {!props.loading && !props.items.length ? (
        <GridList cols={1} spacing={2}>
          <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
            <ListSubheader component="div">{props.header}</ListSubheader>
          </GridListTile>
        </GridList>
      ) : (
        <GridList
          className={isHorizontal ? classes.horizontal : undefined}
          cellHeight={props.cellHeight}
          cols={props.cols}
          spacing={2}
        >
          <GridListTile
            key="Subheader"
            cols={props.cols}
            style={{ height: 'auto' }}
          >
            <ListSubheader component="div">{props.header}</ListSubheader>
          </GridListTile>
          {props.items.map((item, index) => (
            <GridListTile key={index}>{props.renderItem(item)}</GridListTile>
          ))}
        </GridList>
      )}
    </Container>
  )
}
