import React from 'react'
import { useReadPerformersQuery } from '../../types/backend'
import {
  createStyles,
  makeStyles,
  Theme,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core'
import { notEmpty } from '../../libs/utils'
import { FixedSizeList, ListChildComponentProps } from 'react-window'
import AlbumGrid from '../albums/album-grid'
import InfiniteLoader from 'react-window-infinite-loader'
import AutoSizer from 'react-virtualized-auto-sizer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flex: 1,
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
)

export default function PerformersGrid() {
  const classes = useStyles()
  const { data, fetchMore } = useReadPerformersQuery({
    variables: {
      after: '',
      first: 4,
    },
  })

  if (!data?.performerSet) {
    return null
  }

  const items = data.performerSet.edges.map(edge => edge?.node).filter(notEmpty)
  const hasNextPage = data.performerSet.pageInfo.hasNextPage
  const itemCount = hasNextPage ? items.length + 1 : items.length
  const isItemLoaded = (index: number) => !hasNextPage || index < items.length

  function loadNextPage() {
    return fetchMore({
      variables: {
        after: data?.performerSet?.pageInfo.endCursor,
        first: 4,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult?.performerSet || !previousResult.performerSet) {
          return previousResult
        }
        const newEdges = fetchMoreResult.performerSet.edges
        const pageInfo = fetchMoreResult.performerSet.pageInfo
        return newEdges.length
          ? {
              performerSet: {
                __typename: previousResult.performerSet.__typename,
                edges: [...previousResult.performerSet.edges, ...newEdges],
                pageInfo,
              },
            }
          : previousResult
      },
    })
  }

  function renderRow(props: ListChildComponentProps) {
    const { index, style } = props
    const performer = items[index]
    return (
      <React.Fragment key={index}>
        <ListItem style={style} alignItems="flex-start">
          {performer ? (
            <div
              style={{ display: 'flex', flexDirection: 'row', width: '100%' }}
            >
              <ListItemText
                primary={performer.name}
                secondary={performer.description}
              />
              <AlbumGrid
                header=""
                columns={5}
                data={performer.albumSet.edges
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

  return (
    <div
      style={{
        display: 'flex',
        height: '500px',
        width: '100%',
        flex: 1,
        backgroundColor: 'red',
        padding: 4,
      }}
    >
      <div style={{ flex: '1 1 auto', backgroundColor: 'green', padding: 4 }}>
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadNextPage}
        >
          {({ onItemsRendered, ref }: any) => (
            <AutoSizer defaultHeight={200} defaultWidth={500}>
              {({ width, height }) => (
                <FixedSizeList
                  height={height}
                  width={width}
                  itemSize={200}
                  itemCount={itemCount}
                  onItemsRendered={onItemsRendered}
                  ref={ref}
                >
                  {renderRow}
                </FixedSizeList>
              )}
            </AutoSizer>
          )}
        </InfiniteLoader>
      </div>
    </div>
  )
}
