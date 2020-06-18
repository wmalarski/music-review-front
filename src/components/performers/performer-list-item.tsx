import React from 'react'
import {
  ListItemText,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core'
import { notEmpty } from '../../libs/utils'
import { Performer } from './performers-feed'
import ScrollGridContainer from '../infinite-scroll/scroll-grid-container'
import AlbumGridItem from '../albums/album-grid-item'
import CreateAlbumForm from '../albums/forms/create-album-form'
import DeletePerformerForm from './forms/delete-performer-form'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
)

interface PerformerListItemProps {
  item: Performer
}

export default function PerformerListItem(props: PerformerListItemProps) {
  const classes = useStyles()
  return (
    <>
      {props.item ? (
        <div className={classes.root}>
          <ScrollGridContainer
            items={props.item.albumSet.edges
              .map(edge => edge?.node)
              .filter(notEmpty)}
            loading={false}
            renderItem={item => <AlbumGridItem album={item} />}
            maxWidth="lg"
            cellHeight={180}
            cols={5}
            direction="vertical"
            header={
              <div className={classes.header}>
                <Typography variant="h6">{props.item.name}</Typography>
                <div>
                  <CreateAlbumForm
                    name={props.item.name}
                    performer={props.item.id}
                  />
                  <DeletePerformerForm performer={props.item.id} />
                </div>
              </div>
            }
          />
        </div>
      ) : (
        <ListItemText primary="Loading" />
      )}
    </>
  )
}
