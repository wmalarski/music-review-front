import React, { FC } from 'react'
import Layout from '../layout'
import SEO from '../components/common/seo'
import Hero from '../components/common/hero'
import ReviewsList from '../components/reviews/reviews-list'

const Reviews: FC = () => (
  <Layout>
    <SEO title="Reviews" />
    <Hero title="Reviews" description="List of all reviews." />
    <ReviewsList />
  </Layout>
)

export default Reviews
