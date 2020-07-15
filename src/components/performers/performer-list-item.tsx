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
import { useReadPerformerLazyQuery } from '../../types/backend'
import PerformerReviewList from '../reviews/performer-review-list'
import { RenderHTML } from '../common/render-html'

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
              <RenderHTML html={data?.performer?.bio?.summary ?? ''} />
            </Typography>
            <PerformerReviewList data={data} loading={loading} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ) : (
        <ListItemText primary="Loading" />
      )}
    </>
  )
}
