import React from 'react'
import {
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
  Theme,
  createStyles,
  Container,
} from '@material-ui/core'
import { notEmpty } from '../../libs/utils'
import AlbumGrid from '../albums/album-grid'
import PerformersFeed, { Performer } from './performers-feed'
import ScrollListContainer from '../common/scroll-list-container'
import PerformerListItem from './performer-list-item'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
  }),
)

export default function PerformersGrid() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <PerformersFeed>
        {({ performers, loading }) => (
          <ScrollListContainer
            items={performers}
            loading={loading}
            renderItem={(item, index) => (
              <PerformerListItem item={item} index={index} />
            )}
            maxWidth="lg"
          />
        )}
      </PerformersFeed>
    </Container>
  )
}
