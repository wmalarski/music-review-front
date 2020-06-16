import React from 'react'
import { ListItem, ListItemText, Divider } from '@material-ui/core'
import { notEmpty } from '../../libs/utils'
import AlbumGrid from '../albums/album-grid'
import { Performer } from './performers-feed'

interface PerformerListItemProps {
  index: number
  item: Performer
}

export default function PerformerListItem(props: PerformerListItemProps) {
  return (
    <React.Fragment key={props.index}>
      <ListItem alignItems="flex-start">
        {props.item ? (
          <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
            <AlbumGrid
              header={props.item.name}
              columns={5}
              data={props.item.albumSet.edges
                .map(edge => edge?.node)
                .filter(notEmpty)}
            />
          </div>
        ) : (
          <ListItemText primary="Loading" />
        )}
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  )
}
