import React, { FC } from 'react'
import Layout from '../layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import PerformersList from '../components/performers/performers-list'

const SecondPage: FC = () => (
  <Layout>
    <SEO title="Performers" />
    <Hero
      title="Performers"
      description="List of all performers and their albums."
    />
    <PerformersList />
  </Layout>
)

export default SecondPage
