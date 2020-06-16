import React from 'react'
import { useReadRandomAlbumsQuery } from '../../types/backend'
import { createStyles, makeStyles, Theme, Container } from '@material-ui/core'
import { notEmpty } from '../../libs/utils'
import AlbumGrid from './album-grid'

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

export default function RandomAlbumsGrid() {
  const classes = useStyles()
  const { data, loading } = useReadRandomAlbumsQuery({
    variables: {
      after: '',
      first: 20,
    },
  })

  if (loading || !data?.randomAlbumSet) {
    return null
  }

  return (
    <Container className={classes.root}>
      <AlbumGrid
        data={data.randomAlbumSet.edges
          .map(edge => edge?.node)
          .filter(notEmpty)}
        columns={5}
        header="Random Albums"
      />
    </Container>
  )
}
