import React from 'react'
import { ListItemText, Typography } from '@material-ui/core'
import { notEmpty } from '../../libs/utils'
import { Performer } from './performers-feed'
import ScrollGridContainer from '../infinite-scroll/scroll-grid-container'
import AlbumGridItem from '../albums/album-grid-item'

interface PerformerListItemProps {
  item: Performer
}

export default function PerformerListItem(props: PerformerListItemProps) {
  return (
    <>
      {props.item ? (
        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
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
            header={<Typography variant="h6">{props.item.name}</Typography>}
          />
        </div>
      ) : (
        <ListItemText primary="Loading" />
      )}
    </>
  )
}
