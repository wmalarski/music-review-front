import React from 'react'
import { RootRef, Button } from '@material-ui/core'
import useInfiniteScroll from 'react-infinite-scroll-hook'

interface InfiniteScrollWrapperProps {
  hasNextPage: boolean
  loading: boolean
  onLoadMore: Function
  children: JSX.Element | JSX.Element[] | undefined
}

export default function InfiniteScrollWrapper(
  props: InfiniteScrollWrapperProps,
) {
  const infiniteContainerRef = useInfiniteScroll({
    hasNextPage: props.hasNextPage,
    loading: props.loading,
    onLoadMore: props.onLoadMore,
  })

  return (
    <div>
      <RootRef rootRef={infiniteContainerRef}>{props.children}</RootRef>
      <Button
        disabled={!props.hasNextPage}
        color="inherit"
        onClick={() => props.onLoadMore()}
        fullWidth
      >
        Load More
      </Button>
    </div>
  )
}
