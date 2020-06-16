import React from 'react'
import {
  createStyles,
  makeStyles,
  Theme,
  GridList,
  GridListTile,
  ListSubheader,
  GridListTileBar,
} from '@material-ui/core'
import { AlbumTileData } from './albums-feed'
import AlbumListItem from './album-list-item'
import ReviewAlbumForm from './review-album-form'
import AlbumDetails from './album-details'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridList: {
      padding: theme.spacing(1),
      width: '100%',
      transform: 'translateZ(0)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
)

interface AlbumGridProps {
  data: AlbumTileData[]
  columns: number
  header: string
}

export default function AlbumGrid(props: AlbumGridProps) {
  const classes = useStyles()

  return (
    <GridList
      cellHeight={180}
      cols={props.columns}
      className={classes.gridList}
    >
      <GridListTile
        key="Subheader"
        cols={props.columns}
        style={{ height: 'auto' }}
      >
        <ListSubheader component="div">{props.header}</ListSubheader>
      </GridListTile>
      {props.data.map(album => (
        <GridListTile key={album.id}>
          <AlbumListItem album={album} />
        </GridListTile>
      ))}
    </GridList>
  )
}
