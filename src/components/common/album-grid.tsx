import React from 'react'
import {
  createStyles,
  makeStyles,
  Theme,
  GridList,
  GridListTile,
  ListSubheader,
  GridListTileBar,
  IconButton,
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import RateReviewIcon from '@material-ui/icons/RateReview'
import ReviewAlbumForm from '../albums/review-album-form'

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

interface AlbumTileData {
  id: string
  title: string
  year: number
  coverUrl?: string | null
  performer: {
    name: string
  }
}

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
          <img src={album.coverUrl ?? ''} alt={album.title} />
          <GridListTileBar
            title={album.title}
            subtitle={
              <span>
                by: {album.performer.name}, {album.year}
              </span>
            }
            actionIcon={
              <p>
                <ReviewAlbumForm
                  album={album.id}
                  title={album.title}
                  name={album.performer.name}
                  year={album.year}
                />
                <IconButton aria-label={`info about ${album.title}`}>
                  <InfoIcon />
                </IconButton>
              </p>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  )
}
