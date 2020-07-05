import React, { useState } from 'react'
import {
  ListItemText,
  makeStyles,
  createStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core'
import { Performer } from './performers-feed'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PerformerAlbumsGrid from '../albums/performer-albums-grid'
import {
  useReadPerformerLazyQuery,
  ReadPerformerQuery,
} from '../../types/backend'
import { notEmpty } from '../../libs/utils'
import { ReviewTileData } from '../reviews/reviews-feed'
import ScrollListContainer from '../infinite-scroll/scroll-list-container'
import ReviewListItem from '../reviews/review-list-item'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
)

interface PerformerListItemProps {
  item: Performer
}

function getReviews(data: ReadPerformerQuery | undefined): ReviewTileData[] {
  const albums = data?.performer?.albumSet.edges ?? []
  const reviews = albums.flatMap(edge => edge?.node?.reviewSet.edges ?? [])
  return reviews.map(edge => edge?.node).filter(notEmpty)
}

export default function PerformerListItem(props: PerformerListItemProps) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const [loadPerformer, { loading, data }] = useReadPerformerLazyQuery({
    variables: {
      id: props.item.id,
    },
  })

  return (
    <>
      {props.item ? (
        <ExpansionPanel
          expanded={expanded}
          className={classes.root}
          onChange={(_, expanded) => {
            if (expanded) {
              loadPerformer()
            }
          }}
        >
          <ExpansionPanelSummary
            expandIcon={
              <ExpandMoreIcon onClick={() => setExpanded(!expanded)} />
            }
          >
            <PerformerAlbumsGrid item={props.item} />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="p">
              {data?.performer?.bio?.summary ?? ''}
            </Typography>
            <ScrollListContainer
              items={getReviews(data)}
              loading={loading}
              renderItem={item => <ReviewListItem item={item} imageSize={2} />}
              header={<Typography variant="h6">Reviews</Typography>}
            />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ) : (
        <ListItemText primary="Loading" />
      )}
    </>
  )
}
