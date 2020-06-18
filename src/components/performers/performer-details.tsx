import React from 'react'
import PerformerListItem from './performer-list-item'
import { useReadPerformerQuery } from '../../types/backend'
import LoadingBackdropProps from '../common/loading-backdrop'
import { makeStyles, Theme, createStyles, Container } from '@material-ui/core'

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

interface PerformerListItemProps {
  selectedPerformer: string
  setSelectedPerformer: (name: string | null) => void
}

export default function PerformerDetails(props: PerformerListItemProps) {
  const classes = useStyles()

  const { data, loading } = useReadPerformerQuery({
    variables: {
      id: props.selectedPerformer,
    },
  })

  if (loading || !data?.performer) {
    return <LoadingBackdropProps isLoading={loading} />
  }

  return (
    <Container className={classes.root}>
      <PerformerListItem
        item={data.performer}
        selectedPerformer={props.selectedPerformer}
        setSelectedPerformer={props.setSelectedPerformer}
      />
    </Container>
  )
}
