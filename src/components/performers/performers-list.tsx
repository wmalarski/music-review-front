import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import PerformersFeed from './performers-feed'
import ScrollListContainer from '../infinite-scroll/scroll-list-container'
import PerformerListItem from './performer-list-item'
import PerformerSearchBar from './performer-search-bar'
import { useMainListStyles } from '../../hooks/use-styles'

export default function PerformersList() {
  const classes = useMainListStyles()
  const [name, setName] = useState('')
  return (
    <>
      <Container className={classes.root} maxWidth="xl">
        <PerformerSearchBar onClicked={setName} />
      </Container>
      <Container className={classes.root} maxWidth="xl">
        <PerformersFeed name={name}>
          {({ performers, loading }) => (
            <ScrollListContainer
              items={performers}
              loading={loading}
              renderItem={item => <PerformerListItem item={item} />}
              header={<p></p>}
            />
          )}
        </PerformersFeed>
      </Container>
    </>
  )
}
