import React from 'react'
import {
  Typography,
  Container,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core'
import PerformerAlbumsGrid from '../albums/performer-albums-grid'
import {
  useReadPerformerQuery,
  useReadPerformerAlbumsQuery,
} from '../../types/backend'
import PerformerReviewList from '../reviews/performer-review-list'
import { useMainListStyles } from '../../hooks/use-styles'
import { RenderHTML } from '../common/render-html'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(3, 3, 0, 3),
    },
  }),
)

interface PerformerPageProps {
  id: string
  name: string
}

export default function PerformerPage(props: PerformerPageProps) {
  const classes = useMainListStyles()
  const contentClasses = useStyles()
  const variables = { id: props.id }
  const { data: albums } = useReadPerformerAlbumsQuery({ variables })
  const { loading, data: reviews } = useReadPerformerQuery({ variables })

  if (!reviews?.performer || !albums?.performer) return null

  return (
    <Container className={classes.root} maxWidth="xl">
      <PerformerAlbumsGrid item={albums.performer} />
      <Typography
        variant="subtitle1"
        color="textPrimary"
        className={contentClasses.text}
      >
        <RenderHTML html={reviews?.performer?.bio?.summary ?? ''} />
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        className={contentClasses.text}
      >
        <RenderHTML html={albums?.performer?.bio?.content ?? ''} />
      </Typography>
      <PerformerReviewList data={reviews} loading={loading} />
    </Container>
  )
}
