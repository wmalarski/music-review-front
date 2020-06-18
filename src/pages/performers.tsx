import React, { FC } from 'react'
import Layout from '../layout'
import SEO from '../components/common/seo'
import Hero from '../components/common/hero'
import PerformersList from '../components/performers/performers-list'

const Performers: FC = () => {
  return (
    <Layout>
      <SEO title="Performers" />
      <Hero
        title="Performers"
        description="List of all performers and their albums."
      />
      <PerformersList />
    </Layout>
  )
}

export default Performers
