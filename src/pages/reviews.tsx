import React, { FC } from 'react'
import Layout from '../layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import ReviewsList from '../components/reviews/reviews-list'

const Reviews: FC = () => (
  <Layout>
    <SEO title="Review" />
    <Hero title="Review" description="List of all reviews." />
    <ReviewsList />
  </Layout>
)

export default Reviews
