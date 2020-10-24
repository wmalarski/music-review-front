import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { PageProps, navigate } from 'gatsby'
import React, { useEffect } from 'react'
import PerformerAlbumsGrid from '../components/albums/performer-albums-grid'
import Hero from '../components/common/hero'
import { RenderHTML } from '../components/common/render-html'
import SEO from '../components/common/seo'
import PerformerReviewList from '../components/reviews/performer-review-list'
import { useMainListStyles } from '../hooks/use-styles'
import Layout from '../layout'
import {
  useReadPerformerAlbumsQuery,
  useReadPerformerQuery,
} from '../types/backend'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(3, 3, 0, 3),
    },
  }),
)

interface PerformerProps {
  id: string
  name: string
}

export default function Performer(props: PageProps): JSX.Element {
  const contentClasses = useStyles()
  const classes = useMainListStyles()

  const { location } = props
  const { search } = location
  const id = search.replace('?id=', '')

  const variables = { id }
  const { data: albums, error: errorAlbums } = useReadPerformerAlbumsQuery({
    variables,
  })
  const {
    loading,
    data: reviews,
    error: errorReviews,
  } = useReadPerformerQuery({ variables })

  useEffect(() => {
    if (!errorReviews || !errorAlbums) return
    navigate('/404')
  }, [errorAlbums, errorReviews])

  if (!reviews?.performer || !albums?.performer) return <></>
  reviews

  return (
    <Layout>
      <SEO title={reviews.performer.name} />
      <Hero title={reviews.performer.name} />
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
    </Layout>
  )
}
