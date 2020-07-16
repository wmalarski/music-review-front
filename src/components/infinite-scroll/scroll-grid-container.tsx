import React, {
  useLayoutEffect,
  useState,
  useRef,
  MutableRefObject,
} from 'react'
import { GridList, GridListTile, ListSubheader } from '@material-ui/core'
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
  cellHeight: number | 'auto' | undefined
  cellWidth: number
  direction: 'horizontal' | 'vertical'
  header: JSX.Element | string
}

function useWindowSize(ref: MutableRefObject<HTMLDivElement | null>): number {
  const [size, setSize] = useState(0)
  useLayoutEffect(() => {
    const updateSize = () => {
      if (!ref.current) return
      setSize(ref.current.clientWidth)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])
  return size
}

export default function ScrollGridContainer<T>(props: ScrollGridProps<T>) {
  const classes = useStyles()
  const isHorizontal = props.direction === 'horizontal'
  const ref = useRef<HTMLDivElement | null>(null)
  // const width = ref.current?.clientWidth ?? window.innerWidth
  const width = useWindowSize(ref)
  const cols = Math.floor(width / props.cellWidth)
  return (
    <div ref={ref} style={{ width: '100%' }}>
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
          cols={cols}
          spacing={2}
        >
          <GridListTile key="Subheader" cols={cols} style={{ height: 'auto' }}>
            <ListSubheader component="div">{props.header}</ListSubheader>
          </GridListTile>
          {props.items.map((item, index) => (
            <GridListTile key={index}>{props.renderItem(item)}</GridListTile>
          ))}
        </GridList>
      )}
    </div>
  )
}
