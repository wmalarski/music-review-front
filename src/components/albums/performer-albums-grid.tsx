import React from 'react'
import { Typography, makeStyles, createStyles } from '@material-ui/core'
import { notEmpty } from '../../libs/utils'
import { Performer } from '../performers/performers-feed'
import ScrollGridContainer from '../infinite-scroll/scroll-grid-container'
import AlbumGridItem from './album-grid-item'
import CreateAlbumForm from './forms/create-album-form'
import DeletePerformerForm from '../performers/forms/delete-performer-form'
import UpdatePerformerForm from '../performers/forms/update-performer-form'
import useIsLoggedIn from '../../hooks/use-is-logged-in'

const useStyles = makeStyles(() =>
  createStyles({
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
)

interface PerformerAlbumsGridProps {
  item: Performer
}

export default function PerformerAlbumsGrid(props: PerformerAlbumsGridProps) {
  const classes = useStyles()
  const isLoggedIn = useIsLoggedIn()
  return (
    <ScrollGridContainer
      items={props.item.albumSet.edges.map(edge => edge?.node).filter(notEmpty)}
      loading={false}
      renderItem={item => <AlbumGridItem album={item} imageIndex={3} />}
      cellHeight="auto"
      cellWidth={300}
      direction="vertical"
      header={
        <div className={classes.header}>
          <Typography variant="h6">{props.item.name}</Typography>
          {isLoggedIn && (
            <div>
              <CreateAlbumForm performer={props.item} />
              <UpdatePerformerForm performer={props.item} />
              <DeletePerformerForm performer={props.item} />
            </div>
          )}
        </div>
      }
    />
  )
}
