import React from 'react'
import {
  ListItemText,
  Typography,
  makeStyles,
  createStyles,
  IconButton,
} from '@material-ui/core'
import { notEmpty } from '../../libs/utils'
import { Performer } from './performers-feed'
import ScrollGridContainer from '../infinite-scroll/scroll-grid-container'
import AlbumGridItem from '../albums/album-grid-item'
import CreateAlbumForm from '../albums/forms/create-album-form'
import DeletePerformerForm from './forms/delete-performer-form'
import UpdatePerformerForm from './forms/update-performer-form'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

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
  selectedPerformer: string | null
  setSelectedPerformer: (name: string | null) => void
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
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  {props.selectedPerformer ? (
                    <IconButton
                      color="inherit"
                      onClick={() => props.setSelectedPerformer(null)}
                      title="Go back"
                    >
                      <ArrowBackIosIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      color="inherit"
                      onClick={() => props.setSelectedPerformer(props.item.id)}
                      title="Select"
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  )}
                  <Typography variant="h6">{props.item.name}</Typography>
                </div>
                <div>
                  <CreateAlbumForm performer={props.item} />
                  <UpdatePerformerForm performer={props.item} />
                  <DeletePerformerForm performer={props.item} />
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
