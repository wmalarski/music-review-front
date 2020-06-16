import React, { FC, useState } from 'react'
import Layout from '../layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import PerformersGrid from '../components/performers/performers-grid'

const SecondPage: FC = () => (
  <Layout>
    <SEO title="Performers" />
    <Hero
      title="Performers"
      description="List of all performers and their albums."
    />
    <PerformersGrid />
  </Layout>
)

// const SecondPage: FC = () => <PerformersGrid />

export default SecondPage
