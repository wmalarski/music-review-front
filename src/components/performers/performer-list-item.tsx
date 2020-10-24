import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createStyles,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React, { useEffect, useState } from 'react'

import { useReadPerformerLazyQuery } from '../../types/backend'
import PerformerAlbumsGrid from '../albums/performer-albums-grid'
import { RenderHTML } from '../common/render-html'
import PerformerReviewList from '../reviews/performer-review-list'
import { Performer } from './performers-feed'

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

  useEffect(() => {
    if (expanded) loadPerformer()
  }, [expanded, loadPerformer])

  return (
    <>
      {props.item ? (
        <Accordion
          expanded={expanded}
          className={classes.root}
          onChange={(_, expanded) => setExpanded(expanded)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <PerformerAlbumsGrid item={props.item} />
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Typography variant="body2" color="textSecondary" component="div">
              <RenderHTML html={data?.performer?.bio?.summary ?? ''} />
            </Typography>
            <PerformerReviewList data={data} loading={loading} />
          </AccordionDetails>
        </Accordion>
      ) : (
        <ListItemText primary="Loading" />
      )}
    </>
  )
}
