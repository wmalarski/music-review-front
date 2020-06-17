import React, { FC } from 'react'

import Layout from '../layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import RandomAlbumsGrid from '../components/albums/random-albums-grid'

const IndexPage: FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title="Hi people"
        description="Welcome to your new Gatsby site. Now go build something great with
          Typescript and Material-ui."
      />
      <RandomAlbumsGrid />
    </Layout>
  )
}

export default IndexPage
